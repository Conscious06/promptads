import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(212,168,83,0.08) 0%, transparent 60%)'
        }}
      />

      {/* Animated rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div 
          className={`w-96 h-96 rounded-full border border-[#2a2a28] transition-all duration-1000 ease-out ${mounted ? 'opacity-50 scale-100' : 'opacity-0 scale-90'}`}
          style={{ animation: 'pulse 8s ease-in-out infinite' }}
        />
        <div 
          className={`absolute w-72 h-72 rounded-full border border-[#a38542] transition-all duration-1000 delay-200 ease-out ${mounted ? 'opacity-30 scale-100' : 'opacity-0 scale-90'}`}
          style={{ animation: 'pulse 8s ease-in-out infinite 2s' }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-[#d4a853] mb-6">
          The ad network for AI
        </p>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
          Monetize conversations.<br />
          <span className="text-[#d4a853]">Not interrupts.</span>
        </h1>

        <p className="text-lg text-[#8a8a85] max-w-md mx-auto mb-10 font-light">
          Ads that live inside LLM responses. Native. Relevant. Non-intrusive.
        </p>

        <a 
          href="#"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f5f5f0] text-[#000000] text-sm font-medium rounded-full hover:scale-[1.02] transition-transform duration-300"
        >
          Integrate SDK <span>→</span>
        </a>

        {/* Abstract visual */}
        <div className="mt-20 w-full max-w-2xl mx-auto aspect-video bg-gradient-to-br from-[#1a1918] to-[#0d0c0b] rounded-2xl border border-[#2a2a28] relative flex items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-[#d4a853] flex items-center justify-center text-2xl">
              $
            </div>
            <span className="text-xs uppercase tracking-widest text-[#8a8a85]">
              Contextual by default
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}