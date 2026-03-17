import CombatCard from "./CombatCard";

const COMBATS = [
  {
    fighter1: { name: "IlloJuan", alias: "El Favorito del Chat", record: "0-0-0", country: "🇪🇸", image: "/fighters/illojuan.jpg" },
    fighter2: { name: "TheGrefg", alias: "The Boss", record: "0-0-0", country: "🇪🇸", image: "/fighters/thegrefg.jpg" },
    weight: "Estelar",
    rounds: 4,
    isMainEvent: true,
  },
  {
    fighter1: { name: "Fernanfloo", alias: "La Leyenda", record: "0-0-0", country: "🇸🇻", image: "/fighters/fernanfloo.jpg" },
    fighter2: { name: "Yo Soy Plex", alias: "El Veterano", record: "0-0-0", country: "🇲🇽", image: "/fighters/yosoyplex.jpg" },
    weight: "Leyendas",
    rounds: 3,
  },
  {
    fighter1: { name: "Lit Killah", alias: "El MC", record: "0-0-0", country: "🇦🇷", image: "/fighters/litkillah.jpg" },
    fighter2: { name: "Kidd Keo", alias: "Trap Star", record: "0-0-0", country: "🇪🇸", image: "/fighters/kiddkeo.jpg" },
    weight: "80kg",
    rounds: 3,
  },
  {
    fighter1: { name: "Viruzz", alias: "El Comeback", record: "1-1-0", country: "🇪🇸", image: "/fighters/viruzz.jpg" },
    fighter2: { name: "Gero Arias", alias: "El Toro", record: "0-0-0", country: "🇦🇷", image: "/fighters/geroarias.webp" },
    weight: "82kg",
    rounds: 3,
  },
  {
    fighter1: { name: "Edu Aguirre", alias: "El Chiringuito", record: "0-0-0", country: "🇪🇸", image: "/fighters/eduaguirre.jpg" },
    fighter2: { name: "Gastón Edul", alias: "ESPN", record: "0-0-0", country: "🇦🇷", image: "/fighters/gastonedul.jpg" },
    weight: "78kg",
    rounds: 3,
  },
  {
    fighter1: { name: "Marta Díaz", alias: "La Influencer", record: "0-0-0", country: "🇪🇸", image: "/fighters/martadiaz.jpg" },
    fighter2: { name: "Tatiana Kaer", alias: "La Guerrera", record: "0-0-0", country: "🇨🇴", image: "/fighters/tatianakaer.jpg" },
    weight: "58kg",
    rounds: 3,
  },
  {
    fighter1: { name: "Samy Rivers", alias: "El Artista", record: "0-0-0", country: "🇵🇷", image: "/fighters/samyrivers.jpg" },
    fighter2: { name: "RoRo", alias: "El Incansable", record: "0-0-0", country: "🇲🇽", image: "/fighters/rorobueno.jpg" },
    weight: "75kg",
    rounds: 3,
  },
  {
    fighter1: { name: "Fabiana", alias: "La Sevillana", record: "0-0-0", country: "🇪🇸", image: "/fighters/fabianasevillana.png" },
    fighter2: { name: "La Parce", alias: "Fuerza Latina", record: "0-0-0", country: "🇨🇴", image: "/fighters/laparce.jpg" },
    weight: "62kg",
    rounds: 3,
  },
  {
    fighter1: { name: "Clersss", alias: "La Streamer", record: "0-0-0", country: "🇪🇸", image: "/fighters/clersss.webp" },
    fighter2: { name: "Natalia MX", alias: "La Mexicana", record: "0-0-0", country: "🇲🇽", image: "/fighters/nataliamx.jpg" },
    weight: "60kg",
    rounds: 3,
  },
  {
    fighter1: { name: "Alondrissa", alias: "La Gamer", record: "0-0-0", country: "🇲🇽", image: "/fighters/alondrissa.webp" },
    fighter2: { name: "Angie Velasco", alias: "La Fiera", record: "0-0-0", country: "🇻🇪", image: "/fighters/angievelasco.jpg" },
    weight: "56kg",
    rounds: 3,
  },
];

export default function CombatsSection() {
  const mainEvent = COMBATS[0];
  const restCombats = COMBATS.slice(1);

  return (
    <section id="combates" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-red/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-neon-red font-semibold">Cartelera completa</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            10 Combates
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-neon-red to-neon-purple mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            La cartelera más internacional de todas. España, Argentina, México, Colombia, El Salvador, Venezuela y Puerto Rico.
          </p>
        </div>

        {/* Main Event - Special Card */}
        <div className="mb-12">
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 bg-neon-gold/10 border border-neon-gold/30 text-neon-gold text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-neon-gold rounded-full animate-pulse" />
              Evento estelar
            </span>
          </div>
          <div className="max-w-2xl mx-auto">
            <CombatCard
              fighter1={mainEvent.fighter1}
              fighter2={mainEvent.fighter2}
              weight={mainEvent.weight}
              rounds={mainEvent.rounds}
              order={10}
              isMainEvent
            />
          </div>
        </div>

        {/* Combat Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {restCombats.map((combat, i) => (
            <CombatCard
              key={i}
              fighter1={combat.fighter1}
              fighter2={combat.fighter2}
              weight={combat.weight}
              rounds={combat.rounds}
              order={i + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
