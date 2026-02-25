export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-lg font-sans font-medium">
          Prompt<span className="text-[#d4a853]">Ads</span>
        </a>

        <div className="hidden md:flex gap-8">
          <a href="#how" className="text-sm text-[#8a8a85] hover:text-[#f5f5f0] transition-colors">
            How it works
          </a>
          <a href="#features" className="text-sm text-[#8a8a85] hover:text-[#f5f5f0] transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-[#8a8a85] hover:text-[#f5f5f0] transition-colors">
            Pricing
          </a>
          <a 
            href="https://github.com/Conscious06/promptads" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-[#8a8a85] hover:text-[#f5f5f0] transition-colors"
          >
            Docs
          </a>
        </div>

        <a 
          href="#"
          className="inline-flex items-center gap-2 px-5 py-2 bg-[#f5f5f0] text-[#000000] text-sm font-medium rounded-full hover:scale-[1.02] transition-transform duration-300"
        >
          Start earning →
        </a>
      </div>
    </nav>
  );
}