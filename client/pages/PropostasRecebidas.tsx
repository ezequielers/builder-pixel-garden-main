import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Proposal {
  id: number;
  propertyTitle: string;
  propertyAddress: string;
  tenantName: string;
  tenantAge: number;
  tenantOccupation: string;
  tenantIncome: number;
  hasDebt: boolean;
  proposedRent: number;
  originalRent: number;
  entryDate: string;
  status: "pending" | "accepted" | "rejected" | "negotiating";
  propertyImage: string;
  guaranteeType: string;
  creditScore: number;
}

export default function PropostasRecebidas() {
  const [proposals] = useState<Proposal[]>([
    {
      id: 1,
      propertyTitle: "Apartamento Vila Olímpia",
      propertyAddress: "Rua dos Pinheiros, 123 - Vila Olímpia, SP",
      tenantName: "João Silva",
      tenantAge: 27,
      tenantOccupation: "Desenvolvedor de Software",
      tenantIncome: 8500,
      hasDebt: false,
      proposedRent: 3200,
      originalRent: 3500,
      entryDate: "2024-02-01",
      status: "pending",
      propertyImage:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      guaranteeType: "Garantia HomeFlip",
      creditScore: 720,
    },
    {
      id: 2,
      propertyTitle: "Casa Jardim Paulista",
      propertyAddress: "Av. Paulista, 456 - Jardim Paulista, SP",
      tenantName: "Maria Santos",
      tenantAge: 32,
      tenantOccupation: "Arquiteta",
      tenantIncome: 12000,
      hasDebt: false,
      proposedRent: 5500,
      originalRent: 5500,
      entryDate: "2024-01-20",
      status: "accepted",
      propertyImage:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      guaranteeType: "Fiador",
      creditScore: 780,
    },
    {
      id: 3,
      propertyTitle: "Apartamento Vila Olímpia",
      propertyAddress: "Rua dos Pinheiros, 123 - Vila Olímpia, SP",
      tenantName: "Carlos Oliveira",
      tenantAge: 29,
      tenantOccupation: "Designer Gráfico",
      tenantIncome: 6500,
      hasDebt: true,
      proposedRent: 3000,
      originalRent: 3500,
      entryDate: "2024-01-25",
      status: "negotiating",
      propertyImage:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      guaranteeType: "Depósito Caução",
      creditScore: 650,
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "accepted":
        return "text-green-600 bg-green-50 border-green-200";
      case "pending":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "negotiating":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "rejected":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "accepted":
        return "Aceita";
      case "pending":
        return "Pendente";
      case "negotiating":
        return "Negociando";
      case "rejected":
        return "Rejeitada";
      default:
        return "Desconhecido";
    }
  };

  const getCreditScoreColor = (score: number) => {
    if (score >= 700) return "text-green-600";
    if (score >= 600) return "text-yellow-600";
    return "text-red-600";
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("pt-BR");
  };

  const handleAccept = (proposalId: number) => {
    console.log("Aceitar proposta:", proposalId);
  };

  const handleReject = (proposalId: number) => {
    console.log("Rejeitar proposta:", proposalId);
  };

  const handleNegotiate = (proposalId: number) => {
    console.log("Negociar proposta:", proposalId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header showGradient={false} />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/dashboard-proprietario"
              className="inline-flex items-center text-homeflip-purple hover:text-[#4A0D5F] font-source-code-pro text-sm mb-4"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Voltar ao Dashboard
            </Link>
            <h1 className="text-3xl font-telegraf font-bold text-gray-900 mb-2">
              Propostas Recebidas
            </h1>
            <p className="text-gray-600 font-source-code-pro">
              Analise e gerencie as propostas dos seus imóveis
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Total de Propostas
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-gray-900">
                    {proposals.length}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Pendentes
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-yellow-600">
                    {proposals.filter((p) => p.status === "pending").length}
                  </p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Aceitas
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-green-600">
                    {proposals.filter((p) => p.status === "accepted").length}
                  </p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Em Negociação
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-blue-600">
                    {proposals.filter((p) => p.status === "negotiating").length}
                  </p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Proposals List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-telegraf font-semibold text-gray-900">
                Suas Propostas
              </h2>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {proposals.map((proposal) => (
                  <div
                    key={proposal.id}
                    className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={proposal.propertyImage}
                          alt={proposal.propertyTitle}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-telegraf font-semibold text-gray-900 mb-1">
                            {proposal.propertyTitle}
                          </h3>
                          <p className="text-sm font-source-code-pro text-gray-600 mb-2">
                            {proposal.propertyAddress}
                          </p>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-source-code-pro font-medium border ${getStatusColor(proposal.status)}`}
                          >
                            {getStatusText(proposal.status)}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="mb-2">
                          <span className="text-lg font-telegraf font-bold text-gray-900">
                            {formatCurrency(proposal.proposedRent)}
                          </span>
                          {proposal.proposedRent !== proposal.originalRent && (
                            <span className="text-sm font-source-code-pro text-gray-500 line-through ml-2">
                              {formatCurrency(proposal.originalRent)}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-source-code-pro text-gray-600">
                          Entrada: {formatDate(proposal.entryDate)}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      {/* Perfil do Inquilino */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-telegraf font-medium text-gray-900 mb-3">
                          Perfil do Inquilino
                        </h4>
                        <div className="space-y-2">
                          <p className="font-source-code-pro text-gray-700">
                            <span className="font-medium">Nome:</span>{" "}
                            {proposal.tenantName}, {proposal.tenantAge} anos
                          </p>
                          <p className="font-source-code-pro text-gray-700">
                            <span className="font-medium">Profissão:</span>{" "}
                            {proposal.tenantOccupation}
                          </p>
                          <p className="font-source-code-pro text-gray-700">
                            <span className="font-medium">Renda:</span>{" "}
                            {formatCurrency(proposal.tenantIncome)}
                          </p>
                          <p className="font-source-code-pro text-gray-700">
                            <span className="font-medium">Negativado:</span>{" "}
                            <span
                              className={
                                proposal.hasDebt
                                  ? "text-red-600"
                                  : "text-green-600"
                              }
                            >
                              {proposal.hasDebt ? "Sim" : "Não"}
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Análise de Crédito */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-telegraf font-medium text-gray-900 mb-3">
                          Análise de Crédito
                        </h4>
                        <div className="space-y-2">
                          <p className="font-source-code-pro text-gray-700">
                            <span className="font-medium">Score:</span>{" "}
                            <span
                              className={`font-bold ${getCreditScoreColor(proposal.creditScore)}`}
                            >
                              {proposal.creditScore}
                            </span>
                          </p>
                          <p className="font-source-code-pro text-gray-700">
                            <span className="font-medium">Garantia:</span>{" "}
                            {proposal.guaranteeType}
                          </p>
                          <div className="mt-3">
                            <div
                              className={`px-2 py-1 rounded text-xs font-source-code-pro font-medium ${
                                proposal.creditScore >= 700
                                  ? "bg-green-100 text-green-800"
                                  : proposal.creditScore >= 600
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {proposal.creditScore >= 700
                                ? "Baixo Risco"
                                : proposal.creditScore >= 600
                                  ? "Médio Risco"
                                  : "Alto Risco"}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Garantias HomeFlip */}
                      <div className="bg-homeflip-purple/5 border border-homeflip-purple/20 rounded-lg p-4">
                        <h4 className="font-telegraf font-medium text-homeflip-purple mb-3">
                          Proteção HomeFlip
                        </h4>
                        <div className="space-y-2 text-sm font-source-code-pro">
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">
                              Cobertura de inadimplência
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">
                              Danos ao imóvel
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">
                              Assistência jurídica
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    {proposal.status === "pending" && (
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => handleReject(proposal.id)}
                          className="px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors duration-200 font-source-code-pro text-sm"
                        >
                          Recusar
                        </button>
                        <button
                          onClick={() => handleNegotiate(proposal.id)}
                          className="px-4 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-source-code-pro text-sm"
                        >
                          Negociar Valores
                        </button>
                        <button
                          onClick={() => handleAccept(proposal.id)}
                          className="px-6 py-2 bg-homeflip-purple text-white rounded-lg hover:bg-[#4A0D5F] transition-colors duration-200 font-source-code-pro text-sm"
                        >
                          Aceitar e Prosseguir
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
