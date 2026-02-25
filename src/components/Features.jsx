const features = [
  {
    icon: '◎',
    title: 'Inline Placement',
    desc: 'Ads appear naturally within the conversation flow. No popups. No banners.'
  },
  {
    icon: '◉',
    title: 'Context Aware',
    desc: 'We analyze the prompt and match relevant advertisers. Always on-topic.'
  },
  {
    icon: '○',
    title: '70% Revenue',
    desc: 'You keep the majority. No minimums, no commitments. Paid monthly.'
  },
  {
    icon: '◇',
    title: '5-Minute Setup',
    desc: 'Drop in our SDK. Configure your vertical. Start earning.'
  },
  {
    icon: '□',
    title: 'Multiple Verticals',
    desc: 'Dating, productivity, gaming, education. More verticals coming soon.'
  },
  {
    icon: '△',
    title: 'Fraud Protection',
    desc: 'Built-in detection for bot traffic and invalid clicks.'
  }
];

export default function Features() {
  return (
    <section className="py-32 border-t border-[#2a2a28]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl mb-4">Built different</h2>
          <p className="text-[#8a8a85] font-light">Traditional ads break flow. We enhance it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 mx-auto mb-5 rounded-xl border border-[#2a2a28] flex items-center justify-center text-xl">
                {feature.icon}
              </div>
              <h3 className="font-sans font-medium text-base mb-2">{feature.title}</h3>
              <p className="text-sm text-[#8a8a85] font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}