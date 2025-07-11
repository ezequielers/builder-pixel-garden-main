import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Home,
  User,
  DollarSign,
  FileText,
  Clock,
  CheckCircle,
} from "lucide-react";

interface PropostaForm {
  nomeCompleto: string;
  email: string;
  telefone: string;
  cpf: string;
  profissao: string;
  rendaMensal: string;
  valorProposta: string;
  tipoProposta: string;
  formaPagamento: string;
  dataDesejada: string;
  observacoes: string;
  tempoContrato: string;
}

export default function Proposta() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const imovelId = searchParams.get("imovel");

  const [form, setForm] = useState<PropostaForm>({
    nomeCompleto: "",
    email: "",
    telefone: "",
    cpf: "",
    profissao: "",
    rendaMensal: "",
    valorProposta: "",
    tipoProposta: "",
    formaPagamento: "",
    dataDesejada: "",
    observacoes: "",
    tempoContrato: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const handleInputChange = (field: keyof PropostaForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envio da proposta
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Redirect para página de sucesso ou dashboard
      navigate("/dashboard/inquilino?proposta=enviada");
    } catch (error) {
      console.error("Erro ao enviar proposta:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return form.nomeCompleto && form.email && form.telefone && form.cpf;
      case 2:
        return form.profissao && form.rendaMensal;
      case 3:
        return form.valorProposta && form.tipoProposta && form.formaPagamento;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header da página */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fazer Proposta
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Preencha os dados abaixo para enviar sua proposta. Analisaremos
              todas as informações e entraremos em contato em breve.
            </p>
            {imovelId && (
              <Badge variant="secondary" className="mt-3">
                <Home className="w-4 h-4 mr-1" />
                Imóvel ID: {imovelId}
              </Badge>
            )}
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`
                    flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all
                    ${
                      step >= stepNumber
                        ? "bg-homeflip-purple border-homeflip-purple text-white"
                        : "border-gray-300 text-gray-500"
                    }
                  `}
                  >
                    {step > stepNumber ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-semibold">
                        {stepNumber}
                      </span>
                    )}
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`
                      w-16 h-0.5 mx-2 transition-all
                      ${step > stepNumber ? "bg-homeflip-purple" : "bg-gray-300"}
                    `}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <div className="text-sm text-gray-600">
                {step === 1 && "Dados Pessoais"}
                {step === 2 && "Dados Profissionais"}
                {step === 3 && "Dados da Proposta"}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {step === 1 && (
                    <>
                      <User className="w-5 h-5" /> Dados Pessoais
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <FileText className="w-5 h-5" /> Dados Profissionais
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <DollarSign className="w-5 h-5" /> Dados da Proposta
                    </>
                  )}
                </CardTitle>
                <CardDescription>
                  {step === 1 &&
                    "Informe seus dados pessoais para identificação"}
                  {step === 2 && "Informe seus dados profissionais e de renda"}
                  {step === 3 && "Detalhe sua proposta para o imóvel"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Dados Pessoais */}
                {step === 1 && (
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
                      <Label htmlFor="cpf">CPF *</Label>
                      <Input
                        id="cpf"
                        type="text"
                        value={form.cpf}
                        onChange={(e) =>
                          handleInputChange("cpf", e.target.value)
                        }
                        placeholder="000.000.000-00"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Dados Profissionais */}
                {step === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="profissao">Profissão *</Label>
                      <Input
                        id="profissao"
                        type="text"
                        value={form.profissao}
                        onChange={(e) =>
                          handleInputChange("profissao", e.target.value)
                        }
                        placeholder="Sua profissão"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rendaMensal">Renda Mensal *</Label>
                      <Input
                        id="rendaMensal"
                        type="text"
                        value={form.rendaMensal}
                        onChange={(e) =>
                          handleInputChange("rendaMensal", e.target.value)
                        }
                        placeholder="R$ 5.000,00"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Dados da Proposta */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="valorProposta">
                          Valor da Proposta *
                        </Label>
                        <Input
                          id="valorProposta"
                          type="text"
                          value={form.valorProposta}
                          onChange={(e) =>
                            handleInputChange("valorProposta", e.target.value)
                          }
                          placeholder="R$ 1.500,00"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tipoProposta">Tipo de Proposta *</Label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("tipoProposta", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="aluguel">Aluguel</SelectItem>
                            <SelectItem value="compra">Compra</SelectItem>
                            <SelectItem value="compra-financiada">
                              Compra Financiada
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="formaPagamento">
                          Forma de Pagamento *
                        </Label>
                        <Select
                          onValueChange={(value) =>
                            handleInputChange("formaPagamento", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a forma" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mensal">Mensal</SelectItem>
                            <SelectItem value="trimestral">
                              Trimestral
                            </SelectItem>
                            <SelectItem value="semestral">Semestral</SelectItem>
                            <SelectItem value="anual">Anual</SelectItem>
                            <SelectItem value="avista">À Vista</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dataDesejada">Data Desejada</Label>
                        <Input
                          id="dataDesejada"
                          type="date"
                          value={form.dataDesejada}
                          onChange={(e) =>
                            handleInputChange("dataDesejada", e.target.value)
                          }
                        />
                      </div>

                      {form.tipoProposta === "aluguel" && (
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="tempoContrato">
                            Tempo de Contrato
                          </Label>
                          <Select
                            onValueChange={(value) =>
                              handleInputChange("tempoContrato", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tempo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="12-meses">12 meses</SelectItem>
                              <SelectItem value="24-meses">24 meses</SelectItem>
                              <SelectItem value="36-meses">36 meses</SelectItem>
                              <SelectItem value="indefinido">
                                Indefinido
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="observacoes">Observações</Label>
                      <Textarea
                        id="observacoes"
                        value={form.observacoes}
                        onChange={(e) =>
                          handleInputChange("observacoes", e.target.value)
                        }
                        placeholder="Adicione observações sobre sua proposta..."
                        rows={4}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <div>
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Voltar
                  </Button>
                )}
              </div>

              <div className="flex gap-3">
                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="bg-homeflip-purple hover:bg-homeflip-purple/90"
                  >
                    Próximo
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isStepValid()}
                    className="bg-homeflip-purple hover:bg-homeflip-purple/90"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      "Enviar Proposta"
                    )}
                  </Button>
                )}
              </div>
            </div>
          </form>

          {/* Informações adicionais */}
          <Card className="mt-8 bg-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Documentos Necessários
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Após o envio da proposta, você precisará apresentar:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Comprovante de renda dos últimos 3 meses</li>
                    <li>• Cópia do RG e CPF</li>
                    <li>• Comprovante de residência</li>
                    <li>• Referências pessoais e comerciais</li>
                  </ul>
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
