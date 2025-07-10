export default function AboutTextImage() {
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
          {/* Image */}
          <div className="w-full lg:w-1/2 xl:w-[45%] lg:flex-shrink-0 order-2 lg:order-1">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/12f128851b1c4ed1b04fa000162b9a38380266a2?width=832"
                alt="Casa moderna com arquitetura contemporânea - os melhores imóveis para aluguel"
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

          {/* Text Content */}
          <div
            className="flex-1 space-y-6 md:space-y-8 lg:space-y-10 order-1 lg:order-2
                          text-center lg:text-left"
          >
            <header>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl
                           font-bold text-[#100E2C] font-gantari
                           leading-tight tracking-tight
                           max-w-2xl lg:max-w-none mx-auto lg:mx-0"
              >
                Os melhores imóveis para aluguel de temporada ou anual
              </h2>
            </header>

            <div className="prose prose-lg max-w-none">
              <p
                className="text-base sm:text-lg md:text-xl lg:text-lg
                          text-gray-700 font-inter leading-relaxed
                          max-w-2xl mx-auto lg:mx-0"
              >
                Oferecemos uma seleção cuidadosa dos melhores imóveis para
                aluguel, seja para temporada ou contratos anuais. Nossa equipe
                especializada garante que cada propriedade atenda aos mais altos
                padrões de qualidade e conforto para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
