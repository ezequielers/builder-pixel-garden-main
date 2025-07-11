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
import { Separator } from "@/components/ui/separator";
import {
  Users,
  Home,
  Settings,
  LogOut,
  TrendingUp,
  DollarSign,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Shield,
  Activity,
} from "lucide-react";

export default function DashboardAdmin() {
  const [admin] = useState({
    nome: "Admin Sistema",
    email: "admin@homeflip.com",
    avatar: "",
  });

  const [stats] = useState({
    totalUsuarios: 1247,
    totalImoveis: 3456,
    totalTransacoes: 892,
    receitaMensal: 125000,
    novosCadastros: 45,
    imoveisPendentes: 23,
    suporteTickets: 12,
    taxaOcupacao: 87,
  });

  const [recentActivity] = useState([
    {
      id: 1,
      tipo: "novo_usuario",
      descricao: "Novo usuário cadastrado: Maria Silva",
      timestamp: "2024-01-15 10:30",
      status: "success",
    },
    {
      id: 2,
      tipo: "imovel_aprovado",
      descricao: "Imóvel aprovado: Apartamento Vila Olímpia",
      timestamp: "2024-01-15 09:15",
      status: "success",
    },
    {
      id: 3,
      tipo: "pagamento_pendente",
      descricao: "Pagamento pendente detectado: João Santos",
      timestamp: "2024-01-15 08:45",
      status: "warning",
    },
    {
      id: 4,
      tipo: "suporte_ticket",
      descricao: "Novo ticket de suporte: Problema com autenticação",
      timestamp: "2024-01-15 07:20",
      status: "info",
    },
  ]);

  const [pendingApprovals] = useState([
    {
      id: 1,
      tipo: "Propriedade",
      titulo: "Casa 3 quartos - Jardim Paulista",
      usuario: "Carlos Oliveira",
      dataEnvio: "2024-01-14",
    },
    {
      id: 2,
      tipo: "Usuário",
      titulo: "Verificação de documento",
      usuario: "Ana Costa",
      dataEnvio: "2024-01-14",
    },
    {
      id: 3,
      tipo: "Propriedade",
      titulo: "Apartamento 2 quartos - Centro",
      usuario: "Pedro Lima",
      dataEnvio: "2024-01-13",
    },
  ]);

  const handleLogout = () => {
    console.log("Admin logout");
  };

  const getActivityIcon = (tipo: string) => {
    switch (tipo) {
      case "novo_usuario":
        return <Users className="w-4 h-4" />;
      case "imovel_aprovado":
        return <Home className="w-4 h-4" />;
      case "pagamento_pendente":
        return <DollarSign className="w-4 h-4" />;
      case "suporte_ticket":
        return <FileText className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "info":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="flex items-center gap-2 text-homeflip-purple hover:text-homeflip-violet transition-colors"
              >
                <Home className="w-6 h-6" />
                <span className="text-xl font-bold">HomeFlip</span>
              </Link>
              <Badge variant="destructive" className="ml-2">
                <Shield className="w-3 h-3 mr-1" />
                Admin
              </Badge>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={admin.avatar} />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:block">{admin.nome}</span>
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
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard Administrativo
          </h1>
          <p className="text-gray-600">
            Gerencie usuários, imóveis e monitore as atividades da plataforma
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Usuários
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stats.totalUsuarios.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />+{stats.novosCadastros}{" "}
                    este mês
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
                    {stats.totalImoveis.toLocaleString()}
                  </p>
                  <p className="text-sm text-yellow-600 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {stats.imoveisPendentes} pendentes
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Receita Mensal
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    R$ {stats.receitaMensal.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +12% vs mês anterior
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Taxa Ocupação
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stats.taxaOcupacao}%
                  </p>
                  <p className="text-sm text-orange-600 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    {stats.suporteTickets} tickets abertos
                  </p>
                </div>
                <div className="p-3 bg-orange-100 rounded-full">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-4 mb-8">
          <Link to="/admin/usuarios">
            <Button className="bg-homeflip-purple hover:bg-[#4A0D5F] text-white w-full">
              <Users className="w-5 h-5 mr-2" />
              Usuários
            </Button>
          </Link>
          <Link to="/admin/imoveis">
            <Button variant="outline" className="w-full">
              <Home className="w-5 h-5 mr-2" />
              Imóveis
            </Button>
          </Link>
          <Link to="/admin/contratos">
            <Button variant="outline" className="w-full">
              <FileText className="w-5 h-5 mr-2" />
              Contratos
            </Button>
          </Link>
          <Link to="/admin/analises">
            <Button variant="outline" className="w-full">
              <CheckCircle className="w-5 h-5 mr-2" />
              Análises
            </Button>
          </Link>
          <Link to="/admin/pagamentos">
            <Button variant="outline" className="w-full">
              <DollarSign className="w-5 h-5 mr-2" />
              Pagamentos
            </Button>
          </Link>
          <Link to="/admin/taxas">
            <Button variant="outline" className="w-full">
              <BarChart3 className="w-5 h-5 mr-2" />
              Taxas
            </Button>
          </Link>
          <Link to="/admin/relatorios">
            <Button variant="outline" className="w-full">
              <TrendingUp className="w-5 h-5 mr-2" />
              Relatórios
            </Button>
          </Link>
          <Link to="/admin/manutencoes">
            <Button variant="outline" className="w-full">
              <TrendingUp className="w-5 h-5 mr-2" />
              Manutenções
            </Button>
          </Link>
          <Link to="/admin/configuracoes">
            <Button variant="outline" className="w-full">
              <Settings className="w-5 h-5 mr-2" />
              Config
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Approvals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Aprovações Pendentes
              </CardTitle>
              <CardDescription>
                Items aguardando revisão e aprovação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary">{item.tipo}</Badge>
                        <span className="text-sm text-gray-600">
                          {item.usuario}
                        </span>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        {item.titulo}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Enviado em{" "}
                        {new Date(item.dataEnvio).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <CheckCircle className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <AlertTriangle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <Button variant="ghost" className="w-full">
                Ver todas as aprovações pendentes
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Atividade Recente
              </CardTitle>
              <CardDescription>
                Últimas atividades na plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-full bg-gray-100 ${getActivityColor(activity.status)}`}
                    >
                      {getActivityIcon(activity.tipo)}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.descricao}
                      </p>
                      <p className="text-xs text-gray-600">
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <Button variant="ghost" className="w-full">
                Ver toda a atividade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
