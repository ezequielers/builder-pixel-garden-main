import { Link } from "react-router-dom";

export default function Benefits() {
  const benefits = [
    {
      icon: (
        <img
          src="/images/IconHome.svg"
          alt="Home"
          className="flex-shrink-0 w-12 h-12"
        />
      ),
      title: "Seguro de Propriedade",
      description:
        "Imóveis segurados, com cobertura de responsabilidade civil para uma vida melhor.",
    },
    {
      icon: (
        <img
          src="/images/IconCash.svg"
          alt="Cash"
          className="flex-shrink-0 w-12 h-12"
        />
      ),
      title: "Melhor Preço",
      description:
        "Não se preocupe com preço. Cadastre seu imóvel e deixe que nós fazemos as contas por você.",
    },
    {
      icon: (
        <img
          src="/images/IconArrow.svg"
          alt="Arrow"
          className="flex-shrink-0 w-12 h-12"
        />
      ),
      title: "Comissão Mais Baixa",
      description:
        "Você não precisa mais negociar comissões; aqui custa apenas 2%.",
    },
    {
      icon: (
        <img
          src="/images/IconLocalization.svg"
          alt="Localization"
          className="flex-shrink-0 w-12 h-12"
        />
      ),
      title: "Controle Total",
      description:
        "Faça um tour virtual e agende visitas antes de alugar ou comprar. Você tem controle total.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 shadow-[0px_4px_200px_0px_rgba(232,249,247,0.20)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 lg:max-w-[450px] flex">
            <div className="bg-gradient-to-br from-[#F7F7FD] to-[#E8E6F9] rounded-2xl overflow-hidden flex flex-col h-full">
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                <div className="space-y-4">
                  <h2
                    className="font-bold font-telegraf leading-tight"
                    style={{
                      color: "#0D0A3E",
                      fontSize: "32px",
                      lineHeight: "40px",
                    }}
                  >
                    A Nova Maneira de Encontrar Seu Novo Lar
                  </h2>
                  <p className="text-gray-600 font-montserrat font-light text-sm md:text-base leading-relaxed">
                    Encontre o lugar dos seus sonhos para morar entre mais de 10
                    mil imóveis listados.
                  </p>
                  <Link
                    to="/imoveis"
                    className="inline-block bg-homeflip-purple text-white px-5 py-2 rounded-lg font-medium font-telegraf text-sm transition-all duration-300 hover:bg-[#4A0D5F] hover:shadow-lg hover:scale-105"
                  >
                    Pesquisar Imóveis
                  </Link>
                </div>
              </div>
              <div className="p-0 flex justify-end">
                <img src="/images/Illustration.svg" alt="Illustration" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 content-start">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 filter contrast-150 brightness-125 saturate-150">
                  {benefit.icon}
                </div>
                <h3
                  className="font-semibold font-telegraf mb-2 transition-colors duration-300 group-hover:text-homeflip-purple"
                  style={{ fontSize: "20px", color: "#000929" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-montserrat font-light text-xs md:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
