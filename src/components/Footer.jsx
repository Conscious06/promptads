export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/[0.12] bg-[#0C0C0C] text-center">
      <div className="max-w-5xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-6">
          <a href="/" className="text-lg font-serif font-medium text-[#F5F5F0]">
            Prompt<span className="text-[#3B82F6]">Ads</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-8 mb-8">
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
        </nav>

        <p className="text-xs text-[#9c9da1] mt-8">
          © 2026 PromptAds. San Francisco, CA.
        </p>
      </div>
    </footer>
  );
}