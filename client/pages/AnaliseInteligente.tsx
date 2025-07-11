import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Upload,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  XCircle,
  Brain,
  TrendingUp,
  Shield,
  CreditCard,
  ArrowRight,
  Smartphone,
  Building,
  Users,
  Zap,
} from "lucide-react";

type AnalysisStatus =
  | "uploading"
  | "analyzing"
  | "approved"
  | "rejected"
  | "flexible";

export default function AnaliseInteligente() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const propostaId = searchParams.get("proposta");

  const [status, setStatus] = useState<AnalysisStatus>("uploading");
  const [progress, setProgress] = useState(0);
  const [showDocumentUpload, setShowDocumentUpload] = useState(true);

  // Simular processo de análise
  useEffect(() => {
    if (status === "uploading") {
      const timer = setTimeout(() => {
        setStatus("analyzing");
        setProgress(0);
      }, 3000);
      return () => clearTimeout(timer);
    }

    if (status === "analyzing") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // Simular diferentes resultados (85% aprovado, 10% flexível, 5% rejeitado)
            const random = Math.random();
            if (random > 0.15) {
              setStatus("approved");
            } else if (random > 0.05) {
              setStatus("flexible");
            } else {
              setStatus("rejected");
            }
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [status]);

  const handleConnectBank = () => {
    setShowDocumentUpload(false);
    setStatus("analyzing");
  };

  const handleUploadDocuments = () => {
    setShowDocumentUpload(false);
    setStatus("analyzing");
  };

  const handleContinue = () => {
    if (status === "approved") {
      navigate(`/assinatura-digital?proposta=${propostaId}`);
    } else if (status === "flexible") {
      navigate(`/assinatura-digital?proposta=${propostaId}&garantia=flexivel`);
    } else {
      // Rejected - voltar para proposta com sugestões
      navigate(`/proposta-expressa?imovel=1&retry=true`);
    }
  };

  const getStatusConfig = () => {
    switch (status) {
      case "uploading":
        return {
          icon: Upload,
          title: "Envio de Documentos",
          subtitle: "Escolha como enviar seus documentos",
          color: "blue",
        };
      case "analyzing":
        return {
          icon: Brain,
          title: "Análise em Andamento",
          subtitle: "Nossa IA está analisando seu perfil",
          color: "purple",
        };
      case "approved":
        return {
          icon: CheckCircle,
          title: "Proposta Aprovada!",
          subtitle: "Parabéns! Você foi aprovado",
          color: "green",
        };
      case "flexible":
        return {
          icon: Shield,
          title: "Aprovado com Garantia Flexível",
          subtitle: "Temos uma solução personalizada para você",
          color: "orange",
        };
      case "rejected":
        return {
          icon: XCircle,
          title: "Análise Requer Ajustes",
          subtitle: "Vamos ajudar você a melhorar sua proposta",
          color: "red",
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header da página */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-homeflip-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Análise Inteligente
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resultado em até 30 minutos úteis com nossa tecnologia avançada
            </p>
          </div>

          {/* Status atual */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    config.color === "green"
                      ? "bg-green-100"
                      : config.color === "orange"
                        ? "bg-orange-100"
                        : config.color === "red"
                          ? "bg-red-100"
                          : config.color === "purple"
                            ? "bg-purple-100"
                            : "bg-blue-100"
                  }`}
                >
                  <config.icon
                    className={`w-8 h-8 ${
                      config.color === "green"
                        ? "text-green-600"
                        : config.color === "orange"
                          ? "text-orange-600"
                          : config.color === "red"
                            ? "text-red-600"
                            : config.color === "purple"
                              ? "text-purple-600"
                              : "text-blue-600"
                    } ${status === "analyzing" ? "animate-pulse" : ""}`}
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {config.title}
                </h2>
                <p className="text-gray-600 mb-6">{config.subtitle}</p>

                {status === "analyzing" && (
                  <div className="space-y-4">
                    <Progress value={progress} className="h-2" />
                    <p className="text-sm text-gray-500">
                      Analisando: {progress}% concluído
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Upload de documentos */}
          {status === "uploading" && showDocumentUpload && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Conexão automática */}
              <Card className="border-homeflip-purple/20 hover:border-homeflip-purple/40 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-homeflip-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-6 h-6 text-homeflip-purple" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Conexão Automática
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Conecte com seu banco ou conta digital para análise
                      instantânea
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3" />
                        <span>Seguro e criptografado</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <Zap className="w-3 h-3" />
                        <span>Análise em 2 minutos</span>
                      </div>
                    </div>
                    <Button
                      onClick={handleConnectBank}
                      className="w-full bg-homeflip-purple hover:bg-homeflip-purple/90"
                    >
                      Conectar Conta
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Upload manual */}
              <Card className="border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-6 h-6 text-gray-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Upload Manual
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Envie fotos ou PDFs dos seus documentos
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <FileText className="w-3 h-3" />
                        <span>Comprovantes de renda</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>Análise em 15 minutos</span>
                      </div>
                    </div>
                    <Button
                      onClick={handleUploadDocuments}
                      variant="outline"
                      className="w-full"
                    >
                      Enviar Documentos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Resultado da análise */}
          {(status === "approved" ||
            status === "flexible" ||
            status === "rejected") && (
            <div className="space-y-6">
              {/* Resultado principal */}
              <Card
                className={`border-2 ${
                  status === "approved"
                    ? "border-green-200 bg-green-50"
                    : status === "flexible"
                      ? "border-orange-200 bg-orange-50"
                      : "border-red-200 bg-red-50"
                }`}
              >
                <CardContent className="p-8">
                  {status === "approved" && (
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-green-900 mb-4">
                        🎉 Proposta Aprovada!
                      </h3>
                      <p className="text-green-700 mb-6">
                        Seu perfil atende todos os critérios. Você pode seguir
                        direto para a assinatura do contrato.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                          <div className="text-sm font-medium">Score Alto</div>
                        </div>
                        <div className="text-center">
                          <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                          <div className="text-sm font-medium">
                            Renda Compatível
                          </div>
                        </div>
                        <div className="text-center">
                          <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                          <div className="text-sm font-medium">
                            Sem Restrições
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {status === "flexible" && (
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-orange-900 mb-4">
                        ✨ Aprovado com Garantia Flexível
                      </h3>
                      <p className="text-orange-700 mb-6">
                        Identificamos algumas particularidades em seu perfil.
                        Temos soluções personalizadas que garantem sua
                        aprovação.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 border">
                          <CreditCard className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                          <div className="text-sm font-medium mb-1">
                            Seguro Locatício
                          </div>
                          <div className="text-xs text-gray-600">
                            Proteção para inquilino e proprietário
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-4 border">
                          <Shield className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                          <div className="text-sm font-medium mb-1">
                            Cartão Pré-pago
                          </div>
                          <div className="text-xs text-gray-600">
                            Garantia adicional flexível
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {status === "rejected" && (
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-red-900 mb-4">
                        🔄 Vamos Ajustar Sua Proposta
                      </h3>
                      <p className="text-red-700 mb-6">
                        Identificamos alguns pontos que podem ser melhorados.
                        Não desista! Temos sugestões para você.
                      </p>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                          <span className="text-sm">
                            Considere ofertar um valor 10% menor
                          </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
                          <Users className="w-5 h-5 text-red-600" />
                          <span className="text-sm">
                            Adicione um avalista ou garantidor
                          </span>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg">
                          <Building className="w-5 h-5 text-red-600" />
                          <span className="text-sm">
                            Use nossa garantia locatícia
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Próximos passos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    Próximos Passos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {status === "approved" && (
                    <div>
                      <p className="text-gray-600 mb-4">
                        Sua proposta foi aprovada! Agora você pode:
                      </p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Assinar o contrato digitalmente</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Realizar o pagamento inicial</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Agendar a data de mudança</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {status === "flexible" && (
                    <div>
                      <p className="text-gray-600 mb-4">
                        Com nossa garantia flexível, você terá:
                      </p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                          <span>Aprovação garantida pelo seguro locatício</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                          <span>Sem necessidade de fiador ou caução</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                          <span>Proteção completa para ambas as partes</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Botão de ação */}
              <div className="flex justify-center">
                <Button
                  onClick={handleContinue}
                  className={`px-8 py-3 text-lg h-14 min-w-64 ${
                    status === "approved"
                      ? "bg-green-600 hover:bg-green-700"
                      : status === "flexible"
                        ? "bg-orange-600 hover:bg-orange-700"
                        : "bg-homeflip-purple hover:bg-homeflip-purple/90"
                  }`}
                >
                  {status === "approved" && "Prosseguir para Assinatura"}
                  {status === "flexible" && "Aceitar Garantia Flexível"}
                  {status === "rejected" && "Ajustar Proposta"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Informações sobre o processo */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Como funciona nossa análise?
                  </h3>
                  <div className="space-y-2 text-sm text-blue-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>IA analisa mais de 500 variáveis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Verificação de score e histórico</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Compatibilidade renda vs aluguel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Sugestões personalizadas de melhoria</span>
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
