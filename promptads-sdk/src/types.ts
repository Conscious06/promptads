/**
 * SDK Types
 */

export interface Ad {
  id: string;
  advertiserId: string;
  vertical: string;
  headline: string;
  body: string;
  cta: string;
  displayUrl: string;
  landingUrl: string;
}

export interface AdRequest {
  prompt: string;
  response?: string;
  userId?: string;
  sessionId: string;
  appId: string;
  vertical: string;
}

export interface AdResult {
  shouldShow: boolean;
  ad?: Ad;
  reason?: string;
  trackingId: string;
}