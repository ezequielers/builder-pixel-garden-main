import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Imoveis from "./pages/Imoveis";
import Checkout from "./pages/Checkout";
import Contato from "./pages/Contato";
import DetalheImovel from "./pages/DetalheImovel";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import EsqueciSenha from "./pages/EsqueciSenha";
import DashboardProprietario from "./pages/DashboardProprietario";
import DashboardInquilino from "./pages/DashboardInquilino";
import CadastroImovel from "./pages/CadastroImovel";
import VisitasAgendadas from "./pages/VisitasAgendadas";
import PropostasRecebidas from "./pages/PropostasRecebidas";
import GestaoFinanceira from "./pages/GestaoFinanceira";
import Proposta from "./pages/Proposta";
import PropostaExpressa from "./pages/PropostaExpressa";
import AnaliseInteligente from "./pages/AnaliseInteligente";
import AgendarVisita from "./pages/AgendarVisita";
import ComoFunciona from "./pages/ComoFunciona";
import DashboardAdmin from "./pages/DashboardAdmin";
import AdminUsuarios from "./pages/AdminUsuarios";
import AdminImoveis from "./pages/AdminImoveis";
import AdminRelatorios from "./pages/AdminRelatorios";
import AdminConfiguracoes from "./pages/AdminConfiguracoes";
import AdminPagamentos from "./pages/AdminPagamentos";
import AdminTaxas from "./pages/AdminTaxas";
import AdminContratos from "./pages/AdminContratos";
import AdminAnalises from "./pages/AdminAnalises";
import AdminManutencoes from "./pages/AdminManutencoes";
import InquilinoHistoricoPagamentos from "./pages/InquilinoHistoricoPagamentos";
import InquilinoManutencoes from "./pages/InquilinoManutencoes";
import ProprietarioContratos from "./pages/ProprietarioContratos";
import InquilinoContratos from "./pages/InquilinoContratos";
import ProprietarioConfiguracoes from "./pages/ProprietarioConfiguracoes";
import InquilinoConfiguracoes from "./pages/InquilinoConfiguracoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/imoveis" element={<Imoveis />} />
          <Route path="/imoveis/:id" element={<DetalheImovel />} />
          <Route path="/checkout/:id" element={<Checkout />} />

          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />
          <Route
            path="/dashboard-proprietario"
            element={<DashboardProprietario />}
          />
          <Route
            path="/dashboard-proprietario/cadastro-imovel"
            element={<CadastroImovel />}
          />
          <Route
            path="/dashboard-proprietario/visitas"
            element={<VisitasAgendadas />}
          />
          <Route
            path="/dashboard-proprietario/propostas"
            element={<PropostasRecebidas />}
          />
          <Route
            path="/dashboard-proprietario/financeiro"
            element={<GestaoFinanceira />}
          />
          <Route
            path="/dashboard-proprietario/contratos"
            element={<ProprietarioContratos />}
          />
          <Route
            path="/dashboard-proprietario/configuracoes"
            element={<ProprietarioConfiguracoes />}
          />
          <Route path="/dashboard-inquilino" element={<DashboardInquilino />} />
          <Route
            path="/dashboard-inquilino/pagamentos"
            element={<InquilinoHistoricoPagamentos />}
          />
          <Route
            path="/dashboard-inquilino/manutencoes"
            element={<InquilinoManutencoes />}
          />
          <Route
            path="/dashboard-inquilino/contratos"
            element={<InquilinoContratos />}
          />
          <Route
            path="/dashboard-inquilino/configuracoes"
            element={<InquilinoConfiguracoes />}
          />
          <Route path="/proposta" element={<Proposta />} />
          <Route path="/proposta-expressa" element={<PropostaExpressa />} />
          <Route path="/analise-inteligente" element={<AnaliseInteligente />} />
          <Route path="/agendar-visita" element={<AgendarVisita />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/admin/usuarios" element={<AdminUsuarios />} />
          <Route path="/admin/imoveis" element={<AdminImoveis />} />
          <Route path="/admin/relatorios" element={<AdminRelatorios />} />
          <Route path="/admin/configuracoes" element={<AdminConfiguracoes />} />
          <Route path="/admin/pagamentos" element={<AdminPagamentos />} />
          <Route path="/admin/taxas" element={<AdminTaxas />} />
          <Route path="/admin/contratos" element={<AdminContratos />} />
          <Route path="/admin/analises" element={<AdminAnalises />} />
          <Route path="/admin/manutencoes" element={<AdminManutencoes />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
