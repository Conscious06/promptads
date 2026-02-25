export default function CTA() {
  return (
    <section className="py-32 px-6 text-center bg-light-surface">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-12 shadow-sm relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-purple/10 rounded-full blur-[100px] -z-10"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 font-['Space_Grotesk']">
            Ready to <span className="brand-gradient-text">monetize</span>?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto">
            Join the waiting list for the PromptAds network. We are currently onboarding developers by invitation.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              className="flex-1 h-14 bg-slate-50 border border-slate-200 rounded-xl px-5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-purple focus:bg-white transition-colors" 
              placeholder="Enter your email" 
              type="email"
            />
            <button 
              className="h-14 px-8 rounded-xl brand-gradient text-white font-bold transition-all hover:scale-105" 
              type="submit"
            >
              Join Waitlist
            </button>
          </form>
          
          <p className="text-sm text-slate-500 mt-6">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
