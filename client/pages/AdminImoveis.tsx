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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Home,
  Settings,
  LogOut,
  Search,
  MoreHorizontal,
  Plus,
  Edit,
  CheckCircle,
  XCircle,
  Shield,
  ArrowLeft,
  MapPin,
  DollarSign,
  Calendar,
  User,
  Eye,
  Bed,
  Bath,
  Car,
  Image as ImageIcon,
} from "lucide-react";

interface Imovel {
  id: number;
  titulo: string;
  endereco: string;
  tipo: "casa" | "apartamento" | "comercial";
  valor: number;
  quartos: number;
  banheiros: number;
  garagem: number;
  area: number;
  status: "ativo" | "inativo" | "pendente" | "rejeitado";
  proprietario: {
    nome: string;
    email: string;
  };
  dataCadastro: string;
  dataPublicacao?: string;
  visualizacoes: number;
  interessados: number;
  imagens: string[];
}

export default function AdminImoveis() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [filterTipo, setFilterTipo] = useState("todos");
  const [selectedImovel, setSelectedImovel] = useState<Imovel | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [imoveis] = useState<Imovel[]>([
    {
      id: 1,
      titulo: "Apartamento Vila Olímpia",
      endereco: "Rua dos Pinheiros, 123 - Vila Olímpia, SP",
      tipo: "apartamento",
      valor: 3500,
      quartos: 2,
      banheiros: 2,
      garagem: 1,
      area: 65,
      status: "ativo",
      proprietario: {
        nome: "João Silva",
        email: "joao@email.com",
      },
      dataCadastro: "2024-01-10",
      dataPublicacao: "2024-01-12",
      visualizacoes: 245,
      interessados: 12,
      imagens: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      ],
    },
    {
      id: 2,
      titulo: "Casa Jardim Paulista",
      endereco: "Av. Paulista, 456 - Jardim Paulista, SP",
      tipo: "casa",
      valor: 5500,
      quartos: 3,
      banheiros: 3,
      garagem: 2,
      area: 120,
      status: "pendente",
      proprietario: {
        nome: "Carlos Oliveira",
        email: "carlos@email.com",
      },
      dataCadastro: "2024-01-14",
      visualizacoes: 0,
      interessados: 0,
      imagens: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      ],
    },
    {
      id: 3,
      titulo: "Loja Comercial Centro",
      endereco: "Rua Comercial, 789 - Centro, SP",
      tipo: "comercial",
      valor: 8000,
      quartos: 0,
      banheiros: 2,
      garagem: 0,
      area: 200,
      status: "ativo",
      proprietario: {
        nome: "Maria Santos",
        email: "maria@email.com",
      },
      dataCadastro: "2024-01-08",
      dataPublicacao: "2024-01-10",
      visualizacoes: 89,
      interessados: 5,
      imagens: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      ],
    },
    {
      id: 4,
      titulo: "Apartamento Cobertura",
      endereco: "Rua das Flores, 321 - Moema, SP",
      tipo: "apartamento",
      valor: 12000,
      quartos: 4,
      banheiros: 4,
      garagem: 3,
      area: 180,
      status: "rejeitado",
      proprietario: {
        nome: "Pedro Lima",
        email: "pedro@email.com",
      },
      dataCadastro: "2024-01-13",
      visualizacoes: 0,
      interessados: 0,
      imagens: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
      ],
    },
  ]);

  const filteredImoveis = imoveis.filter((imovel) => {
    const matchesSearch =
      imovel.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      imovel.endereco.toLowerCase().includes(searchTerm.toLowerCase()) ||
      imovel.proprietario.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "todos" || imovel.status === filterStatus;
    const matchesTipo = filterTipo === "todos" || imovel.tipo === filterTipo;
    return matchesSearch && matchesStatus && matchesTipo;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativo":
        return "bg-green-100 text-green-800";
      case "inativo":
        return "bg-gray-100 text-gray-800";
      case "pendente":
        return "bg-yellow-100 text-yellow-800";
      case "rejeitado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "casa":
        return "bg-blue-100 text-blue-800";
      case "apartamento":
        return "bg-purple-100 text-purple-800";
      case "comercial":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleImovelAction = (action: string, imovelId: number) => {
    console.log(`Action: ${action} for imovel: ${imovelId}`);
    // Implementar ações do imóvel
  };

  const handleViewImovel = (imovel: Imovel) => {
    setSelectedImovel(imovel);
    setIsDialogOpen(true);
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gerenciamento de Imóveis
          </h1>
          <p className="text-gray-600">
            Gerencie todos os imóveis cadastrados na plataforma
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {imoveis.length}
                </p>
                <p className="text-sm text-gray-600">Total de Imóveis</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {imoveis.filter((i) => i.status === "ativo").length}
                </p>
                <p className="text-sm text-gray-600">Ativos</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">
                  {imoveis.filter((i) => i.status === "pendente").length}
                </p>
                <p className="text-sm text-gray-600">Pendentes</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">
                  {imoveis.reduce((sum, i) => sum + i.visualizacoes, 0)}
                </p>
                <p className="text-sm text-gray-600">Total Visualizações</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Buscar imóvel</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="search"
                    placeholder="Título, endereço ou proprietário..."
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
                    <SelectItem value="ativo">Ativo</SelectItem>
                    <SelectItem value="inativo">Inativo</SelectItem>
                    <SelectItem value="pendente">Pendente</SelectItem>
                    <SelectItem value="rejeitado">Rejeitado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Tipo</Label>
                <Select value={filterTipo} onValueChange={setFilterTipo}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="comercial">Comercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Properties Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Lista de Imóveis</CardTitle>
              <CardDescription>
                {filteredImoveis.length} imóvel(is) encontrado(s)
              </CardDescription>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Imóvel
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Imóvel</TableHead>
                  <TableHead>Proprietário</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredImoveis.map((imovel) => (
                  <TableRow key={imovel.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={imovel.imagens[0]}
                          alt={imovel.titulo}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium">{imovel.titulo}</p>
                          <p className="text-sm text-gray-600 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {imovel.endereco}
                          </p>
                          <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Bed className="w-3 h-3" />
                              {imovel.quartos}
                            </span>
                            <span className="flex items-center gap-1">
                              <Bath className="w-3 h-3" />
                              {imovel.banheiros}
                            </span>
                            {imovel.garagem > 0 && (
                              <span className="flex items-center gap-1">
                                <Car className="w-3 h-3" />
                                {imovel.garagem}
                              </span>
                            )}
                            <span>{imovel.area}m²</span>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {imovel.proprietario.nome}
                        </p>
                        <p className="text-sm text-gray-600">
                          {imovel.proprietario.email}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTipoColor(imovel.tipo)}>
                        {imovel.tipo === "casa"
                          ? "Casa"
                          : imovel.tipo === "apartamento"
                            ? "Apartamento"
                            : "Comercial"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <p className="font-semibold text-homeflip-violet">
                        R$ {imovel.valor.toLocaleString()}/mês
                      </p>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(imovel.status)}>
                        {imovel.status === "ativo"
                          ? "Ativo"
                          : imovel.status === "inativo"
                            ? "Inativo"
                            : imovel.status === "pendente"
                              ? "Pendente"
                              : "Rejeitado"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {imovel.visualizacoes} visualizações
                        </p>
                        <p className="text-gray-600">
                          {imovel.interessados} interessados
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleViewImovel(imovel)}
                          >
                            Ver Detalhes
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              handleImovelAction("edit", imovel.id)
                            }
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          {imovel.status === "pendente" && (
                            <>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleImovelAction("approve", imovel.id)
                                }
                              >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Aprovar
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleImovelAction("reject", imovel.id)
                                }
                              >
                                <XCircle className="w-4 h-4 mr-2" />
                                Rejeitar
                              </DropdownMenuItem>
                            </>
                          )}
                          {imovel.status === "ativo" && (
                            <DropdownMenuItem
                              onClick={() =>
                                handleImovelAction("deactivate", imovel.id)
                              }
                            >
                              Desativar
                            </DropdownMenuItem>
                          )}
                          {imovel.status === "inativo" && (
                            <DropdownMenuItem
                              onClick={() =>
                                handleImovelAction("activate", imovel.id)
                              }
                            >
                              Ativar
                            </DropdownMenuItem>
                          )}
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

      {/* Property Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalhes do Imóvel</DialogTitle>
            <DialogDescription>
              Informações completas do imóvel selecionado
            </DialogDescription>
          </DialogHeader>
          {selectedImovel && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedImovel.imagens[0]}
                    alt={selectedImovel.titulo}
                    className="w-full h-48 rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {selectedImovel.titulo}
                    </h3>
                    <p className="text-gray-600 flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {selectedImovel.endereco}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getTipoColor(selectedImovel.tipo)}>
                      {selectedImovel.tipo === "casa"
                        ? "Casa"
                        : selectedImovel.tipo === "apartamento"
                          ? "Apartamento"
                          : "Comercial"}
                    </Badge>
                    <Badge className={getStatusColor(selectedImovel.status)}>
                      {selectedImovel.status === "ativo"
                        ? "Ativo"
                        : selectedImovel.status === "inativo"
                          ? "Inativo"
                          : selectedImovel.status === "pendente"
                            ? "Pendente"
                            : "Rejeitado"}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-homeflip-violet">
                      R$ {selectedImovel.valor.toLocaleString()}/mês
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Características</h4>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <Bed className="w-4 h-4" />
                      {selectedImovel.quartos} quartos
                    </p>
                    <p className="flex items-center gap-2">
                      <Bath className="w-4 h-4" />
                      {selectedImovel.banheiros} banheiros
                    </p>
                    {selectedImovel.garagem > 0 && (
                      <p className="flex items-center gap-2">
                        <Car className="w-4 h-4" />
                        {selectedImovel.garagem} vagas
                      </p>
                    )}
                    <p className="flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      {selectedImovel.area}m²
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Proprietário</h4>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {selectedImovel.proprietario.nome}
                    </p>
                    <p className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      {selectedImovel.proprietario.email}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Estatísticas</h4>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {selectedImovel.visualizacoes} visualizações
                    </p>
                    <p className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {selectedImovel.interessados} interessados
                    </p>
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Cadastrado em{" "}
                      {new Date(selectedImovel.dataCadastro).toLocaleDateString(
                        "pt-BR",
                      )}
                    </p>
                    {selectedImovel.dataPublicacao && (
                      <p className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Publicado em{" "}
                        {new Date(
                          selectedImovel.dataPublicacao,
                        ).toLocaleDateString("pt-BR")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Fechar
            </Button>
            <Button>Editar Imóvel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
