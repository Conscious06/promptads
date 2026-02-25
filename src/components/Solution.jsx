export default function Solution() {
  const features = [
    { icon: "hub", title: "Semantic Matching", desc: "Understand intent, not just keywords." },
    { icon: "text_snippet", title: "Native Formatting", desc: "Ads adopt your chat UI styling." },
    { icon: "trending_up", title: "High CTR", desc: "10x engagement vs display ads." }
  ];

  return (
    <section className="py-32 px-6 bg-white" id="solution">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 text-sm font-bold text-brand-purple mb-6">
            OUR SOLUTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 font-['Space_Grotesk']">
            Native Inline <span className="brand-gradient-text">Ads</span>
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            PromptAds injects contextually relevant suggestions directly into the model's response stream. It feels like a helpful recommendation, not an interruption.
          </p>
          
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-light-surface border border-slate-200 hover:border-brand-purple/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-brand-purple">{f.icon}</span>
                </div>
                <div>
                  <strong className="block text-slate-900">{f.title}</strong>
                  <span className="text-slate-500 text-sm">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Demo - Light Style */}
        <div className="lg:w-1/2 w-full">
          <div className="relative bg-white rounded-2xl border border-slate-200 p-6 shadow-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">smart_toy</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-900">AI Assistant</span>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Online
                  </div>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-400">more_horiz</span>
            </div>

            {/* Chat Messages */}
            <div className="space-y-5 text-sm">
              {/* User */}
              <div className="flex justify-end">
                <div className="bg-brand-purple text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                  I'm planning a trip to Tokyo next month. Any hotel recommendations in Shinjuku?
                </div>
              </div>

              {/* AI */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl brand-gradient shrink-0"></div>
                <div className="space-y-4 max-w-[90%]">
                  <p className="text-slate-600">Shinjuku is a fantastic choice! Here are a few top-rated options:</p>
                  <p className="text-slate-600">
                    1. <strong className="text-slate-900">Park Hyatt Tokyo:</strong> Luxury with iconic views.<br/>
                    2. <strong className="text-slate-900">Hotel Gracery:</strong> Great mid-range right in the action.
                  </p>
                  
                  {/* Ad Injection - Light Style */}
                  <div className="mt-5 p-4 rounded-xl border border-brand-purple/30 bg-brand-purple/5 relative group cursor-pointer transition-all hover:bg-brand-purple/10">
                    <div className="absolute -top-2.5 right-4 bg-white border border-brand-purple/30 text-[10px] text-brand-purple px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
                      Sponsored
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-white">flight</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-slate-900 font-semibold">Save 15% on Tokyo Flights</h4>
                        <p className="text-slate-500 text-xs mt-1">Book direct to Haneda with GlobalAir. Limited time!</p>
                      </div>
                      <div className="self-center">
                        <span className="material-symbols-outlined text-brand-purple">chevron_right</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600">Would you like me to create a full itinerary?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
