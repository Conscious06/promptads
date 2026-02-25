import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 relative overflow-hidden">
      {/* Minimal background - no gradient */}
      <div className="absolute inset-0 bg-[#030303]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-[#3B82F6] mb-6">
          The ad network for AI
        </p>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6 text-[#F5F5F0]">
          Monetize conversations.<br />
          <span className="text-[#3B82F6]">Not interrupts.</span>
        </h1>

        <p className="text-lg text-[#6B6B6B] max-w-md mx-auto mb-10 font-light">
          Ads that live inside LLM responses. Native. Relevant. Non-intrusive.
        </p>

        <a 
          href="#"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#3B82F6] text-white text-sm font-medium rounded-full hover:bg-[#60A5FA] transition-colors duration-300"
        >
          Integrate SDK <span>→</span>
        </a>

        {/* Simple visual - just text and symbol */}
        <div className="mt-20 w-full max-w-xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl border border-[#1A1A1A] mb-6">
              <span className="text-3xl font-serif text-[#3B82F6]">$</span>
            </div>
            <p className="text-sm uppercase tracking-widest text-[#6B6B6B]">
              Contextual by default
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}