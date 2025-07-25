export default function TenantsLandlords() {
  const features = [
    {
      id: 1,
      icon: (
        <div className="relative w-16 h-16">
          <div className="w-16 h-16 bg-homeflip-navy rounded-full absolute inset-0" />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 m-auto"
          >
            <path
              d="M12.0001 29.3333H20.0001C26.6667 29.3333 29.3334 26.6666 29.3334 20V12C29.3334 5.33329 26.6667 2.66663 20.0001 2.66663H12.0001C5.33341 2.66663 2.66675 5.33329 2.66675 12V20C2.66675 26.6666 5.33341 29.3333 12.0001 29.3333Z"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.1333 15.9999V14.0265C12.1333 11.4799 13.9333 10.4532 16.1333 11.7199L17.84 12.7065L19.5466 13.6932C21.7466 14.9599 21.7466 17.0399 19.5466 18.3065L17.84 19.2932L16.1333 20.2799C13.9333 21.5465 12.1333 20.5065 12.1333 17.9732V15.9999Z"
              stroke="white"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
      title: "Visita virtual à casa",
      description:
        "Você pode se comunicar diretamente com os proprietários e nós lhe forneceremos um tour virtual antes de comprar ou alugar o imóvel.",
      bgColor: "bg-white",
      textColor: "text-gray-900",
    },
    {
      id: 2,
      icon: (
        <div className="relative w-16 h-16">
          <div className="w-16 h-16 bg-homeflip-navy rounded-full absolute inset-0" />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 m-auto"
          >
            <path
              d="M8 16L14 22L24 10"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
      title: "Encontre o melhor negócio",
      description:
        "Navegue por milhares de imóveis, salve seus favoritos e configure alertas de pesquisa para não perder a melhor oferta de imóvel!",
      bgColor: "bg-white bg-opacity-20",
      textColor: "text-white",
    },
    {
      id: 3,
      icon: (
        <div className="relative w-16 h-16">
          <div className="w-16 h-16 bg-white border-2 border-[#E0DEF7] rounded-full absolute inset-0" />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 m-auto"
          >
            <path
              d="M28 9.33329V22.6666C28 26.6666 26 29.3333 21.3333 29.3333H10.6667C6 29.3333 4 26.6666 4 22.6666V9.33329C4 5.33329 6 2.66663 10.6667 2.66663H21.3333C26 2.66663 28 5.33329 28 9.33329Z"
              stroke="#000000"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.3333 6V8.66667C19.3333 10.1333 20.5333 11.3333 21.9999 11.3333H24.6666"
              stroke="#000000"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6667 17.3334H16.0001"
              stroke="#000000"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6667 22.6666H21.3334"
              stroke="#000000"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
      title: "Prepare-se para se inscrever",
      description:
        "Encontrou a casa dos seus sonhos? Você só precisa de um pouco de esforço e pode começar a se mudar para a sua nova casa dos sonhos!",
      bgColor: "bg-[#4A3FBF]",
      textColor: "text-white",
    },
  ];

  const stats = [
    {
      number: "1.4%",
      label: "Taxa de devolução",
    },
    {
      number: "3,856",
      label: "Imóveis para venda e aluguel",
    },
    {
      number: "2,540",
      label: "Transações diárias concluídas",
    },
  ];

  return (
    <section className="w-full bg-[#0D0A3E] py-16 md:py-20 lg:py-24 shadow-[0px_4px_200px_0px_rgba(232,249,247,0.20)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Headline */}
        <div className="text-center mb-16 md:mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6 text-center">
              <span>Nós facilitamos para </span>
              <span className="text-[#4A3FBF]">inquilinos</span>
              <span> e </span>
              <span className="text-[#4A3FBF]">proprietários</span>
            </h2>
            <p className="text-white font-light text-sm md:text-base leading-relaxed opacity-70 max-w-2xl mx-auto text-center">
              Seja para vender seu imóvel atual, obter financiamento ou comprar
              um novo, nós tornamos tudo fácil e eficiente. E a melhor parte?
              Você economizará muito tempo e dinheiro com nossos serviços.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`rounded-lg p-4 md:p-6 lg:p-8 h-auto min-h-[200px] md:h-48 relative transition-all duration-300 hover:scale-105 zoom-responsive ${feature.bgColor}`}
            >
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 h-full">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div className="flex flex-col justify-center h-full min-w-0 flex-1">
                  <h3
                    className={`text-lg md:text-xl font-bold leading-tight tracking-tight mb-3 md:mb-4 ${feature.textColor} zoom-responsive`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`font-light text-sm md:text-sm leading-relaxed zoom-responsive ${
                      feature.textColor === "text-white"
                        ? "text-white opacity-70"
                        : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-[#312F4B] mb-20" />

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-white font-telegraf text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-2">
                {stat.number}
              </div>
              <div className="text-white font-montserrat font-light text-sm leading-relaxed opacity-70 max-w-60">
                {stat.label}
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2 w-px h-16 bg-white opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
