import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AdminHeader from "@/components/AdminHeader";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
  Filter,
  Download,
  Clock,
  Target,
  DollarSign,
  Home,
  Users,
  Calendar,
} from "lucide-react";

interface AnaliseCredito {
  id: string;
  usuario: {
    nome: string;
    email: string;
    cpf: string;
  };
  imovel: {
    titulo: string;
    valor: number;
  };
  score: number;
  renda: number;
  status: "aprovado" | "rejeitado" | "pendente" | "em_analise";
  dataSubmissao: string;
  dataAnalise?: string;
  observacoes?: string;
  documentos: string[];
  criterios: {
    rendaCompativel: boolean;
    scoreMinimo: boolean;
    documentacaoCompleta: boolean;
    historicoPagamentos: boolean;
  };
}

export default function AdminAnalises() {
  const [filterStatus, setFilterStatus] = useState("todos");
  const [selectedAnalise, setSelectedAnalise] = useState<AnaliseCredito | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [observacoes, setObservacoes] = useState("");

  const [analises] = useState<AnaliseCredito[]>([
    {
      id: "AN001",
      usuario: {
        nome: "João Silva",
        email: "joao@email.com",
        cpf: "123.456.789-00",
      },
      imovel: {
        titulo: "Apartamento Vila Olímpia",
        valor: 3500,
      },
      score: 750,
      renda: 15000,
      status: "pendente",
      dataSubmissao: "2024-01-15",
      documentos: ["CPF", "RG", "Comprovante de Renda", "Extrato Bancário"],
      criterios: {
        rendaCompativel: true,
        scoreMinimo: true,
        documentacaoCompleta: true,
        historicoPagamentos: true,
      },
    },
    {
      id: "AN002",
      usuario: {
        nome: "Maria Santos",
        email: "maria@email.com",
        cpf: "987.654.321-00",
      },
      imovel: {
        titulo: "Casa Jardim Paulista",
        valor: 5500,
      },
      score: 680,
      renda: 12000,
      status: "em_analise",
      dataSubmissao: "2024-01-14",
      documentos: ["CPF", "RG", "Comprovante de Renda"],
      criterios: {
        rendaCompativel: true,
        scoreMinimo: true,
        documentacaoCompleta: false,
        historicoPagamentos: true,
      },
    },
    {
      id: "AN003",
      usuario: {
        nome: "Carlos Oliveira",
        email: "carlos@email.com",
        cpf: "456.789.123-00",
      },
      imovel: {
        titulo: "Loft Centro",
        valor: 4200,
      },
      score: 820,
      renda: 18000,
      status: "aprovado",
      dataSubmissao: "2024-01-13",
      dataAnalise: "2024-01-14",
      documentos: [
        "CPF",
        "RG",
        "Comprovante de Renda",
        "Extrato Bancário",
        "Declaração IR",
      ],
      criterios: {
        rendaCompativel: true,
        scoreMinimo: true,
        documentacaoCompleta: true,
        historicoPagamentos: true,
      },
      observacoes: "Cliente com excelente histórico creditício",
    },
    {
      id: "AN004",
      usuario: {
        nome: "Ana Costa",
        email: "ana@email.com",
        cpf: "789.123.456-00",
      },
      imovel: {
        titulo: "Cobertura Moema",
        valor: 8000,
      },
      score: 580,
      renda: 8000,
      status: "rejeitado",
      dataSubmissao: "2024-01-12",
      dataAnalise: "2024-01-13",
      documentos: ["CPF", "RG"],
      criterios: {
        rendaCompativel: false,
        scoreMinimo: false,
        documentacaoCompleta: false,
        historicoPagamentos: false,
      },
      observacoes:
        "Renda insuficiente e score abaixo do mínimo exigido para o valor do imóvel",
    },
  ]);

  const filteredAnalises = analises.filter((analise) => {
    return filterStatus === "todos" || analise.status === filterStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aprovado":
        return "bg-green-100 text-green-800";
      case "rejeitado":
        return "bg-red-100 text-red-800";
      case "pendente":
        return "bg-yellow-100 text-yellow-800";
      case "em_analise":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "aprovado":
        return "Aprovado";
      case "rejeitado":
        return "Rejeitado";
      case "pendente":
        return "Pendente";
      case "em_analise":
        return "Em Análise";
      default:
        return status;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 800) return "text-green-600";
    if (score >= 700) return "text-blue-600";
    if (score >= 600) return "text-yellow-600";
    return "text-red-600";
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const calculateCompatibilidade = (renda: number, valorAluguel: number) => {
    const relacao = (valorAluguel / renda) * 100;
    return relacao <= 30; // Regra: aluguel não pode ser mais que 30% da renda
  };

  const calculateApprovalRate = () => {
    const total = analises.length;
    const aprovados = analises.filter((a) => a.status === "aprovado").length;
    return total > 0 ? ((aprovados / total) * 100).toFixed(1) : "0";
  };

  const calculateAverageScore = () => {
    if (analises.length === 0) return 0;
    const totalScore = analises.reduce((sum, a) => sum + a.score, 0);
    return Math.round(totalScore / analises.length);
  };

  const handleAprovar = (id: string) => {
    console.log(`Aprovando análise ${id}`, observacoes);
    setIsDialogOpen(false);
    setObservacoes("");
  };

  const handleRejeitar = (id: string) => {
    console.log(`Rejeitando análise ${id}`, observacoes);
    setIsDialogOpen(false);
    setObservacoes("");
  };

  const handleViewAnalise = (analise: AnaliseCredito) => {
    setSelectedAnalise(analise);
    setObservacoes(analise.observacoes || "");
    setIsDialogOpen(true);
  };

  const pendingCount = analises.filter(
    (a) => a.status === "pendente" || a.status === "em_analise",
  ).length;
  const approvedCount = analises.filter((a) => a.status === "aprovado").length;
  const rejectedCount = analises.filter((a) => a.status === "rejeitado").length;

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader title="Análises" showBackButton backTo="/admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Análise de Crédito
            </h1>
            <p className="text-gray-600">
              Avalie e aprove solicitações de locação
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros Avançados
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Análises
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {analises.length}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pendentes</p>
                  <p className="text-3xl font-bold text-yellow-900">
                    {pendingCount}
                  </p>
                  <p className="text-sm text-yellow-600">Requer ação</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Aprovados</p>
                  <p className="text-3xl font-bold text-green-900">
                    {approvedCount}
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Taxa Aprovação
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {calculateApprovalRate()}%
                  </p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Boa taxa
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Score Médio
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {calculateAverageScore()}
                  </p>
                  <p className="text-sm text-blue-600">Pontuação</p>
                </div>
                <div className="p-3 bg-indigo-100 rounded-full">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="analises" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analises">Lista de Análises</TabsTrigger>
            <TabsTrigger value="pendentes">Ações Pendentes</TabsTrigger>
            <TabsTrigger value="criterios">Critérios</TabsTrigger>
          </TabsList>

          <TabsContent value="analises" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Análises de Crédito</CardTitle>
                  <CardDescription>
                    {filteredAnalises.length} análise(s) encontrada(s)
                  </CardDescription>
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="pendente">Pendentes</SelectItem>
                    <SelectItem value="em_analise">Em Análise</SelectItem>
                    <SelectItem value="aprovado">Aprovados</SelectItem>
                    <SelectItem value="rejeitado">Rejeitados</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Solicitante</TableHead>
                      <TableHead>Imóvel</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Renda/Aluguel</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAnalises.map((analise) => (
                      <TableRow key={analise.id}>
                        <TableCell className="font-medium">
                          {analise.id}
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">
                              {analise.usuario.nome}
                            </p>
                            <p className="text-sm text-gray-600">
                              {analise.usuario.cpf}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">
                              {analise.imovel.titulo}
                            </p>
                            <p className="text-sm text-gray-600">
                              {formatCurrency(analise.imovel.valor)}/mês
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`font-bold text-lg ${getScoreColor(
                              analise.score,
                            )}`}
                          >
                            {analise.score}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{formatCurrency(analise.renda)}</p>
                            <p
                              className={
                                calculateCompatibilidade(
                                  analise.renda,
                                  analise.imovel.valor,
                                )
                                  ? "text-green-600"
                                  : "text-red-600"
                              }
                            >
                              {(
                                (analise.imovel.valor / analise.renda) *
                                100
                              ).toFixed(1)}
                              % da renda
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(analise.status)}>
                            {getStatusLabel(analise.status)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>
                              {new Date(
                                analise.dataSubmissao,
                              ).toLocaleDateString("pt-BR")}
                            </p>
                            {analise.dataAnalise && (
                              <p className="text-gray-600">
                                Analisado:{" "}
                                {new Date(
                                  analise.dataAnalise,
                                ).toLocaleDateString("pt-BR")}
                              </p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleViewAnalise(analise)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pendentes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Análises Pendentes
                </CardTitle>
                <CardDescription>
                  Análises que requerem aprovação ou rejeição
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analises
                    .filter(
                      (a) =>
                        a.status === "pendente" || a.status === "em_analise",
                    )
                    .map((analise) => (
                      <div
                        key={analise.id}
                        className="p-4 border rounded-lg bg-yellow-50 border-yellow-200"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getStatusColor(analise.status)}>
                                {getStatusLabel(analise.status)}
                              </Badge>
                              <span className="font-medium">{analise.id}</span>
                            </div>
                            <h4 className="font-semibold">
                              {analise.usuario.nome}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {analise.imovel.titulo} -{" "}
                              {formatCurrency(analise.imovel.valor)}
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-sm">
                              <span
                                className={`font-medium ${getScoreColor(
                                  analise.score,
                                )}`}
                              >
                                Score: {analise.score}
                              </span>
                              <span>
                                Renda: {formatCurrency(analise.renda)}
                              </span>
                              <span
                                className={
                                  calculateCompatibilidade(
                                    analise.renda,
                                    analise.imovel.valor,
                                  )
                                    ? "text-green-600"
                                    : "text-red-600"
                                }
                              >
                                {(
                                  (analise.imovel.valor / analise.renda) *
                                  100
                                ).toFixed(1)}
                                % da renda
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => handleViewAnalise(analise)}
                            >
                              Analisar
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="criterios" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Critérios de Aprovação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Score mínimo</span>
                    <Badge variant="outline">≥ 600</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Renda mínima</span>
                    <Badge variant="outline">3x o valor do aluguel</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Documentação completa</span>
                    <Badge variant="outline">Obrigatório</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Histórico de pagamentos</span>
                    <Badge variant="outline">Sem restrições</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estatísticas de Critérios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      criterio: "Score adequado",
                      aprovados: analises.filter((a) => a.criterios.scoreMinimo)
                        .length,
                    },
                    {
                      criterio: "Renda compatível",
                      aprovados: analises.filter(
                        (a) => a.criterios.rendaCompativel,
                      ).length,
                    },
                    {
                      criterio: "Documentação completa",
                      aprovados: analises.filter(
                        (a) => a.criterios.documentacaoCompleta,
                      ).length,
                    },
                    {
                      criterio: "Histórico limpo",
                      aprovados: analises.filter(
                        (a) => a.criterios.historicoPagamentos,
                      ).length,
                    },
                  ].map((item) => (
                    <div
                      key={item.criterio}
                      className="flex justify-between items-center"
                    >
                      <span>{item.criterio}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-green-500 rounded-full"
                            style={{
                              width: `${
                                (item.aprovados / analises.length) * 100
                              }%`,
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium">
                          {item.aprovados}/{analises.length}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Analysis Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Análise de Crédito - {selectedAnalise?.id}
            </DialogTitle>
            <DialogDescription>
              Revise os critérios e tome uma decisão sobre a aprovação
            </DialogDescription>
          </DialogHeader>
          {selectedAnalise && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Dados do Solicitante
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <Label>Nome</Label>
                      <p className="font-medium">
                        {selectedAnalise.usuario.nome}
                      </p>
                    </div>
                    <div>
                      <Label>Email</Label>
                      <p>{selectedAnalise.usuario.email}</p>
                    </div>
                    <div>
                      <Label>CPF</Label>
                      <p>{selectedAnalise.usuario.cpf}</p>
                    </div>
                    <div>
                      <Label>Renda Declarada</Label>
                      <p className="text-lg font-semibold">
                        {formatCurrency(selectedAnalise.renda)}
                      </p>
                    </div>
                    <div>
                      <Label>Score de Crédito</Label>
                      <p
                        className={`text-2xl font-bold ${getScoreColor(
                          selectedAnalise.score,
                        )}`}
                      >
                        {selectedAnalise.score}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      Dados do Imóvel
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <Label>Imóvel</Label>
                      <p className="font-medium">
                        {selectedAnalise.imovel.titulo}
                      </p>
                    </div>
                    <div>
                      <Label>Valor do Aluguel</Label>
                      <p className="text-lg font-semibold">
                        {formatCurrency(selectedAnalise.imovel.valor)}
                      </p>
                    </div>
                    <div>
                      <Label>Comprometimento da Renda</Label>
                      <p
                        className={`text-lg font-semibold ${
                          calculateCompatibilidade(
                            selectedAnalise.renda,
                            selectedAnalise.imovel.valor,
                          )
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {(
                          (selectedAnalise.imovel.valor /
                            selectedAnalise.renda) *
                          100
                        ).toFixed(1)}
                        %
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Critérios de Avaliação</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        label: "Renda Compatível",
                        status: selectedAnalise.criterios.rendaCompativel,
                        description: "Renda ≥ 3x o valor do aluguel",
                      },
                      {
                        label: "Score Mínimo",
                        status: selectedAnalise.criterios.scoreMinimo,
                        description: "Score ≥ 600 pontos",
                      },
                      {
                        label: "Documentação",
                        status: selectedAnalise.criterios.documentacaoCompleta,
                        description: "Todos os documentos enviados",
                      },
                      {
                        label: "Histórico",
                        status: selectedAnalise.criterios.historicoPagamentos,
                        description: "Sem restrições nos órgãos de proteção",
                      },
                    ].map((criterio) => (
                      <div
                        key={criterio.label}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{criterio.label}</p>
                          <p className="text-sm text-gray-600">
                            {criterio.description}
                          </p>
                        </div>
                        {criterio.status ? (
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Documentos Enviados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {selectedAnalise.documentos.map((doc) => (
                      <Badge
                        key={doc}
                        variant="outline"
                        className="justify-center"
                      >
                        {doc}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <Label htmlFor="observacoes">Observações</Label>
                <Textarea
                  id="observacoes"
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  placeholder="Adicione observações sobre a análise..."
                  rows={3}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsDialogOpen(false);
                setObservacoes("");
              }}
            >
              Fechar
            </Button>
            {selectedAnalise &&
              (selectedAnalise.status === "pendente" ||
                selectedAnalise.status === "em_analise") && (
                <>
                  <Button
                    variant="destructive"
                    onClick={() => handleRejeitar(selectedAnalise.id)}
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Rejeitar
                  </Button>
                  <Button onClick={() => handleAprovar(selectedAnalise.id)}>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Aprovar
                  </Button>
                </>
              )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
