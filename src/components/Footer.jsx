export default function Footer() {
  return (
    <footer className="py-16 border-t border-[#2a2a28] text-center">
      <div className="max-w-5xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-6">
          <a href="/" className="text-lg font-sans font-medium">
            Prompt<span className="text-[#d4a853]">Ads</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-8 mb-8">
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
        </nav>

        <p className="text-xs text-[#8a8a85]">
          © 2026 PromptAds. San Francisco, CA.
        </p>
      </div>
    </footer>
  );
}