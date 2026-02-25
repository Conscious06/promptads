export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-miro-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg miro-gradient flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">auto_awesome</span>
              </div>
              <span className="font-bold text-lg text-white font-['Space_Grotesk']">PromptAds</span>
            </div>
            <p className="text-slate-500 text-sm">The monetization layer for the AI era.</p>
            <div className="flex gap-4 mt-4">
              <a className="text-slate-500 hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined">tag</span>
              </a>
              <a className="text-slate-500 hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a className="hover:text-miro-purple transition-colors" href="#">SDKs</a></li>
              <li><a className="hover:text-miro-purple transition-colors" href="#">Documentation</a></li>
              <li><a className="hover:text-miro-purple transition-colors" href="#">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a className="hover:text-miro-purple transition-colors" href="#">About</a></li>
              <li><a className="hover:text-miro-purple transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-miro-purple transition-colors" href="#">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a className="hover:text-miro-purple transition-colors" href="#">Privacy</a></li>
              <li><a className="hover:text-miro-purple transition-colors" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© 2024 PromptAds Inc. All rights reserved.</p>
          <p>Designed with AI-Native principles.</p>
        </div>
      </div>
    </footer>
  );
}
