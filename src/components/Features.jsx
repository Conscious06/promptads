export default function Features() {
  const features = [
    { icon: "code", title: "5-Minute Integration", desc: "SDKs for Python, Node.js, and more.", color: "miro-purple" },
    { icon: "hub", title: "Context-Aware", desc: "Vector embedding matching.", color: "miro-pink" },
    { icon: "lock", title: "Privacy First", desc: "PII stripped before processing.", color: "miro-cyan" }
  ];

  const stats = [
    { icon: "speed", label: "<50ms Latency", color: "miro-purple" },
    { icon: "payments", label: "Net-30 Payouts", color: "miro-pink" },
    { icon: "analytics", label: "Real-time Stats", color: "miro-cyan" },
    { icon: "globe_asia", label: "Global Fill", color: "miro-blue" }
  ];

  return (
    <section className="py-32 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-['Space_Grotesk']">
            Built for <span className="miro-gradient-text">Developers</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need to integrate monetization in minutes.
          </p>
        </div>

        {/* Bento Grid - Miro Style */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[520px]">
          
          {/* Main Feature - Code */}
          <div className="md:col-span-2 md:row-span-2 bg-miro-surface border border-white/10 p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-miro-purple/20 rounded-full blur-3xl group-hover:bg-miro-purple/30 transition-all"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-miro-purple/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl text-miro-purple">code</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white font-['Space_Grotesk']">5-Minute Integration</h3>
              <p className="text-slate-400 max-w-md">Simple SDKs for Python and Node.js. Just wrap your LLM completion call.</p>
            </div>
            
            <div className="mt-6 bg-black/60 p-4 rounded-xl font-mono text-xs text-slate-300 border border-white/5">
              <span className="text-miro-pink">import</span> promptads<br/><br/>
              response = promptads.<span className="text-miro-cyan">inject</span>(<br/>
                provider=<span className="text-miro-purple">"openai"</span>,<br/>
                model=<span className="text-miro-purple">"gpt-4"</span>,<br/>
                messages=chat_history<br/>
              )
            </div>
          </div>

          {/* Feature 2 */}
          <div className="md:col-span-1 md:row-span-1 bg-miro-surface border border-white/10 p-6 rounded-2xl flex flex-col justify-center group hover:border-miro-pink/30 transition-colors relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-miro-pink/10 rounded-full blur-2xl"></div>
            <span className="material-symbols-outlined text-3xl mb-3 text-miro-pink">hub</span>
            <h3 className="text-lg font-bold mb-1 text-white font-['Space_Grotesk']">Context-Aware</h3>
            <p className="text-sm text-slate-400">Vector embedding matching.</p>
          </div>

          {/* Feature 3 */}
          <div className="md:col-span-1 md:row-span-1 bg-miro-surface border border-white/10 p-6 rounded-2xl flex flex-col justify-center group hover:border-miro-cyan/30 transition-colors relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-miro-cyan/10 rounded-full blur-2xl"></div>
            <span className="material-symbols-outlined text-3xl mb-3 text-miro-cyan">lock</span>
            <h3 className="text-lg font-bold mb-1 text-white font-['Space_Grotesk']">Privacy First</h3>
            <p className="text-sm text-slate-400">No conversation logs stored.</p>
          </div>

          {/* Stats row */}
          <div className="md:col-span-2 md:row-span-1 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-miro-surface border border-white/5 p-5 rounded-2xl text-center hover:border-white/20 transition-colors">
                <span className={`material-symbols-outlined mb-2 block mx-auto text-${stat.color}`}>{stat.icon}</span>
                <span className="font-semibold text-sm text-white">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
