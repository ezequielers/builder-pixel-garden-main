import SocialIcons from "./SocialIcons";

export default function Footer() {
  const footerSections = [
    {
      title: "Navegação Principal",
      links: [
        { text: "Buscar Imóveis", href: "/imoveis" },
        { text: "Como Funciona", href: "/como-funciona" },
        { text: "Dashboard Proprietário", href: "/dashboard-proprietario" },
        { text: "Dashboard Inquilino", href: "/dashboard-inquilino" },
        { text: "Análise Inteligente", href: "/analise-inteligente" },
        { text: "Agendar Visita", href: "/agendar-visita" },
      ],
    },
    {
      title: "Serviços",
      links: [
        {
          text: "Cadastrar Imóvel",
          href: "/dashboard-proprietario/cadastro-imovel",
        },
        { text: "Propostas", href: "/proposta" },
        { text: "Proposta Expressa", href: "/proposta-expressa" },
        {
          text: "Gestão Financeira",
          href: "/dashboard-proprietario/financeiro",
        },
        { text: "Visitas Agendadas", href: "/dashboard-proprietario/visitas" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Termos de serviço", href: "#" },
        { text: "Política de privacidade", href: "#" },
        { text: "Confiança e segurança", href: "#" },
      ],
    },
    {
      title: "Sobre",
      links: [
        { text: "Nossa empresa", href: "/sobre" },
        { text: "Contato", href: "/contato" },
        { text: "Parceiros", href: "#" },
        { text: "Carreiras", href: "#" },
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
          {/* Navigation Links - Maiores primeiro */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-8 flex-1">
            {footerSections.map((section, index) => (
              <div
                key={section.title}
                className={`
                  ${index === 0 ? "col-span-2 md:col-span-1" : ""}
                  ${index === 1 ? "col-span-2 md:col-span-1" : ""}
                  ${index >= 2 ? "col-span-1" : ""}
                `}
              >
                <h3
                  className="text-white font-telegraf text-sm sm:text-base lg:text-lg
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

          {/* Contact Info - Menor */}
          <div className="lg:w-1/4 mt-8 md:mt-0">
            <div className="mb-6 md:mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60e6bae0822dc21884ab2d8baa890b681dd5b38f?width=295"
                alt="HomeFlip - Sua imobiliária de confiança"
                className="w-32 sm:w-36 md:w-32 lg:w-[140px] h-auto"
                loading="lazy"
              />
            </div>

            <div className="text-white/70 text-sm md:text-base leading-relaxed">
              <p className="font-medium text-white mb-3 text-base md:text-lg">
                Endereço:
              </p>
              <div className="space-y-1.5">
                <p>Avenida João Gualberto 1342</p>
                <p>Sala 505, Andar 05</p>
                <p>Cond Urban Office e Hotel</p>
                <p>Bloco Urban Office</p>
                <p>Alto da Glória</p>
                <p>Curitiba - PR</p>
                <p>CEP: 80030-000</p>
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
