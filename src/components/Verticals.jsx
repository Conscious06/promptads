export default function Verticals() {
  const verticals = [
    { name: "Dating", desc: "Monetize dating apps and relationship advisors.", gradient: "from-pink-500 via-red-500 to-orange-500", cpc: "$0.50" },
    { name: "Productivity", desc: "Writing assistants, code helpers, research tools.", gradient: "from-purple-500 via-indigo-500 to-blue-500", cpc: "$0.25" },
    { name: "Gaming", desc: "Interactive fiction, character chat, game guides.", gradient: "from-emerald-500 via-teal-500 to-cyan-500", cpc: "$0.15" },
    { name: "Education", desc: "Language tutors, math solvers, online courses.", gradient: "from-amber-500 via-yellow-500 to-lime-500", cpc: "$0.30" }
  ];

  return (
    <section className="py-32 px-6 bg-white" id="verticals">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-slate-900 font-['Space_Grotesk']">
              Target <span className="brand-gradient-text">Verticals</span>
            </h2>
            <p className="text-slate-600">Where PromptAds performs best.</p>
          </div>
          
          <div className="flex gap-3">
            <div className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-sm">
              <span className="font-bold text-slate-900">CPM</span>
              <span className="text-slate-500 ml-1">Model</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-sm">
              <span className="font-bold text-slate-900">CPC</span>
              <span className="text-slate-500 ml-1">Model</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((v, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-1">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-90`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold text-white mb-3">
                  {v.cpc} CPC
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-['Space_Grotesk']">{v.name}</h3>
                <p className="text-sm text-white/70 line-clamp-2">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
