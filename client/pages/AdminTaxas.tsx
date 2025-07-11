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
  Percent,
  DollarSign,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Save,
  Calculator,
  Info,
} from "lucide-react";

interface Taxa {
  id: string;
  nome: string;
  tipo: "percentual" | "fixo" | "hibrido";
  valor: number;
  valorFixo?: number;
  categoria: "inquilino" | "proprietario" | "plataforma";
  status: "ativa" | "inativa";
  descricao: string;
  aplicacao: string;
}

export default function AdminTaxas() {
  const [taxas, setTaxas] = useState<Taxa[]>([
    {
      id: "1",
      nome: "Taxa de Serviço Inquilino",
      tipo: "percentual",
      valor: 5,
      categoria: "inquilino",
      status: "ativa",
      descricao: "Taxa cobrada do inquilino sobre o valor do aluguel",
      aplicacao: "aluguel_mensal",
    },
    {
      id: "2",
      nome: "Taxa de Administração Proprietário",
      tipo: "percentual",
      valor: 8,
      categoria: "proprietario",
      status: "ativa",
      descricao: "Taxa de administração cobrada do proprietário",
      aplicacao: "aluguel_mensal",
    },
    {
      id: "3",
      nome: "Taxa de Vistoria",
      tipo: "fixo",
      valor: 150,
      categoria: "inquilino",
      status: "ativa",
      descricao: "Taxa única para vistoria do imóvel",
      aplicacao: "contrato_inicio",
    },
    {
      id: "4",
      nome: "Taxa de Intermediação",
      tipo: "hibrido",
      valor: 2,
      valorFixo: 100,
      categoria: "plataforma",
      status: "ativa",
      descricao: "Taxa híbrida para intermediação de contratos",
      aplicacao: "contrato_fechamento",
    },
    {
      id: "5",
      nome: "Taxa de Cancelamento",
      tipo: "fixo",
      valor: 200,
      categoria: "inquilino",
      status: "inativa",
      descricao: "Taxa cobrada em caso de cancelamento antecipado",
      aplicacao: "cancelamento",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTaxa, setEditingTaxa] = useState<Taxa | null>(null);
  const [formData, setFormData] = useState<Partial<Taxa>>({
    nome: "",
    tipo: "percentual",
    valor: 0,
    categoria: "inquilino",
    status: "ativa",
    descricao: "",
    aplicacao: "",
  });

  const [simulacao, setSimulacao] = useState({
    valorAluguel: 3000,
    categoria: "inquilino" as const,
  });

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "percentual":
        return "bg-blue-100 text-blue-800";
      case "fixo":
        return "bg-green-100 text-green-800";
      case "hibrido":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "inquilino":
        return "bg-orange-100 text-orange-800";
      case "proprietario":
        return "bg-indigo-100 text-indigo-800";
      case "plataforma":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativa":
        return "bg-green-100 text-green-800";
      case "inativa":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const calcularTaxa = (taxa: Taxa, valorBase: number) => {
    switch (taxa.tipo) {
      case "percentual":
        return (valorBase * taxa.valor) / 100;
      case "fixo":
        return taxa.valor;
      case "hibrido":
        return (valorBase * taxa.valor) / 100 + (taxa.valorFixo || 0);
      default:
        return 0;
    }
  };

  const handleSaveTaxa = () => {
    if (editingTaxa) {
      setTaxas(
        taxas.map((taxa) =>
          taxa.id === editingTaxa.id ? { ...editingTaxa, ...formData } : taxa,
        ),
      );
    } else {
      const newTaxa: Taxa = {
        id: Date.now().toString(),
        ...formData,
      } as Taxa;
      setTaxas([...taxas, newTaxa]);
    }
    setIsDialogOpen(false);
    setEditingTaxa(null);
    setFormData({
      nome: "",
      tipo: "percentual",
      valor: 0,
      categoria: "inquilino",
      status: "ativa",
      descricao: "",
      aplicacao: "",
    });
  };

  const handleEditTaxa = (taxa: Taxa) => {
    setEditingTaxa(taxa);
    setFormData(taxa);
    setIsDialogOpen(true);
  };

  const handleDeleteTaxa = (id: string) => {
    setTaxas(taxas.filter((taxa) => taxa.id !== id));
  };

  const calcularSimulacao = () => {
    const taxasAplicaveis = taxas.filter(
      (taxa) =>
        taxa.categoria === simulacao.categoria && taxa.status === "ativa",
    );
    return taxasAplicaveis.reduce(
      (total, taxa) => total + calcularTaxa(taxa, simulacao.valorAluguel),
      0,
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader title="Taxas" showBackButton backTo="/admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Configuração de Taxas
            </h1>
            <p className="text-gray-600">
              Gerencie as taxas cobradas na plataforma
            </p>
          </div>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Nova Taxa
          </Button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total de Taxas
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {taxas.length}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {taxas.filter((t) => t.status === "ativa").length} ativas
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <Percent className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Taxa Média Inquilino
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {(
                      taxas
                        .filter(
                          (t) =>
                            t.categoria === "inquilino" &&
                            t.tipo === "percentual",
                        )
                        .reduce((acc, t) => acc + t.valor, 0) /
                      taxas.filter(
                        (t) =>
                          t.categoria === "inquilino" &&
                          t.tipo === "percentual",
                      ).length
                    ).toFixed(1)}
                    %
                  </p>
                </div>
                <div className="p-3 bg-orange-100 rounded-full">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Taxa Média Proprietário
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {(
                      taxas
                        .filter(
                          (t) =>
                            t.categoria === "proprietario" &&
                            t.tipo === "percentual",
                        )
                        .reduce((acc, t) => acc + t.valor, 0) /
                      taxas.filter(
                        (t) =>
                          t.categoria === "proprietario" &&
                          t.tipo === "percentual",
                      ).length
                    ).toFixed(1)}
                    %
                  </p>
                </div>
                <div className="p-3 bg-indigo-100 rounded-full">
                  <DollarSign className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Receita Estimada
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatCurrency(calcularSimulacao() * 150)}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Base: 150 contratos
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-full">
                  <Calculator className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="taxas" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="taxas">Gerenciar Taxas</TabsTrigger>
            <TabsTrigger value="simulador">Simulador</TabsTrigger>
          </TabsList>

          <TabsContent value="taxas" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Lista de Taxas</CardTitle>
                <CardDescription>
                  Gerencie todas as taxas configuradas na plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Aplicação</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {taxas.map((taxa) => (
                      <TableRow key={taxa.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{taxa.nome}</p>
                            <p className="text-sm text-gray-600">
                              {taxa.descricao}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getTipoColor(taxa.tipo)}>
                            {taxa.tipo === "percentual"
                              ? "Percentual"
                              : taxa.tipo === "fixo"
                                ? "Fixo"
                                : "Híbrido"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div>
                            {taxa.tipo === "percentual" && (
                              <span className="font-semibold">
                                {taxa.valor}%
                              </span>
                            )}
                            {taxa.tipo === "fixo" && (
                              <span className="font-semibold">
                                {formatCurrency(taxa.valor)}
                              </span>
                            )}
                            {taxa.tipo === "hibrido" && (
                              <div className="text-sm">
                                <div>{taxa.valor}%</div>
                                <div>
                                  + {formatCurrency(taxa.valorFixo || 0)}
                                </div>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getCategoriaColor(taxa.categoria)}>
                            {taxa.categoria === "inquilino"
                              ? "Inquilino"
                              : taxa.categoria === "proprietario"
                                ? "Proprietário"
                                : "Plataforma"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(taxa.status)}>
                            {taxa.status === "ativa" ? "Ativa" : "Inativa"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">
                          {taxa.aplicacao.replace("_", " ")}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditTaxa(taxa)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeleteTaxa(taxa.id)}
                            >
                              <Trash2 className="w-4 h-4" />
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

          <TabsContent value="simulador" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Simulador de Taxas
                  </CardTitle>
                  <CardDescription>
                    Simule o cálculo de taxas para diferentes cenários
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="valor-aluguel">Valor do Aluguel</Label>
                    <Input
                      id="valor-aluguel"
                      type="number"
                      value={simulacao.valorAluguel}
                      onChange={(e) =>
                        setSimulacao({
                          ...simulacao,
                          valorAluguel: Number(e.target.value),
                        })
                      }
                      placeholder="Digite o valor do aluguel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="categoria-simulacao">Categoria</Label>
                    <Select
                      value={simulacao.categoria}
                      onValueChange={(value: "inquilino" | "proprietario") =>
                        setSimulacao({ ...simulacao, categoria: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inquilino">Inquilino</SelectItem>
                        <SelectItem value="proprietario">
                          Proprietário
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resultado da Simulação</CardTitle>
                  <CardDescription>
                    Taxas aplicáveis para o cenário selecionado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Valor Base:</span>
                        <span className="text-lg font-bold">
                          {formatCurrency(simulacao.valorAluguel)}
                        </span>
                      </div>
                    </div>

                    {taxas
                      .filter(
                        (taxa) =>
                          taxa.categoria === simulacao.categoria &&
                          taxa.status === "ativa",
                      )
                      .map((taxa) => (
                        <div
                          key={taxa.id}
                          className="p-3 border rounded-lg space-y-2"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="font-medium text-sm">{taxa.nome}</p>
                              <p className="text-xs text-gray-600">
                                {taxa.descricao}
                              </p>
                            </div>
                            <span className="font-semibold text-red-600">
                              {formatCurrency(
                                calcularTaxa(taxa, simulacao.valorAluguel),
                              )}
                            </span>
                          </div>
                        </div>
                      ))}

                    <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-green-800">
                          Total de Taxas:
                        </span>
                        <span className="text-xl font-bold text-green-800">
                          {formatCurrency(calcularSimulacao())}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Valor Final:</span>
                        <span className="text-lg font-bold">
                          {formatCurrency(
                            simulacao.valorAluguel + calcularSimulacao(),
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Add/Edit Taxa Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingTaxa ? "Editar Taxa" : "Nova Taxa"}
            </DialogTitle>
            <DialogDescription>Configure os detalhes da taxa</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome da Taxa</Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  placeholder="Ex: Taxa de Serviço"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo</Label>
                <Select
                  value={formData.tipo}
                  onValueChange={(value: "percentual" | "fixo" | "hibrido") =>
                    setFormData({ ...formData, tipo: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentual">Percentual</SelectItem>
                    <SelectItem value="fixo">Valor Fixo</SelectItem>
                    <SelectItem value="hibrido">Híbrido</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="valor">
                  {formData.tipo === "percentual" ? "Percentual (%)" : "Valor"}
                </Label>
                <Input
                  id="valor"
                  type="number"
                  step={formData.tipo === "percentual" ? "0.1" : "1"}
                  value={formData.valor}
                  onChange={(e) =>
                    setFormData({ ...formData, valor: Number(e.target.value) })
                  }
                />
              </div>
              {formData.tipo === "hibrido" && (
                <div className="space-y-2">
                  <Label htmlFor="valorFixo">Valor Fixo Adicional</Label>
                  <Input
                    id="valorFixo"
                    type="number"
                    value={formData.valorFixo || 0}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        valorFixo: Number(e.target.value),
                      })
                    }
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="categoria">Categoria</Label>
                <Select
                  value={formData.categoria}
                  onValueChange={(
                    value: "inquilino" | "proprietario" | "plataforma",
                  ) => setFormData({ ...formData, categoria: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inquilino">Inquilino</SelectItem>
                    <SelectItem value="proprietario">Proprietário</SelectItem>
                    <SelectItem value="plataforma">Plataforma</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: "ativa" | "inativa") =>
                    setFormData({ ...formData, status: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ativa">Ativa</SelectItem>
                    <SelectItem value="inativa">Inativa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="descricao">Descrição</Label>
              <Input
                id="descricao"
                value={formData.descricao}
                onChange={(e) =>
                  setFormData({ ...formData, descricao: e.target.value })
                }
                placeholder="Descreva quando esta taxa é aplicada"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="aplicacao">Momento de Aplicação</Label>
              <Select
                value={formData.aplicacao}
                onValueChange={(value) =>
                  setFormData({ ...formData, aplicacao: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione quando aplicar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aluguel_mensal">Aluguel Mensal</SelectItem>
                  <SelectItem value="contrato_inicio">
                    Início do Contrato
                  </SelectItem>
                  <SelectItem value="contrato_fechamento">
                    Fechamento do Contrato
                  </SelectItem>
                  <SelectItem value="cancelamento">Cancelamento</SelectItem>
                  <SelectItem value="vistoria">Vistoria</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSaveTaxa}>
              <Save className="w-4 h-4 mr-2" />
              Salvar Taxa
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
