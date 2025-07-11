import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Search,
  Calendar,
  FileText,
  PenTool,
  Shield,
  Home,
  Users,
  CreditCard,
  Scale,
  ArrowRight,
  Star,
  Instagram,
} from "lucide-react";

export default function ComoFunciona() {
  const handleGetStarted = () => {
    // Scroll para seção de cadastro ou redirecionar
    window.location.href = "/registro";
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-homeflip-gradient-from to-homeflip-gradient-to py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="bg-homeflip-purple text-white mb-6 px-6 py-2 text-lg">
              Como funciona
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Como funciona a{" "}
              <span className="text-homeflip-purple">Homeflip</span>?
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              A Homeflip é uma plataforma 100% digital que conecta inquilinos e
              proprietários de forma simples, segura e sem burocracia.
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Com tecnologia de ponta e inteligência de dados, oferecemos uma
              nova experiência no aluguel de imóveis — mais prática, mais
              acessível e com garantia para todos os lados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                className="bg-homeflip-purple hover:bg-homeflip-purple/90 text-white px-8 py-3 text-lg"
                size="lg"
              >
                Começar agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-homeflip-purple text-homeflip-purple hover:bg-homeflip-purple/10 px-8 py-3 text-lg"
                size="lg"
                onClick={() =>
                  window.open("https://www.instagram.com/homeflipbr/", "_blank")
                }
              >
                <Instagram className="w-5 h-5 mr-2" />
                Seguir no Instagram
              </Button>
            </div>
          </div>
        </section>

        {/* Para quem quer alugar */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-homeflip-green/10 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-homeflip-green" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Para quem quer alugar um imóvel
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Encontre seu lar ideal com segurança e praticidade
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  icon: Search,
                  title: "Encontre imóveis disponíveis",
                  description:
                    "Busque imóveis na sua região com filtros avançados",
                  color: "bg-blue-100 text-blue-600",
                  step: "1",
                },
                {
                  icon: Calendar,
                  title: "Agende visitas online",
                  description: "Marque visitas presenciais ou por vídeo",
                  color: "bg-green-100 text-green-600",
                  step: "2",
                },
                {
                  icon: FileText,
                  title: "Envie propostas facilmente",
                  description: "Faça sua proposta com poucos cliques",
                  color: "bg-purple-100 text-purple-600",
                  step: "3",
                },
                {
                  icon: PenTool,
                  title: "Assine digitalmente",
                  description: "Contrato 100% digital e seguro",
                  color: "bg-orange-100 text-orange-600",
                  step: "4",
                },
                {
                  icon: Shield,
                  title: "Garantia Homeflip",
                  description: "Sem fiador, caução ou seguro-fiança",
                  color: "bg-homeflip-purple/10 text-homeflip-purple",
                  step: "5",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-homeflip-purple/20 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center relative ${item.color}`}
                      >
                        <item.icon className="w-8 h-8" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-homeflip-purple text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {item.step}
                        </div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Destaque da garantia */}
            <Card className="mt-12 bg-gradient-to-r from-homeflip-green/10 to-homeflip-green/5 border-homeflip-green/20">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-homeflip-green" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Garantia Homeflip
                  </h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Tenha segurança com a Garantia Homeflip, sem precisar de
                  fiador, caução ou seguro-fiança
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    "Sem fiador necessário",
                    "Sem caução",
                    "Proteção para inquilinos",
                    "Processo 100% digital",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-homeflip-green" />
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Para quem quer anunciar */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-homeflip-purple/10 rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 text-homeflip-purple" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Para quem quer anunciar um imóvel
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Alugue seu imóvel com segurança e praticidade
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Home,
                  title: "Cadastre em minutos",
                  description: "Cadastre seu imóvel de forma rápida e simples",
                  color: "bg-blue-100 text-blue-600",
                  step: "1",
                },
                {
                  icon: Users,
                  title: "Análise inteligente",
                  description: "Análise de crédito automática dos inquilinos",
                  color: "bg-green-100 text-green-600",
                  step: "2",
                },
                {
                  icon: CreditCard,
                  title: "Receba em dia",
                  description:
                    "Aluguel garantido com antecipação de até 6 meses",
                  color: "bg-purple-100 text-purple-600",
                  step: "3",
                },
                {
                  icon: Scale,
                  title: "Suporte completo",
                  description:
                    "Suporte jurídico e cobertura contra inadimplência",
                  color: "bg-orange-100 text-orange-600",
                  step: "4",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-2 border-gray-100 hover:border-homeflip-purple/20 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center relative ${item.color}`}
                      >
                        <item.icon className="w-8 h-8" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-homeflip-purple text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {item.step}
                        </div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefícios proprietários */}
            <Card className="mt-12 bg-gradient-to-r from-homeflip-purple/10 to-homeflip-purple/5 border-homeflip-purple/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Vantagens para proprietários
                  </h3>
                  <p className="text-lg text-gray-600">
                    Mais tranquilidade e rentabilidade para seu imóvel
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: CreditCard,
                      title: "Receba seu aluguel em dia",
                      description:
                        "Com possibilidade de antecipação de até 6 meses",
                    },
                    {
                      icon: Scale,
                      title: "Suporte jurídico",
                      description:
                        "Acompanhamento legal completo durante todo o processo",
                    },
                    {
                      icon: Shield,
                      title: "Cobertura contra inadimplência",
                      description:
                        "Proteção financeira para você ter mais tranquilidade",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-homeflip-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-homeflip-purple" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Valores e diferencial */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Na Homeflip, tudo é feito com
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: CheckCircle,
                  title: "Transparência",
                  description: "Processo claro e sem surpresas em cada etapa",
                  color: "text-homeflip-green",
                },
                {
                  icon: Shield,
                  title: "Proteção",
                  description: "Segurança jurídica e financeira para todos",
                  color: "text-homeflip-purple",
                },
                {
                  icon: Star,
                  title: "Agilidade",
                  description: "Tecnologia que acelera todo o processo",
                  color: "text-homeflip-violet",
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center`}
                  >
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-homeflip-purple to-homeflip-violet rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Como o aluguel sempre deveria ser
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Seja para morar, alugar ou investir, a Homeflip é a sua nova
                forma de viver o mercado imobiliário.
              </p>
              <Button
                onClick={handleGetStarted}
                className="bg-white text-homeflip-purple hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                size="lg"
              >
                Começar agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Call to action final */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pronto para começar?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Junte-se a milhares de pessoas que já descobriram uma nova forma
              de alugar
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => (window.location.href = "/imoveis")}
                className="bg-homeflip-purple hover:bg-homeflip-purple/90 text-white px-8 py-3 text-lg"
                size="lg"
              >
                <Search className="w-5 h-5 mr-2" />
                Encontrar imóvel
              </Button>
              <Button
                onClick={() =>
                  (window.location.href =
                    "/dashboard-proprietario/cadastro-imovel")
                }
                variant="outline"
                className="border-homeflip-purple text-homeflip-purple hover:bg-homeflip-purple/10 px-8 py-3 text-lg"
                size="lg"
              >
                <Home className="w-5 h-5 mr-2" />
                Anunciar imóvel
              </Button>
            </div>

            <div className="mt-8">
              <Button
                variant="ghost"
                className="text-homeflip-purple hover:text-homeflip-purple/80"
                onClick={() =>
                  window.open("https://www.instagram.com/homeflipbr/", "_blank")
                }
              >
                <Instagram className="w-5 h-5 mr-2" />
                Siga-nos no Instagram @homeflipbr
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
