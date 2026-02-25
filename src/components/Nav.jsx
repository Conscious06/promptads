export default function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#121216]/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-[#4f46e5]">
            <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>auto_awesome</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-white font-['Space_Grotesk']">PromptAds</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a className="hover:text-white transition-colors" href="#features">Features</a>
          <a className="hover:text-white transition-colors" href="#solution">Solution</a>
          <a className="hover:text-white transition-colors" href="#verticals">Verticals</a>
          <a className="hover:text-white transition-colors" href="#roadmap">Roadmap</a>
        </nav>
        <div className="flex items-center gap-4">
          <a className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Log in</a>
          <a className="h-9 px-4 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center" href="#">Get Started</a>
        </div>
      </div>
    </header>
  );
}
