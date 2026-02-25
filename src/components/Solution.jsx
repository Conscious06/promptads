export default function Solution() {
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

        {/* Chat Demo */}
        <div className="lg:w-1/2 w-full">
          <div className="relative bg-black rounded-2xl border border-white/10 p-6 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
                <span className="text-sm font-semibold">AI Assistant</span>
              </div>
              <span className="material-symbols-outlined text-slate-500">more_horiz</span>
            </div>

            {/* Chat Messages */}
            <div className="space-y-6 text-sm">
              {/* User */}
              <div className="flex justify-end">
                <div className="bg-[#4f46e5] text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%]">
                  I'm planning a trip to Tokyo next month. Any recommendations for hotels in Shinjuku?
                </div>
              </div>

              {/* AI */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shrink-0"></div>
                <div className="space-y-4 max-w-[90%]">
                  <p className="text-slate-300">Shinjuku is a fantastic choice! It's vibrant and central. Here are a few top-rated options depending on your budget:</p>
                  <p className="text-slate-300">
                    1. <strong className="text-white">Park Hyatt Tokyo:</strong> Luxury with iconic views.<br/>
                    2. <strong className="text-white">Hotel Gracery:</strong> Great mid-range option right in the action.
                  </p>
                  
                  {/* Ad Injection */}
                  <div className="mt-4 p-4 rounded-xl border border-[#4f46e5]/30 bg-[#4f46e5]/5 relative group cursor-pointer transition-all hover:bg-[#4f46e5]/10">
                    <div className="absolute -top-2.5 right-4 bg-[#050507] border border-[#4f46e5]/30 text-[10px] text-[#4f46e5] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                      Sponsored
                    </div>
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded bg-white flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-black">flight</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">Save 15% on Tokyo Flights</h4>
                        <p className="text-slate-400 text-xs mt-1">Book your direct flight to Haneda with GlobalAir. Limited time offer.</p>
                      </div>
                      <div className="ml-auto self-center">
                        <span className="material-symbols-outlined text-[#4f46e5]">chevron_right</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300">Would you like me to create an itinerary for your first day?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
