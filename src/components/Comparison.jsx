export default function Comparison() {
  const rows = [
    { feature: "Integration Type", promptads: "Native / Inline", adsense: "Banner / Overlay", affiliate: "Manual / Hardcoded" },
    { feature: "Context Awareness", promptads: "Semantic Embedding", adsense: "Keyword Only", affiliate: "None" },
    { feature: "UX Impact", promptads: "Zero Friction", adsense: "High Disruption", affiliate: "Medium Friction" },
    { feature: "Setup Time", promptads: "5 Minutes", adsense: "Hours + Approval", affiliate: "Weeks (Partnerships)" }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white font-['Space_Grotesk']">
          Why we <span className="miro-gradient-text">win</span>
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 text-sm uppercase tracking-wider">
                <th className="py-4 px-6 font-medium">Feature</th>
                <th className="py-4 px-6 font-medium miro-gradient-text">PromptAds</th>
                <th className="py-4 px-6 font-medium">Google AdSense</th>
                <th className="py-4 px-6 font-medium">Affiliate Links</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="py-5 px-6 font-semibold text-white">{row.feature}</td>
                  <td className="py-5 px-6 text-miro-purple font-medium">{row.promptads}</td>
                  <td className="py-5 px-6 text-slate-400">{row.adsense}</td>
                  <td className="py-5 px-6 text-slate-400">{row.affiliate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
