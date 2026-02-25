import { useState, useEffect } from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 pb-20 bg-[#030303]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#6B6B6B] font-medium mb-4">
          The ad network for AI
        </p>

        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 text-[#F5F5F0]">
          Start monetizing your LLM app
        </h1>

        <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto mb-12 font-light">
          Native, relevant ads within your conversations. 
          Keep 70% revenue. No minimums.
        </p>

        <a 
          href="#"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#3B82F6] text-white rounded-full hover:bg-[#60A5FA] transition-all"
        >
          Integrate SDK →
        </a>

        <div className="mt-20 w-full max-w-3xl mx-auto aspect-video bg-[#0C0C0C] rounded-2xl border border-white/[0.12] flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl border-2 border-[#3B82F6] flex items-center justify-center">
            <span className="text-3xl font-serif text-[#3B82F6]">$</span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-serif text-[#3B82F6] mb-2">3–10%</div>
            <div className="text-xs text-[#6B6B6B]">Average CTR</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-serif text-[#3B82F6] mb-2">70%</div>
            <div className="text-xs text-[#6B6B6B]">Revenue Share</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-serif text-[#3B82F6] mb-2">5min</div>
            <div className="text-xs text-[#6B6B6B]">Setup Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}