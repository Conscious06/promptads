/**
 * PromptAds SDK - Web Version
 * 
 * Integrate ads into your LLM application with a few lines of code.
 * 
 * @example
 * ```javascript
 * import { PromptAds } from '@promptads/sdk-web';
 * 
 * const ads = PromptAds.init({
 *   appId: 'your-app-id',
 *   apiKey: 'pk_live_xxx',
 *   vertical: 'dating'
 * });
 * 
 * // Before showing LLM response to user
 * const result = await ads.shouldShowAd({
 *   prompt: userPrompt,
 *   response: llmResponse,
 *   userId: user.id
 * });
 * 
 * if (result.shouldShow) {
 *   // Inject ad into response
 *   finalResponse = llmResponse + '\n\n' + result.ad.content;
 * }
 * ```
 */

import { Ad, AdRequest, AdResult } from './types';

// Types
interface PromptAdsConfig {
  appId: string;
  apiKey: string;
  vertical: string;
  apiUrl?: string;
  maxAdsPerDay?: number;
  position?: 'inline' | 'post-prompt' | 'recommendation';
  keywords?: {
    positive?: string[];
    negative?: string[];
  };
  onAdDisplay?: (ad: Ad) => void;
  onAdClick?: (ad: Ad) => void;
  onError?: (error: Error) => void;
}

interface PromptAdsInstance {
  shouldShowAd(request: {
    prompt: string;
    response?: string;
    userId?: string;
  }): Promise<AdResult>;
  
  recordClick(adId: string): Promise<void>;
  trackEvent(event: string, data?: Record<string, any>): void;
  getConfig(): PromptAdsConfig;
}

// SDK Implementation
class PromptAdsSDK implements PromptAdsInstance {
  private config: PromptAdsConfig;
  private sessionId: string;
  private adsShownToday: number = 0;
  private lastReset: Date;
  
  constructor(config: PromptAdsConfig) {
    this.config = {
      apiUrl: 'https://api.promptads.com',
      maxAdsPerDay: 5,
      position: 'inline',
      ...config
    };
    
    this.sessionId = this.generateSessionId();
    this.lastReset = new Date();
    this.checkDailyReset();
  }
  
  /**
   * Initialize the SDK
   */
  static init(config: PromptAdsConfig): PromptAdsSDK {
    // Validate required fields
    if (!config.appId) throw new Error('appId is required');
    if (!config.apiKey) throw new Error('apiKey is required');
    if (!config.vertical) throw new Error('vertical is required');
    
    return new PromptAdsSDK(config);
  }
  
  /**
   * Check if an ad should be shown for this request
   */
  async shouldShowAd(request: {
    prompt: string;
    response?: string;
    userId?: string;
  }): Promise<AdResult> {
    this.checkDailyReset();
    
    // Check frequency cap
    if (this.adsShownToday >= (this.config.maxAdsPerDay || 5)) {
      return {
        shouldShow: false,
        reason: 'Daily ad limit reached',
        trackingId: this.generateTrackingId()
      };
    }
    
    try {
      const adRequest: AdRequest = {
        prompt: request.prompt,
        response: request.response,
        userId: request.userId,
        sessionId: this.sessionId,
        appId: this.config.appId,
        vertical: this.config.vertical
      };
      
      const response = await fetch(`${this.config.apiUrl}/v1/ads/should-show`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
          'X-App-Id': this.config.appId
        },
        body: JSON.stringify(adRequest)
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const result: AdResult = await response.json();
      
      if (result.shouldShow) {
        this.adsShownToday++;
        
        // Track impression
        this.trackEvent('ad_display', {
          adId: result.ad?.id,
          trackingId: result.trackingId
        });
        
        // Callback
        if (this.config.onAdDisplay && result.ad) {
          this.config.onAdDisplay(result.ad);
        }
      }
      
      return result;
    } catch (error) {
      if (this.config.onError) {
        this.config.onError(error as Error);
      }
      
      // Fail silently - don't break the app
      return {
        shouldShow: false,
        reason: 'Ad service unavailable',
        trackingId: this.generateTrackingId()
      };
    }
  }
  
  /**
   * Record a click on an ad
   */
  async recordClick(adId: string): Promise<void> {
    try {
      await fetch(`${this.config.apiUrl}/v1/ads/click`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
          'X-App-Id': this.config.appId
        },
        body: JSON.stringify({
          adId,
          sessionId: this.sessionId,
          appId: this.config.appId
        })
      });
      
      this.trackEvent('ad_click', { adId });
      
      if (this.config.onAdClick) {
        // Get ad details and call callback
        // In production, would fetch ad details
      }
    } catch (error) {
      console.error('Failed to record click:', error);
    }
  }
  
  /**
   * Track custom events
   */
  trackEvent(event: string, data?: Record<string, any>): void {
    // In production, send to analytics
    if (process.env.NODE_ENV === 'development') {
      console.log('[PromptAds]', event, data);
    }
  }
  
  /**
   * Get current configuration
   */
  getConfig(): PromptAdsConfig {
    return { ...this.config };
  }
  
  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  
  /**
   * Generate tracking ID
   */
  private generateTrackingId(): string {
    return `tr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  
  /**
   * Check and reset daily counter
   */
  private checkDailyReset(): void {
    const now = new Date();
    if (now.getDate() !== this.lastReset.getDate()) {
      this.adsShownToday = 0;
      this.lastReset = now;
    }
  }
}

// Export
export { PromptAdsSDK };
export type { PromptAdsConfig, PromptAdsInstance };
export default PromptAdsSDK;