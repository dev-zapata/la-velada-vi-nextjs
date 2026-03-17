import Image from "next/image";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt="Boxing ring atmosphere"
        fill
        className="object-cover opacity-30"
        priority
        quality={80}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-red/5 via-transparent to-neon-purple/5 gradient-animate" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-red/8 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-dark-card/80 border border-dark-border rounded-full px-5 py-2 mb-8 animate-slide-up backdrop-blur-sm">
          <span className="w-2 h-2 bg-neon-red rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-300">25 de julio 2026 · Estadio La Cartuja, Sevilla</span>
        </div>

        {/* Title */}
        <h1 className="animate-slide-up stagger-1">
          <span className="block text-6xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none drop-shadow-2xl">
            LA VELADA
          </span>
          <span className="block text-7xl sm:text-9xl lg:text-[10rem] font-black tracking-tighter text-neon-red neon-text-red leading-none mt-2">
            VI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto animate-slide-up stagger-2 drop-shadow-lg">
          El evento más grande del streaming en español. 10 combates épicos, conciertos en vivo y 80.000 personas en La Cartuja.
        </p>

        {/* Countdown */}
        <div className="mt-12 animate-slide-up stagger-3">
          <p className="text-sm uppercase tracking-[0.3em] text-neon-gold neon-text-gold font-semibold mb-6 animate-pulse-neon">
            Comienza en
          </p>
          <Countdown />
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-4">
          <a
            href="#combates"
            className="group relative bg-neon-red hover:bg-red-600 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-sm transition-all hover:shadow-xl hover:shadow-neon-red/30 hover:scale-105"
          >
            Ver los 10 combates
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#conciertos"
            className="bg-dark-card/80 backdrop-blur-sm hover:bg-dark-border border border-dark-border text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-sm transition-all hover:scale-105"
          >
            Conciertos
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
          <svg className="w-5 h-5 text-gray-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
