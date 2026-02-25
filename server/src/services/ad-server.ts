import { Ad, AdRequest, AdResult, AdImpression, AdClick } from '../models/types.js';

// In-memory storage (replace with Redis/DB in production)
const ads = new Map();
const impressions: AdImpression[] = [];
const clicks: AdClick[] = [];

// Frequency capping
const frequencyCap = new Map();
const DEFAULT_FREQUENCY_CAP = 5;

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
 * Get all active ads for a vertical
 */
export function getAdsByVertical(vertical: string): Ad[] {
  return Array.from(ads.values()).filter(
    ad => ad.vertical === vertical && ad.status === 'active'
  );
}

/**
 * Main ad matching algorithm
 */
export async function shouldShowAd(request: AdRequest): Promise<AdResult> {
  const vertical = request.vertical;
  
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
        frequencyCap.set(request.userId, { count: 0, resetAt: now + 24 * 60 * 60 * 1000 });
      }
    }
  }
  
  // Get eligible ads
  const eligibleAds = getAdsByVertical(vertical);
  
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
    score: scoreAd(ad, request)
  }));
  
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
  
  // Update frequency cap
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
 * Score an ad based on relevance
 */
function scoreAd(ad: Ad, request: AdRequest): number {
  let score = 100;
  
  const promptLower = request.prompt.toLowerCase();
  const responseLower = (request.response || '').toLowerCase();
  const content = promptLower + ' ' + responseLower;
  
  // Keyword matching (positive)
  const positiveMatches = ad.keywords.filter(kw => 
    content.includes(kw.toLowerCase())
  ).length;
  score += positiveMatches * 20;
  
  // Budget check
  if (ad.dailySpent >= ad.dailyBudget || ad.totalSpent >= ad.totalBudget) {
    return -1;
  }
  
  // CTR bonus
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
 * Get ad analytics
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
 * Update ad spend
 */
export function updateAdSpend(adId: string, amount: number): void {
  const ad = ads.get(adId);
  if (ad) {
    ad.dailySpent += amount;
    ad.totalSpent += amount;
    
    if (ad.dailySpent >= ad.dailyBudget || ad.totalSpent >= ad.totalBudget) {
      ad.status = 'exhausted';
    }
  }
}

/**
 * Generate tracking ID
 */
function generateTrackingId(): string {
  return `tr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}