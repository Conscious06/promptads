const features = [
  {
    icon: '◎',
    title: 'Inline Placement',
    desc: 'Ads appear naturally within the conversation flow.'
  },
  {
    icon: '◉',
    title: 'Context Aware',
    desc: 'We analyze prompts and match relevant advertisers.'
  },
  {
    icon: '○',
    title: '70% Revenue',
    desc: 'You keep the majority. Paid monthly.'
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
    <section className="py-32 border-t border-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl mb-4 text-[#F5F5F0]">Built different</h2>
          <p className="text-[#6B6B6B] font-light">Traditional ads break flow. We enhance it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 mx-auto mb-5 rounded-xl border border-[#1A1A1A] flex items-center justify-center text-xl text-[#3B82F6]">
                {feature.icon}
              </div>
              <h3 className="font-sans font-medium text-base mb-2 text-[#F5F5F0]">{feature.title}</h3>
              <p className="text-sm text-[#6B6B6B] font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}