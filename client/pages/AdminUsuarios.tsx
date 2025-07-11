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
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Users,
  Home,
  Settings,
  LogOut,
  Search,
  Filter,
  MoreHorizontal,
  UserPlus,
  Edit,
  Ban,
  CheckCircle,
  XCircle,
  Shield,
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  tipo: "proprietario" | "inquilino" | "admin";
  status: "ativo" | "inativo" | "pendente" | "bloqueado";
  dataCadastro: string;
  ultimoLogin: string;
  totalImoveis?: number;
  valorMensalidade?: number;
  avatar?: string;
}

export default function AdminUsuarios() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [filterTipo, setFilterTipo] = useState("todos");
  const [selectedUser, setSelectedUser] = useState<Usuario | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [usuarios] = useState<Usuario[]>([
    {
      id: 1,
      nome: "João Silva",
      email: "joao@email.com",
      telefone: "(11) 99999-9999",
      tipo: "proprietario",
      status: "ativo",
      dataCadastro: "2024-01-10",
      ultimoLogin: "2024-01-15 09:30",
      totalImoveis: 3,
      valorMensalidade: 8500,
      avatar: "",
    },
    {
      id: 2,
      nome: "Maria Santos",
      email: "maria@email.com",
      telefone: "(11) 88888-8888",
      tipo: "inquilino",
      status: "ativo",
      dataCadastro: "2024-01-12",
      ultimoLogin: "2024-01-15 14:20",
      valorMensalidade: 2500,
      avatar: "",
    },
    {
      id: 3,
      nome: "Carlos Oliveira",
      email: "carlos@email.com",
      telefone: "(11) 77777-7777",
      tipo: "proprietario",
      status: "pendente",
      dataCadastro: "2024-01-14",
      ultimoLogin: "2024-01-14 16:45",
      totalImoveis: 1,
      avatar: "",
    },
    {
      id: 4,
      nome: "Ana Costa",
      email: "ana@email.com",
      telefone: "(11) 66666-6666",
      tipo: "inquilino",
      status: "bloqueado",
      dataCadastro: "2023-12-20",
      ultimoLogin: "2024-01-10 11:15",
      avatar: "",
    },
    {
      id: 5,
      nome: "Admin Teste",
      email: "admin@homeflip.com",
      telefone: "(11) 55555-5555",
      tipo: "admin",
      status: "ativo",
      dataCadastro: "2023-01-01",
      ultimoLogin: "2024-01-15 15:30",
      avatar: "",
    },
  ]);

  const filteredUsuarios = usuarios.filter((usuario) => {
    const matchesSearch =
      usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "todos" || usuario.status === filterStatus;
    const matchesTipo = filterTipo === "todos" || usuario.tipo === filterTipo;
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
      case "bloqueado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "proprietario":
        return "bg-blue-100 text-blue-800";
      case "inquilino":
        return "bg-purple-100 text-purple-800";
      case "admin":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleUserAction = (action: string, userId: number) => {
    console.log(`Action: ${action} for user: ${userId}`);
    // Implementar ações do usuário
  };

  const handleViewUser = (usuario: Usuario) => {
    setSelectedUser(usuario);
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
            Gerenciamento de Usuários
          </h1>
          <p className="text-gray-600">
            Gerencie todos os usuários da plataforma HomeFlip
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {usuarios.length}
                </p>
                <p className="text-sm text-gray-600">Total de Usuários</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">
                  {usuarios.filter((u) => u.tipo === "proprietario").length}
                </p>
                <p className="text-sm text-gray-600">Proprietários</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">
                  {usuarios.filter((u) => u.tipo === "inquilino").length}
                </p>
                <p className="text-sm text-gray-600">Inquilinos</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">
                  {usuarios.filter((u) => u.status === "pendente").length}
                </p>
                <p className="text-sm text-gray-600">Pendentes</p>
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
                <Label htmlFor="search">Buscar usuário</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="search"
                    placeholder="Nome ou email..."
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
                    <SelectItem value="bloqueado">Bloqueado</SelectItem>
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
                    <SelectItem value="proprietario">Proprietário</SelectItem>
                    <SelectItem value="inquilino">Inquilino</SelectItem>
                    <SelectItem value="admin">Administrador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Lista de Usuários</CardTitle>
              <CardDescription>
                {filteredUsuarios.length} usuário(s) encontrado(s)
              </CardDescription>
            </div>
            <Button>
              <UserPlus className="w-4 h-4 mr-2" />
              Novo Usuário
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Usuário</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead>Último Login</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsuarios.map((usuario) => (
                  <TableRow key={usuario.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={usuario.avatar} />
                          <AvatarFallback>
                            {usuario.nome
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{usuario.nome}</p>
                          <p className="text-sm text-gray-600">
                            {usuario.email}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTipoColor(usuario.tipo)}>
                        {usuario.tipo === "proprietario"
                          ? "Proprietário"
                          : usuario.tipo === "inquilino"
                            ? "Inquilino"
                            : "Admin"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(usuario.status)}>
                        {usuario.status === "ativo"
                          ? "Ativo"
                          : usuario.status === "inativo"
                            ? "Inativo"
                            : usuario.status === "pendente"
                              ? "Pendente"
                              : "Bloqueado"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(usuario.dataCadastro).toLocaleDateString(
                        "pt-BR",
                      )}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {usuario.ultimoLogin}
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
                            onClick={() => handleViewUser(usuario)}
                          >
                            Ver Detalhes
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleUserAction("edit", usuario.id)}
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          {usuario.status === "ativo" ? (
                            <DropdownMenuItem
                              onClick={() =>
                                handleUserAction("block", usuario.id)
                              }
                            >
                              <Ban className="w-4 h-4 mr-2" />
                              Bloquear
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem
                              onClick={() =>
                                handleUserAction("activate", usuario.id)
                              }
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Ativar
                            </DropdownMenuItem>
                          )}
                          {usuario.status === "pendente" && (
                            <>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleUserAction("approve", usuario.id)
                                }
                              >
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Aprovar
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleUserAction("reject", usuario.id)
                                }
                              >
                                <XCircle className="w-4 h-4 mr-2" />
                                Rejeitar
                              </DropdownMenuItem>
                            </>
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

      {/* User Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Detalhes do Usuário</DialogTitle>
            <DialogDescription>
              Informações completas do usuário selecionado
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selectedUser.avatar} />
                  <AvatarFallback className="text-lg">
                    {selectedUser.nome
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{selectedUser.nome}</h3>
                  <div className="flex gap-2 mt-1">
                    <Badge className={getTipoColor(selectedUser.tipo)}>
                      {selectedUser.tipo === "proprietario"
                        ? "Proprietário"
                        : selectedUser.tipo === "inquilino"
                          ? "Inquilino"
                          : "Admin"}
                    </Badge>
                    <Badge className={getStatusColor(selectedUser.status)}>
                      {selectedUser.status === "ativo"
                        ? "Ativo"
                        : selectedUser.status === "inativo"
                          ? "Inativo"
                          : selectedUser.status === "pendente"
                            ? "Pendente"
                            : "Bloqueado"}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Label>
                    <p className="mt-1">{selectedUser.email}</p>
                  </div>
                  <div>
                    <Label className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Telefone
                    </Label>
                    <p className="mt-1">{selectedUser.telefone}</p>
                  </div>
                  <div>
                    <Label className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Data de Cadastro
                    </Label>
                    <p className="mt-1">
                      {new Date(selectedUser.dataCadastro).toLocaleDateString(
                        "pt-BR",
                      )}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>Último Login</Label>
                    <p className="mt-1">{selectedUser.ultimoLogin}</p>
                  </div>
                  {selectedUser.totalImoveis !== undefined && (
                    <div>
                      <Label>Total de Imóveis</Label>
                      <p className="mt-1">{selectedUser.totalImoveis}</p>
                    </div>
                  )}
                  {selectedUser.valorMensalidade && (
                    <div>
                      <Label>
                        {selectedUser.tipo === "proprietario"
                          ? "Receita Mensal"
                          : "Valor do Aluguel"}
                      </Label>
                      <p className="mt-1">
                        R$ {selectedUser.valorMensalidade.toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Fechar
            </Button>
            <Button>Editar Usuário</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
