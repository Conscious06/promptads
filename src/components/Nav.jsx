export default function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-miro-dark/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl miro-gradient flex items-center justify-center">
            <span className="material-symbols-outlined text-white" style={{ fontSize: "20px" }}>auto_awesome</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-white font-['Space_Grotesk']">PromptAds</span>
        </div>
        
        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a className="hover:text-white transition-colors" href="#features">Features</a>
          <a className="hover:text-white transition-colors" href="#solution">Solution</a>
          <a className="hover:text-white transition-colors" href="#verticals">Verticals</a>
          <a className="hover:text-white transition-colors" href="#roadmap">Roadmap</a>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center gap-4">
          <a className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Log in</a>
          <a className="h-10 px-5 rounded-full miro-gradient text-white text-sm font-semibold hover:scale-105 transition-transform flex items-center" href="#">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
