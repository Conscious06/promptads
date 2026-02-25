export default function Features() {
  const stats = [
    { icon: "speed", label: "<50ms Latency", color: "text-brand-purple" },
    { icon: "payments", label: "Net-30 Payouts", color: "text-brand-pink" },
    { icon: "analytics", label: "Real-time Stats", color: "text-brand-cyan" },
    { icon: "globe_asia", label: "Global Fill", color: "text-brand-blue" }
  ];

  return (
    <section className="py-32 px-6 bg-light-surface" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 font-['Space_Grotesk']">
            Built for <span className="brand-gradient-text">Developers</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Everything you need to integrate monetization in minutes.
          </p>
        </div>

        {/* Bento Grid - Light */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[520px]">
          
          {/* Main Feature - Code */}
          <div className="md:col-span-2 md:row-span-2 bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl text-brand-purple">code</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900 font-['Space_Grotesk']">5-Minute Integration</h3>
              <p className="text-slate-600 max-w-md">Simple SDKs for Python and Node.js. Just wrap your LLM completion call.</p>
            </div>
            
            <div className="mt-6 bg-slate-50 p-4 rounded-xl font-mono text-xs text-slate-600 border border-slate-100">
              <span className="text-brand-pink">import</span> promptads<br/><br/>
              response = promptads.<span className="text-brand-cyan">inject</span>(<br/>
                provider=<span className="text-brand-purple">"openai"</span>,<br/>
                model=<span className="text-brand-purple">"gpt-4"</span>,<br/>
                messages=chat_history<br/>
              )
            </div>
          </div>

          {/* Feature 2 */}
          <div className="md:col-span-1 md:row-span-1 bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-center group hover:shadow-md transition-all">
            <span className="material-symbols-outlined text-3xl mb-3 text-brand-pink">hub</span>
            <h3 className="text-lg font-bold mb-1 text-slate-900 font-['Space_Grotesk']">Context-Aware</h3>
            <p className="text-sm text-slate-500">Vector embedding matching.</p>
          </div>

          {/* Feature 3 */}
          <div className="md:col-span-1 md:row-span-1 bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-center group hover:shadow-md transition-all">
            <span className="material-symbols-outlined text-3xl mb-3 text-brand-cyan">lock</span>
            <h3 className="text-lg font-bold mb-1 text-slate-900 font-['Space_Grotesk']">Privacy First</h3>
            <p className="text-sm text-slate-500">No conversation logs stored.</p>
          </div>

          {/* Stats row */}
          <div className="md:col-span-2 md:row-span-1 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white border border-slate-200 p-5 rounded-2xl text-center hover:shadow-md transition-all">
                <span className={`material-symbols-outlined mb-2 block mx-auto ${stat.color}`}>{stat.icon}</span>
                <span className="font-semibold text-sm text-slate-700">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
