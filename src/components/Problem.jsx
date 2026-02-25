export default function Problem() {
  const problems = [
    {
      icon: "broken_image",
      title: "Broken UI/UX",
      desc: "Standard banners disrupt the clean chat interface, creating visual noise that ruins the premium feel of AI apps.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: "psychology_alt",
      title: "Irrelevant Context",
      desc: "Keyword-based ads don't understand conversation nuance, serving car ads when users ask about drivers.",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: "visibility_off",
      title: "Banner Blindness",
      desc: "Users have trained to ignore traditional ads entirely, resulting in abysmal click-through rates.",
      gradient: "from-orange-500 to-pink-500"
    }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-['Space_Grotesk']">
            Why <span className="miro-gradient-text">LLM monetization</span> is broken
          </h2>
          <p className="text-slate-400 text-lg">
            Traditional display ads break the conversational interface. Banners are intrusive, and irrelevant ads ruin trust in AI assistants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div key={i} className="group relative bg-miro-surface border border-white/5 p-8 rounded-2xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity -z-10`}></div>
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-white text-2xl">{item.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white font-['Space_Grotesk']">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              
              <div className={`absolute top-8 right-8 w-24 h-24 bg-gradient-to-r ${item.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
