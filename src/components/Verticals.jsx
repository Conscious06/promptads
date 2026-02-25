export default function Verticals() {
  const verticals = [
    { name: "Productivity", desc: "Monetize writing assistants, code helpers, and research tools.", gradient: "from-purple-900/40 to-blue-900/40" },
    { name: "Education", desc: "Language tutors, math solvers, and history bots.", gradient: "from-green-900/40 to-emerald-900/40" },
    { name: "Gaming & RPG", desc: "Interactive fiction, character chat, and game guides.", gradient: "from-pink-900/40 to-purple-900/40" },
    { name: "Dating & Social", desc: "Relationship advice bots and social discovery apps.", gradient: "from-orange-900/40 to-red-900/40" }
  ];

  return (
    <section className="py-24 bg-[#121216] border-y border-white/5" id="verticals">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-white font-['Space_Grotesk']">Target Verticals</h2>
            <p className="text-slate-400">Where PromptAds performs best.</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
              <span className="font-bold text-white">CPM</span>
              <span className="text-slate-500 ml-1">Impression Model</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm">
              <span className="font-bold text-white">CPC</span>
              <span className="text-slate-500 ml-1">Click Model</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((v, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl aspect-[4/5]">
              <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient}`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1 font-['Space_Grotesk']">{v.name}</h3>
                <p className="text-sm text-slate-300 line-clamp-2">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
