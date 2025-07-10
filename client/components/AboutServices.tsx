export default function AboutServices() {
  const services = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
          aria-hidden="true"
        >
          <path d="M3 21H21V7L12 3L3 7V21Z" fill="white" fillOpacity="0.9" />
          <path d="M9 21V12H15V21" fill="white" fillOpacity="0.7" />
        </svg>
      ),
      title: "Alugue um imóvel",
      description:
        "Encontre o imóvel ideal para aluguel com nossa ampla seleção de propriedades verificadas e de qualidade.",
      buttonText: "Encontre um Imóvel",
      href: "/imoveis",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
          aria-hidden="true"
        >
          <path d="M12 2L2 7V21H22V7L12 2Z" fill="white" fillOpacity="0.9" />
          <path d="M8 10H16V14H8V10Z" fill="white" fillOpacity="0.7" />
          <path d="M10 16H14V18H10V16Z" fill="white" fillOpacity="0.7" />
        </svg>
      ),
      title: "Venda um imóvel",
      description:
        "Venda seu imóvel com segurança e agilidade através da nossa plataforma especializada em vendas.",
      buttonText: "Cadastre seu Imóvel",
      href: "/contato",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
          aria-hidden="true"
        >
          <path
            d="M21 10C21 16.075 12 22 12 22S3 16.075 3 10C3 6.686 6.686 3 12 3S21 6.686 21 10Z"
            fill="white"
            fillOpacity="0.9"
          />
          <circle cx="12" cy="10" r="3" fill="white" fillOpacity="0.7" />
        </svg>
      ),
      title: "Compre um imóvel",
      description:
        "Realize o sonho da casa própria com nosso portfólio completo de imóveis para compra.",
      buttonText: "Encontre um Imóvel",
      href: "/imoveis",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32
                       px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20
                       bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4 md:space-y-6">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl
                       font-bold text-[#100E2C] font-gantari
                       leading-tight tracking-tight
                       max-w-4xl mx-auto"
          >
            O sucesso dos nossos clientes é o nosso sucesso
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-lg
                      text-gray-600 font-inter leading-relaxed
                      max-w-2xl mx-auto"
          >
            Comprometemo-nos em oferecer serviços de excelência para garantir
            que cada cliente alcance seus objetivos imobiliários.
          </p>
        </header>

        {/* Service Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                        gap-6 md:gap-8 lg:gap-6 xl:gap-8"
        >
          {services.map((service, index) => (
            <article
              key={index}
              className="group bg-[#100E2C] hover:bg-[#1a1340]
                         rounded-2xl p-6 sm:p-8 lg:p-10
                         flex flex-col items-center text-center
                         h-auto min-h-[400px] lg:min-h-[450px]
                         shadow-xl hover:shadow-2xl
                         transition-all duration-300 ease-out
                         hover:-translate-y-2 border border-gray-800/20"
            >
              {/* Icon Container */}
              <div
                className="mb-6 lg:mb-8 p-4 rounded-full bg-white/10
                            group-hover:bg-white/20 transition-colors duration-300
                            group-hover:scale-110 transform transition-transform"
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4 lg:space-y-6">
                  <h3
                    className="text-white font-gantari
                               text-xl sm:text-2xl lg:text-2xl xl:text-xl
                               font-bold leading-tight"
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-white/90 font-inter
                              text-base sm:text-lg lg:text-base
                              leading-relaxed max-w-sm mx-auto"
                  >
                    {service.description}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href={service.href}
                  className="inline-flex items-center justify-center
                           bg-blue-600 hover:bg-blue-700
                           text-white font-gantari
                           text-base sm:text-lg lg:text-base font-medium
                           px-6 py-3 lg:px-8 lg:py-4
                           rounded-xl transition-all duration-300
                           hover:scale-105 hover:shadow-lg
                           focus:outline-none focus:ring-4 focus:ring-blue-300/50
                           w-full max-w-[250px] mx-auto"
                  aria-label={`${service.buttonText} - ${service.title}`}
                >
                  {service.buttonText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
