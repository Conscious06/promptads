export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#0C0C0C]/90 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-lg font-serif font-medium">
          Prompt<span className="text-[#3B82F6]">Ads</span>
        </a>

        <div className="hidden md:flex gap-8">
          <a href="#how" className="text-base text-[#6B6B6B] hover:text-[#3B82F6] transition-colors">
            How it works
          </a>
          <a href="#features" className="text-base text-[#6B6B6B] hover:text-[#3B82F6] transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-base text-[#6B6B6B] hover:text-[#3B82F6] transition-colors">
            Pricing
          </a>
          <a 
            href="https://github.com/Conscious06/promptads" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base text-[#6B6B6B] hover:text-[#3B82F6] transition-colors"
          >
            Docs
          </a>
        </div>

        <a 
          href="#"
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#3B82F6] text-white rounded-full hover:bg-[#60A5FA] hover:scale-[1.02] transition-transform duration-300"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}