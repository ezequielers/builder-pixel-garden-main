import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Home,
  DollarSign,
  Calendar,
  Briefcase,
  TrendingUp,
  Shield,
  CheckCircle,
  Clock,
  ArrowRight,
  AlertCircle,
} from "lucide-react";

interface PropostaForm {
  valorOfertado: string;
  dataEntrada: string;
  rendaMensal: string;
  tipoOcupacao: string;
  isNegativado: boolean;
}

export default function PropostaExpressa() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const imovelId = searchParams.get("imovel") || "1";

  const [form, setForm] = useState<PropostaForm>({
    valorOfertado: "",
    dataEntrada: "",
    rendaMensal: "",
    tipoOcupacao: "",
    isNegativado: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock property data
  const mockProperty = {
    id: imovelId,
    title: "Apartamento moderno no centro",
    address: "Rua Augusta, 1200 - Consolação",
    price: "R$ 2.800",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
  };

  const handleInputChange = (
    field: keyof PropostaForm,
    value: string | boolean,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envio da proposta
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Navegar para análise inteligente
      navigate(`/analise-inteligente?proposta=${Date.now()}`);
    } catch (error) {
      console.error("Erro ao enviar proposta:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      form.valorOfertado &&
      form.dataEntrada &&
      form.rendaMensal &&
      form.tipoOcupacao
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header da página */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-homeflip-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Proposta Expressa
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Preenchimento rápido e análise inteligente. Sua proposta será
              avaliada em até 30 minutos úteis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações do imóvel */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Imóvel Selecionado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <img
                      src={mockProperty.image}
                      alt={mockProperty.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {mockProperty.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {mockProperty.address}
                      </p>
                      <Badge variant="secondary">
                        Aluguel: {mockProperty.price}/mês
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Dados da Proposta
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Valor ofertado */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="valorOfertado"
                        className="text-base font-semibold"
                      >
                        Valor ofertado *
                      </Label>
                      <Input
                        id="valorOfertado"
                        type="text"
                        value={form.valorOfertado}
                        onChange={(e) =>
                          handleInputChange("valorOfertado", e.target.value)
                        }
                        placeholder="R$ 2.800,00"
                        className="text-lg h-12"
                        required
                      />
                      <p className="text-sm text-gray-500">
                        Digite o valor que deseja propor para o aluguel
                      </p>
                    </div>

                    {/* Data de entrada */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="dataEntrada"
                        className="text-base font-semibold"
                      >
                        Data de entrada desejada *
                      </Label>
                      <Input
                        id="dataEntrada"
                        type="date"
                        value={form.dataEntrada}
                        onChange={(e) =>
                          handleInputChange("dataEntrada", e.target.value)
                        }
                        className="text-lg h-12"
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Dados Profissionais
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Renda mensal */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="rendaMensal"
                        className="text-base font-semibold"
                      >
                        Renda mensal *
                      </Label>
                      <Input
                        id="rendaMensal"
                        type="text"
                        value={form.rendaMensal}
                        onChange={(e) =>
                          handleInputChange("rendaMensal", e.target.value)
                        }
                        placeholder="R$ 8.000,00"
                        className="text-lg h-12"
                        required
                      />
                      <p className="text-sm text-gray-500">
                        Informe sua renda mensal bruta
                      </p>
                    </div>

                    {/* Tipo de ocupação */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="tipoOcupacao"
                        className="text-base font-semibold"
                      >
                        Tipo de ocupação *
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("tipoOcupacao", value)
                        }
                        required
                      >
                        <SelectTrigger className="text-lg h-12">
                          <SelectValue placeholder="Selecione sua ocupação" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clt">CLT</SelectItem>
                          <SelectItem value="autonomo">Autônomo</SelectItem>
                          <SelectItem value="empresario">Empresário</SelectItem>
                          <SelectItem value="funcionario-publico">
                            Funcionário Público
                          </SelectItem>
                          <SelectItem value="aposentado">Aposentado</SelectItem>
                          <SelectItem value="estudante">Estudante</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Negativado */}
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Checkbox
                        id="isNegativado"
                        checked={form.isNegativado}
                        onCheckedChange={(checked) =>
                          handleInputChange("isNegativado", checked as boolean)
                        }
                      />
                      <div className="space-y-1">
                        <Label
                          htmlFor="isNegativado"
                          className="text-sm font-medium cursor-pointer"
                        >
                          Estou negativado(a) no SPC/Serasa
                        </Label>
                        <p className="text-xs text-gray-500">
                          Opcional. Esta informação nos ajuda a personalizar a
                          análise.
                        </p>
                      </div>
                    </div>

                    {form.isNegativado && (
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-blue-900 mb-1">
                              Sem problemas!
                            </p>
                            <p className="text-sm text-blue-700">
                              A HomeFlip oferece garantias flexíveis como seguro
                              locatício e outras opções para situações como
                              essa.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Garantia HomeFlip */}
                <Card className="bg-gradient-to-br from-homeflip-gradient-from to-homeflip-gradient-to border-homeflip-purple/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-homeflip-purple/10 rounded-xl">
                        <Shield className="w-6 h-6 text-homeflip-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">
                          Garantia HomeFlip
                        </h3>
                        <p className="text-sm text-gray-600">
                          Aprovação inteligente e proteção para todos
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-homeflip-purple" />
                        <span className="text-sm font-medium">Sem fiador</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-homeflip-purple" />
                        <span className="text-sm font-medium">Sem caução</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-homeflip-purple" />
                        <span className="text-sm font-medium">
                          Proteção total
                        </span>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <p className="text-sm text-gray-700 leading-relaxed">
                      Nossa tecnologia analisa seu perfil de forma inteligente e
                      oferece soluções personalizadas. Mesmo com restrições,
                      temos alternativas como seguro locatício e garantias
                      flexíveis.
                    </p>
                  </CardContent>
                </Card>

                {/* Botão de envio */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isFormValid()}
                    className="bg-homeflip-purple hover:bg-homeflip-purple/90 text-white px-8 py-3 text-lg h-14 min-w-64"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 animate-spin" />
                        Enviando proposta...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5" />
                        Continuar para análise gratuita
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Informações adicionais */}
          <Card className="mt-8 bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-2">
                    Análise em até 30 minutos úteis
                  </h3>
                  <p className="text-sm text-green-700 mb-3">
                    Nossa inteligência artificial analisa sua proposta
                    rapidamente e oferece o melhor caminho para aprovação.
                  </p>
                  <div className="space-y-1 text-sm text-green-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Análise automatizada do perfil</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Sugestões personalizadas de garantia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Resposta rápida do proprietário</span>
                    </div>
                  </div>
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
