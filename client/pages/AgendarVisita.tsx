import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  User,
  Phone,
  Mail,
  Home,
  CheckCircle,
  ArrowLeft,
  CalendarDays,
} from "lucide-react";

interface VisitaForm {
  nomeCompleto: string;
  email: string;
  telefone: string;
  dataPreferida: string;
  horarioPreferido: string;
  periodo: string;
  observacoes: string;
}

export default function AgendarVisita() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const imovelId = searchParams.get("imovel") || "1";
  const tipoVisita = searchParams.get("tipo") || "presencial";

  const [form, setForm] = useState<VisitaForm>({
    nomeCompleto: "",
    email: "",
    telefone: "",
    dataPreferida: "",
    horarioPreferido: "",
    periodo: "",
    observacoes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: keyof VisitaForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular agendamento da visita
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
    } catch (error) {
      console.error("Erro ao agendar visita:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      form.nomeCompleto && form.email && form.telefone && form.dataPreferida
    );
  };

  const goBack = () => {
    navigate(`/imoveis/${imovelId}`);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Visita agendada com sucesso!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Sua visita {tipoVisita === "video" ? "por vídeo" : "presencial"}{" "}
                foi agendada. Entraremos em contato em breve para confirmar os
                detalhes.
              </p>
            </div>

            <Card className="bg-green-50 border-green-300 shadow-lg">
              <CardContent className="pt-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span>Data: {form.dataPreferida}</span>
                  </div>
                  {form.horarioPreferido && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span>Horário: {form.horarioPreferido}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    {tipoVisita === "video" ? (
                      <Video className="w-4 h-4 text-green-600" />
                    ) : (
                      <MapPin className="w-4 h-4 text-green-600" />
                    )}
                    <span>
                      Tipo:{" "}
                      {tipoVisita === "video"
                        ? "Visita por vídeo"
                        : "Visita presencial"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 flex gap-4 justify-center">
              <Button
                onClick={() => navigate("/dashboard-inquilino")}
                className="bg-homeflip-purple hover:bg-homeflip-purple/90"
              >
                Ver meus agendamentos
              </Button>
              <Button onClick={goBack} variant="outline">
                Voltar ao imóvel
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header da página */}
          <div className="flex items-center gap-4 mb-6">
            <Button
              onClick={goBack}
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              {tipoVisita === "video" ? (
                <Video className="w-8 h-8 text-homeflip-purple" />
              ) : (
                <CalendarDays className="w-8 h-8 text-homeflip-purple" />
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Agendar{" "}
                {tipoVisita === "video"
                  ? "Visita por Vídeo"
                  : "Visita Presencial"}
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-4">
              {tipoVisita === "video"
                ? "Conheça o imóvel através de uma visita guiada por vídeo, no conforto da sua casa."
                : "Agende uma visita presencial para conhecer o imóvel pessoalmente."}
            </p>
            <Badge variant="secondary" className="mt-3">
              <Home className="w-4 h-4 mr-1" />
              Imóvel ID: {imovelId}
            </Badge>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Dados para contato
                </CardTitle>
                <CardDescription>
                  Informe seus dados para que possamos entrar em contato
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nomeCompleto">Nome Completo *</Label>
                    <Input
                      id="nomeCompleto"
                      type="text"
                      value={form.nomeCompleto}
                      onChange={(e) =>
                        handleInputChange("nomeCompleto", e.target.value)
                      }
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      type="tel"
                      value={form.telefone}
                      onChange={(e) =>
                        handleInputChange("telefone", e.target.value)
                      }
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dataPreferida">Data preferida *</Label>
                    <Input
                      id="dataPreferida"
                      type="date"
                      value={form.dataPreferida}
                      onChange={(e) =>
                        handleInputChange("dataPreferida", e.target.value)
                      }
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Preferências de horário
                </CardTitle>
                <CardDescription>
                  Informe suas preferências de data e horário (opcional)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="horarioPreferido">Horário preferido</Label>
                    <Input
                      id="horarioPreferido"
                      type="time"
                      value={form.horarioPreferido}
                      onChange={(e) =>
                        handleInputChange("horarioPreferido", e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="periodo">Período preferido</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("periodo", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o período" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manha">Manhã (8h às 12h)</SelectItem>
                        <SelectItem value="tarde">
                          Tarde (12h às 18h)
                        </SelectItem>
                        <SelectItem value="noite">
                          Noite (18h às 20h)
                        </SelectItem>
                        <SelectItem value="flexivel">Flexível</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="observacoes">Observações</Label>
                  <Textarea
                    id="observacoes"
                    value={form.observacoes}
                    onChange={(e) =>
                      handleInputChange("observacoes", e.target.value)
                    }
                    placeholder="Alguma observação especial ou dúvida sobre o imóvel..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting || !isFormValid()}
                className="bg-homeflip-purple hover:bg-[#4A0D5F] px-8 shadow-lg hover:shadow-xl"
                size="lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin" />
                    Agendando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Confirmar agendamento
                  </div>
                )}
              </Button>
            </div>
          </form>

          {/* Informações importantes */}
          <Card className="mt-8 bg-gray-50 border-gray-300 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-homeflip-purple rounded-lg">
                  {tipoVisita === "video" ? (
                    <Video className="w-5 h-5 text-white" />
                  ) : (
                    <MapPin className="w-5 h-5 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {tipoVisita === "video"
                      ? "Como funciona a visita por vídeo?"
                      : "Informações importantes"}
                  </h3>
                  {tipoVisita === "video" ? (
                    <div className="text-sm text-gray-700 space-y-1 font-medium">
                      <p>• Você receberá um link por WhatsApp ou e-mail</p>
                      <p>
                        • A visita é feita ao vivo com um especialista HomeFlip
                      </p>
                      <p>• Duração média de 15-20 minutos</p>
                      <p>• Você pode fazer perguntas em tempo real</p>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-700 space-y-1 font-medium">
                      <p>
                        • Confirmaremos o agendamento por telefone em até 2
                        horas
                      </p>
                      <p>• Leve um documento de identidade com foto</p>
                      <p>
                        • A visita será acompanhada por um especialista HomeFlip
                      </p>
                      <p>• Duração média de 30 minutos</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
