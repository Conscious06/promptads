export default function Roadmap() {
  const steps = [
    { title: "Q3 2023: Launch", desc: "Public beta release of SDKs. Initial advertiser onboarding for tech & productivity verticals.", completed: true, active: false },
    { title: "Q4 2023: Self-Serve", desc: "Advertiser dashboard launch. Real-time bidding (RTB) engine implementation.", completed: false, active: true },
    { title: "Q1 2024: Multimodal", desc: "Support for image and video generation models. Native product placement in AI images.", completed: false, active: false }
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-6 relative" id="roadmap">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-white font-['Space_Grotesk']">Roadmap</h2>
      </div>
      <div className="space-y-12">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center gap-8 relative">
            <div className={`md:w-1/2 md:${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">{step.title}</h3>
              <p className="text-slate-400 mt-2">{step.desc}</p>
            </div>
            <div className={`w-4 h-4 rounded-full z-10 shrink-0 ${step.active ? 'bg-white border-2 border-[#4f46e5]' : step.completed ? 'bg-[#4f46e5] shadow-[0_0_15px_rgba(79,70,229,1)]' : 'bg-[#121216] border border-white/20'}`}></div>
            <div className="md:w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
