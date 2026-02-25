import { useState, useEffect } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 pb-20 relative overflow-hidden bg-[#030303]">
      {/* Social proof bar */}
      <div className="absolute top-0 left-0 right-0 w-full py-4 z-20 border-b border-white/[0.06] bg-black/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="text-[#6B6B6B] font-medium">
            Trusted by innovative teams
          </div>
        </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <p className="text-[#6B6B6B] font-medium mb-4">
          The ad network for AI
        </p>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 text-[#F5F5F0]">
          Start monetizing your LLM app
        </h1>

        <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto mb-12 font-light">
          Native, relevant ads that appear naturally within your conversations. 
          Keep 70% of your revenue. No minimums.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:items-start items-center justify-center">
          <a 
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#3B82F6] text-white rounded-full hover:bg-[#60A5FA] hover:scale-[1.05] transition-all duration-300"
          >
            Integrate SDK →
          </a>

          <div className="mt-20 w-full max-w-3xl mx-auto aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#0C0C0B] rounded-2xl border border-white/[0.12] relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-24 h-24 rounded-full border-2 border-[#3B82F6] bg-white flex items-center justify-center text-3xl font-serif text-[#3B82F6]">
                $
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 py-12">
          <h3 className="text-lg text-[#F5F5F0] font-medium mt-4">
            Built for the AI era
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-[#9c9da1]">
            <div className="text-center">
              <p className="text-sm text-[#6B6B6B] max-w-sm mx-auto mb-3">
                Install our SDK in under 5 minutes
              </p>
              <div className="flex gap-4 flex-wrap justify-center">
                <div className="text-[#3B82F6] text-xs uppercase tracking-widest text-[#9c9da1] mb-6">
                  Get your API key
                </div>
                <div className="text-[#3B82F6] text-xs uppercase tracking-widest text-[#9c9da1] mb-6">
                  Copy-paste integration
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}