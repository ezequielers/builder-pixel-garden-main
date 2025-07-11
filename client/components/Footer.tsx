import SocialIcons from "./SocialIcons";

export default function Footer() {
  const footerSections = [
    // {
    //   title: "VENDER UMA CASA",
    //   links: [
    //     { text: "Solicitar uma oferta", href: "/contato" },
    //     { text: "Avaliação gratuita", href: "/contato" },
    //     { text: "Documentação", href: "#" },
    //     { text: "Histórias de sucesso", href: "#" },
    //   ],
    // },
    // {
    //   title: "COMPRAR UMA CASA",
    //   links: [
    //     { text: "Buscar imóveis", href: "/imoveis" },
    //     { text: "Financiamento", href: "#" },
    //     { text: "Simulador", href: "#" },
    //   ],
    // },
    {
      title: "Alugar",
      links: [
        // { text: "Comprar e vender propriedades", href: "/imoveis" },
        { text: "Alugar casa", href: "/imoveis" },
        { text: "Parcerias", href: "/contato" },
      ],
    },
    {
      title: "Termos e privacidade",
      links: [
        { text: "Confiança e segurança", href: "#" },
        { text: "Termos de serviço", href: "#" },
        { text: "Política de privacidade", href: "#" },
      ],
    },
    {
      title: "Sobre",
      links: [
        { text: "Nossa empresa", href: "/sobre" },
        { text: "Como funciona", href: "/como-funciona" },
        { text: "Contato", href: "/contato" },
        { text: "Parceiros", href: "#" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-homeflip-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Main Footer Content */}
        <div
          className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20
                        pt-12 sm:pt-16 md:pt-20 lg:pt-24
                        pb-8 md:pb-12 lg:pb-16"
        >
          {/* Brand Section */}
          <div className="lg:w-1/4 xl:w-1/3">
            <div className="mb-6 md:mb-8 lg:mb-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60e6bae0822dc21884ab2d8baa890b681dd5b38f?width=295"
                alt="HomeFlip - Sua imobiliária de confiança"
                className="w-32 sm:w-36 md:w-40 lg:w-[148px] h-auto"
                loading="lazy"
              />
            </div>
            <div className="max-w-sm lg:max-w-xs xl:max-w-sm">
              <p
                className="text-white/80 text-sm md:text-base
                           leading-relaxed lg:leading-loose mb-4"
              >
                Somos especialistas em conectar pessoas aos seus lares ideais.
                Com anos de experiência no mercado imobiliário, oferecemos
                soluções completas para locação de imóveis.
              </p>

              <div className="text-white/70 text-xs md:text-sm leading-relaxed space-y-1">
                <p className="font-medium">HomeFlip Imóveis</p>
                <p>Avenida João Gualberto 1342</p>
                <p>Sala 505 Andar 05</p>
                <p>Cond Urban Office e Hotel</p>
                <p>Bloco Urban Office</p>
                <p>Alto da Glória</p>
                <p>Curitiba - PR</p>
                <p>CEP: 80030-000</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:w-3/4 xl:w-2/3">
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3
                            gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-12"
            >
              {footerSections.map((section, index) => (
                <div
                  key={section.title}
                  className={`
                  ${index >= 4 ? "hidden md:block" : ""}
                  ${index === 2 ? "col-span-2 md:col-span-1" : ""}
                `}
                >
                  <h3
                    className="text-white font-telegraf text-xs sm:text-sm lg:text-sm
                               font-bold tracking-wide leading-tight
                               mb-4 sm:mb-5 md:mb-6"
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {section.links.map((link) => (
                      <li key={link.text}>
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-white
                                   font-source-code-pro text-sm md:text-base
                                   transition-colors duration-200 ease-out
                                   hover:underline decoration-1 underline-offset-2
                                   focus:outline-none focus:text-white focus:underline
                                   block py-1"
                          aria-label={`Ir para ${link.text}`}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile Additional Links */}
            <div className="md:hidden mt-8 pt-6 border-t border-white/20">
              <div className="grid grid-cols-2 gap-6">
                {footerSections.slice(4).map((section) => (
                  <div key={section.title}>
                    <h3
                      className="text-white font-telegraf text-xs font-bold
                                 tracking-wide leading-tight mb-4"
                    >
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.text}>
                          <a
                            href={link.href}
                            className="text-white/70 hover:text-white
                                     font-source-code-pro text-sm transition-colors duration-200
                                     hover:underline decoration-1 underline-offset-2
                                     block py-1"
                          >
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/20 mb-6 md:mb-8"></div>

        {/* Copyright and Social */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center
                        gap-4 sm:gap-6 pb-8 md:pb-12 lg:pb-16"
        >
          <div className="text-center sm:text-left">
            <p
              className="text-white/60 font-source-code-pro text-sm md:text-base
                        leading-relaxed"
            >
              ©{new Date().getFullYear()} HomeFlip. Todos os direitos
              reservados
            </p>
          </div>

          <div className="flex items-center">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
