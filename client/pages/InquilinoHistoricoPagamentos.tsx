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
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Clock,
  Download,
  Eye,
  Calendar,
  CreditCard,
  Receipt,
} from "lucide-react";

interface Pagamento {
  id: string;
  mesReferencia: string;
  valorAluguel: number;
  valorTaxa: number;
  valorTotal: number;
  dataVencimento: string;
  dataPagamento?: string;
  status: "pago" | "pendente" | "atrasado" | "processando";
  metodoPagamento?: string;
  comprovante?: string;
  observacoes?: string;
}

export default function InquilinoHistoricoPagamentos() {
  const [user] = useState({
    nome: "Maria Santos",
    email: "maria@email.com",
    avatar: "",
  });

  const [selectedPagamento, setSelectedPagamento] = useState<Pagamento | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [pagamentos] = useState<Pagamento[]>([
    {
      id: "PAG001",
      mesReferencia: "Janeiro 2024",
      valorAluguel: 2500,
      valorTaxa: 125,
      valorTotal: 2625,
      dataVencimento: "2024-01-05",
      dataPagamento: "2024-01-05",
      status: "pago",
      metodoPagamento: "PIX",
      comprovante: "comprovante_jan_2024.pdf",
    },
    {
      id: "PAG002",
      mesReferencia: "Fevereiro 2024",
      valorAluguel: 2500,
      valorTaxa: 125,
      valorTotal: 2625,
      dataVencimento: "2024-02-05",
      dataPagamento: "2024-02-05",
      status: "pago",
      metodoPagamento: "Transferência",
      comprovante: "comprovante_fev_2024.pdf",
    },
    {
      id: "PAG003",
      mesReferencia: "Março 2024",
      valorAluguel: 2500,
      valorTaxa: 125,
      valorTotal: 2625,
      dataVencimento: "2024-03-05",
      dataPagamento: "2024-03-07",
      status: "pago",
      metodoPagamento: "PIX",
      comprovante: "comprovante_mar_2024.pdf",
      observacoes: "Pagamento realizado com 2 dias de atraso",
    },
    {
      id: "PAG004",
      mesReferencia: "Abril 2024",
      valorAluguel: 2500,
      valorTaxa: 125,
      valorTotal: 2625,
      dataVencimento: "2024-04-05",
      status: "pendente",
    },
    {
      id: "PAG005",
      mesReferencia: "Maio 2024",
      valorAluguel: 2500,
      valorTaxa: 125,
      valorTotal: 2625,
      dataVencimento: "2024-05-05",
      status: "pendente",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pago":
        return "bg-green-100 text-green-800";
      case "pendente":
        return "bg-yellow-100 text-yellow-800";
      case "atrasado":
        return "bg-red-100 text-red-800";
      case "processando":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pago":
        return "Pago";
      case "pendente":
        return "Pendente";
      case "atrasado":
        return "Atrasado";
      case "processando":
        return "Processando";
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

  const calculateStats = () => {
    const totalPago = pagamentos
      .filter((p) => p.status === "pago")
      .reduce((sum, p) => sum + p.valorTotal, 0);
    const pagosCount = pagamentos.filter((p) => p.status === "pago").length;
    const pendentesCount = pagamentos.filter(
      (p) => p.status === "pendente",
    ).length;
    const atrasadosCount = pagamentos.filter(
      (p) => p.status === "atrasado",
    ).length;

    return { totalPago, pagosCount, pendentesCount, atrasadosCount };
  };

  const stats = calculateStats();

  const handleViewPagamento = (pagamento: Pagamento) => {
    setSelectedPagamento(pagamento);
    setIsDialogOpen(true);
  };

  const isVencido = (dataVencimento: string, status: string) => {
    if (status === "pago") return false;
    const hoje = new Date();
    const vencimento = new Date(dataVencimento);
    return hoje > vencimento;
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
              Histórico de Pagamentos
            </h1>
            <p className="text-gray-600">
              Acompanhe todos os seus pagamentos de aluguel
            </p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar Histórico
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Pago
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(stats.totalPago)}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {stats.pagosCount} pagamentos
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
                  <p className="text-2xl font-bold text-yellow-600">
                    {stats.pendentesCount}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">pagamentos</p>
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
                  <p className="text-sm font-medium text-gray-600">Em Atraso</p>
                  <p className="text-2xl font-bold text-red-600">
                    {stats.atrasadosCount}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">pagamentos</p>
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
                    {formatCurrency(2625)}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">atual</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payments Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="w-5 h-5" />
              Histórico de Pagamentos
            </CardTitle>
            <CardDescription>
              Todos os seus pagamentos de aluguel organizados por mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mês de Referência</TableHead>
                  <TableHead>Valor do Aluguel</TableHead>
                  <TableHead>Taxa de Serviço</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Data Vencimento</TableHead>
                  <TableHead>Data Pagamento</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pagamentos.map((pagamento) => (
                  <TableRow key={pagamento.id}>
                    <TableCell className="font-medium">
                      {pagamento.mesReferencia}
                    </TableCell>
                    <TableCell>
                      {formatCurrency(pagamento.valorAluguel)}
                    </TableCell>
                    <TableCell className="text-orange-600">
                      {formatCurrency(pagamento.valorTaxa)}
                    </TableCell>
                    <TableCell className="font-semibold">
                      {formatCurrency(pagamento.valorTotal)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {new Date(pagamento.dataVencimento).toLocaleDateString(
                          "pt-BR",
                        )}
                        {isVencido(
                          pagamento.dataVencimento,
                          pagamento.status,
                        ) && <AlertTriangle className="w-4 h-4 text-red-500" />}
                      </div>
                    </TableCell>
                    <TableCell>
                      {pagamento.dataPagamento ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {new Date(pagamento.dataPagamento).toLocaleDateString(
                            "pt-BR",
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(pagamento.status)}>
                        {getStatusLabel(pagamento.status)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleViewPagamento(pagamento)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        {pagamento.status === "pendente" && (
                          <Button size="sm">
                            <CreditCard className="w-4 h-4 mr-1" />
                            Pagar
                          </Button>
                        )}
                        {pagamento.comprovante && (
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Payment Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Detalhes do Pagamento</DialogTitle>
            <DialogDescription>
              Informações completas do pagamento selecionado
            </DialogDescription>
          </DialogHeader>
          {selectedPagamento && (
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
                      <label className="text-sm font-medium text-gray-600">
                        Mês de Referência
                      </label>
                      <p className="font-semibold">
                        {selectedPagamento.mesReferencia}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Status
                      </label>
                      <div className="mt-1">
                        <Badge
                          className={getStatusColor(selectedPagamento.status)}
                        >
                          {getStatusLabel(selectedPagamento.status)}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Data de Vencimento
                      </label>
                      <p>
                        {new Date(
                          selectedPagamento.dataVencimento,
                        ).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                    {selectedPagamento.dataPagamento && (
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Data de Pagamento
                        </label>
                        <p>
                          {new Date(
                            selectedPagamento.dataPagamento,
                          ).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Valores</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Valor do Aluguel:</span>
                      <span className="font-semibold">
                        {formatCurrency(selectedPagamento.valorAluguel)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxa de Serviço:</span>
                      <span className="font-semibold text-orange-600">
                        {formatCurrency(selectedPagamento.valorTaxa)}
                      </span>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-lg">
                          {formatCurrency(selectedPagamento.valorTotal)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {selectedPagamento.metodoPagamento && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Método de Pagamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">
                      {selectedPagamento.metodoPagamento}
                    </p>
                  </CardContent>
                </Card>
              )}

              {selectedPagamento.observacoes && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Observações</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {selectedPagamento.observacoes}
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
            {selectedPagamento?.comprovante && (
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Baixar Comprovante
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
