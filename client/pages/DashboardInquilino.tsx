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
  Home,
  Settings,
  LogOut,
  Calendar,
  DollarSign,
  MapPin,
  Phone,
  User,
  FileText,
  AlertCircle,
  CheckCircle,
  Heart,
  Search,
} from "lucide-react";

export default function DashboardInquilino() {
  const [user] = useState({
    nome: "Maria Santos",
    email: "maria@email.com",
    avatar: "",
  });

  const [contrato] = useState({
    imovel: {
      titulo: "Apartamento 2 quartos - Centro",
      endereco: "Rua das Flores, 123 - Centro",
      valor: 2500,
    },
    proprietario: {
      nome: "João Silva",
      telefone: "(11) 99999-9999",
      email: "joao@email.com",
    },
    dataInicio: "2024-01-15",
    dataFim: "2025-01-14",
    diaVencimento: 5,
  });

  const [pagamentos] = useState([
    {
      id: 1,
      mes: "Janeiro 2024",
      valor: 2500,
      vencimento: "2024-01-05",
      dataPagamento: "2024-01-05",
      status: "Pago",
    },
    {
      id: 2,
      mes: "Fevereiro 2024",
      valor: 2500,
      vencimento: "2024-02-05",
      dataPagamento: "2024-02-05",
      status: "Pago",
    },
    {
      id: 3,
      mes: "Março 2024",
      valor: 2500,
      vencimento: "2024-03-05",
      dataPagamento: null,
      status: "Pendente",
    },
  ]);

  const [favoritos] = useState([
    {
      id: 1,
      titulo: "Casa 3 quartos - Jardim América",
      endereco: "Av. Brasil, 456 - Jardim América",
      valor: 3200,
      imagem: "/placeholder.svg",
    },
    {
      id: 2,
      titulo: "Apartamento 1 quarto - Vila Nova",
      endereco: "Rua São Paulo, 789 - Vila Nova",
      valor: 1800,
      imagem: "/placeholder.svg",
    },
  ]);

  const proximoVencimento = pagamentos.find((p) => p.status === "Pendente");

  const handleLogout = () => {
    // TODO: Implementar lógica de logout
    console.log("Logout");
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
              <Badge variant="secondary" className="ml-2">
                Inquilino
              </Badge>
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
                <DropdownMenuItem asChild>
                  <Link to="/dashboard-inquilino/contratos">
                    <FileText className="w-4 h-4 mr-2" />
                    Meu Contrato
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard-inquilino/configuracoes">
                    <Settings className="w-4 h-4 mr-2" />
                    Configurações
                  </Link>
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
            Bem-vinda, {user.nome}!
          </h1>
          <p className="text-gray-600">
            Acompanhe seu contrato e gerencie seus pagamentos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Alert for pending payment */}
            {proximoVencimento && (
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    <CardTitle className="text-orange-800">
                      Pagamento Pendente
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 mb-4">
                    Seu aluguel de {proximoVencimento.mes} vence em{" "}
                    {new Date(proximoVencimento.vencimento).toLocaleDateString(
                      "pt-BR",
                    )}
                    .
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                      Pagar Agora - R${" "}
                      {proximoVencimento.valor.toLocaleString("pt-BR")}
                    </Button>
                    <Button
                      variant="outline"
                      className="text-orange-600 border-orange-300 hover:bg-orange-50"
                    >
                      Negociar Valor
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Current Property */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Meu Imóvel Atual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {contrato.imovel.titulo}
                    </h3>
                    <p className="text-gray-600 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {contrato.imovel.endereco}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Valor do Aluguel</p>
                      <p className="font-semibold text-homeflip-violet text-lg">
                        R$ {contrato.imovel.valor.toLocaleString("pt-BR")}/mês
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Vencimento</p>
                      <p className="font-semibold">
                        Todo dia {contrato.diaVencimento}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Contato do Proprietário
                    </p>
                    <div className="space-y-1">
                      <p className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {contrato.proprietario.nome}
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {contrato.proprietario.telefone}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to="/dashboard-inquilino/contratos">
                        <FileText className="w-4 h-4 mr-2" />
                        Ver Contrato
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Contatar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Histórico de Pagamentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pagamentos.map((pagamento) => (
                    <div
                      key={pagamento.id}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        {pagamento.status === "Pago" ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-orange-600" />
                        )}
                        <div>
                          <p className="font-medium">{pagamento.mes}</p>
                          <p className="text-sm text-gray-600">
                            Vencimento:{" "}
                            {new Date(pagamento.vencimento).toLocaleDateString(
                              "pt-BR",
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          R$ {pagamento.valor.toLocaleString("pt-BR")}
                        </p>
                        <Badge
                          variant={
                            pagamento.status === "Pago"
                              ? "default"
                              : "secondary"
                          }
                          className={
                            pagamento.status === "Pago"
                              ? "bg-green-600 text-white"
                              : "bg-orange-100 text-orange-800"
                          }
                        >
                          {pagamento.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/imoveis">
                    <Search className="w-4 h-4 mr-2" />
                    Buscar Imóveis
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/dashboard-inquilino/pagamentos">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Histórico de Pagamentos
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/dashboard-inquilino/contratos">
                    <FileText className="w-4 h-4 mr-2" />
                    Meu Contrato
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to="/dashboard-inquilino/manutencoes">
                    <Settings className="w-4 h-4 mr-2" />
                    Solicitar Reparo
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Visita
                </Button>
              </CardContent>
            </Card>

            {/* Contract Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Informações do Contrato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Início do Contrato</p>
                  <p className="font-medium">
                    {new Date(contrato.dataInicio).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Fim do Contrato</p>
                  <p className="font-medium">
                    {new Date(contrato.dataFim).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tempo Restante</p>
                  <p className="font-medium">
                    {Math.ceil(
                      (new Date(contrato.dataFim).getTime() -
                        new Date().getTime()) /
                        (1000 * 60 * 60 * 24 * 30),
                    )}{" "}
                    meses
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Saved Properties */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Heart className="w-5 h-5" />
                  Imóveis Favoritos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {favoritos.map((imovel) => (
                    <div key={imovel.id} className="border rounded-lg p-3">
                      <h4 className="font-medium text-sm line-clamp-1">
                        {imovel.titulo}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-1">
                        {imovel.endereco}
                      </p>
                      <p className="font-semibold text-homeflip-violet mt-1">
                        R$ {imovel.valor.toLocaleString("pt-BR")}/mês
                      </p>
                    </div>
                  ))}
                  {favoritos.length === 0 && (
                    <p className="text-sm text-gray-600 text-center py-4">
                      Nenhum imóvel favoritado
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
