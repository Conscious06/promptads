const features = [
  {
    icon: '◎',
    title: 'Inline Placement',
    desc: 'Ads appear naturally within LLM conversations.'
  },
  {
    icon: '◉',
    title: 'Context Aware',
    desc: 'We analyze your prompt and match relevant advertisers.'
  },
  {
    icon: '○',
    title: '70% Revenue',
    desc: 'You keep the majority. No minimums.'
  },
  {
    icon: '◇',
    title: '5-Minute Setup',
    desc: 'Drop in our SDK. Start earning.'
  },
  {
    icon: '□',
    title: 'Multiple Verticals',
    desc: 'Dating, productivity, gaming, education.'
  },
  {
    icon: '△',
    title: 'Fraud Protection',
    desc: 'Built-in detection for invalid clicks.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-[#0C0C0C]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="group relative">
              {/* Card */}
              <div className="relative bg-white border border-white/[0.12] rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#3B82F6]/30 transition-all duration-300">
                
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center text-2xl text-[#3B82F6]">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="font-serif text-xl md:text-2xl mb-3 text-[#F5F5F0]">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#6B6B6B] font-light max-w-sm mx-auto">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}