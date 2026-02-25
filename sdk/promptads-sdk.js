/**
 * PromptAds SDK - Client-side integration
 * 
 * Usage:
 * import { PromptAds } from '@promptads/sdk';
 * 
 * const ads = new PromptAds({
 *   apiKey: 'pk_xxx',
 *   appId: 'my-app',
 *   apiUrl: 'http://localhost:3000'
 * });
 * 
 * const result = await ads.shouldShow({
 *   prompt: 'User message',
 *   response: 'AI response',
 *   vertical: 'dating'
 * });
 */

export interface PromptAdsConfig {
  apiKey: string;
  appId: string;
  apiUrl?: string;
}

export interface AdRequest {
  prompt: string;
  response?: string;
  userId?: string;
  sessionId: string;
  vertical: 'dating' | 'productivity' | 'gaming' | 'education';
  country?: string;
}

export interface Ad {
  id: string;
  headline: string;
  body: string;
  cta: string;
  displayUrl: string;
  landingUrl: string;
}

export interface AdResult {
  shouldShow: boolean;
  ad?: Ad;
  trackingId: string;
}

export class PromptAds {
  private apiKey: string;
  private appId: string;
  private apiUrl: string;

  constructor(config: PromptAdsConfig) {
    this.apiKey = config.apiKey;
    this.appId = config.appId;
    this.apiUrl = config.apiUrl || 'http://localhost:3000';
  }

  /**
   * Check if an ad should be shown
   */
  async shouldShow(request: AdRequest): Promise<AdResult> {
    const response = await fetch(`${this.apiUrl}/api/v1/ads/should-show`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        ...request,
        appId: this.appId
      })
    });

    if (!response.ok) {
      throw new Error(`PromptAds API error: ${response.status}`);
    }

    const result = await response.json();
    
    return {
      shouldShow: result.shouldShow,
      ad: result.ad ? {
        id: result.ad.id,
        headline: result.ad.headline,
        body: result.ad.body,
        cta: result.ad.cta,
        displayUrl: result.ad.displayUrl,
        landingUrl: result.ad.landingUrl
      } : undefined,
      trackingId: result.trackingId
    };
  }

  /**
   * Record a click on an ad
   */
  async recordClick(adId: string, sessionId: string, userId?: string): Promise<void> {
    await fetch(`${this.apiUrl}/api/v1/ads/${adId}/click`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        sessionId,
        userId,
        appId: this.appId
      })
    });
  }

  /**
   * Get ad analytics
   */
  async getAnalytics(adId: string): Promise<{
    impressions: number;
    clicks: number;
    ctr: number;
    spent: number;
  }> {
    const response = await fetch(`${this.apiUrl}/api/v1/ads/${adId}/analytics`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
    return response.json();
  }
}

/**
 * React Hook for PromptAds
 */
export function usePromptAds(config: PromptAdsConfig) {
  const ads = new PromptAds(config);

  return {
    shouldShow: (request: AdRequest) => ads.shouldShow(request),
    recordClick: (adId: string, sessionId: string, userId?: string) => 
      ads.recordClick(adId, sessionId, userId),
    getAnalytics: (adId: string) => ads.getAnalytics(adId)
  };
}

export default PromptAds;