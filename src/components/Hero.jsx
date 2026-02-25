export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-32 pb-20">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4f46e5]/20 rounded-full blur-[120px] -z-10 opacity-40"></div>
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 mb-8 backdrop-blur-sm">
        <span className="flex h-2 w-2 rounded-full bg-[#4f46e5]"></span>
        v1.0 is now live for developers
      </div>
      
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-white font-['Space_Grotesk']">
        Monetize the <span className="bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">Conversation.</span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
        The first AI-native advertising network built for Large Language Model applications. Seamless, context-aware monetization without disrupting user flow.
      </p>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-20">
        <button className="h-12 px-8 rounded-full bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.5)]">
          Get Started
        </button>
        <button className="h-12 px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all backdrop-blur-sm flex items-center gap-2 group">
          View Documentation 
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
      
      {/* Abstract Visual */}
      <div className="w-full max-w-5xl aspect-[16/9] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#121216] group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent"></div>
        
        {/* Floating Element */}
        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 max-w-xs transform transition-all hover:-translate-y-2 duration-500">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-green-400">check_circle</span>
              <span className="font-bold text-white font-['Space_Grotesk']">High Relevance</span>
            </div>
            <p className="text-sm text-slate-400">Ads match the user's intent with 99.8% semantic accuracy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
