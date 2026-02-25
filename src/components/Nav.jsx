export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#030303]/80 backdrop-blur-xl border-b border-[#1A1A1A]">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="text-lg font-sans font-medium text-[#F5F5F0]">
          Prompt<span className="text-[#3B82F6]">Ads</span>
        </a>

        <div className="hidden md:flex gap-8">
          <a href="#how" className="text-sm text-[#6B6B6B] hover:text-[#F5F5F0] transition-colors">
            How it works
          </a>
          <a href="#features" className="text-sm text-[#6B6B6B] hover:text-[#F5F5F0] transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-[#6B6B6B] hover:text-[#F5F5F0] transition-colors">
            Pricing
          </a>
          <a 
            href="https://github.com/Conscious06/promptads" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-[#6B6B6B] hover:text-[#F5F5F0] transition-colors"
          >
            Docs
          </a>
        </div>

        <a 
          href="#"
          className="inline-flex items-center gap-2 px-5 py-2 bg-[#3B82F6] text-white text-sm font-medium rounded-full hover:bg-[#60A5FA] transition-colors duration-300"
        >
          Start earning →
        </a>
      </div>
    </nav>
  );
}