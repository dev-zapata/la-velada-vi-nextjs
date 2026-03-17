import Image from "next/image";

interface Fighter {
  name: string;
  alias: string;
  record: string;
  country: string;
  image: string;
}

interface CombatCardProps {
  fighter1: Fighter;
  fighter2: Fighter;
  weight: string;
  rounds: number;
  order: number;
  isMainEvent?: boolean;
}

export default function CombatCard({ fighter1, fighter2, weight, rounds, order, isMainEvent }: CombatCardProps) {
  return (
    <div
      className={`combat-card group relative bg-dark-card border rounded-2xl overflow-hidden opacity-0 animate-slide-up ${
        isMainEvent
          ? "border-neon-gold/40 shadow-lg shadow-neon-gold/10"
          : "border-dark-border"
      }`}
      style={{ animationDelay: `${order * 0.08}s`, animationFillMode: "forwards" }}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 ${
          isMainEvent
            ? "bg-gradient-to-r from-neon-gold via-yellow-400 to-neon-gold"
            : "bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue"
        }`}
      />

      {/* Combat number */}
      <div className="absolute top-4 left-4 bg-dark-bg/80 border border-dark-border rounded-lg px-3 py-1 z-10">
        <span className={`text-xs font-bold uppercase ${isMainEvent ? "text-neon-gold" : "text-gray-400"}`}>
          {isMainEvent ? "Main Event" : `Combate ${order}`}
        </span>
      </div>

      {/* Weight & Rounds */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <span className="bg-neon-red/10 text-neon-red text-xs font-bold px-2.5 py-1 rounded-lg border border-neon-red/20">
          {weight}
        </span>
        <span className="bg-neon-blue/10 text-neon-blue text-xs font-bold px-2.5 py-1 rounded-lg border border-neon-blue/20">
          {rounds}R
        </span>
      </div>

      <div className={`pt-14 pb-6 px-6 ${isMainEvent ? "py-8 pt-16" : ""}`}>
        <div className="flex items-center justify-between gap-4">
          {/* Fighter 1 */}
          <div className="flex-1 text-center">
            <div
              className={`relative mx-auto rounded-full overflow-hidden border-2 transition-colors ${
                isMainEvent
                  ? "w-24 h-24 sm:w-28 sm:h-28 border-neon-gold/40 group-hover:border-neon-gold/80"
                  : "w-20 h-20 sm:w-24 sm:h-24 border-neon-red/40 group-hover:border-neon-red/80"
              }`}
            >
              <Image
                src={fighter1.image}
                alt={fighter1.name}
                fill
                className="object-cover"
                sizes={isMainEvent ? "112px" : "96px"}
              />
            </div>
            <h3 className={`font-black text-white leading-tight mt-3 ${isMainEvent ? "text-lg sm:text-xl" : "text-base sm:text-lg"}`}>
              {fighter1.name}
            </h3>
            <p className="text-xs text-neon-gold font-semibold mt-1">{fighter1.alias}</p>
            <p className="text-xs text-gray-500 mt-1">{fighter1.record}</p>
            <p className="text-sm mt-1">{fighter1.country}</p>
          </div>

          {/* VS Badge */}
          <div className="flex-shrink-0">
            <div
              className={`vs-badge relative rounded-full flex items-center justify-center shadow-lg ${
                isMainEvent
                  ? "w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-neon-gold to-yellow-600 shadow-neon-gold/30"
                  : "w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-neon-red to-neon-purple shadow-neon-red/20"
              }`}
            >
              <span className={`font-black text-white ${isMainEvent ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
                VS
              </span>
            </div>
          </div>

          {/* Fighter 2 */}
          <div className="flex-1 text-center">
            <div
              className={`relative mx-auto rounded-full overflow-hidden border-2 transition-colors ${
                isMainEvent
                  ? "w-24 h-24 sm:w-28 sm:h-28 border-neon-gold/40 group-hover:border-neon-gold/80"
                  : "w-20 h-20 sm:w-24 sm:h-24 border-neon-blue/40 group-hover:border-neon-blue/80"
              }`}
            >
              <Image
                src={fighter2.image}
                alt={fighter2.name}
                fill
                className="object-cover"
                sizes={isMainEvent ? "112px" : "96px"}
              />
            </div>
            <h3 className={`font-black text-white leading-tight mt-3 ${isMainEvent ? "text-lg sm:text-xl" : "text-base sm:text-lg"}`}>
              {fighter2.name}
            </h3>
            <p className="text-xs text-neon-gold font-semibold mt-1">{fighter2.alias}</p>
            <p className="text-xs text-gray-500 mt-1">{fighter2.record}</p>
            <p className="text-sm mt-1">{fighter2.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
