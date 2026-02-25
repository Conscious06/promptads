export interface Ad {
  id: string;
  advertiserId: string;
  vertical: string;
  headline: string;
  body: string;
  cta: string;
  displayUrl: string;
  landingUrl: string;
  keywords: string[];
  countries: string[];
  dailyBudget: number;
  totalBudget: number;
  dailySpent: number;
  totalSpent: number;
  status: 'active' | 'paused' | 'exhausted';
  impressions: number;
  clicks: number;
  conversions: number;
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