import { useState } from 'react';
import { PromptAds, Ad } from '../promptads-sdk';

/**
 * Example React component showing how to integrate PromptAds
 */
export function PromptAdsInline({ 
  sessionId, 
  vertical,
  prompt,
  onAdClick 
}: { 
  sessionId: string;
  vertical: 'dating' | 'productivity' | 'gaming' | 'education';
  prompt: string;
  onAdClick?: (ad: Ad) => void;
}) {
  const [ad, setAd] = useState<Ad | null>(null);
  const [loading, setLoading] = useState(false);
  const [tracked, setTracked] = useState(false);

  // Initialize the SDK
  const ads = new PromptAds({
    apiKey: 'pk_sample', // Replace with your API key
    appId: 'your-app-id',
    apiUrl: 'http://localhost:3000' // Replace with your API URL
  });

  const loadAd = async () => {
    setLoading(true);
    try {
      const result = await ads.shouldShow({
        prompt,
        sessionId,
        vertical
      });
      
      if (result.shouldShow && result.ad) {
        setAd(result.ad);
      }
    } catch (error) {
      console.error('Failed to load ad:', error);
    }
    setLoading(false);
  };

  const handleClick = async () => {
    if (!ad) return;
    
    // Record click
    await ads.recordClick(ad.id, sessionId);
    
    // Notify parent
    onAdClick?.(ad);
    
    // Open landing URL
    window.open(ad.landingUrl, '_blank');
  };

  if (!ad && !loading) {
    return (
      <button 
        onClick={loadAd}
        className="text-sm text-slate-500 hover:text-slate-300"
      >
        Load sponsored content
      </button>
    );
  }

  if (loading) {
    return (
      <div className="text-sm text-slate-500">
        Loading...
      </div>
    );
  }

  if (!ad) return null;

  return (
    <div 
      onClick={handleClick}
      className="mt-4 p-4 rounded-xl border border-purple-500/30 bg-purple-500/5 cursor-pointer hover:bg-purple-500/10 transition-all"
    >
      <div className="flex gap-3">
        {/* Ad Icon */}
        <div className="w-10 h-10 rounded bg-white flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-black">campaign</span>
        </div>
        
        {/* Ad Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-white font-semibold text-sm truncate">
              {ad.headline}
            </h4>
            <span className="text-[10px] text-purple-400 shrink-0 uppercase tracking-wider font-bold">
              Sponsored
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1 line-clamp-2">
            {ad.body}
          </p>
          <span className="text-purple-400 text-xs font-medium mt-2 inline-block">
            {ad.cta} →
          </span>
        </div>
      </div>
    </div>
  );
}

export default PromptAdsInline;