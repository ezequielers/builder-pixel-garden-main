import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Imoveis from "./pages/Imoveis";

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
          <Route path="/dashboard-inquilino" element={<DashboardInquilino />} />
          <Route path="/proposta" element={<Proposta />} />
          <Route path="/proposta-expressa" element={<PropostaExpressa />} />
          <Route path="/analise-inteligente" element={<AnaliseInteligente />} />
          <Route path="/agendar-visita" element={<AgendarVisita />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
