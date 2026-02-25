export default function CTA() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#121216] to-[#050507] border border-white/10 rounded-3xl p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent opacity-50"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-['Space_Grotesk']">Ready to monetize?</h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Join the waiting list for the PromptAds network. We are currently onboarding developers by invitation.</p>
        <form className="max-w-md mx-auto flex gap-2">
          <input 
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 text-white focus:outline-none focus:border-[#4f46e5] transition-colors" 
            placeholder="Enter your email" 
            type="email"
          />
          <button 
            className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-6 py-3 rounded-lg font-bold transition-colors" 
            type="submit"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
}
