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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import AdminHeader from "@/components/AdminHeader";
import {
  Wrench,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  MoreHorizontal,
  Save,
  X,
  CheckCircle,
  Clock,
  AlertTriangle,
  DollarSign,
  Calendar,
  User,
  Home,
  Phone,
} from "lucide-react";

interface Manutencao {
  id: string;
  titulo: string;
  descricao: string;
  categoria: "eletrica" | "hidraulica" | "pintura" | "estrutural" | "outros";
  prioridade: "baixa" | "media" | "alta" | "urgente";
  status: "aberta" | "em_andamento" | "concluida" | "cancelada";
  imovel: {
    titulo: string;
    endereco: string;
  };
  inquilino: {
    nome: string;
    email: string;
    telefone: string;
  };
  responsavel?: {
    nome: string;
    telefone: string;
    empresa: string;
  };
  dataSolicitacao: string;
  dataInicio?: string;
  dataConclusao?: string;
  estimativaCusto?: number;
  custoFinal?: number;
  observacoes?: string;
}

export default function AdminManutencoes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [filterCategoria, setFilterCategoria] = useState("todos");
  const [selectedManutencao, setSelectedManutencao] =
    useState<Manutencao | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [manutencoes, setManutencoes] = useState<Manutencao[]>([
    {
      id: "MAN001",
      titulo: "Vazamento na torneira da cozinha",
      descricao:
        "A torneira da cozinha está com vazamento constante. O problema começou há 3 dias e está desperdiçando muita água.",
      categoria: "hidraulica",
      prioridade: "media",
      status: "em_andamento",
      imovel: {
        titulo: "Apartamento Vila Olímpia",
        endereco: "Rua dos Pinheiros, 123 - Vila Olímpia, SP",
      },
      inquilino: {
        nome: "Maria Santos",
        email: "maria@email.com",
        telefone: "(11) 99999-9999",
      },
      responsavel: {
        nome: "João da Silva",
        telefone: "(11) 88888-8888",
        empresa: "Hidráulica Silva",
      },
      dataSolicitacao: "2024-01-10",
      dataInicio: "2024-01-12",
      estimativaCusto: 150,
      observacoes: "Será necessário trocar a vedação da torneira",
    },
    {
      id: "MAN002",
      titulo: "Tomada sem energia no quarto",
      descricao:
        "A tomada principal do quarto não está funcionando. Nenhum aparelho conectado recebe energia.",
      categoria: "eletrica",
      prioridade: "alta",
      status: "aberta",
      imovel: {
        titulo: "Casa Jardim Paulista",
        endereco: "Av. Paulista, 456 - Jardim Paulista, SP",
      },
      inquilino: {
        nome: "Carlos Oliveira",
        email: "carlos@email.com",
        telefone: "(11) 77777-7777",
      },
      dataSolicitacao: "2024-01-15",
      estimativaCusto: 200,
    },
    {
      id: "MAN003",
      titulo: "Pintura descascando na parede da sala",
      descricao:
        "A pintura da parede da sala está descascando em várias partes, principalmente próximo à janela.",
      categoria: "pintura",
      prioridade: "baixa",
      status: "concluida",
      imovel: {
        titulo: "Loft Centro",
        endereco: "Rua Comercial, 789 - Centro, SP",
      },
      inquilino: {
        nome: "Ana Costa",
        email: "ana@email.com",
        telefone: "(11) 66666-6666",
      },
      responsavel: {
        nome: "Pedro Lima",
        telefone: "(11) 55555-5555",
        empresa: "Pinturas Lima",
      },
      dataSolicitacao: "2023-12-15",
      dataInicio: "2023-12-20",
      dataConclusao: "2023-12-22",
      estimativaCusto: 350,
      custoFinal: 320,
      observacoes: "Pintura realizada com tinta de alta qualidade",
    },
  ]);

  const [formData, setFormData] = useState<Partial<Manutencao>>({
    titulo: "",
    descricao: "",
    categoria: "outros",
    prioridade: "media",
    status: "aberta",
    estimativaCusto: 0,
    observacoes: "",
  });

  const filteredManutencoes = manutencoes.filter((manutencao) => {
    const matchesSearch =
      manutencao.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manutencao.inquilino.nome
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      manutencao.imovel.titulo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "todos" || manutencao.status === filterStatus;
    const matchesCategoria =
      filterCategoria === "todos" || manutencao.categoria === filterCategoria;
    return matchesSearch && matchesStatus && matchesCategoria;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aberta":
        return "bg-yellow-100 text-yellow-800";
      case "em_andamento":
        return "bg-blue-100 text-blue-800";
      case "concluida":
        return "bg-green-100 text-green-800";
      case "cancelada":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "aberta":
        return "Aberta";
      case "em_andamento":
        return "Em Andamento";
      case "concluida":
        return "Concluída";
      case "cancelada":
        return "Cancelada";
      default:
        return status;
    }
  };

  const getPrioridadeColor = (prioridade: string) => {
    switch (prioridade) {
      case "baixa":
        return "bg-gray-100 text-gray-800";
      case "media":
        return "bg-yellow-100 text-yellow-800";
      case "alta":
        return "bg-orange-100 text-orange-800";
      case "urgente":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPrioridadeLabel = (prioridade: string) => {
    switch (prioridade) {
      case "baixa":
        return "Baixa";
      case "media":
        return "Média";
      case "alta":
        return "Alta";
      case "urgente":
        return "Urgente";
      default:
        return prioridade;
    }
  };

  const getCategoriaLabel = (categoria: string) => {
    switch (categoria) {
      case "eletrica":
        return "Elétrica";
      case "hidraulica":
        return "Hidráulica";
      case "pintura":
        return "Pintura";
      case "estrutural":
        return "Estrutural";
      case "outros":
        return "Outros";
      default:
        return categoria;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const calculateStats = () => {
    const total = manutencoes.length;
    const abertas = manutencoes.filter((m) => m.status === "aberta").length;
    const emAndamento = manutencoes.filter(
      (m) => m.status === "em_andamento",
    ).length;
    const concluidas = manutencoes.filter(
      (m) => m.status === "concluida",
    ).length;
    const custoTotal = manutencoes
      .filter((m) => m.custoFinal || m.estimativaCusto)
      .reduce((sum, m) => sum + (m.custoFinal || m.estimativaCusto || 0), 0);

    return { total, abertas, emAndamento, concluidas, custoTotal };
  };

  const stats = calculateStats();

  const handleView = (manutencao: Manutencao) => {
    setSelectedManutencao(manutencao);
    setIsViewDialogOpen(true);
  };

  const handleEdit = (manutencao: Manutencao) => {
    setSelectedManutencao(manutencao);
    setFormData(manutencao);
    setIsEditDialogOpen(true);
  };

  const handleCreate = () => {
    setFormData({
      titulo: "",
      descricao: "",
      categoria: "outros",
      prioridade: "media",
      status: "aberta",
      estimativaCusto: 0,
      observacoes: "",
    });
    setSelectedManutencao(null);
    setIsCreateDialogOpen(true);
  };

  const handleDelete = (manutencao: Manutencao) => {
    setSelectedManutencao(manutencao);
    setIsDeleteDialogOpen(true);
  };

  const handleSave = () => {
    if (selectedManutencao) {
      // Update existing
      setManutencoes(
        manutencoes.map((m) =>
          m.id === selectedManutencao.id
            ? { ...selectedManutencao, ...formData }
            : m,
        ),
      );
      setIsEditDialogOpen(false);
    } else {
      // Create new
      const newManutencao: Manutencao = {
        id: `MAN${String(manutencoes.length + 1).padStart(3, "0")}`,
        ...formData,
        imovel: {
          titulo: "Imóvel Exemplo",
          endereco: "Endereço Exemplo",
        },
        inquilino: {
          nome: "Inquilino Exemplo",
          email: "inquilino@email.com",
          telefone: "(11) 00000-0000",
        },
        dataSolicitacao: new Date().toISOString().split("T")[0],
      } as Manutencao;

      setManutencoes([...manutencoes, newManutencao]);
      setIsCreateDialogOpen(false);
    }
  };

  const handleDeleteConfirm = () => {
    if (selectedManutencao) {
      setManutencoes(manutencoes.filter((m) => m.id !== selectedManutencao.id));
      setIsDeleteDialogOpen(false);
      setSelectedManutencao(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader title="Manutenções" showBackButton backTo="/admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Gestão de Manutenções
            </h1>
            <p className="text-gray-600">
              Gerencie todas as solicitações de manutenção dos imóveis
            </p>
          </div>
          <Button onClick={handleCreate}>
            <Plus className="w-4 h-4 mr-2" />
            Nova Manutenção
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stats.total}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Abertas</p>
                  <p className="text-3xl font-bold text-yellow-600">
                    {stats.abertas}
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
                  <p className="text-sm font-medium text-gray-600">
                    Em Andamento
                  </p>
                  <p className="text-3xl font-bold text-blue-600">
                    {stats.emAndamento}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Concluídas
                  </p>
                  <p className="text-3xl font-bold text-green-600">
                    {stats.concluidas}
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
                    Custo Total
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(stats.custoTotal)}
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Buscar</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="search"
                    placeholder="Título, inquilino ou imóvel..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label>Status</Label>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="aberta">Abertas</SelectItem>
                    <SelectItem value="em_andamento">Em Andamento</SelectItem>
                    <SelectItem value="concluida">Concluídas</SelectItem>
                    <SelectItem value="cancelada">Canceladas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Categoria</Label>
                <Select
                  value={filterCategoria}
                  onValueChange={setFilterCategoria}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todas</SelectItem>
                    <SelectItem value="eletrica">Elétrica</SelectItem>
                    <SelectItem value="hidraulica">Hidráulica</SelectItem>
                    <SelectItem value="pintura">Pintura</SelectItem>
                    <SelectItem value="estrutural">Estrutural</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Manutenções Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Manutenções</CardTitle>
            <CardDescription>
              {filteredManutencoes.length} manutenção(ões) encontrada(s)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Imóvel</TableHead>
                  <TableHead>Inquilino</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Prioridade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Custo</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredManutencoes.map((manutencao) => (
                  <TableRow key={manutencao.id}>
                    <TableCell className="font-medium">
                      {manutencao.id}
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{manutencao.titulo}</p>
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {manutencao.descricao}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {manutencao.imovel.titulo}
                        </p>
                        <p className="text-sm text-gray-600">
                          {manutencao.imovel.endereco}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {manutencao.inquilino.nome}
                        </p>
                        <p className="text-sm text-gray-600">
                          {manutencao.inquilino.telefone}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {getCategoriaLabel(manutencao.categoria)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={getPrioridadeColor(manutencao.prioridade)}
                      >
                        {getPrioridadeLabel(manutencao.prioridade)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(manutencao.status)}>
                        {getStatusLabel(manutencao.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(manutencao.dataSolicitacao).toLocaleDateString(
                        "pt-BR",
                      )}
                    </TableCell>
                    <TableCell>
                      {manutencao.custoFinal ? (
                        <span className="font-semibold">
                          {formatCurrency(manutencao.custoFinal)}
                        </span>
                      ) : manutencao.estimativaCusto ? (
                        <span className="text-gray-600">
                          ~{formatCurrency(manutencao.estimativaCusto)}
                        </span>
                      ) : (
                        "-"
                      )}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Ações</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleView(manutencao)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Ver Detalhes
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleEdit(manutencao)}
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleDelete(manutencao)}
                            className="text-red-600"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* View Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalhes da Manutenção</DialogTitle>
            <DialogDescription>
              Informações completas da manutenção #{selectedManutencao?.id}
            </DialogDescription>
          </DialogHeader>
          {selectedManutencao && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="w-5 h-5" />
                      Informações Gerais
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Título</Label>
                      <p className="font-semibold">
                        {selectedManutencao.titulo}
                      </p>
                    </div>
                    <div>
                      <Label>Status</Label>
                      <div className="mt-1">
                        <Badge
                          className={getStatusColor(selectedManutencao.status)}
                        >
                          {getStatusLabel(selectedManutencao.status)}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <Label>Categoria</Label>
                      <p>{getCategoriaLabel(selectedManutencao.categoria)}</p>
                    </div>
                    <div>
                      <Label>Prioridade</Label>
                      <div className="mt-1">
                        <Badge
                          className={getPrioridadeColor(
                            selectedManutencao.prioridade,
                          )}
                        >
                          {getPrioridadeLabel(selectedManutencao.prioridade)}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      Imóvel e Inquilino
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Imóvel</Label>
                      <p className="font-semibold">
                        {selectedManutencao.imovel.titulo}
                      </p>
                      <p className="text-sm text-gray-600">
                        {selectedManutencao.imovel.endereco}
                      </p>
                    </div>
                    <div>
                      <Label>Inquilino</Label>
                      <p className="font-semibold">
                        {selectedManutencao.inquilino.nome}
                      </p>
                      <p className="text-sm text-gray-600">
                        {selectedManutencao.inquilino.email}
                      </p>
                      <p className="text-sm text-gray-600">
                        {selectedManutencao.inquilino.telefone}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Descrição</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    {selectedManutencao.descricao}
                  </p>
                </CardContent>
              </Card>

              {selectedManutencao.responsavel && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Responsável
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>Nome:</strong>{" "}
                      {selectedManutencao.responsavel.nome}
                    </p>
                    <p>
                      <strong>Empresa:</strong>{" "}
                      {selectedManutencao.responsavel.empresa}
                    </p>
                    <p>
                      <strong>Telefone:</strong>{" "}
                      {selectedManutencao.responsavel.telefone}
                    </p>
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Datas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <Label>Solicitação</Label>
                      <p>
                        {new Date(
                          selectedManutencao.dataSolicitacao,
                        ).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    {selectedManutencao.dataInicio && (
                      <div>
                        <Label>Início</Label>
                        <p>
                          {new Date(
                            selectedManutencao.dataInicio,
                          ).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                    )}
                    {selectedManutencao.dataConclusao && (
                      <div>
                        <Label>Conclusão</Label>
                        <p>
                          {new Date(
                            selectedManutencao.dataConclusao,
                          ).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Custos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {selectedManutencao.estimativaCusto && (
                      <div>
                        <Label>Estimativa</Label>
                        <p>
                          {formatCurrency(selectedManutencao.estimativaCusto)}
                        </p>
                      </div>
                    )}
                    {selectedManutencao.custoFinal && (
                      <div>
                        <Label>Custo Final</Label>
                        <p className="font-semibold text-green-600">
                          {formatCurrency(selectedManutencao.custoFinal)}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {selectedManutencao.observacoes && (
                <Card>
                  <CardHeader>
                    <CardTitle>Observações</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {selectedManutencao.observacoes}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsViewDialogOpen(false)}
            >
              Fechar
            </Button>
            <Button
              onClick={() => {
                setIsViewDialogOpen(false);
                handleEdit(selectedManutencao!);
              }}
            >
              <Edit className="w-4 h-4 mr-2" />
              Editar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create/Edit Dialog */}
      <Dialog
        open={isCreateDialogOpen || isEditDialogOpen}
        onOpenChange={(open) => {
          setIsCreateDialogOpen(false);
          setIsEditDialogOpen(false);
          if (!open) setFormData({});
        }}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedManutencao ? "Editar" : "Nova"} Manutenção
            </DialogTitle>
            <DialogDescription>
              {selectedManutencao ? "Edite" : "Crie uma nova"} solicitação de
              manutenção
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="titulo">Título</Label>
                <Input
                  id="titulo"
                  value={formData.titulo}
                  onChange={(e) =>
                    setFormData({ ...formData, titulo: e.target.value })
                  }
                  placeholder="Ex: Vazamento na torneira"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="categoria">Categoria</Label>
                <Select
                  value={formData.categoria}
                  onValueChange={(value) =>
                    setFormData({ ...formData, categoria: value as any })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eletrica">Elétrica</SelectItem>
                    <SelectItem value="hidraulica">Hidráulica</SelectItem>
                    <SelectItem value="pintura">Pintura</SelectItem>
                    <SelectItem value="estrutural">Estrutural</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="prioridade">Prioridade</Label>
                <Select
                  value={formData.prioridade}
                  onValueChange={(value) =>
                    setFormData({ ...formData, prioridade: value as any })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baixa">Baixa</SelectItem>
                    <SelectItem value="media">Média</SelectItem>
                    <SelectItem value="alta">Alta</SelectItem>
                    <SelectItem value="urgente">Urgente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) =>
                    setFormData({ ...formData, status: value as any })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aberta">Aberta</SelectItem>
                    <SelectItem value="em_andamento">Em Andamento</SelectItem>
                    <SelectItem value="concluida">Concluída</SelectItem>
                    <SelectItem value="cancelada">Cancelada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="descricao">Descrição</Label>
              <Textarea
                id="descricao"
                value={formData.descricao}
                onChange={(e) =>
                  setFormData({ ...formData, descricao: e.target.value })
                }
                placeholder="Descreva o problema detalhadamente..."
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="estimativaCusto">
                  Estimativa de Custo (R$)
                </Label>
                <Input
                  id="estimativaCusto"
                  type="number"
                  value={formData.estimativaCusto || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      estimativaCusto: Number(e.target.value),
                    })
                  }
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="custoFinal">Custo Final (R$)</Label>
                <Input
                  id="custoFinal"
                  type="number"
                  value={formData.custoFinal || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      custoFinal: Number(e.target.value),
                    })
                  }
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="observacoes">Observações</Label>
              <Textarea
                id="observacoes"
                value={formData.observacoes}
                onChange={(e) =>
                  setFormData({ ...formData, observacoes: e.target.value })
                }
                placeholder="Observações adicionais..."
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsCreateDialogOpen(false);
                setIsEditDialogOpen(false);
                setFormData({});
              }}
            >
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
            <Button onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" />
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir a manutenção "
              {selectedManutencao?.titulo}"? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-red-600 hover:bg-red-700"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
