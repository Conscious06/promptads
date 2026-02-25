export default function Features() {
  const features = [
    { icon: "code", title: "5-Minute Integration", desc: "Simple SDKs for Python and Node.js. Just wrap your LLM completion call." },
    { icon: "hub", title: "Context-Aware", desc: "Vector embedding matching ensures ads fit the conversation flow perfectly." },
    { icon: "lock", title: "Privacy First", desc: "PII is stripped before processing. We never store conversation logs." }
  ];

  const stats = [
    { icon: "speed", label: "<50ms Latency" },
    { icon: "payments", label: "Net-30 Payouts" },
    { icon: "analytics", label: "Real-time Stats" },
    { icon: "globe_asia", label: "Global Fill" }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white font-['Space_Grotesk']">Built for Developers</h2>
        <p className="text-slate-400">Everything you need to integrate monetization in minutes.</p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        {/* Main Feature - API Endpoint */}
        <div className="md:col-span-2 md:row-span-2 bg-[#121216]/60 backdrop-blur-xl border border-white/8 p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-white">api</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white font-['Space_Grotesk']">REST API</h3>
            <p className="text-slate-400 max-w-md">Full REST API for custom integrations. Works with any language or framework.</p>
          </div>
          <div className="mt-8 bg-black/50 p-4 rounded-lg font-mono text-xs text-slate-300 border border-white/5 shadow-inner">
            <span className="text-purple-400">curl</span> -X POST https://api.promptads.io/<br/>
              api/v1/ads/should-show \<br/>
              -H <span className="text-green-400">"Authorization: Bearer pk_xxx"</span> \<br/>
              -d '<span className="text-blue-400">{"{vertical: 'dating'}"}</span>'
          </div>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#121216]/60 backdrop-blur-xl border border-white/8 p-6 rounded-2xl flex flex-col justify-center group hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined text-3xl mb-4 text-[#4f46e5]">hub</span>
          <h3 className="text-lg font-bold mb-2 text-white font-['Space_Grotesk']">Context-Aware</h3>
          <p className="text-sm text-slate-400">Vector embedding matching ensures ads fit the conversation flow perfectly.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#121216]/60 backdrop-blur-xl border border-white/8 p-6 rounded-2xl flex flex-col justify-center group hover:bg-white/5 transition-colors">
          <span className="material-symbols-outlined text-3xl mb-4 text-[#4f46e5]">lock</span>
          <h3 className="text-lg font-bold mb-2 text-white font-['Space_Grotesk']">Privacy First</h3>
          <p className="text-sm text-slate-400">PII is stripped before processing. We never store conversation logs.</p>
        </div>
      </div>

      {/* Mini Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#121216]/60 backdrop-blur-xl border border-white/8 p-6 rounded-2xl text-center hover:border-[#4f46e5]/50 transition-colors">
            <span className="material-symbols-outlined mb-2 block mx-auto text-slate-300">{stat.icon}</span>
            <span className="font-semibold text-sm text-white">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
