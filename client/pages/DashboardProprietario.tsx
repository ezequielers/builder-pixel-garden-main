import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DashboardProprietario() {
  const [properties] = useState([
    {
      id: 1,
      title: "Apartamento Vila Olímpia",
      address: "Rua dos Pinheiros, 123 - Vila Olímpia, SP",
      status: "publicado",
      visits: 12,
      proposals: 3,
      monthlyRent: 3500,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Casa Jardim Paulista",
      address: "Av. Paulista, 456 - Jardim Paulista, SP",
      status: "em_analise",
      visits: 0,
      proposals: 0,
      monthlyRent: 5500,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "publicado":
        return "text-green-600 bg-green-50";
      case "em_analise":
        return "text-yellow-600 bg-yellow-50";
      case "pausado":
        return "text-gray-600 bg-gray-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "publicado":
        return "Publicado";
      case "em_analise":
        return "Em análise";
      case "pausado":
        return "Pausado";
      default:
        return "Rascunho";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header showGradient={false} />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard do Proprietário
            </h1>
            <p className="text-gray-600 font-light">
              Gerencie seus imóveis e acompanhe o desempenho dos seus anúncios
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Imóveis Ativos
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-gray-900">
                    2
                  </p>
                </div>
                <div className="p-3 bg-homeflip-purple rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm0 0V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Visitas Agendadas
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-gray-900">
                    5
                  </p>
                </div>
                <div className="p-3 bg-blue-500 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v16a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Propostas Ativas
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-gray-900">
                    3
                  </p>
                </div>
                <div className="p-3 bg-green-500 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
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
                    Receita Mensal
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-gray-900">
                    R$ 9.000
                  </p>
                </div>
                <div className="p-3 bg-yellow-500 rounded-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              to="/dashboard-proprietario/cadastro-imovel"
              className="bg-homeflip-purple text-white px-6 py-3 rounded-lg font-source-code-pro font-medium hover:bg-[#4A0D5F] transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Cadastrar Novo Imóvel
            </Link>

            <Link
              to="/dashboard-proprietario/visitas"
              className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-source-code-pro font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v16a2 2 0 002 2z"
                />
              </svg>
              Ver Visitas Agendadas
            </Link>

            <Link
              to="/dashboard-proprietario/propostas"
              className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-source-code-pro font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
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
              Ver Propostas
            </Link>

            <Link
              to="/dashboard-proprietario/financeiro"
              className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-source-code-pro font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
              Gestão Financeira
            </Link>

            <Link
              to="/dashboard-proprietario/contratos"
              className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-source-code-pro font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
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
              Meus Contratos
            </Link>

            <Link
              to="/dashboard-proprietario/configuracoes"
              className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-source-code-pro font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Configurações
            </Link>
          </div>

          {/* Properties List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-telegraf font-semibold text-gray-900">
                Meus Imóveis
              </h2>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-telegraf font-semibold text-gray-900">
                          {property.title}
                        </h3>
                        <p className="text-sm font-source-code-pro text-gray-600">
                          {property.address}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-source-code-pro font-medium ${getStatusColor(property.status)}`}
                          >
                            {getStatusText(property.status)}
                          </span>
                          <span className="text-sm font-source-code-pro text-gray-600">
                            R$ {property.monthlyRent.toLocaleString()}/mês
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-lg font-telegraf font-bold text-gray-900">
                          {property.visits}
                        </p>
                        <p className="text-xs font-source-code-pro text-gray-600">
                          Visitas
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-telegraf font-bold text-gray-900">
                          {property.proposals}
                        </p>
                        <p className="text-xs font-source-code-pro text-gray-600">
                          Propostas
                        </p>
                      </div>
                      <button className="text-homeflip-purple hover:text-[#4A0D5F] p-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
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
