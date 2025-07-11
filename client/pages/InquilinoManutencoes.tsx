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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Home,
  Settings,
  LogOut,
  ArrowLeft,
  Plus,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Wrench,
  Camera,
  Calendar,
} from "lucide-react";

interface SolicitacaoManutencao {
  id: string;
  titulo: string;
  descricao: string;
  categoria: "eletrica" | "hidraulica" | "pintura" | "estrutural" | "outros";
  prioridade: "baixa" | "media" | "alta" | "urgente";
  status: "aberta" | "em_andamento" | "concluida" | "cancelada";
  dataSolicitacao: string;
  dataInicio?: string;
  dataConclusao?: string;
  responsavel?: string;
  observacoes?: string;
  imagens?: string[];
  estimativaCusto?: number;
}

export default function InquilinoManutencoes() {
  const [user] = useState({
    nome: "Maria Santos",
    email: "maria@email.com",
    avatar: "",
  });

  const [selectedSolicitacao, setSelectedSolicitacao] =
    useState<SolicitacaoManutencao | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isNewDialogOpen, setIsNewDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    categoria: "",
    prioridade: "",
  });

  const [solicitacoes] = useState<SolicitacaoManutencao[]>([
    {
      id: "MAN001",
      titulo: "Vazamento na torneira da cozinha",
      descricao:
        "A torneira da cozinha está com vazamento constante. O problema começou há 3 dias e está desperdiçando muita água.",
      categoria: "hidraulica",
      prioridade: "media",
      status: "em_andamento",
      dataSolicitacao: "2024-01-10",
      dataInicio: "2024-01-12",
      responsavel: "João da Silva - Encanador",
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
      dataSolicitacao: "2023-12-15",
      dataInicio: "2023-12-20",
      dataConclusao: "2023-12-22",
      responsavel: "Pedro Lima - Pintor",
      estimativaCusto: 350,
      observacoes: "Pintura realizada com tinta de alta qualidade",
    },
    {
      id: "MAN004",
      titulo: "Trinca no teto do banheiro",
      descricao:
        "Apareceu uma trinca no teto do banheiro que está se estendendo. Pode estar relacionada a infiltração.",
      categoria: "estrutural",
      prioridade: "urgente",
      status: "aberta",
      dataSolicitacao: "2024-01-14",
    },
  ]);

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
    const total = solicitacoes.length;
    const abertas = solicitacoes.filter((s) => s.status === "aberta").length;
    const emAndamento = solicitacoes.filter(
      (s) => s.status === "em_andamento",
    ).length;
    const concluidas = solicitacoes.filter(
      (s) => s.status === "concluida",
    ).length;

    return { total, abertas, emAndamento, concluidas };
  };

  const stats = calculateStats();

  const handleViewSolicitacao = (solicitacao: SolicitacaoManutencao) => {
    setSelectedSolicitacao(solicitacao);
    setIsDialogOpen(true);
  };

  const handleSubmitNew = () => {
    console.log("Nova solicitação:", formData);
    setIsNewDialogOpen(false);
    setFormData({
      titulo: "",
      descricao: "",
      categoria: "",
      prioridade: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/dashboard-inquilino"
                className="flex items-center gap-2 text-gray-600 hover:text-homeflip-purple transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar ao Dashboard
              </Link>
              <div className="flex items-center gap-2">
                <Home className="w-6 h-6 text-homeflip-purple" />
                <span className="text-xl font-bold text-homeflip-purple">
                  HomeFlip
                </span>
                <Badge variant="secondary" className="ml-2">
                  Inquilino
                </Badge>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>
                      {user.nome
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:block">{user.nome}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
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
              Solicitações de Manutenção
            </h1>
            <p className="text-gray-600">
              Gerencie suas solicitações de reparo e manutenção
            </p>
          </div>
          <Dialog open={isNewDialogOpen} onOpenChange={setIsNewDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nova Solicitação
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Nova Solicitação de Manutenção</DialogTitle>
                <DialogDescription>
                  Descreva o problema que precisa ser resolvido
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="titulo">Título do Problema</Label>
                  <Input
                    id="titulo"
                    value={formData.titulo}
                    onChange={(e) =>
                      setFormData({ ...formData, titulo: e.target.value })
                    }
                    placeholder="Ex: Vazamento na torneira da cozinha"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição Detalhada</Label>
                  <Textarea
                    id="descricao"
                    value={formData.descricao}
                    onChange={(e) =>
                      setFormData({ ...formData, descricao: e.target.value })
                    }
                    placeholder="Descreva o problema em detalhes..."
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="categoria">Categoria</Label>
                    <Select
                      value={formData.categoria}
                      onValueChange={(value) =>
                        setFormData({ ...formData, categoria: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a categoria" />
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
                  <div className="space-y-2">
                    <Label htmlFor="prioridade">Prioridade</Label>
                    <Select
                      value={formData.prioridade}
                      onValueChange={(value) =>
                        setFormData({ ...formData, prioridade: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a prioridade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="baixa">Baixa</SelectItem>
                        <SelectItem value="media">Média</SelectItem>
                        <SelectItem value="alta">Alta</SelectItem>
                        <SelectItem value="urgente">Urgente</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Adicionar Fotos (Opcional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Clique para adicionar fotos do problema
                    </p>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsNewDialogOpen(false)}
                >
                  Cancelar
                </Button>
                <Button onClick={handleSubmitNew}>
                  <Wrench className="w-4 h-4 mr-2" />
                  Enviar Solicitação
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Solicitações
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
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
                  <p className="text-2xl font-bold text-yellow-600">
                    {stats.abertas}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">aguardando</p>
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
                  <p className="text-2xl font-bold text-blue-600">
                    {stats.emAndamento}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">em execução</p>
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
                  <p className="text-2xl font-bold text-green-600">
                    {stats.concluidas}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">finalizadas</p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Solicitações List */}
        <div className="space-y-6">
          {solicitacoes.map((solicitacao) => (
            <Card
              key={solicitacao.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {solicitacao.titulo}
                      </h3>
                      <Badge className={getStatusColor(solicitacao.status)}>
                        {getStatusLabel(solicitacao.status)}
                      </Badge>
                      <Badge
                        className={getPrioridadeColor(solicitacao.prioridade)}
                      >
                        {getPrioridadeLabel(solicitacao.prioridade)}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {solicitacao.descricao}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Solicitado em{" "}
                        {new Date(
                          solicitacao.dataSolicitacao,
                        ).toLocaleDateString("pt-BR")}
                      </span>
                      <span>
                        Categoria: {getCategoriaLabel(solicitacao.categoria)}
                      </span>
                      {solicitacao.estimativaCusto && (
                        <span>
                          Estimativa:{" "}
                          {formatCurrency(solicitacao.estimativaCusto)}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => handleViewSolicitacao(solicitacao)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalhes
                  </Button>
                </div>
                {solicitacao.responsavel && (
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      <strong>Responsável:</strong> {solicitacao.responsavel}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Solicitação Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalhes da Solicitação</DialogTitle>
            <DialogDescription>
              Informações completas da solicitação #{selectedSolicitacao?.id}
            </DialogDescription>
          </DialogHeader>
          {selectedSolicitacao && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Informações Gerais
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Título</Label>
                      <p className="font-semibold">
                        {selectedSolicitacao.titulo}
                      </p>
                    </div>
                    <div>
                      <Label>Status</Label>
                      <div className="mt-1">
                        <Badge
                          className={getStatusColor(selectedSolicitacao.status)}
                        >
                          {getStatusLabel(selectedSolicitacao.status)}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <Label>Categoria</Label>
                      <p>{getCategoriaLabel(selectedSolicitacao.categoria)}</p>
                    </div>
                    <div>
                      <Label>Prioridade</Label>
                      <div className="mt-1">
                        <Badge
                          className={getPrioridadeColor(
                            selectedSolicitacao.prioridade,
                          )}
                        >
                          {getPrioridadeLabel(selectedSolicitacao.prioridade)}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Datas e Responsável
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Data da Solicitação</Label>
                      <p>
                        {new Date(
                          selectedSolicitacao.dataSolicitacao,
                        ).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    {selectedSolicitacao.dataInicio && (
                      <div>
                        <Label>Data de Início</Label>
                        <p>
                          {new Date(
                            selectedSolicitacao.dataInicio,
                          ).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                    )}
                    {selectedSolicitacao.dataConclusao && (
                      <div>
                        <Label>Data de Conclusão</Label>
                        <p>
                          {new Date(
                            selectedSolicitacao.dataConclusao,
                          ).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                    )}
                    {selectedSolicitacao.responsavel && (
                      <div>
                        <Label>Responsável</Label>
                        <p className="font-semibold">
                          {selectedSolicitacao.responsavel}
                        </p>
                      </div>
                    )}
                    {selectedSolicitacao.estimativaCusto && (
                      <div>
                        <Label>Estimativa de Custo</Label>
                        <p className="text-lg font-semibold text-green-600">
                          {formatCurrency(selectedSolicitacao.estimativaCusto)}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Descrição</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    {selectedSolicitacao.descricao}
                  </p>
                </CardContent>
              </Card>

              {selectedSolicitacao.observacoes && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Observações</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {selectedSolicitacao.observacoes}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Fechar
            </Button>
            {selectedSolicitacao?.status === "aberta" && (
              <Button variant="destructive">
                <XCircle className="w-4 h-4 mr-2" />
                Cancelar Solicitação
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
