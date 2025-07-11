import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  FileText,
  Download,
  Eye,
  Calendar,
  DollarSign,
  Home,
  User,
  AlertCircle,
  CheckCircle,
  Clock,
  Phone,
  Mail,
} from "lucide-react";

interface Contract {
  id: number;
  imovel: {
    titulo: string;
    endereco: string;
    imagem: string;
  };
  proprietario: {
    nome: string;
    email: string;
    telefone: string;
  };
  dataInicio: string;
  dataFim: string;
  valorAluguel: number;
  valorTaxas: number;
  status: "ativo" | "vencido" | "rescindido" | "renovacao";
  proximoPagamento: string;
  diasAtraso: number;
  clausulasImportantes: string[];
}

export default function InquilinoContratos() {
  const [contratos] = useState<Contract[]>([
    {
      id: 1,
      imovel: {
        titulo: "Apartamento 2 quartos - Centro",
        endereco: "Rua das Flores, 123 - Centro",
        imagem:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      },
      proprietario: {
        nome: "João Proprietário",
        email: "joao.prop@email.com",
        telefone: "(11) 99999-9999",
      },
      dataInicio: "2024-01-15",
      dataFim: "2025-01-15",
      valorAluguel: 2500,
      valorTaxas: 1075, // 30% + 5% + 8% = 43% = 1075
      status: "ativo",
      proximoPagamento: "2024-12-15",
      diasAtraso: 0,
      clausulasImportantes: [
        "Pagamento até o dia 15 de cada mês",
        "Multa de 2% sobre o valor do aluguel em caso de atraso",
        "Reajuste anual pelo IGPM",
        "Não é permitido animais de estimação",
      ],
    },
  ]);

  const contratoAtivo = contratos.find((c) => c.status === "ativo");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativo":
        return "bg-green-100 text-green-800 border-green-200";
      case "vencido":
        return "bg-red-100 text-red-800 border-red-200";
      case "rescindido":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "renovacao":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "ativo":
        return "Ativo";
      case "vencido":
        return "Vencido";
      case "rescindido":
        return "Rescindido";
      case "renovacao":
        return "Em Renovação";
      default:
        return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ativo":
        return <CheckCircle className="w-4 h-4" />;
      case "vencido":
        return <AlertCircle className="w-4 h-4" />;
      case "rescindido":
        return <FileText className="w-4 h-4" />;
      case "renovacao":
        return <Clock className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  const calcularDiasRestantes = (dataFim: string) => {
    const hoje = new Date();
    const fim = new Date(dataFim);
    const diffTime = fim.getTime() - hoje.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              to="/dashboard-inquilino"
              className="inline-flex items-center text-homeflip-purple hover:text-[#4A0D5F] font-source-code-pro text-sm mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar ao Dashboard
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-telegraf font-bold text-gray-900 mb-2">
              Meu Contrato
            </h1>
            <p className="text-gray-600 font-source-code-pro">
              Informações detalhadas do seu contrato de locação
            </p>
          </div>

          {contratoAtivo ? (
            <div className="space-y-6">
              {/* Contract Overview */}
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Home className="w-5 h-5" />
                        {contratoAtivo.imovel.titulo}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {contratoAtivo.imovel.endereco}
                      </CardDescription>
                    </div>
                    <Badge
                      className={`${getStatusColor(contratoAtivo.status)} font-source-code-pro text-xs border`}
                    >
                      {getStatusIcon(contratoAtivo.status)}
                      <span className="ml-1">
                        {getStatusText(contratoAtivo.status)}
                      </span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img
                      src={contratoAtivo.imovel.imagem}
                      alt={contratoAtivo.imovel.titulo}
                      className="w-full h-48 rounded-lg object-cover"
                    />
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Informações do Contrato
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Início:</span>
                            <span className="font-medium">
                              {formatDate(contratoAtivo.dataInicio)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Término:</span>
                            <span className="font-medium">
                              {formatDate(contratoAtivo.dataFim)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">
                              Dias restantes:
                            </span>
                            <span className="font-medium text-homeflip-purple">
                              {calcularDiasRestantes(contratoAtivo.dataFim)}{" "}
                              dias
                            </span>
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Valores
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Aluguel:</span>
                            <span className="font-medium">
                              {formatCurrency(contratoAtivo.valorAluguel)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">
                              Taxas (pago uma vez):
                            </span>
                            <span className="font-medium">
                              {formatCurrency(contratoAtivo.valorTaxas)}
                            </span>
                          </div>
                          <div className="flex justify-between font-semibold">
                            <span className="text-gray-900">
                              Próximo pagamento:
                            </span>
                            <span className="text-homeflip-purple">
                              {formatDate(contratoAtivo.proximoPagamento)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Landlord Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Contato do Proprietário
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {contratoAtivo.proprietario.nome}
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="w-4 h-4" />
                          <span>{contratoAtivo.proprietario.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span>{contratoAtivo.proprietario.telefone}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline">
                        <Mail className="w-4 h-4 mr-1" />
                        Enviar E-mail
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4 mr-1" />
                        Ligar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Clauses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Cláusulas Importantes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {contratoAtivo.clausulasImportantes.map(
                      (clausula, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                          <span className="text-sm text-blue-900">
                            {clausula}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Contract Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Ações do Contrato
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Button variant="outline" className="justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar Contrato
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Solicitar Renovação
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Relatar Problema
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Payment History Quick Access */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Gestão de Pagamentos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Acesse o histórico completo de pagamentos e emita boletos.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/dashboard-inquilino/pagamentos">
                        <Button>
                          <DollarSign className="w-4 h-4 mr-2" />
                          Ver Histórico de Pagamentos
                        </Button>
                      </Link>
                      <Button variant="outline">
                        <Calendar className="w-4 h-4 mr-2" />
                        Gerar Boleto
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Nenhum contrato ativo
                </h3>
                <p className="text-gray-600 mb-6">
                  Você não possui contratos ativos no momento.
                </p>
                <Link to="/imoveis">
                  <Button>
                    <Home className="w-4 h-4 mr-2" />
                    Buscar Imóveis
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
