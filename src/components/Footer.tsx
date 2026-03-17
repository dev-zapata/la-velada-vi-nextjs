export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-black">
              <span className="text-neon-red">LA VELADA</span>
              <span className="text-neon-gold ml-2">VI</span>
            </span>
            <p className="text-sm text-gray-500 mt-1">25 de julio 2026 · Estadio La Cartuja, Sevilla</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Desarrollado por</p>
            <div className="flex items-center gap-4">
              {/* Twitter/X */}
              <a
                href="https://x.com/dev_zapata"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-dark-border/50 hover:bg-neon-blue/10 border border-transparent hover:border-neon-blue/30 rounded-full px-4 py-2 transition-all"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-neon-blue transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">@dev_zapata</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/afzapatab"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-dark-border/50 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30 rounded-full px-4 py-2 transition-all"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-border text-center">
          <p className="text-xs text-gray-600">
            Proyecto de demostración — Portfolio de desarrollo web por <a href="https://x.com/dev_zapata" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-blue transition-colors">@dev_zapata</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
