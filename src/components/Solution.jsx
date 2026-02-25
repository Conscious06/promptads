export default function Solution() {
  const codeExample = `// 1. Initialize the SDK
const ads = new PromptAds({
  apiKey: 'pk_your_api_key',
  appId: 'your-app-id',
  apiUrl: 'https://api.promptads.io'
});

// 2. Check if ad should be shown
const result = await ads.shouldShow({
  prompt: userMessage,
  response: aiResponse,
  sessionId: sessionId,
  vertical: 'dating'
});

// 3. Display the ad
if (result.shouldShow && result.ad) {
  renderInlineAd(result.ad);
}

// 4. Track clicks
adElement.onClick = () => {
  ads.recordClick(result.ad.id, sessionId);
  window.open(result.ad.landingUrl);
}`;

  return (
    <section className="py-24 bg-[#121216] border-y border-white/5" id="solution">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4f46e5]/10 text-xs font-bold text-[#4f46e5] mb-6">
            OUR SOLUTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-['Space_Grotesk']">Native Inline Ads</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            PromptAds injects contextually relevant suggestions directly into the model's response stream. It feels like a helpful recommendation, not an interruption.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#4f46e5] mt-1">check</span>
              <div>
                <strong className="block text-white">Semantic Matching</strong>
                <span className="text-slate-500 text-sm">Understand intent, not just keywords.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#4f46e5] mt-1">check</span>
              <div>
                <strong className="block text-white">Native Formatting</strong>
                <span className="text-slate-500 text-sm">Ads adopt the markdown styling of your chat UI.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#4f46e5] mt-1">check</span>
              <div>
                <strong className="block text-white">High CTR</strong>
                <span className="text-slate-500 text-sm">10x higher engagement than traditional display.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Code Demo */}
        <div className="lg:w-1/2 w-full">
          <div className="relative bg-black rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/5">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
              </div>
              <span className="text-xs text-slate-500">PromptAds SDK</span>
            </div>

            {/* Code */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-xs md:text-sm text-slate-300 font-mono leading-relaxed">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
