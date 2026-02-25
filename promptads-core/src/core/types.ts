/**
 * Ad Interface
 */

export interface Ad {
  id: string;
  advertiserId: string;
  vertical: string;
  
  // Content
  headline: string;
  body: string;
  cta: string;
  displayUrl: string;
  landingUrl: string;
  
  // Targeting
  keywords: string[];
  countries: string[];
  minAge?: number;
  
  // Limits
  dailyBudget: number;
  totalBudget: number;
  dailySpent: number;
  totalSpent: number;
  
  // Status
  status: 'active' | 'paused' | 'exhausted';
  
  // Tracking
  impressions: number;
  clicks: number;
  conversions: number;
  
  // Metadata
  createdAt: Date;
  updatedAt: Date;
}

export interface AdRequest {
  prompt: string;
  response?: string;
  userId?: string;
  sessionId: string;
  appId: string;
  vertical: string;
  country?: string;
  userAgent?: string;
}

export interface AdResult {
  shouldShow: boolean;
  ad?: Ad;
  reason?: string;
  trackingId: string;
}

export interface AdImpression {
  adId: string;
  appId: string;
  userId?: string;
  sessionId: string;
  timestamp: Date;
}

export interface AdClick {
  adId: string;
  appId: string;
  userId?: string;
  sessionId: string;
  timestamp: Date;
}