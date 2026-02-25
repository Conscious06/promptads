export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden">
      {/* Background - Light subtle patterns */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[80px] -z-10"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] -z-10"></div>
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-sm font-medium text-brand-purple mb-8">
        <span className="flex h-2 w-2 rounded-full brand-gradient"></span>
        <span>Now in Public Beta</span>
      </div>
      
      {/* Title */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-center max-w-5xl leading-[1.1]">
        <span className="text-slate-900">Monetize the</span>
        <br />
        <span className="brand-gradient-text">Conversation.</span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed text-center font-light">
        The first <span className="text-slate-900 font-medium">AI-native advertising network</span> built for Large Language Model applications. 
        Context-aware monetization that feels like a helpful suggestion, not an interruption.
      </p>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <button className="h-14 px-10 rounded-2xl brand-gradient text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2">
          Start Integrating
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <button className="h-14 px-10 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-semibold text-lg transition-all flex items-center gap-2">
          <span className="material-symbols-outlined">play_arrow</span>
          Watch Demo
        </button>
      </div>
      
      {/* Stats Bar */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
        <div>
          <div className="text-3xl md:text-4xl font-bold brand-gradient-text">10x</div>
          <div className="text-sm text-slate-500 mt-1">Higher CTR</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-slate-900">{'<'}50ms</div>
          <div className="text-sm text-slate-500 mt-1">Latency</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-slate-900">70%</div>
          <div className="text-sm text-slate-500 mt-1">Publisher Share</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-slate-900">4</div>
          <div className="text-sm text-slate-500 mt-1">Verticals</div>
        </div>
      </div>
      
      {/* Abstract Visual */}
      <div className="w-full max-w-5xl mt-16 aspect-[16/9] relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-brand-pink/5 to-brand-cyan/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        
        {/* Mock UI */}
        <div className="absolute inset-8 flex items-end justify-between">
          <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-slate-200 max-w-sm shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-green-500">check_circle</span>
              <span className="font-bold text-slate-900">High Relevance Match</span>
            </div>
            <p className="text-sm text-slate-500">Ads match the user's intent with 99.8% semantic accuracy.</p>
            <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-[85%] brand-gradient rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-slate-600">Live Matching</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
