import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  Home,
  Settings,
  LogOut,
  Shield,
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Eye,
  Calendar,
  Download,
  FileText,
  BarChart3,
  PieChart,
  Activity,
  MapPin,
} from "lucide-react";

export default function AdminRelatorios() {
  const [selectedPeriod, setSelectedPeriod] = useState("30");

  const [metricsOverview] = useState({
    totalReceita: 425000,
    crescimentoReceita: 12.5,
    totalUsuarios: 1247,
    crescimentoUsuarios: 8.3,
    totalImoveis: 3456,
    crescimentoImoveis: 15.2,
    taxaConversao: 7.8,
    mudancaTaxaConversao: -2.1,
  });

  const [topProprietarios] = useState([
    {
      id: 1,
      nome: "João Silva",
      totalImoveis: 12,
      receitaTotal: 45000,
      ocupacao: 92,
    },
    {
      id: 2,
      nome: "Maria Santos",
      totalImoveis: 8,
      receitaTotal: 32000,
      ocupacao: 87,
    },
    {
      id: 3,
      nome: "Carlos Oliveira",
      totalImoveis: 6,
      receitaTotal: 28000,
      ocupacao: 95,
    },
    {
      id: 4,
      nome: "Ana Costa",
      totalImoveis: 5,
      receitaTotal: 22000,
      ocupacao: 80,
    },
    {
      id: 5,
      nome: "Pedro Lima",
      totalImoveis: 4,
      receitaTotal: 18000,
      ocupacao: 90,
    },
  ]);

  const [imoveisMaisVisualizados] = useState([
    {
      id: 1,
      titulo: "Apartamento Vila Olímpia",
      visualizacoes: 1245,
      interessados: 32,
      valor: 3500,
    },
    {
      id: 2,
      titulo: "Casa Jardim Paulista",
      visualizacoes: 987,
      interessados: 28,
      valor: 5500,
    },
    {
      id: 3,
      titulo: "Cobertura Moema",
      visualizacoes: 856,
      interessados: 25,
      valor: 8000,
    },
    {
      id: 4,
      titulo: "Loft Centro",
      visualizacoes: 723,
      interessados: 19,
      valor: 4200,
    },
    {
      id: 5,
      titulo: "Casa Pinheiros",
      visualizacoes: 698,
      interessados: 22,
      valor: 6500,
    },
  ]);

  const [regioesMaisAtivas] = useState([
    { regiao: "Vila Olímpia", imoveis: 245, mediaValor: 3800 },
    { regiao: "Jardim Paulista", imoveis: 198, mediaValor: 4200 },
    { regiao: "Moema", imoveis: 167, mediaValor: 5100 },
    { regiao: "Pinheiros", imoveis: 142, mediaValor: 4600 },
    { regiao: "Centro", imoveis: 134, mediaValor: 2900 },
  ]);

  const [transacoesRecentes] = useState([
    {
      id: 1,
      tipo: "Novo Contrato",
      imovel: "Apartamento Vila Olímpia",
      valor: 3500,
      data: "2024-01-15",
      status: "concluido",
    },
    {
      id: 2,
      tipo: "Renovação",
      imovel: "Casa Jardim Paulista",
      valor: 5500,
      data: "2024-01-14",
      status: "concluido",
    },
    {
      id: 3,
      tipo: "Novo Contrato",
      imovel: "Loft Centro",
      valor: 4200,
      data: "2024-01-14",
      status: "pendente",
    },
    {
      id: 4,
      tipo: "Cancelamento",
      imovel: "Cobertura Moema",
      valor: 8000,
      data: "2024-01-13",
      status: "cancelado",
    },
  ]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "concluido":
        return "bg-green-100 text-green-800";
      case "pendente":
        return "bg-yellow-100 text-yellow-800";
      case "cancelado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/admin"
                className="flex items-center gap-2 text-gray-600 hover:text-homeflip-purple transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar
              </Link>
              <div className="flex items-center gap-2">
                <Home className="w-6 h-6 text-homeflip-purple" />
                <span className="text-xl font-bold text-homeflip-purple">
                  HomeFlip
                </span>
                <Badge variant="destructive" className="ml-2">
                  <Shield className="w-3 h-3 mr-1" />
                  Admin
                </Badge>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Administração</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Relatórios e Analytics
            </h1>
            <p className="text-gray-600">
              Insights e métricas da plataforma HomeFlip
            </p>
          </div>
          <div className="flex gap-3">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Últimos 7 dias</SelectItem>
                <SelectItem value="30">Últimos 30 dias</SelectItem>
                <SelectItem value="90">Últimos 90 dias</SelectItem>
                <SelectItem value="365">Último ano</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Receita Total
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatCurrency(metricsOverview.totalReceita)}
                  </p>
                  <p
                    className={`text-sm flex items-center gap-1 ${
                      metricsOverview.crescimentoReceita > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {metricsOverview.crescimentoReceita > 0 ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {Math.abs(metricsOverview.crescimentoReceita)}% vs período
                    anterior
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Usuários
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {metricsOverview.totalUsuarios.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />+
                    {metricsOverview.crescimentoUsuarios}% crescimento
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Imóveis
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {metricsOverview.totalImoveis.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />+
                    {metricsOverview.crescimentoImoveis}% este mês
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Taxa Conversão
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {metricsOverview.taxaConversao}%
                  </p>
                  <p
                    className={`text-sm flex items-center gap-1 ${
                      metricsOverview.mudancaTaxaConversao > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {metricsOverview.mudancaTaxaConversao > 0 ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {Math.abs(metricsOverview.mudancaTaxaConversao)}% vs média
                  </p>
                </div>
                <div className="p-3 bg-orange-100 rounded-full">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Reports */}
        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="usuarios">Usuários</TabsTrigger>
            <TabsTrigger value="imoveis">Imóveis</TabsTrigger>
            <TabsTrigger value="transacoes">Transações</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Imóveis Mais Visualizados
                  </CardTitle>
                  <CardDescription>
                    Top 5 imóveis com mais visualizações
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {imoveisMaisVisualizados.map((imovel, index) => (
                      <div
                        key={imovel.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-homeflip-purple text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium">{imovel.titulo}</p>
                            <p className="text-sm text-gray-600">
                              {formatCurrency(imovel.valor)}/mês
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            {imovel.visualizacoes.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-600">
                            {imovel.interessados} interessados
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Regiões Mais Ativas
                  </CardTitle>
                  <CardDescription>
                    Regiões com maior número de imóveis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regioesMaisAtivas.map((regiao, index) => (
                      <div
                        key={regiao.regiao}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium">{regiao.regiao}</p>
                            <p className="text-sm text-gray-600">
                              Média: {formatCurrency(regiao.mediaValor)}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{regiao.imoveis}</p>
                          <p className="text-sm text-gray-600">imóveis</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="usuarios" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Top Proprietários
                </CardTitle>
                <CardDescription>
                  Proprietários com melhor performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Posição</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Imóveis</TableHead>
                      <TableHead>Receita Total</TableHead>
                      <TableHead>Taxa Ocupação</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topProprietarios.map((proprietario, index) => (
                      <TableRow key={proprietario.id}>
                        <TableCell>
                          <div className="w-8 h-8 bg-homeflip-purple text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          {proprietario.nome}
                        </TableCell>
                        <TableCell>{proprietario.totalImoveis}</TableCell>
                        <TableCell>
                          {formatCurrency(proprietario.receitaTotal)}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-gray-200 rounded-full">
                              <div
                                className="h-2 bg-green-500 rounded-full"
                                style={{
                                  width: `${proprietario.ocupacao}%`,
                                }}
                              />
                            </div>
                            <span className="text-sm font-medium">
                              {proprietario.ocupacao}%
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="imoveis" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <PieChart className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-2xl font-bold">67%</p>
                  <p className="text-sm text-gray-600">Apartamentos</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Home className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-2xl font-bold">28%</p>
                  <p className="text-sm text-gray-600">Casas</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                  <p className="text-2xl font-bold">5%</p>
                  <p className="text-sm text-gray-600">Comerciais</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transacoes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Transações Recentes
                </CardTitle>
                <CardDescription>
                  Últimas atividades de contrato na plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Imóvel</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transacoesRecentes.map((transacao) => (
                      <TableRow key={transacao.id}>
                        <TableCell>
                          {new Date(transacao.data).toLocaleDateString("pt-BR")}
                        </TableCell>
                        <TableCell>{transacao.tipo}</TableCell>
                        <TableCell className="font-medium">
                          {transacao.imovel}
                        </TableCell>
                        <TableCell>{formatCurrency(transacao.valor)}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(transacao.status)}>
                            {transacao.status === "concluido"
                              ? "Concluído"
                              : transacao.status === "pendente"
                                ? "Pendente"
                                : "Cancelado"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
