export default function Roadmap() {
  const steps = [
    { title: "Q3 2023: Launch", desc: "Public beta release of SDKs. Initial advertiser onboarding for tech & productivity verticals.", completed: true },
    { title: "Q4 2023: Self-Serve", desc: "Advertiser dashboard launch. Real-time bidding (RTB) engine implementation.", active: true },
    { title: "Q1 2024: Multimodal", desc: "Support for image and video generation models. Native product placement in AI images.", upcoming: true }
  ];

  return (
    <section className="py-32 px-6" id="roadmap">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-white font-['Space_Grotesk']">
          Product <span className="miro-gradient-text">Roadmap</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-miro-purple via-miro-pink to-miro-cyan -translate-x-1/2 hidden md:block"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-8 mb-12 last:mb-0">
              {/* Left side - even */}
              <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:order-1'}`}>
                <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">{step.title}</h3>
                <p className="text-slate-400 mt-2">{step.desc}</p>
              </div>
              
              {/* Center dot */}
              <div className="hidden md:flex w-10 h-10 rounded-full items-center justify-center shrink-0 z-10 relative">
                {step.completed ? (
                  <div className="w-4 h-4 rounded-full bg-miro-purple shadow-[0_0_15px_rgba(124,58,237,1)]"></div>
                ) : step.active ? (
                  <div className="w-5 h-5 rounded-full bg-white border-4 border-miro-pink animate-pulse"></div>
                ) : (
                  <div className="w-4 h-4 rounded-full bg-white/20 border border-white/40"></div>
                )}
              </div>
              
              {/* Right side - odd */}
              <div className={`md:w-1/2 ${i % 2 !== 0 ? 'md:text-left md:order-1' : ''}`}>
                <div className="inline-flex items-center gap-2">
                  {step.completed && <span className="text-xs font-bold text-miro-purple">✓ COMPLETED</span>}
                  {step.active && <span className="text-xs font-bold text-miro-pink animate-pulse">● IN PROGRESS</span>}
                  {step.upcoming && <span className="text-xs font-bold text-slate-500">○ UPCOMING</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
