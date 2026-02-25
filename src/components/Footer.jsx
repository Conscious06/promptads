export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[#4f46e5]">auto_awesome</span>
            <span className="font-bold text-lg text-white font-['Space_Grotesk']">PromptAds</span>
          </div>
          <p className="text-slate-500 mb-4">The monetization layer for the AI era.</p>
          <div className="flex gap-4">
            <a className="text-slate-500 hover:text-white" href="#">Twitter</a>
            <a className="text-slate-500 hover:text-white" href="#">GitHub</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Product</h4>
          <ul className="space-y-2 text-slate-500">
            <li><a className="hover:text-[#4f46e5] transition-colors" href="#">SDKs</a></li>
            <li><a className="hover:text-[#4f46e5] transition-colors" href="#">Documentation</a></li>
            <li><a className="hover:text-[#4f46e5] transition-colors" href="#">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-slate-500">
            <li><a className="hover:text-[#4f46e5] transition-colors" href="#">About</a></li>
            <li><a className="hover:text-[#4f46e5] transition-colors" href="#">Blog</a></li>
            <li><a className="hover:text-[#4f46e5] transition-colors" href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Legal</h4>
          <ul className="space-y-2 text-slate-500">
            <li><a className="hover:text-[#4f46e5] transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-[#4f46e5] transition-colors" href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600">
        <p>© 2026 PromptAds Inc. All rights reserved.</p>
        <p>Designed with AI-Native principles.</p>
      </div>
    </footer>
  );
}
