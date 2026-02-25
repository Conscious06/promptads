/**
 * Ad Server - Core Matching Engine
 * 
 * Handles ad selection, matching, and serving
 */

import { Ad, AdRequest, AdResult, AdImpression, AdClick } from './types';
import { getVertical, VerticalConfig } from '../config/verticals';

// In-memory storage (replace with DB in production)
const ads: Map<string, Ad> = new Map();
const impressions: AdImpression[] = [];
const clicks: AdClick[] = [];

// Frequency capping: userId -> count in last 24h
const frequencyCap: Map<string, { count: number; resetAt: number }> = new Map();

const DEFAULT_FREQUENCY_CAP = 5; // Max ads per user per day

/**
 * Register a new ad
 */
export function registerAd(ad: Ad): void {
  ads.set(ad.id, ad);
}

/**
 * Get ad by ID
 */
export function getAd(id: string): Ad | undefined {
  return ads.get(id);
}

/**
 * Get all ads for a vertical
 */
export function getAdsByVertical(vertical: string): Ad[] {
  return Array.from(ads.values()).filter(
    ad => ad.vertical === vertical && ad.status === 'active'
  );
}

/**
 * Should show ad based on targeting and frequency
 */
export async function shouldShowAd(request: AdRequest): Promise<AdResult> {
  const vertical = getVertical(request.vertical);
  
  if (!vertical) {
    return {
      shouldShow: false,
      reason: `Vertical '${request.vertical}' not found`,
      trackingId: generateTrackingId()
    };
  }
  
  // Check frequency cap
  if (request.userId) {
    const userCap = frequencyCap.get(request.userId);
    const now = Date.now();
    
    if (userCap && userCap.count >= DEFAULT_FREQUENCY_CAP) {
      if (userCap.resetAt > now) {
        return {
          shouldShow: false,
          reason: 'Frequency cap reached',
          trackingId: generateTrackingId()
        };
      } else {
        // Reset cap
        frequencyCap.set(request.userId, { count: 0, resetAt: now + 24 * 60 * 60 * 1000 });
      }
    }
  }
  
  // Get active ads for this vertical
  const eligibleAds = getAdsByVertical(request.vertical);
  
  if (eligibleAds.length === 0) {
    return {
      shouldShow: false,
      reason: 'No active ads for this vertical',
      trackingId: generateTrackingId()
    };
  }
  
  // Score and rank ads
  const scoredAds = eligibleAds.map(ad => ({
    ad,
    score: scoreAd(ad, request, vertical)
  }));
  
  // Sort by score (highest first)
  scoredAds.sort((a, b) => b.score - a.score);
  
  const bestMatch = scoredAds[0];
  
  if (bestMatch.score < 0) {
    return {
      shouldShow: false,
      reason: 'No suitable ad found',
      trackingId: generateTrackingId()
    };
  }
  
  const selectedAd = bestMatch.ad;
  
  // Increment frequency cap
  if (request.userId) {
    const userCap = frequencyCap.get(request.userId) || { 
      count: 0, 
      resetAt: Date.now() + 24 * 60 * 60 * 1000 
    };
    userCap.count++;
    frequencyCap.set(request.userId, userCap);
  }
  
  return {
    shouldShow: true,
    ad: selectedAd,
    trackingId: generateTrackingId()
  };
}

/**
 * Score an ad for a given request
 */
function scoreAd(ad: Ad, request: AdRequest, vertical: VerticalConfig): number {
  let score = 100; // Base score
  
  // Keyword matching (positive)
  const promptLower = request.prompt.toLowerCase();
  const responseLower = (request.response || '').toLowerCase();
  const content = promptLower + ' ' + responseLower;
  
  const positiveMatches = ad.keywords.filter(kw => 
    content.includes(kw.toLowerCase())
  ).length;
  
  score += positiveMatches * 20;
  
  // Keyword matching (negative) - penalty
  const negativeMatches = vertical.keywords.negative.filter(kw => 
    content.includes(kw.toLowerCase())
  ).length;
  
  score -= negativeMatches * 50;
  
  // Budget check
  if (ad.dailySpent >= ad.dailyBudget || ad.totalSpent >= ad.totalBudget) {
    return -1; // Skip exhausted ads
  }
  
  // Country targeting
  if (request.country && ad.countries.length > 0) {
    if (!ad.countries.includes(request.country)) {
      score -= 30;
    }
  }
  
  // Age targeting
  if (vertical.targeting.minAge && request.userId) {
    // In production, would check user age
    // For now, assume 25 as default
    if (25 < (vertical.targeting.minAge || 0)) {
      score -= 100;
    }
  }
  
  // CTR bonus (higher CTR = higher score)
  const ctr = ad.clicks / Math.max(ad.impressions, 1);
  score += ctr * 50;
  
  return score;
}

/**
 * Record an impression
 */
export function recordImpression(impression: AdImpression): void {
  impressions.push(impression);
  
  const ad = ads.get(impression.adId);
  if (ad) {
    ad.impressions++;
  }
}

/**
 * Record a click
 */
export function recordClick(click: AdClick): void {
  clicks.push(click);
  
  const ad = ads.get(click.adId);
  if (ad) {
    ad.clicks++;
  }
}

/**
 * Get analytics for an ad
 */
export function getAdAnalytics(adId: string): {
  impressions: number;
  clicks: number;
  ctr: number;
  spent: number;
} {
  const ad = ads.get(adId);
  
  if (!ad) {
    return { impressions: 0, clicks: 0, ctr: 0, spent: 0 };
  }
  
  return {
    impressions: ad.impressions,
    clicks: ad.clicks,
    ctr: ad.impressions > 0 ? (ad.clicks / ad.impressions) * 100 : 0,
    spent: ad.totalSpent
  };
}

/**
 * Generate unique tracking ID
 */
function generateTrackingId(): string {
  return `tr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Update ad budget (called by payment processor)
 */
export function updateAdSpend(adId: string, amount: number): void {
  const ad = ads.get(adId);
  if (ad) {
    ad.dailySpent += amount;
    ad.totalSpent += amount;
    ad.updatedAt = new Date();
    
    if (ad.dailySpent >= ad.dailyBudget || ad.totalSpent >= ad.totalBudget) {
      ad.status = 'exhausted';
    }
  }
}

/**
 * Pause/Resume an ad
 */
export function setAdStatus(adId: string, status: 'active' | 'paused' | 'exhausted'): void {
  const ad = ads.get(adId);
  if (ad) {
    ad.status = status;
    ad.updatedAt = new Date();
  }
}

// Export for testing
export { ads, impressions, clicks };