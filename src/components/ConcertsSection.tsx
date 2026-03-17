import Image from "next/image";

const ARTISTS = [
  { name: "Lit Killah", genre: "Trap / Urbano", confirmed: true, note: "También pelea", image: "/fighters/litkillah.jpg" },
  { name: "Kidd Keo", genre: "Trap", confirmed: true, note: "También pelea", image: "/fighters/kiddkeo.jpg" },
  { name: "Por anunciar", genre: "Urbano", confirmed: false, image: null },
  { name: "Por anunciar", genre: "Pop / Latino", confirmed: false, image: null },
  { name: "Por anunciar", genre: "Reggaetón", confirmed: false, image: null },
];

export default function ConcertsSection() {
  return (
    <section id="conciertos" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-neon-purple font-semibold">Música en vivo</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Conciertos
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            Entre combate y combate, los artistas más potentes de la escena urbana subirán al escenario de La Cartuja. En ediciones anteriores: Bizarrap, Quevedo, Nicky Jam...
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ARTISTS.map((artist, i) => (
            <div
              key={i}
              className="group relative bg-dark-card border border-dark-border rounded-2xl p-6 text-center transition-all duration-300 hover:border-neon-purple/40 hover:shadow-lg hover:shadow-neon-purple/10 hover:-translate-y-2 opacity-0 animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Artist avatar */}
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-neon-purple/20 group-hover:border-neon-purple/50 transition-colors mb-4 relative">
                {artist.image ? (
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-neon-purple/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                )}
              </div>

              <h3 className="text-lg font-bold text-white">{artist.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{artist.genre}</p>

              {artist.note && (
                <span className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-neon-red bg-neon-red/10 border border-neon-red/20 rounded-full px-3 py-0.5">
                  🥊 {artist.note}
                </span>
              )}

              <div className="mt-3">
                {artist.confirmed ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Confirmado
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neon-gold bg-neon-gold/10 border border-neon-gold/20 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 bg-neon-gold rounded-full animate-pulse" />
                    Por anunciar
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Mystery artist card */}
          <div
            className="group relative bg-dark-card/50 border border-dashed border-dark-border rounded-2xl p-6 text-center flex flex-col items-center justify-center opacity-0 animate-slide-up"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <div className="w-24 h-24 rounded-full bg-dark-border/30 flex items-center justify-center mb-4">
              <span className="text-4xl font-black text-gray-600">?</span>
            </div>
            <p className="text-sm font-semibold text-gray-500">Lineup completo próximamente...</p>
            <p className="text-xs text-gray-600 mt-2">Los nombres más potentes de la escena urbana</p>
          </div>
        </div>
      </div>
    </section>
  );
}
