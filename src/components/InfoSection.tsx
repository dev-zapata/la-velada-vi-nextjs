const STATS = [
  { value: "80.000", label: "Asistentes" },
  { value: "10", label: "Combates" },
  { value: "3.85M", label: "Viewers (Velada V)" },
  { value: "2h", label: "Entradas agotadas" },
];

const INFO_ITEMS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Estadio La Cartuja",
    description: "Sevilla, España. Capacidad para 80.000 personas.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "25 de julio de 2026",
    description: "Puertas abren a las 18:00. Primer combate a las 21:00.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Streaming en vivo",
    description: "Si no puedes estar, síguelo en directo por Twitch y DAZN.",
  },
];

export default function InfoSection() {
  return (
    <section id="info" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[180px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-dark-card border border-dark-border rounded-2xl p-6 opacity-0 animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
            >
              <p className="text-3xl sm:text-4xl font-black text-white">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-neon-blue font-semibold">Información</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            El Evento
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {INFO_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-neon-blue/30 transition-all duration-300 hover:-translate-y-1 opacity-0 animate-slide-up"
              style={{ animationDelay: `${(i + 4) * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
