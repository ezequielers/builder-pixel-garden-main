import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Settings,
  User,
  Bell,
  Shield,
  CreditCard,
  Smartphone,
  Mail,
  Eye,
  EyeOff,
  Save,
  Trash2,
  AlertTriangle,
  DollarSign,
} from "lucide-react";

interface ConfigForm {
  // Dados Pessoais
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  endereco: string;
  profissao: string;
  renda: string;
  estadoCivil: string;

  // Notificações
  emailPagamentos: boolean;
  emailManutencoes: boolean;
  emailNovas: boolean;
  smsUrgencias: boolean;
  whatsappComunicacao: boolean;

  // Configurações de Conta
  senhaAtual: string;
  novaSenha: string;
  confirmarSenha: string;
  autenticacaoDoisFatores: boolean;

  // Preferências
  tipoImovelPreferido: string;
  faixaPrecoMin: string;
  faixaPrecoMax: string;
  regiaoPreferida: string;
  aceitaAnimaisProprios: boolean;
}

export default function InquilinoConfiguracoes() {
  const [activeTab, setActiveTab] = useState("perfil");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState<ConfigForm>({
    // Dados Pessoais
    nome: "Maria Santos",
    email: "maria@email.com",
    telefone: "(11) 99999-9999",
    cpf: "123.456.789-00",
    endereco: "Rua das Flores, 123 - Centro, São Paulo - SP",
    profissao: "Desenvolvedora de Software",
    renda: "8500",
    estadoCivil: "solteira",

    // Notificações
    emailPagamentos: true,
    emailManutencoes: true,
    emailNovas: false,
    smsUrgencias: true,
    whatsappComunicacao: true,

    // Configurações de Conta
    senhaAtual: "",
    novaSenha: "",
    confirmarSenha: "",
    autenticacaoDoisFatores: true,

    // Preferências
    tipoImovelPreferido: "apartamento",
    faixaPrecoMin: "2000",
    faixaPrecoMax: "4000",
    regiaoPreferida: "zona-sul",
    aceitaAnimaisProprios: false,
  });

  const handleInputChange = (field: keyof ConfigForm, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Simular salvamento
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Aqui faria a requisição para salvar as configurações
    } catch (error) {
      console.error("Erro ao salvar configurações:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrency = (value: string) => {
    const numValue = value.replace(/\D/g, "");
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(numValue));
  };

  const tabs = [
    { id: "perfil", label: "Perfil", icon: User },
    { id: "notificacoes", label: "Notificações", icon: Bell },
    { id: "seguranca", label: "Segurança", icon: Shield },
    { id: "preferencias", label: "Preferências", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              to="/dashboard-inquilino"
              className="inline-flex items-center text-homeflip-purple hover:text-[#4A0D5F] font-source-code-pro text-sm mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar ao Dashboard
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-telegraf font-bold text-gray-900 mb-2">
              Configurações
            </h1>
            <p className="text-gray-600 font-source-code-pro">
              Gerencie suas preferências e configurações da conta
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Navigation Tabs */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                            activeTab === tab.id
                              ? "bg-homeflip-purple text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="font-source-code-pro text-sm">
                            {tab.label}
                          </span>
                        </button>
                      );
                    })}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {/* Perfil Tab */}
              {activeTab === "perfil" && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Informações do Perfil
                    </CardTitle>
                    <CardDescription>
                      Mantenha suas informações atualizadas para uma melhor
                      experiência
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input
                          id="nome"
                          value={form.nome}
                          onChange={(e) =>
                            handleInputChange("nome", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          value={form.telefone}
                          onChange={(e) =>
                            handleInputChange("telefone", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cpf">CPF</Label>
                        <Input
                          id="cpf"
                          value={form.cpf}
                          onChange={(e) =>
                            handleInputChange("cpf", e.target.value)
                          }
                          disabled
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="profissao">Profissão</Label>
                        <Input
                          id="profissao"
                          value={form.profissao}
                          onChange={(e) =>
                            handleInputChange("profissao", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="renda">Renda Mensal</Label>
                        <Input
                          id="renda"
                          value={formatCurrency(form.renda)}
                          onChange={(e) =>
                            handleInputChange(
                              "renda",
                              e.target.value.replace(/\D/g, ""),
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endereco">Endereço Atual</Label>
                      <Input
                        id="endereco"
                        value={form.endereco}
                        onChange={(e) =>
                          handleInputChange("endereco", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estadoCivil">Estado Civil</Label>
                      <Select
                        value={form.estadoCivil}
                        onValueChange={(value) =>
                          handleInputChange("estadoCivil", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="solteiro">Solteiro(a)</SelectItem>
                          <SelectItem value="casado">Casado(a)</SelectItem>
                          <SelectItem value="divorciado">
                            Divorciado(a)
                          </SelectItem>
                          <SelectItem value="viuvo">Viúvo(a)</SelectItem>
                          <SelectItem value="uniao-estavel">
                            União Estável
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Notificações Tab */}
              {activeTab === "notificacoes" && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      Preferências de Notificação
                    </CardTitle>
                    <CardDescription>
                      Configure como deseja receber notificações
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Notificações por E-mail
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">
                              Lembretes de Pagamento
                            </p>
                            <p className="text-sm text-gray-600">
                              Receba lembretes antes do vencimento
                            </p>
                          </div>
                          <Switch
                            checked={form.emailPagamentos}
                            onCheckedChange={(checked) =>
                              handleInputChange("emailPagamentos", checked)
                            }
                          />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">
                              Respostas de Manutenção
                            </p>
                            <p className="text-sm text-gray-600">
                              Updates sobre suas solicitações
                            </p>
                          </div>
                          <Switch
                            checked={form.emailManutencoes}
                            onCheckedChange={(checked) =>
                              handleInputChange("emailManutencoes", checked)
                            }
                          />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Novos Imóveis</p>
                            <p className="text-sm text-gray-600">
                              Imóveis que combinam com suas preferências
                            </p>
                          </div>
                          <Switch
                            checked={form.emailNovas}
                            onCheckedChange={(checked) =>
                              handleInputChange("emailNovas", checked)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        Notificações por SMS/WhatsApp
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Urgências (SMS)</p>
                            <p className="text-sm text-gray-600">
                              Apenas para questões urgentes
                            </p>
                          </div>
                          <Switch
                            checked={form.smsUrgencias}
                            onCheckedChange={(checked) =>
                              handleInputChange("smsUrgencias", checked)
                            }
                          />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">WhatsApp</p>
                            <p className="text-sm text-gray-600">
                              Comunicação geral via WhatsApp
                            </p>
                          </div>
                          <Switch
                            checked={form.whatsappComunicacao}
                            onCheckedChange={(checked) =>
                              handleInputChange("whatsappComunicacao", checked)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Segurança Tab */}
              {activeTab === "seguranca" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Segurança da Conta
                      </CardTitle>
                      <CardDescription>
                        Mantenha sua conta segura
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="senhaAtual">Senha Atual</Label>
                          <div className="relative">
                            <Input
                              id="senhaAtual"
                              type={showPassword ? "text" : "password"}
                              value={form.senhaAtual}
                              onChange={(e) =>
                                handleInputChange("senhaAtual", e.target.value)
                              }
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                              {showPassword ? (
                                <EyeOff className="w-4 h-4 text-gray-400" />
                              ) : (
                                <Eye className="w-4 h-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="novaSenha">Nova Senha</Label>
                          <Input
                            id="novaSenha"
                            type="password"
                            value={form.novaSenha}
                            onChange={(e) =>
                              handleInputChange("novaSenha", e.target.value)
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmarSenha">
                            Confirmar Nova Senha
                          </Label>
                          <Input
                            id="confirmarSenha"
                            type="password"
                            value={form.confirmarSenha}
                            onChange={(e) =>
                              handleInputChange(
                                "confirmarSenha",
                                e.target.value,
                              )
                            }
                          />
                        </div>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">
                            Autenticação de Dois Fatores
                          </p>
                          <p className="text-sm text-gray-600">
                            Proteja sua conta com verificação em duas etapas
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={form.autenticacaoDoisFatores}
                            onCheckedChange={(checked) =>
                              handleInputChange(
                                "autenticacaoDoisFatores",
                                checked,
                              )
                            }
                          />
                          {form.autenticacaoDoisFatores && (
                            <Badge variant="secondary">Ativo</Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-800">
                        <AlertTriangle className="w-5 h-5" />
                        Zona de Perigo
                      </CardTitle>
                      <CardDescription className="text-red-700">
                        Ações irreversíveis que afetam sua conta
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="destructive" className="w-full">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Excluir Conta Permanentemente
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Preferências Tab */}
              {activeTab === "preferencias" && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Preferências de Busca
                    </CardTitle>
                    <CardDescription>
                      Configure suas preferências para encontrar o imóvel ideal
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="tipoImovel">
                        Tipo de Imóvel Preferido
                      </Label>
                      <Select
                        value={form.tipoImovelPreferido}
                        onValueChange={(value) =>
                          handleInputChange("tipoImovelPreferido", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartamento">
                            Apartamento
                          </SelectItem>
                          <SelectItem value="casa">Casa</SelectItem>
                          <SelectItem value="studio">Studio</SelectItem>
                          <SelectItem value="loft">Loft</SelectItem>
                          <SelectItem value="kitnet">Kitnet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="precoMin">Preço Mínimo</Label>
                        <Input
                          id="precoMin"
                          value={formatCurrency(form.faixaPrecoMin)}
                          onChange={(e) =>
                            handleInputChange(
                              "faixaPrecoMin",
                              e.target.value.replace(/\D/g, ""),
                            )
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="precoMax">Preço Máximo</Label>
                        <Input
                          id="precoMax"
                          value={formatCurrency(form.faixaPrecoMax)}
                          onChange={(e) =>
                            handleInputChange(
                              "faixaPrecoMax",
                              e.target.value.replace(/\D/g, ""),
                            )
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="regiao">Região Preferida</Label>
                      <Select
                        value={form.regiaoPreferida}
                        onValueChange={(value) =>
                          handleInputChange("regiaoPreferida", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="centro">Centro</SelectItem>
                          <SelectItem value="zona-sul">Zona Sul</SelectItem>
                          <SelectItem value="zona-norte">Zona Norte</SelectItem>
                          <SelectItem value="zona-oeste">Zona Oeste</SelectItem>
                          <SelectItem value="zona-leste">Zona Leste</SelectItem>
                          <SelectItem value="qualquer">
                            Qualquer região
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">
                          Tenho Animais de Estimação
                        </p>
                        <p className="text-sm text-gray-600">
                          Mostrar apenas imóveis que aceitem pets
                        </p>
                      </div>
                      <Switch
                        checked={form.aceitaAnimaisProprios}
                        onCheckedChange={(checked) =>
                          handleInputChange("aceitaAnimaisProprios", checked)
                        }
                      />
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        Capacidade de Pagamento
                      </h4>
                      <p className="text-sm text-blue-700 mb-2">
                        Com base na sua renda de{" "}
                        <strong>{formatCurrency(form.renda)}</strong>,
                        recomendamos imóveis de até{" "}
                        <strong>
                          {formatCurrency((Number(form.renda) / 3).toString())}
                        </strong>{" "}
                        (30% da renda).
                      </p>
                      <p className="text-xs text-blue-600">
                        Esta é uma recomendação baseada em boas práticas
                        financeiras.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Save Button */}
              <div className="flex justify-end">
                <Button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="bg-homeflip-purple hover:bg-homeflip-purple/90"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Salvando...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Salvar Alterações
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
