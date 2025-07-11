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
import { Switch } from "@/components/ui/switch";
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
import AdminHeader from "@/components/AdminHeader";
import {
  CreditCard,
  DollarSign,
  Settings,
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Eye,
  RefreshCw,
  Download,
  Plus,
  Edit,
} from "lucide-react";

export default function AdminPagamentos() {
  const [selectedGateway, setSelectedGateway] = useState("stripe");
  const [isTestMode, setIsTestMode] = useState(true);

  const [gateways] = useState([
    {
      id: "stripe",
      nome: "Stripe",
      status: "ativo",
      taxa: 2.9,
      logo: "🟦",
      configurado: true,
    },
    {
      id: "mercadopago",
      nome: "Mercado Pago",
      status: "inativo",
      taxa: 3.2,
      logo: "🔵",
      configurado: false,
    },
    {
      id: "pagseguro",
      nome: "PagSeguro",
      status: "inativo",
      taxa: 3.1,
      logo: "🟨",
      configurado: false,
    },
    {
      id: "paypal",
      nome: "PayPal",
      status: "inativo",
      taxa: 3.4,
      logo: "🔷",
      configurado: false,
    },
  ]);

  const [transacoes] = useState([
    {
      id: "TXN001",
      usuario: "João Silva",
      valor: 3500,
      taxa: 101.5,
      liquido: 3398.5,
      status: "aprovado",
      gateway: "Stripe",
      data: "2024-01-15",
      tipo: "aluguel",
    },
    {
      id: "TXN002",
      usuario: "Maria Santos",
      valor: 2500,
      taxa: 72.5,
      liquido: 2427.5,
      status: "pendente",
      gateway: "Stripe",
      data: "2024-01-15",
      tipo: "aluguel",
    },
    {
      id: "TXN003",
      usuario: "Carlos Oliveira",
      valor: 5500,
      taxa: 159.5,
      liquido: 5340.5,
      status: "rejeitado",
      gateway: "Stripe",
      data: "2024-01-14",
      tipo: "aluguel",
    },
    {
      id: "TXN004",
      usuario: "Ana Costa",
      valor: 4200,
      taxa: 121.8,
      liquido: 4078.2,
      status: "aprovado",
      gateway: "Stripe",
      data: "2024-01-14",
      tipo: "aluguel",
    },
  ]);

  const [estatisticas] = useState({
    volumeTotal: 485600,
    taxasTotal: 14075,
    liquidoTotal: 471525,
    transacoes: 156,
    taxaAprovacao: 94.2,
    tempoMedioProcessamento: 2.3,
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aprovado":
        return "bg-green-100 text-green-800";
      case "pendente":
        return "bg-yellow-100 text-yellow-800";
      case "rejeitado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getGatewayStatusColor = (status: string) => {
    switch (status) {
      case "ativo":
        return "bg-green-100 text-green-800";
      case "inativo":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader title="Pagamentos" showBackButton backTo="/admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Gateway de Pagamentos
            </h1>
            <p className="text-gray-600">
              Gerencie gateways de pagamento e monitore transações
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Gateway
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Adicionar Gateway</DialogTitle>
                  <DialogDescription>
                    Configure um novo gateway de pagamento
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="gateway">Gateway</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um gateway" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stripe">Stripe</SelectItem>
                        <SelectItem value="mercadopago">
                          Mercado Pago
                        </SelectItem>
                        <SelectItem value="pagseguro">PagSeguro</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="apiKey">API Key</Label>
                    <Input
                      id="apiKey"
                      type="password"
                      placeholder="Digite a API Key"
                    />
                  </div>
                  <div>
                    <Label htmlFor="secretKey">Secret Key</Label>
                    <Input
                      id="secretKey"
                      type="password"
                      placeholder="Digite a Secret Key"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancelar</Button>
                  <Button>Salvar Gateway</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Volume Total
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatCurrency(estatisticas.volumeTotal)}
                  </p>
                  <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +12% este mês
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Taxas Coletadas
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatCurrency(estatisticas.taxasTotal)}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {estatisticas.transacoes} transações
                  </p>
                </div>
                <div className="p-3 bg-orange-100 rounded-full">
                  <CreditCard className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Taxa de Aprovação
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {estatisticas.taxaAprovacao}%
                  </p>
                  <p className="text-sm text-green-600 mt-1">Acima da média</p>
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
                    Tempo Médio
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {estatisticas.tempoMedioProcessamento}s
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Processamento</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-full">
                  <RefreshCw className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="gateways" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gateways">Gateways</TabsTrigger>
            <TabsTrigger value="transacoes">Transações</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="gateways" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Gateways de Pagamento
                </CardTitle>
                <CardDescription>
                  Configure e gerencie os gateways de pagamento disponíveis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gateways.map((gateway) => (
                    <Card key={gateway.id} className="border-2">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{gateway.logo}</span>
                            <div>
                              <h3 className="font-semibold">{gateway.nome}</h3>
                              <p className="text-sm text-gray-600">
                                Taxa: {gateway.taxa}%
                              </p>
                            </div>
                          </div>
                          <Badge
                            className={getGatewayStatusColor(gateway.status)}
                          >
                            {gateway.status === "ativo" ? "Ativo" : "Inativo"}
                          </Badge>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span>Configurado:</span>
                            {gateway.configurado ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                            >
                              <Settings className="w-4 h-4 mr-1" />
                              Config
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Ver
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transacoes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Transações Recentes</CardTitle>
                <CardDescription>
                  Últimas transações processadas na plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Usuário</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Taxa</TableHead>
                      <TableHead>Líquido</TableHead>
                      <TableHead>Gateway</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transacoes.map((transacao) => (
                      <TableRow key={transacao.id}>
                        <TableCell className="font-medium">
                          {transacao.id}
                        </TableCell>
                        <TableCell>{transacao.usuario}</TableCell>
                        <TableCell>{formatCurrency(transacao.valor)}</TableCell>
                        <TableCell className="text-red-600">
                          -{formatCurrency(transacao.taxa)}
                        </TableCell>
                        <TableCell className="font-semibold text-green-600">
                          {formatCurrency(transacao.liquido)}
                        </TableCell>
                        <TableCell>{transacao.gateway}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(transacao.status)}>
                            {transacao.status === "aprovado"
                              ? "Aprovado"
                              : transacao.status === "pendente"
                                ? "Pendente"
                                : "Rejeitado"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(transacao.data).toLocaleDateString("pt-BR")}
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
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

          <TabsContent value="configuracoes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configurações de Pagamento
                </CardTitle>
                <CardDescription>
                  Configure as regras gerais de pagamento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Modo de Teste</Label>
                    <p className="text-sm text-gray-600">
                      Ativar ambiente de teste para todas as transações
                    </p>
                  </div>
                  <Switch
                    checked={isTestMode}
                    onCheckedChange={setIsTestMode}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="timeout">
                      Timeout de Transação (segundos)
                    </Label>
                    <Input id="timeout" type="number" defaultValue="30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="retries">Número de Tentativas</Label>
                    <Input id="retries" type="number" defaultValue="3" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gateway-padrao">Gateway Padrão</Label>
                    <Select
                      value={selectedGateway}
                      onValueChange={setSelectedGateway}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stripe">Stripe</SelectItem>
                        <SelectItem value="mercadopago">
                          Mercado Pago
                        </SelectItem>
                        <SelectItem value="pagseguro">PagSeguro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="moeda">Moeda Padrão</Label>
                    <Select defaultValue="BRL">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BRL">Real (BRL)</SelectItem>
                        <SelectItem value="USD">Dólar (USD)</SelectItem>
                        <SelectItem value="EUR">Euro (EUR)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-6">
                  <Button>Salvar Configurações</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
