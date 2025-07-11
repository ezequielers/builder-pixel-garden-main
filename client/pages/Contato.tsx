import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Building,
  Users,
  HeadphonesIcon,
} from "lucide-react";

interface ContatoForm {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  tipoContato: string;
}

export default function Contato() {
  const [form, setForm] = useState<ContatoForm>({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
    tipoContato: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof ContatoForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envio
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      form.nome &&
      form.email &&
      form.telefone &&
      form.assunto &&
      form.mensagem &&
      form.tipoContato
    );
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12 px-4">
          <Card className="max-w-md w-full text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Mensagem Enviada!</h2>
              <p className="text-gray-600 mb-6 font-light">
                Obrigado pelo seu contato. Nossa equipe responderá em até 24
                horas.
              </p>
              <Button
                onClick={() => window.location.reload()}
                className="bg-homeflip-purple hover:bg-homeflip-purple/90"
              >
                Enviar Nova Mensagem
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header da página */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Estamos aqui para ajudar você a encontrar o imóvel ideal ou
              esclarecer qualquer dúvida sobre nossos serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações de contato */}
            <div className="lg:col-span-1 space-y-8">
              {/* Telefone */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-homeflip-purple/10 rounded-lg">
                      <Phone className="w-6 h-6 text-homeflip-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Telefone</h3>
                      <p className="text-gray-600 mb-2 font-light">
                        Fale diretamente conosco
                      </p>
                      <a
                        href="tel:+5511999999999"
                        className="text-homeflip-purple hover:text-homeflip-purple/80 font-semibold"
                      >
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-homeflip-purple/10 rounded-lg">
                      <Mail className="w-6 h-6 text-homeflip-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">E-mail</h3>
                      <p className="text-gray-600 mb-2 font-light">
                        Envie sua mensagem
                      </p>
                      <a
                        href="mailto:contato@homeflip.com.br"
                        className="text-homeflip-purple hover:text-homeflip-purple/80 font-semibold"
                      >
                        contato@homeflip.com.br
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Endereço */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-homeflip-purple/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-homeflip-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Escritório</h3>
                      <p className="text-gray-600 mb-2 font-light">
                        Visite nosso escritório
                      </p>
                      <p className="text-gray-800 font-light">
                        Avenida João Gualberto 1342
                        <br />
                        Sala 505 Andar 05
                        <br />
                        Cond Urban Office e Hotel
                        <br />
                        Bloco Urban Office
                        <br />
                        Alto da Glória
                        <br />
                        Curitiba - PR
                        <br />
                        CEP: 80030-000
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Horário */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-homeflip-purple/10 rounded-lg">
                      <Clock className="w-6 h-6 text-homeflip-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        Horário de Atendimento
                      </h3>
                      <div className="space-y-1 text-gray-800 font-light">
                        <p>Segunda à Sexta: 8h às 18h</p>
                        <p>Sábado: 9h às 15h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulário de contato */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                  <p className="text-gray-600 font-light">
                    Preencha o formulário abaixo e entraremos em contato o mais
                    breve possível.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Tipo de contato */}
                    <div className="space-y-2">
                      <Label htmlFor="tipoContato" className="font-medium">
                        Tipo de contato *
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("tipoContato", value)
                        }
                        required
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inquilino">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Sou inquilino
                            </div>
                          </SelectItem>
                          <SelectItem value="proprietario">
                            <div className="flex items-center gap-2">
                              <Building className="w-4 h-4" />
                              Sou proprietário
                            </div>
                          </SelectItem>
                          <SelectItem value="suporte">
                            <div className="flex items-center gap-2">
                              <HeadphonesIcon className="w-4 h-4" />
                              Suporte técnico
                            </div>
                          </SelectItem>
                          <SelectItem value="outros">
                            <div className="flex items-center gap-2">
                              <MessageCircle className="w-4 h-4" />
                              Outros assuntos
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Nome */}
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="font-medium">
                          Nome completo *
                        </Label>
                        <Input
                          id="nome"
                          type="text"
                          value={form.nome}
                          onChange={(e) =>
                            handleInputChange("nome", e.target.value)
                          }
                          placeholder="Seu nome completo"
                          className="h-12"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-medium">
                          E-mail *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="seu@email.com"
                          className="h-12"
                          required
                        />
                      </div>

                      {/* Telefone */}
                      <div className="space-y-2">
                        <Label htmlFor="telefone" className="font-medium">
                          Telefone *
                        </Label>
                        <Input
                          id="telefone"
                          type="tel"
                          value={form.telefone}
                          onChange={(e) =>
                            handleInputChange("telefone", e.target.value)
                          }
                          placeholder="(11) 99999-9999"
                          className="h-12"
                          required
                        />
                      </div>

                      {/* Assunto */}
                      <div className="space-y-2">
                        <Label htmlFor="assunto" className="font-medium">
                          Assunto *
                        </Label>
                        <Input
                          id="assunto"
                          type="text"
                          value={form.assunto}
                          onChange={(e) =>
                            handleInputChange("assunto", e.target.value)
                          }
                          placeholder="Assunto da mensagem"
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    {/* Mensagem */}
                    <div className="space-y-2">
                      <Label htmlFor="mensagem" className="font-medium">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="mensagem"
                        value={form.mensagem}
                        onChange={(e) =>
                          handleInputChange("mensagem", e.target.value)
                        }
                        placeholder="Descreva sua dúvida ou solicitação..."
                        className="min-h-32"
                        required
                      />
                    </div>

                    <Separator />

                    {/* Botão de envio */}
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        disabled={isSubmitting || !isFormValid()}
                        className="bg-homeflip-purple hover:bg-[#4A0D5F] px-8 py-3 h-12 min-w-40 shadow-lg hover:shadow-xl"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Enviando...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Enviar Mensagem
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Canais alternativos */}
              <Card className="mt-6 bg-gradient-to-br from-homeflip-gradient-from to-homeflip-gradient-to border-homeflip-purple/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">
                    Precisa de ajuda imediata?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-homeflip-purple/10 rounded-lg">
                        <MessageCircle className="w-5 h-5 text-homeflip-purple" />
                      </div>
                      <div>
                        <p className="font-semibold">Chat online</p>
                        <p className="text-sm text-gray-600 font-light">
                          Disponível 24/7
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-homeflip-purple/10 rounded-lg">
                        <Phone className="w-5 h-5 text-homeflip-purple" />
                      </div>
                      <div>
                        <p className="font-semibold">Ligação gratuita</p>
                        <p className="text-sm text-gray-600 font-light">
                          0800 123 4567
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-12 flex justify-center">
            <Card className="max-w-2xl w-full">
              <CardContent className="p-0">
                <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold">Localização do Escritório</p>
                    <p className="text-sm font-light mt-2">
                      Avenida João Gualberto 1342
                      <br />
                      Alto da Glória, Curitiba - PR
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
