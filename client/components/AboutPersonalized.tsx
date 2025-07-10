export default function AboutPersonalized() {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32
                       px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="flex flex-col lg:flex-row items-center
                        gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24"
        >
          {/* Text Content */}
          <div
            className="flex-1 space-y-6 md:space-y-8 lg:space-y-10
                          text-center lg:text-left"
          >
            <header>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl
                           font-bold text-gray-900 font-gantari
                           leading-tight tracking-tight
                           max-w-2xl lg:max-w-none mx-auto lg:mx-0"
              >
                Imóveis personalizados para você
              </h2>
            </header>

            <div className="prose prose-lg max-w-none">
              <p
                className="text-base sm:text-lg md:text-xl lg:text-lg
                          text-gray-700 font-inter leading-relaxed
                          max-w-2xl mx-auto lg:mx-0"
              >
                Oferecemos um serviço personalizado para encontrar o imóvel
                ideal que atenda perfeitamente às suas necessidades e estilo de
                vida. Nossa equipe especializada trabalha com você para
                identificar as melhores oportunidades do mercado.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 md:pt-4">
              <a
                href="/imoveis"
                className="inline-flex items-center justify-center
                         bg-blue-600 hover:bg-blue-700
                         text-white font-gantari font-semibold
                         text-base md:text-lg px-6 py-3 md:px-8 md:py-4
                         rounded-xl transition-all duration-300 ease-out
                         hover:scale-105 hover:shadow-xl
                         focus:outline-none focus:ring-4 focus:ring-blue-300/50
                         group"
                aria-label="Ver mais imóveis personalizados"
              >
                Ver mais
                <svg
                  className="ml-2 w-4 h-4 md:w-5 md:h-5
                           transition-transform duration-300
                           group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 xl:w-[45%] lg:flex-shrink-0">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/288747a7cc50ff19007958969287afc391f9d7ab?width=832"
                alt="Casa moderna com grandes janelas de vidro e arquitetura contemporânea em ambiente natural"
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px]
                         object-cover transition-transform duration-700 ease-out
                         group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
