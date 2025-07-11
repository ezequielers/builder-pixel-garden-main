import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft,
  FileText,
  Search,
  Download,
  Eye,
  Calendar,
  DollarSign,
  Home,
  User,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

interface Contract {
  id: number;
  imovel: {
    titulo: string;
    endereco: string;
    imagem: string;
  };
  inquilino: {
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
}

export default function ProprietarioContratos() {
  const [contratos] = useState<Contract[]>([
    {
      id: 1,
      imovel: {
        titulo: "Apartamento Vila Olímpia",
        endereco: "Rua dos Pinheiros, 123 - Vila Olímpia, SP",
        imagem:
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      },
      inquilino: {
        nome: "João Silva",
        email: "joao@email.com",
        telefone: "(11) 99999-9999",
      },
      dataInicio: "2024-01-15",
      dataFim: "2025-01-15",
      valorAluguel: 3500,
      valorTaxas: 1505, // 30% + 5% + 8% = 43% = 1505
      status: "ativo",
      proximoPagamento: "2024-12-15",
      diasAtraso: 0,
    },
    {
      id: 2,
      imovel: {
        titulo: "Casa Jardim Paulista",
        endereco: "Av. Paulista, 456 - Jardim Paulista, SP",
        imagem:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      },
      inquilino: {
        nome: "Maria Santos",
        email: "maria@email.com",
        telefone: "(11) 88888-8888",
      },
      dataInicio: "2023-06-01",
      dataFim: "2024-06-01",
      valorAluguel: 5500,
      valorTaxas: 2365,
      status: "renovacao",
      proximoPagamento: "2024-12-01",
      diasAtraso: 0,
    },
    {
      id: 3,
      imovel: {
        titulo: "Apartamento Moema",
        endereco: "Rua da Paz, 789 - Moema, SP",
        imagem:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      },
      inquilino: {
        nome: "Carlos Oliveira",
        email: "carlos@email.com",
        telefone: "(11) 77777-7777",
      },
      dataInicio: "2023-03-01",
      dataFim: "2024-03-01",
      valorAluguel: 2800,
      valorTaxas: 1204,
      status: "vencido",
      proximoPagamento: "2024-11-01",
      diasAtraso: 15,
    },
  ]);

  const [filtroStatus, setFiltroStatus] = useState<string>("todos");
  const [busca, setBusca] = useState("");

  const contratosFiltrados = contratos.filter((contrato) => {
    const matchStatus =
      filtroStatus === "todos" || contrato.status === filtroStatus;
    const matchBusca =
      contrato.imovel.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      contrato.inquilino.nome.toLowerCase().includes(busca.toLowerCase());
    return matchStatus && matchBusca;
  });

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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              to="/dashboard-proprietario"
              className="inline-flex items-center text-homeflip-purple hover:text-[#4A0D5F] font-source-code-pro text-sm mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar ao Dashboard
            </Link>
          </div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-telegraf font-bold text-gray-900 mb-2">
                Meus Contratos
              </h1>
              <p className="text-gray-600 font-source-code-pro">
                Gerencie todos os contratos dos seus imóveis
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-source-code-pro text-gray-600">
                      Contratos Ativos
                    </p>
                    <p className="text-2xl font-telegraf font-bold text-gray-900">
                      {contratos.filter((c) => c.status === "ativo").length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-source-code-pro text-gray-600">
                      Em Renovação
                    </p>
                    <p className="text-2xl font-telegraf font-bold text-gray-900">
                      {contratos.filter((c) => c.status === "renovacao").length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-source-code-pro text-gray-600">
                      Vencidos
                    </p>
                    <p className="text-2xl font-telegraf font-bold text-gray-900">
                      {contratos.filter((c) => c.status === "vencido").length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-homeflip-purple/10 rounded-lg">
                    <DollarSign className="w-6 h-6 text-homeflip-purple" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-source-code-pro text-gray-600">
                      Receita Mensal
                    </p>
                    <p className="text-2xl font-telegraf font-bold text-gray-900">
                      {formatCurrency(
                        contratos
                          .filter((c) => c.status === "ativo")
                          .reduce((acc, c) => acc + c.valorAluguel, 0),
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Buscar por imóvel ou inquilino..."
                      value={busca}
                      onChange={(e) => setBusca(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={filtroStatus} onValueChange={setFiltroStatus}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Status do contrato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os status</SelectItem>
                    <SelectItem value="ativo">Ativo</SelectItem>
                    <SelectItem value="renovacao">Em Renovação</SelectItem>
                    <SelectItem value="vencido">Vencido</SelectItem>
                    <SelectItem value="rescindido">Rescindido</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Contracts List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Contratos ({contratosFiltrados.length})
              </CardTitle>
              <CardDescription>
                Lista de todos os contratos dos seus imóveis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {contratosFiltrados.map((contrato) => (
                  <div
                    key={contrato.id}
                    className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Property Image */}
                      <div className="lg:w-48">
                        <img
                          src={contrato.imovel.imagem}
                          alt={contrato.imovel.titulo}
                          className="w-full h-32 lg:h-28 rounded-lg object-cover"
                        />
                      </div>

                      {/* Contract Info */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div>
                            <h3 className="font-telegraf font-semibold text-gray-900 mb-1">
                              {contrato.imovel.titulo}
                            </h3>
                            <p className="text-sm font-source-code-pro text-gray-600 mb-2 flex items-center gap-1">
                              <Home className="w-4 h-4" />
                              {contrato.imovel.endereco}
                            </p>
                            <Badge
                              className={`${getStatusColor(contrato.status)} font-source-code-pro text-xs border`}
                            >
                              {getStatusIcon(contrato.status)}
                              <span className="ml-1">
                                {getStatusText(contrato.status)}
                              </span>
                            </Badge>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-telegraf font-bold text-gray-900">
                              {formatCurrency(contrato.valorAluguel)}
                            </p>
                            <p className="text-sm font-source-code-pro text-gray-600">
                              + {formatCurrency(contrato.valorTaxas)} (taxas)
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600 font-source-code-pro mb-1 flex items-center gap-1">
                              <User className="w-4 h-4" />
                              Inquilino
                            </p>
                            <p className="font-medium">
                              {contrato.inquilino.nome}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {contrato.inquilino.email}
                            </p>
                          </div>

                          <div>
                            <p className="text-gray-600 font-source-code-pro mb-1 flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              Período
                            </p>
                            <p className="font-medium">
                              {formatDate(contrato.dataInicio)}
                            </p>
                            <p className="text-gray-500 text-xs">
                              até {formatDate(contrato.dataFim)}
                            </p>
                          </div>

                          <div>
                            <p className="text-gray-600 font-source-code-pro mb-1 flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              Próximo Pagamento
                            </p>
                            <p className="font-medium">
                              {formatDate(contrato.proximoPagamento)}
                            </p>
                            {contrato.diasAtraso > 0 && (
                              <p className="text-red-600 text-xs font-medium">
                                {contrato.diasAtraso} dias de atraso
                              </p>
                            )}
                          </div>

                          <div className="flex flex-col gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs"
                            >
                              <Eye className="w-3 h-3 mr-1" />
                              Ver Detalhes
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs"
                            >
                              <Download className="w-3 h-3 mr-1" />
                              Baixar PDF
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {contratosFiltrados.length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Nenhum contrato encontrado
                    </h3>
                    <p className="text-gray-600">
                      {busca || filtroStatus !== "todos"
                        ? "Tente ajustar os filtros de busca"
                        : "Você ainda não possui contratos ativos"}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
