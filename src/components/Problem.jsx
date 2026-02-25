export default function Problem() {
  const problems = [
    {
      icon: "broken_image",
      title: "Broken UI/UX",
      desc: "Standard banners disrupt the clean chat interface, creating visual noise that degrades the premium feel of AI apps.",
      color: "text-red-400",
      bg: "bg-red-500/10"
    },
    {
      icon: "psychology_alt",
      title: "Irrelevant Context",
      desc: "Keyword-based ads don't understand the nuance of conversation, serving car ads when users ask about drivers.",
      color: "text-orange-400",
      bg: "bg-orange-500/10"
    },
    {
      icon: "visibility_off",
      title: "Banner Blindness",
      desc: "Users have trained themselves to ignore traditional ad placements entirely, resulting in abysmal click-through rates.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-['Space_Grotesk']">Why LLM monetization is broken</h2>
        <p className="text-slate-400 text-lg max-w-2xl">Traditional display ads break the conversational interface. Banners are intrusive, and irrelevant ads ruin trust in AI assistants.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((item, i) => (
          <div key={i} className="bg-[#121216]/60 backdrop-blur-xl border border-white/8 p-8 rounded-2xl hover:bg-white/5 transition-colors group">
            <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white font-['Space_Grotesk']">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
