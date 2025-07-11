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
} from "lucide-react";

interface ConfigForm {
  // Dados Pessoais
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  endereco: string;
  bio: string;

  // Notificações
  emailNovasPropostas: boolean;
  emailPagamentos: boolean;
  emailManutencoes: boolean;
  smsUrgencias: boolean;
  whatsappComercial: boolean;

  // Configurações de Conta
  senhaAtual: string;
  novaSenha: string;
  confirmarSenha: string;
  autenticacaoDoisFatores: boolean;

  // Preferências de Negócio
  aceitaAnimais: boolean;
  minimoRendaMultiplicador: number;
  prazoMinimoContrato: string;
  tipoGarantiaPreferida: string;
}

export default function ProprietarioConfiguracoes() {
  const [activeTab, setActiveTab] = useState("perfil");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState<ConfigForm>({
    // Dados Pessoais
    nome: "João da Silva",
    email: "joao@email.com",
    telefone: "(11) 99999-9999",
    cpf: "123.456.789-00",
    endereco: "Rua das Flores, 123 - Centro, São Paulo - SP",
    bio: "Proprietário de imóveis há mais de 10 anos, focado em oferecer as melhores experiências de locação.",

    // Notificações
    emailNovasPropostas: true,
    emailPagamentos: true,
    emailManutencoes: false,
    smsUrgencias: true,
    whatsappComercial: false,

    // Configurações de Conta
    senhaAtual: "",
    novaSenha: "",
    confirmarSenha: "",
    autenticacaoDoisFatores: false,

    // Preferências de Negócio
    aceitaAnimais: false,
    minimoRendaMultiplicador: 3,
    prazoMinimoContrato: "12-meses",
    tipoGarantiaPreferida: "homeflip",
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
              to="/dashboard-proprietario"
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
                      Atualize suas informações pessoais e de contato
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
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endereco">Endereço</Label>
                      <Input
                        id="endereco"
                        value={form.endereco}
                        onChange={(e) =>
                          handleInputChange("endereco", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={form.bio}
                        onChange={(e) =>
                          handleInputChange("bio", e.target.value)
                        }
                        rows={3}
                        placeholder="Conte um pouco sobre você..."
                      />
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
                            <p className="font-medium">Novas Propostas</p>
                            <p className="text-sm text-gray-600">
                              Receba notificações quando houver novas propostas
                            </p>
                          </div>
                          <Switch
                            checked={form.emailNovasPropostas}
                            onCheckedChange={(checked) =>
                              handleInputChange("emailNovasPropostas", checked)
                            }
                          />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Pagamentos</p>
                            <p className="text-sm text-gray-600">
                              Notificações sobre pagamentos recebidos
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
                            <p className="font-medium">Manutenções</p>
                            <p className="text-sm text-gray-600">
                              Solicitações de manutenção dos inquilinos
                            </p>
                          </div>
                          <Switch
                            checked={form.emailManutencoes}
                            onCheckedChange={(checked) =>
                              handleInputChange("emailManutencoes", checked)
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
                            <p className="font-medium">WhatsApp Comercial</p>
                            <p className="text-sm text-gray-600">
                              Comunicações comerciais via WhatsApp
                            </p>
                          </div>
                          <Switch
                            checked={form.whatsappComercial}
                            onCheckedChange={(checked) =>
                              handleInputChange("whatsappComercial", checked)
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
                        Gerencie a segurança da sua conta
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
                            Adicione uma camada extra de segurança
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
                      Preferências de Negócio
                    </CardTitle>
                    <CardDescription>
                      Configure suas preferências para locação
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">
                          Aceita Animais de Estimação
                        </p>
                        <p className="text-sm text-gray-600">
                          Permitir inquilinos com pets
                        </p>
                      </div>
                      <Switch
                        checked={form.aceitaAnimais}
                        onCheckedChange={(checked) =>
                          handleInputChange("aceitaAnimais", checked)
                        }
                      />
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="rendaMinima">
                        Multiplicador de Renda Mínima
                      </Label>
                      <Select
                        value={form.minimoRendaMultiplicador.toString()}
                        onValueChange={(value) =>
                          handleInputChange(
                            "minimoRendaMultiplicador",
                            Number(value),
                          )
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">
                            2x o valor do aluguel
                          </SelectItem>
                          <SelectItem value="3">
                            3x o valor do aluguel
                          </SelectItem>
                          <SelectItem value="4">
                            4x o valor do aluguel
                          </SelectItem>
                          <SelectItem value="5">
                            5x o valor do aluguel
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prazoMinimo">
                        Prazo Mínimo de Contrato
                      </Label>
                      <Select
                        value={form.prazoMinimoContrato}
                        onValueChange={(value) =>
                          handleInputChange("prazoMinimoContrato", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6-meses">6 meses</SelectItem>
                          <SelectItem value="12-meses">12 meses</SelectItem>
                          <SelectItem value="24-meses">24 meses</SelectItem>
                          <SelectItem value="36-meses">36 meses</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="garantiaPreferida">
                        Tipo de Garantia Preferida
                      </Label>
                      <Select
                        value={form.tipoGarantiaPreferida}
                        onValueChange={(value) =>
                          handleInputChange("tipoGarantiaPreferida", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="homeflip">
                            Garantia HomeFlip
                          </SelectItem>
                          <SelectItem value="fiador">Fiador</SelectItem>
                          <SelectItem value="caucao">
                            Depósito Caução
                          </SelectItem>
                          <SelectItem value="qualquer">Qualquer uma</SelectItem>
                        </SelectContent>
                      </Select>
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
