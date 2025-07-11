import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Badge } from "@/components/ui/badge";
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
import AdminHeader from "@/components/AdminHeader";
import {
  FileText,
  Calendar,
  DollarSign,
  Users,
  Home,
  Eye,
  Edit,
  Download,
  Plus,
  Search,
  Filter,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";

interface Contrato {
  id: string;
  imovel: {
    titulo: string;
    endereco: string;
    valor: number;
  };
  inquilino: {
    nome: string;
    email: string;
    telefone: string;
  };
  proprietario: {
    nome: string;
    email: string;
    telefone: string;
  };
  status: "ativo" | "pendente" | "vencido" | "cancelado" | "renovacao";
  dataInicio: string;
  dataFim: string;
  valorAluguel: number;
  valorDeposito: number;
  diaVencimento: number;
  observacoes?: string;
  dataCriacao: string;
}

export default function AdminContratos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [selectedContrato, setSelectedContrato] = useState<Contrato | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [contratos] = useState<Contrato[]>([
    {
      id: "CTR001",
      imovel: {
        titulo: "Apartamento Vila Olímpia",
        endereco: "Rua dos Pinheiros, 123 - Vila Olímpia, SP",
        valor: 3500,
      },
      inquilino: {
        nome: "João Silva",
        email: "joao@email.com",
        telefone: "(11) 99999-9999",
      },
      proprietario: {
        nome: "Maria Santos",
        email: "maria@email.com",
        telefone: "(11) 88888-8888",
      },
      status: "ativo",
      dataInicio: "2024-01-15",
      dataFim: "2025-01-14",
      valorAluguel: 3500,
      valorDeposito: 3500,
      diaVencimento: 5,
      dataCriacao: "2024-01-10",
      observacoes: "Contrato padrão com reajuste anual pelo IGPM",
    },
    {
      id: "CTR002",
      imovel: {
        titulo: "Casa Jardim Paulista",
        endereco: "Av. Paulista, 456 - Jardim Paulista, SP",
        valor: 5500,
      },
      inquilino: {
        nome: "Carlos Oliveira",
        email: "carlos@email.com",
        telefone: "(11) 77777-7777",
      },
      proprietario: {
        nome: "Ana Costa",
        email: "ana@email.com",
        telefone: "(11) 66666-6666",
      },
      status: "pendente",
      dataInicio: "2024-02-01",
      dataFim: "2025-01-31",
      valorAluguel: 5500,
      valorDeposito: 11000,
      diaVencimento: 10,
      dataCriacao: "2024-01-12",
    },
    {
      id: "CTR003",
      imovel: {
        titulo: "Loft Centro",
        endereco: "Rua Comercial, 789 - Centro, SP",
        valor: 4200,
      },
      inquilino: {
        nome: "Pedro Lima",
        email: "pedro@email.com",
        telefone: "(11) 55555-5555",
      },
      proprietario: {
        nome: "José Santos",
        email: "jose@email.com",
        telefone: "(11) 44444-4444",
      },
      status: "vencido",
      dataInicio: "2023-06-01",
      dataFim: "2024-05-31",
      valorAluguel: 4200,
      valorDeposito: 4200,
      diaVencimento: 15,
      dataCriacao: "2023-05-25",
    },
    {
      id: "CTR004",
      imovel: {
        titulo: "Cobertura Moema",
        endereco: "Rua das Flores, 321 - Moema, SP",
        valor: 8000,
      },
      inquilino: {
        nome: "Lucia Ferreira",
        email: "lucia@email.com",
        telefone: "(11) 33333-3333",
      },
      proprietario: {
        nome: "Roberto Silva",
        email: "roberto@email.com",
        telefone: "(11) 22222-2222",
      },
      status: "renovacao",
      dataInicio: "2023-12-01",
      dataFim: "2024-11-30",
      valorAluguel: 8000,
      valorDeposito: 16000,
      diaVencimento: 20,
      dataCriacao: "2023-11-20",
    },
  ]);

  const filteredContratos = contratos.filter((contrato) => {
    const matchesSearch =
      contrato.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contrato.imovel.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contrato.inquilino.nome
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      contrato.proprietario.nome
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "todos" || contrato.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativo":
        return "bg-green-100 text-green-800";
      case "pendente":
        return "bg-yellow-100 text-yellow-800";
      case "vencido":
        return "bg-red-100 text-red-800";
      case "cancelado":
        return "bg-gray-100 text-gray-800";
      case "renovacao":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "ativo":
        return "Ativo";
      case "pendente":
        return "Pendente";
      case "vencido":
        return "Vencido";
      case "cancelado":
        return "Cancelado";
      case "renovacao":
        return "Em Renovação";
      default:
        return status;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const calculateContractStats = () => {
    const total = contratos.length;
    const ativos = contratos.filter((c) => c.status === "ativo").length;
    const pendentes = contratos.filter((c) => c.status === "pendente").length;
    const vencidos = contratos.filter((c) => c.status === "vencido").length;
    const valorTotal = contratos
      .filter((c) => c.status === "ativo")
      .reduce((sum, c) => sum + c.valorAluguel, 0);

    return { total, ativos, pendentes, vencidos, valorTotal };
  };

  const stats = calculateContractStats();

  const handleViewContrato = (contrato: Contrato) => {
    setSelectedContrato(contrato);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader title="Contratos" showBackButton backTo="/admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Gestão de Contratos
            </h1>
            <p className="text-gray-600">
              Gerencie todos os contratos de locação da plataforma
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Contrato
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
                    Total Contratos
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stats.total}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ativos</p>
                  <p className="text-3xl font-bold text-green-900">
                    {stats.ativos}
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
                  <p className="text-sm font-medium text-gray-600">Pendentes</p>
                  <p className="text-3xl font-bold text-yellow-900">
                    {stats.pendentes}
                  </p>
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
                  <p className="text-sm font-medium text-gray-600">Vencidos</p>
                  <p className="text-3xl font-bold text-red-900">
                    {stats.vencidos}
                  </p>
                </div>
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Valor Mensal
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(stats.valorTotal)}
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="contratos" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contratos">Lista de Contratos</TabsTrigger>
            <TabsTrigger value="pendentes">Ações Pendentes</TabsTrigger>
            <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="contratos" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Filtros</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Label htmlFor="search">Buscar contrato</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="search"
                        placeholder="ID, imóvel, inquilino ou proprietário..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Status</Label>
                    <Select
                      value={filterStatus}
                      onValueChange={setFilterStatus}
                    >
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                        <SelectItem value="ativo">Ativos</SelectItem>
                        <SelectItem value="pendente">Pendentes</SelectItem>
                        <SelectItem value="vencido">Vencidos</SelectItem>
                        <SelectItem value="renovacao">Em Renovação</SelectItem>
                        <SelectItem value="cancelado">Cancelados</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contracts Table */}
            <Card>
              <CardHeader>
                <CardTitle>Contratos</CardTitle>
                <CardDescription>
                  {filteredContratos.length} contrato(s) encontrado(s)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Imóvel</TableHead>
                      <TableHead>Inquilino</TableHead>
                      <TableHead>Proprietário</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Vencimento</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContratos.map((contrato) => (
                      <TableRow key={contrato.id}>
                        <TableCell className="font-medium">
                          {contrato.id}
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">
                              {contrato.imovel.titulo}
                            </p>
                            <p className="text-sm text-gray-600">
                              {contrato.imovel.endereco}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">
                              {contrato.inquilino.nome}
                            </p>
                            <p className="text-sm text-gray-600">
                              {contrato.inquilino.email}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">
                              {contrato.proprietario.nome}
                            </p>
                            <p className="text-sm text-gray-600">
                              {contrato.proprietario.email}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <p className="font-semibold">
                            {formatCurrency(contrato.valorAluguel)}
                          </p>
                          <p className="text-sm text-gray-600">
                            Vence dia {contrato.diaVencimento}
                          </p>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(contrato.status)}>
                            {getStatusLabel(contrato.status)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <p className="text-sm">
                            {new Date(contrato.dataFim).toLocaleDateString(
                              "pt-BR",
                            )}
                          </p>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleViewContrato(contrato)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
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
                  Ações Pendentes
                </CardTitle>
                <CardDescription>
                  Contratos que requerem atenção imediata
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contratos
                    .filter(
                      (c) => c.status === "pendente" || c.status === "vencido",
                    )
                    .map((contrato) => (
                      <div
                        key={contrato.id}
                        className="p-4 border rounded-lg bg-yellow-50 border-yellow-200"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                className={getStatusColor(contrato.status)}
                              >
                                {getStatusLabel(contrato.status)}
                              </Badge>
                              <span className="font-medium">{contrato.id}</span>
                            </div>
                            <h4 className="font-semibold">
                              {contrato.imovel.titulo}
                            </h4>
                            <p className="text-sm text-gray-600">
                              Inquilino: {contrato.inquilino.nome}
                            </p>
                            <p className="text-sm text-gray-600">
                              Proprietário: {contrato.proprietario.nome}
                            </p>
                            {contrato.status === "vencido" && (
                              <p className="text-sm text-red-600 mt-1">
                                Vencido em{" "}
                                {new Date(contrato.dataFim).toLocaleDateString(
                                  "pt-BR",
                                )}
                              </p>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm">Aprovar</Button>
                            <Button size="sm" variant="outline">
                              Rejeitar
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="relatorios" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contratos por Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { status: "ativo", count: stats.ativos, color: "green" },
                      {
                        status: "pendente",
                        count: stats.pendentes,
                        color: "yellow",
                      },
                      {
                        status: "vencido",
                        count: stats.vencidos,
                        color: "red",
                      },
                    ].map((item) => (
                      <div
                        key={item.status}
                        className="flex justify-between items-center"
                      >
                        <span className="capitalize">
                          {getStatusLabel(item.status)}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div
                              className={`h-2 bg-${item.color}-500 rounded-full`}
                              style={{
                                width: `${(item.count / stats.total) * 100}%`,
                              }}
                            />
                          </div>
                          <span className="font-semibold">{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Receita Mensal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">
                        {formatCurrency(stats.valorTotal)}
                      </p>
                      <p className="text-sm text-gray-600">
                        Total de contratos ativos
                      </p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        Média por contrato:
                      </p>
                      <p className="text-lg font-semibold">
                        {formatCurrency(
                          stats.ativos > 0
                            ? stats.valorTotal / stats.ativos
                            : 0,
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Contract Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalhes do Contrato</DialogTitle>
            <DialogDescription>
              Informações completas do contrato {selectedContrato?.id}
            </DialogDescription>
          </DialogHeader>
          {selectedContrato && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      Imóvel
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <Label>Título</Label>
                      <p className="font-medium">
                        {selectedContrato.imovel.titulo}
                      </p>
                    </div>
                    <div>
                      <Label>Endereço</Label>
                      <p>{selectedContrato.imovel.endereco}</p>
                    </div>
                    <div>
                      <Label>Valor</Label>
                      <p className="font-semibold text-lg">
                        {formatCurrency(selectedContrato.valorAluguel)}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Partes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Inquilino</Label>
                      <p className="font-medium">
                        {selectedContrato.inquilino.nome}
                      </p>
                      <p className="text-sm text-gray-600">
                        {selectedContrato.inquilino.email}
                      </p>
                      <p className="text-sm text-gray-600">
                        {selectedContrato.inquilino.telefone}
                      </p>
                    </div>
                    <div>
                      <Label>Proprietário</Label>
                      <p className="font-medium">
                        {selectedContrato.proprietario.nome}
                      </p>
                      <p className="text-sm text-gray-600">
                        {selectedContrato.proprietario.email}
                      </p>
                      <p className="text-sm text-gray-600">
                        {selectedContrato.proprietario.telefone}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Informações do Contrato
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <Label>Status</Label>
                      <Badge
                        className={getStatusColor(selectedContrato.status)}
                      >
                        {getStatusLabel(selectedContrato.status)}
                      </Badge>
                    </div>
                    <div>
                      <Label>Data de Início</Label>
                      <p>
                        {new Date(
                          selectedContrato.dataInicio,
                        ).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    <div>
                      <Label>Data de Fim</Label>
                      <p>
                        {new Date(selectedContrato.dataFim).toLocaleDateString(
                          "pt-BR",
                        )}
                      </p>
                    </div>
                    <div>
                      <Label>Dia do Vencimento</Label>
                      <p>Todo dia {selectedContrato.diaVencimento}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label>Valor do Aluguel</Label>
                      <p className="text-lg font-semibold">
                        {formatCurrency(selectedContrato.valorAluguel)}
                      </p>
                    </div>
                    <div>
                      <Label>Depósito</Label>
                      <p className="text-lg font-semibold">
                        {formatCurrency(selectedContrato.valorDeposito)}
                      </p>
                    </div>
                  </div>
                  {selectedContrato.observacoes && (
                    <div className="mt-4">
                      <Label>Observações</Label>
                      <p className="text-sm text-gray-600">
                        {selectedContrato.observacoes}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Fechar
            </Button>
            <Button>
              <Edit className="w-4 h-4 mr-2" />
              Editar Contrato
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
