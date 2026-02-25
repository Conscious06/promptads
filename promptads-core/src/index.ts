/**
 * PromptAds Core - Main Export
 */

// Config
export { verticals, getVertical, getAllVerticals, VerticalConfig } from './config/verticals';

// Core
export { 
  Ad, 
  AdRequest, 
  AdResult, 
  AdImpression, 
  AdClick 
} from './core/types';

export {
  registerAd,
  getAd,
  getAdsByVertical,
  shouldShowAd,
  recordImpression,
  recordClick,
  getAdAnalytics,
  updateAdSpend,
  setAdStatus
} from './core/ad-server';

// Services
export { FraudDetector } from './services/fraud-detector';

// Utils
export { generateAdCreative } from './utils/creative-generator';