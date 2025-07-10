export default function AboutBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Container with responsive height */}
      <div className="h-64 sm:h-80 md:h-96 lg:h-[480px] xl:h-[520px] relative">
        {/* Background Image with Optimized Loading */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcca717cdc82d085da8d7d02171471b320d572b4?width=2880"
            alt="Imóvel moderno em destaque com arquitetura contemporânea e iluminação noturna"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Enhanced gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div
          className="relative z-10 h-full flex items-center
                        px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20"
        >
          <div className="max-w-4xl space-y-4 md:space-y-6 lg:space-y-8">
            {/* Main Heading */}
            <header>
              <h2
                className="text-white font-gantari
                           text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                           font-bold leading-tight tracking-tight
                           drop-shadow-2xl
                           max-w-3xl"
              >
                Descubra o seu imóvel em destaque
              </h2>
            </header>

            {/* Subtitle */}
            <div className="max-w-2xl">
              <p
                className="text-white/95 font-inter
                          text-base sm:text-lg md:text-xl lg:text-xl
                          leading-relaxed drop-shadow-lg
                          font-medium"
              >
                Explore nossa seleção exclusiva de propriedades em localizações
                premium, cuidadosamente escolhidas para oferecer o melhor em
                qualidade e valorização.
              </p>
            </div>

            {/* Optional CTA Button */}
            <div className="pt-2 md:pt-4">
              <a
                href="/imoveis"
                className="inline-flex items-center justify-center
                         bg-white/10 backdrop-blur-sm border border-white/20
                         hover:bg-white/20 hover:border-white/30
                         text-white font-gantari font-semibold
                         text-base md:text-lg px-6 py-3 md:px-8 md:py-4
                         rounded-xl transition-all duration-300
                         hover:scale-105 hover:shadow-xl
                         focus:outline-none focus:ring-4 focus:ring-white/30"
                aria-label="Ver todos os imóveis em destaque"
              >
                Ver Imóveis em Destaque
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
