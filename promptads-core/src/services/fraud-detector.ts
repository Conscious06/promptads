/**
 * Fraud Detection Service
 */

interface Fraud Indicators {
  botSignature: boolean;
  suspiciousPattern: boolean;
  rapidFire: boolean;
  proxyVPN: boolean;
}

interface ClickData {
  userId?: string;
  sessionId: string;
  ip?: string;
  userAgent?: string;
  timestamp: Date;
  adId: string;
}

/**
 * Detect fraudulent activity
 */
export class FraudDetector {
  private clickTimestamps: Map<string, number[]> = new Map();
  private sessionClicks: Map<string, number> = new Map();
  
  /**
   * Check if a click is suspicious
   */
  checkClick(data: ClickData): { isFraud: boolean; reasons: string[] } {
    const reasons: string[] = [];
    
    // Check for rapid fire clicks (same user clicking multiple times quickly)
    if (this.isRapidFire(data)) {
      reasons.push('Rapid fire clicks detected');
    }
    
    // Check for bot-like user agent
    if (this.isBotUserAgent(data.userAgent)) {
      reasons.push('Bot-like user agent');
    }
    
    // Check for suspicious patterns
    if (this.hasSuspiciousPattern(data)) {
      reasons.push('Suspicious clicking pattern');
    }
    
    return {
      isFraud: reasons.length > 0,
      reasons
    };
  }
  
  /**
   * Check if clicks are coming too fast
   */
  private isRapidFire(data: ClickData): boolean {
    const key = data.userId || data.sessionId;
    const now = Date.now();
    const recentWindow = 60 * 1000; // 1 minute
    
    const timestamps = this.clickTimestamps.get(key) || [];
    const recentClicks = timestamps.filter(t => now - t < recentWindow);
    
    // Allow max 5 clicks per minute
    if (recentClicks.length >= 5) {
      return true;
    }
    
    // Add this click
    timestamps.push(now);
    this.clickTimestamps.set(key, timestamps);
    
    return false;
  }
  
  /**
   * Check for bot user agents
   */
  private isBotUserAgent(userAgent?: string): boolean {
    if (!userAgent) return true; // No user agent = suspicious
    
    const botPatterns = [
      'bot', 'crawler', 'spider', 'curl', 'wget', 
      'python', 'node', 'go-http', 'java/', 'ruby'
    ];
    
    const ua = userAgent.toLowerCase();
    return botPatterns.some(pattern => ua.includes(pattern));
  }
  
  /**
   * Check for suspicious clicking patterns
   */
  private hasSuspiciousPattern(data: ClickData): boolean {
    // Check if same session is clicking too many different ads
    const sessionClicks = this.sessionClicks.get(data.sessionId) || 0;
    
    if (sessionClicks > 10) {
      return true;
    }
    
    this.sessionClicks.set(data.sessionId, sessionClicks + 1);
    return false;
  }
  
  /**
   * Validate impression (prevent fake impressions)
   */
  validateImpression(
    sessionId: string, 
    timeSinceRequest: number
  ): { isValid: boolean; reason?: string } {
    // Impression should come within 5 seconds of request
    if (timeSinceRequest > 5000) {
      return { isValid: false, reason: 'Impression too late' };
    }
    
    // Check for repeated impressions
    const sessionKey = `imp_${sessionId}`;
    if (this.sessionClicks.get(sessionKey)) {
      return { isValid: false, reason: 'Duplicate impression' };
    }
    
    this.sessionClicks.set(sessionKey, 1);
    return { isValid: true };
  }
  
  /**
   * Clean up old data (call periodically)
   */
  cleanup(): void {
    const now = Date.now();
    const maxAge = 60 * 60 * 1000; // 1 hour
    
    // Clean click timestamps
    for (const [key, timestamps] of this.clickTimestamps.entries()) {
      const recent = timestamps.filter(t => now - t < maxAge);
      if (recent.length === 0) {
        this.clickTimestamps.delete(key);
      } else {
        this.clickTimestamps.set(key, recent);
      }
    }
  }
}

export default FraudDetector;