export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-miro-purple/20 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-miro-pink/15 rounded-full blur-[120px] -z-10"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] -z-10"></div>
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
        <span className="flex h-2 w-2 rounded-full miro-gradient"></span>
        <span>Now in Public Beta</span>
      </div>
      
      {/* Title */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-center max-w-5xl leading-[1.1]">
        <span className="text-white">Monetize the</span>
        <br />
        <span className="miro-gradient-text">Conversation.</span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed text-center font-light">
        The first <span className="text-white font-medium">AI-native advertising network</span> built for Large Language Model applications. 
        Context-aware monetization that feels like a helpful suggestion, not an interruption.
      </p>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <button className="h-14 px-10 rounded-full miro-gradient text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg glow-purple flex items-center gap-2">
          Start Integrating
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <button className="h-14 px-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg transition-all backdrop-blur-sm flex items-center gap-2">
          <span className="material-symbols-outlined">play_arrow</span>
          Watch Demo
        </button>
      </div>
      
      {/* Stats Bar */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
        <div>
          <div className="text-3xl md:text-4xl font-bold miro-gradient-text">10x</div>
          <div className="text-sm text-slate-500 mt-1">Higher CTR</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-white">{'<'}50ms</div>
          <div className="text-sm text-slate-500 mt-1">Latency</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-white">70%</div>
          <div className="text-sm text-slate-500 mt-1">Publisher Share</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-white">4</div>
          <div className="text-sm text-slate-500 mt-1">Verticals</div>
        </div>
      </div>
      
      {/* Abstract Visual */}
      <div className="w-full max-w-5xl mt-16 aspect-[16/9] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-miro-surface">
        <div className="absolute inset-0 bg-gradient-to-br from-miro-purple/20 via-miro-pink/10 to-miro-cyan/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-miro-dark via-transparent to-transparent"></div>
        
        {/* Mock UI */}
        <div className="absolute inset-8 flex items-end justify-between">
          {/* Floating cards */}
          <div className="bg-black/60 backdrop-blur-md p-5 rounded-xl border border-white/10 max-w-sm transform hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-green-400">check_circle</span>
              <span className="font-bold text-white">High Relevance Match</span>
            </div>
            <p className="text-sm text-slate-400">Ads match the user's intent with 99.8% semantic accuracy.</p>
            <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[85%] miro-gradient rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-miro-purple/30">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-slate-300">Live Matching</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
