export default function CTA() {
  return (
    <section className="py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto bg-miro-surface border border-white/10 rounded-3xl p-12 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-miro-purple/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-['Space_Grotesk']">
            Ready to <span className="miro-gradient-text">monetize</span>?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
            Join the waiting list for the PromptAds network. We are currently onboarding developers by invitation.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              className="flex-1 h-14 bg-white/5 border border-white/10 rounded-xl px-5 text-white placeholder-slate-500 focus:outline-none focus:border-miro-purple transition-colors" 
              placeholder="Enter your email" 
              type="email"
            />
            <button 
              className="h-14 px-8 rounded-xl miro-gradient text-white font-bold transition-all hover:scale-105 glow-purple" 
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
