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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import AdminHeader from "@/components/AdminHeader";
import {
  Settings,
  Mail,
  Shield,
  Database,
  Palette,
  Bell,
  Save,
  RefreshCw,
} from "lucide-react";

export default function AdminConfiguracoes() {
  const [configuracoes, setConfiguracoes] = useState({
    plataforma: {
      nomeEmpresa: "HomeFlip",
      emailContato: "contato@homeflip.com",
      telefoneContato: "(11) 99999-9999",
      endereco: "São Paulo, SP",
      descricao: "Plataforma de aluguel de imóveis",
    },
    notificacoes: {
      emailNovoUsuario: true,
      emailNovoImovel: true,
      emailPagamento: true,
      emailRelatorios: true,
      smsNotificacoes: false,
    },
    seguranca: {
      tentativasLogin: 5,
      tempoSessao: 120,
      verificacaoEmail: true,
      autenticacaoDupla: false,
    },
    sistema: {
      manutencao: false,
      logLevel: "info",
      backupAutomatico: true,
      frequenciaBackup: "diario",
    },
  });

  const handleSave = () => {
    console.log("Salvando configurações:", configuracoes);
    // Implementar salvamento das configurações
  };

  const handleReset = () => {
    console.log("Resetando configurações");
    // Implementar reset das configurações
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader title="Configurações" showBackButton backTo="/admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Configurações do Sistema
            </h1>
            <p className="text-gray-600">
              Gerencie as configurações gerais da plataforma HomeFlip
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleReset}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Resetar
            </Button>
            <Button onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" />
              Salvar Alterações
            </Button>
          </div>
        </div>

        <Tabs defaultValue="geral" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="geral" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Geral
            </TabsTrigger>
            <TabsTrigger
              value="notificacoes"
              className="flex items-center gap-2"
            >
              <Bell className="w-4 h-4" />
              Notificações
            </TabsTrigger>
            <TabsTrigger value="seguranca" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Segurança
            </TabsTrigger>
            <TabsTrigger value="sistema" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              Sistema
            </TabsTrigger>
          </TabsList>

          <TabsContent value="geral" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Informações da Plataforma
                </CardTitle>
                <CardDescription>
                  Configure as informações básicas da empresa
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nomeEmpresa">Nome da Empresa</Label>
                    <Input
                      id="nomeEmpresa"
                      value={configuracoes.plataforma.nomeEmpresa}
                      onChange={(e) =>
                        setConfiguracoes({
                          ...configuracoes,
                          plataforma: {
                            ...configuracoes.plataforma,
                            nomeEmpresa: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emailContato">Email de Contato</Label>
                    <Input
                      id="emailContato"
                      type="email"
                      value={configuracoes.plataforma.emailContato}
                      onChange={(e) =>
                        setConfiguracoes({
                          ...configuracoes,
                          plataforma: {
                            ...configuracoes.plataforma,
                            emailContato: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefoneContato">Telefone de Contato</Label>
                    <Input
                      id="telefoneContato"
                      value={configuracoes.plataforma.telefoneContato}
                      onChange={(e) =>
                        setConfiguracoes({
                          ...configuracoes,
                          plataforma: {
                            ...configuracoes.plataforma,
                            telefoneContato: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endereco">Endereço</Label>
                    <Input
                      id="endereco"
                      value={configuracoes.plataforma.endereco}
                      onChange={(e) =>
                        setConfiguracoes({
                          ...configuracoes,
                          plataforma: {
                            ...configuracoes.plataforma,
                            endereco: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição da Empresa</Label>
                  <Textarea
                    id="descricao"
                    value={configuracoes.plataforma.descricao}
                    onChange={(e) =>
                      setConfiguracoes({
                        ...configuracoes,
                        plataforma: {
                          ...configuracoes.plataforma,
                          descricao: e.target.value,
                        },
                      })
                    }
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notificacoes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Configurações de Notificação
                </CardTitle>
                <CardDescription>
                  Configure quando e como receber notificações
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificar novo usuário</Label>
                      <p className="text-sm text-gray-600">
                        Receber email quando um novo usuário se cadastrar
                      </p>
                    </div>
                    <Switch
                      checked={configuracoes.notificacoes.emailNovoUsuario}
                      onCheckedChange={(checked) =>
                        setConfiguracoes({
                          ...configuracoes,
                          notificacoes: {
                            ...configuracoes.notificacoes,
                            emailNovoUsuario: checked,
                          },
                        })
                      }
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificar novo imóvel</Label>
                      <p className="text-sm text-gray-600">
                        Receber email quando um novo imóvel for cadastrado
                      </p>
                    </div>
                    <Switch
                      checked={configuracoes.notificacoes.emailNovoImovel}
                      onCheckedChange={(checked) =>
                        setConfiguracoes({
                          ...configuracoes,
                          notificacoes: {
                            ...configuracoes.notificacoes,
                            emailNovoImovel: checked,
                          },
                        })
                      }
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificar pagamentos</Label>
                      <p className="text-sm text-gray-600">
                        Receber email sobre novos pagamentos e pendências
                      </p>
                    </div>
                    <Switch
                      checked={configuracoes.notificacoes.emailPagamento}
                      onCheckedChange={(checked) =>
                        setConfiguracoes({
                          ...configuracoes,
                          notificacoes: {
                            ...configuracoes.notificacoes,
                            emailPagamento: checked,
                          },
                        })
                      }
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Relatórios semanais</Label>
                      <p className="text-sm text-gray-600">
                        Receber relatório semanal por email
                      </p>
                    </div>
                    <Switch
                      checked={configuracoes.notificacoes.emailRelatorios}
                      onCheckedChange={(checked) =>
                        setConfiguracoes({
                          ...configuracoes,
                          notificacoes: {
                            ...configuracoes.notificacoes,
                            emailRelatorios: checked,
                          },
                        })
                      }
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificações SMS</Label>
                      <p className="text-sm text-gray-600">
                        Receber notificações importantes via SMS
                      </p>
                    </div>
                    <Switch
                      checked={configuracoes.notificacoes.smsNotificacoes}
                      onCheckedChange={(checked) =>
                        setConfiguracoes({
                          ...configuracoes,
                          notificacoes: {
                            ...configuracoes.notificacoes,
                            smsNotificacoes: checked,
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seguranca" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Configurações de Segurança
                </CardTitle>
                <CardDescription>
                  Configure as políticas de segurança da plataforma
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tentativasLogin">
                      Máximo de tentativas de login
                    </Label>
                    <Input
                      id="tentativasLogin"
                      type="number"
                      value={configuracoes.seguranca.tentativasLogin}
                      onChange={(e) =>
                        setConfiguracoes({
                          ...configuracoes,
                          seguranca: {
                            ...configuracoes.seguranca,
                            tentativasLogin: parseInt(e.target.value),
                          },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tempoSessao">
                      Tempo de sessão (minutos)
                    </Label>
                    <Input
                      id="tempoSessao"
                      type="number"
                      value={configuracoes.seguranca.tempoSessao}
                      onChange={(e) =>
                        setConfiguracoes({
                          ...configuracoes,
                          seguranca: {
                            ...configuracoes.seguranca,
                            tempoSessao: parseInt(e.target.value),
                          },
                        })
                      }
                    />
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Verificação de email obrigatória</Label>
                      <p className="text-sm text-gray-600">
                        Usuários devem verificar o email antes de usar a
                        plataforma
                      </p>
                    </div>
                    <Switch
                      checked={configuracoes.seguranca.verificacaoEmail}
                      onCheckedChange={(checked) =>
                        setConfiguracoes({
                          ...configuracoes,
                          seguranca: {
                            ...configuracoes.seguranca,
                            verificacaoEmail: checked,
                          },
                        })
                      }
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Autenticação em duas etapas</Label>
                      <p className="text-sm text-gray-600">
                        Exigir autenticação em duas etapas para admins
                      </p>
                    </div>
                    <Switch
                      checked={configuracoes.seguranca.autenticacaoDupla}
                      onCheckedChange={(checked) =>
                        setConfiguracoes({
                          ...configuracoes,
                          seguranca: {
                            ...configuracoes.seguranca,
                            autenticacaoDupla: checked,
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sistema" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Configurações do Sistema
                </CardTitle>
                <CardDescription>
                  Configure aspectos técnicos da plataforma
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="logLevel">Nível de Log</Label>
                    <Select
                      value={configuracoes.sistema.logLevel}
                      onValueChange={(value) =>
                        setConfiguracoes({
                          ...configuracoes,
                          sistema: {
                            ...configuracoes.sistema,
                            logLevel: value,
                          },
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debug">Debug</SelectItem>
                        <SelectItem value="info">Info</SelectItem>
                        <SelectItem value="warn">Warning</SelectItem>
                        <SelectItem value="error">Error</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="frequenciaBackup">
                      Frequência de Backup
                    </Label>
                    <Select
                      value={configuracoes.sistema.frequenciaBackup}
                      onValueChange={(value) =>
                        setConfiguracoes({
                          ...configuracoes,
                          sistema: {
                            ...configuracoes.sistema,
                            frequenciaBackup: value,
                          },
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diario">Diário</SelectItem>
                        <SelectItem value="semanal">Semanal</SelectItem>
                        <SelectItem value="mensal">Mensal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Modo de manutenção</Label>
                      <p className="text-sm text-gray-600">
                        Ativar modo de manutenção para todos os usuários
                      </p>
                    </div>
                    <Switch
                      checked={configuracoes.sistema.manutencao}
                      onCheckedChange={(checked) =>
                        setConfiguracoes({
                          ...configuracoes,
                          sistema: {
                            ...configuracoes.sistema,
                            manutencao: checked,
                          },
                        })
                      }
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Backup automático</Label>
                      <p className="text-sm text-gray-600">
                        Realizar backup automático do banco de dados
                      </p>
                    </div>
                    <Switch
                      checked={configuracoes.sistema.backupAutomatico}
                      onCheckedChange={(checked) =>
                        setConfiguracoes({
                          ...configuracoes,
                          sistema: {
                            ...configuracoes.sistema,
                            backupAutomatico: checked,
                          },
                        })
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
