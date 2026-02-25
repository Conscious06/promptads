const stats = [
  { value: '3–10%', label: 'Average CTR' },
  { value: '70%', label: 'Publisher Share' },
  { value: '4', label: 'Verticals' },
  { value: '5min', label: 'To Integrate' }
];

export default function Numbers() {
  return (
    <section className="py-20 bg-[#0C0C0C] border-y border-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-5xl text-[#3B82F6] mb-2">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-[#6B6B6B]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}