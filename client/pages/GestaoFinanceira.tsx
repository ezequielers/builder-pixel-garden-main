import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Transaction {
  id: number;
  type: "income" | "expense";
  description: string;
  amount: number;
  date: string;
  status: "completed" | "pending" | "scheduled";
  property: string;
}

interface Property {
  id: number;
  title: string;
  monthlyRent: number;
  nextPayment: string;
  status: "active" | "vacant";
}

export default function GestaoFinanceira() {
  const [selectedPeriod, setSelectedPeriod] = useState("current_month");
  const [properties] = useState<Property[]>([
    {
      id: 1,
      title: "Apartamento Vila Olímpia",
      monthlyRent: 3500,
      nextPayment: "2024-01-05",
      status: "active",
    },
    {
      id: 2,
      title: "Casa Jardim Paulista",
      monthlyRent: 5500,
      nextPayment: "2024-01-10",
      status: "active",
    },
  ]);

  const [transactions] = useState<Transaction[]>([
    {
      id: 1,
      type: "income",
      description: "Aluguel Apartamento Vila Olímpia",
      amount: 3500,
      date: "2024-01-05",
      status: "completed",
      property: "Apartamento Vila Olímpia",
    },
    {
      id: 2,
      type: "income",
      description: "Aluguel Casa Jardim Paulista",
      amount: 5500,
      date: "2024-01-10",
      status: "completed",
      property: "Casa Jardim Paulista",
    },
    {
      id: 3,
      type: "expense",
      description: "Taxa de administração HomeFlip",
      amount: 280,
      date: "2024-01-10",
      status: "completed",
      property: "Casa Jardim Paulista",
    },
    {
      id: 4,
      type: "income",
      description: "Aluguel Apartamento Vila Olímpia",
      amount: 3500,
      date: "2024-02-05",
      status: "scheduled",
      property: "Apartamento Vila Olímpia",
    },
  ]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("pt-BR");
  };

  const getTotalIncome = () => {
    return transactions
      .filter((t) => t.type === "income" && t.status === "completed")
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getTotalExpenses = () => {
    return transactions
      .filter((t) => t.type === "expense" && t.status === "completed")
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getNetIncome = () => {
    return getTotalIncome() - getTotalExpenses();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50";
      case "pending":
        return "text-yellow-600 bg-yellow-50";
      case "scheduled":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Concluído";
      case "pending":
        return "Pendente";
      case "scheduled":
        return "Agendado";
      default:
        return "Desconhecido";
    }
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
              Gestão Financeira
            </h1>
            <p className="text-gray-600 font-source-code-pro">
              Acompanhe seus recebimentos e gerencie suas finanças
            </p>
          </div>

          {/* Period Selector */}
          <div className="mb-8">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg font-source-code-pro text-sm focus:ring-2 focus:ring-homeflip-purple focus:border-transparent"
            >
              <option value="current_month">Mês Atual</option>
              <option value="last_month">Mês Passado</option>
              <option value="last_3_months">Últimos 3 Meses</option>
              <option value="year">Ano Atual</option>
            </select>
          </div>

          {/* Financial Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Receita Total
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-green-600">
                    {formatCurrency(getTotalIncome())}
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Despesas
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-red-600">
                    {formatCurrency(getTotalExpenses())}
                  </p>
                </div>
                <div className="p-3 bg-red-100 rounded-lg">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Receita Líquida
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-homeflip-purple">
                    {formatCurrency(getNetIncome())}
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 00-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Próx. Recebimento
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-blue-600">
                    5 Jan
                  </p>
                  <p className="text-xs font-source-code-pro text-gray-500">
                    {formatCurrency(3500)}
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v16a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-homeflip-purple to-purple-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-telegraf font-semibold">
                  Antecipação de Aluguel
                </h3>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <p className="text-sm font-source-code-pro mb-4 opacity-90">
                Antecipe até 12 meses de aluguel e tenha liquidez imediata
              </p>
              <button className="bg-white text-homeflip-purple px-4 py-2 rounded-lg font-source-code-pro font-medium hover:bg-gray-100 transition-colors duration-200">
                Simular Antecipação
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-telegraf font-semibold">
                  Relatórios
                </h3>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-sm font-source-code-pro mb-4 opacity-90">
                Relatórios mensais e anuais para Imposto de Renda
              </p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-source-code-pro font-medium hover:bg-gray-100 transition-colors duration-200">
                Gerar Relatório
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-telegraf font-semibold">
                  Formas de Saque
                </h3>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <p className="text-sm font-source-code-pro mb-4 opacity-90">
                PIX, transferência bancária ou saldo HomeFlip
              </p>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-source-code-pro font-medium hover:bg-gray-100 transition-colors duration-200">
                Configurar Saque
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Properties Revenue */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-telegraf font-semibold text-gray-900">
                  Receitas por Imóvel
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div>
                        <h3 className="font-telegraf font-medium text-gray-900">
                          {property.title}
                        </h3>
                        <p className="text-sm font-source-code-pro text-gray-600">
                          Próximo: {formatDate(property.nextPayment)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-telegraf font-bold text-gray-900">
                          {formatCurrency(property.monthlyRent)}
                        </p>
                        <span
                          className={`text-xs font-source-code-pro px-2 py-1 rounded-full ${
                            property.status === "active"
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {property.status === "active" ? "Ativo" : "Vago"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-telegraf font-semibold text-gray-900">
                  Transações Recentes
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {transactions.slice(0, 5).map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            transaction.type === "income"
                              ? "bg-green-100"
                              : "bg-red-100"
                          }`}
                        >
                          {transaction.type === "income" ? (
                            <svg
                              className="w-4 h-4 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M7 11l5-5m0 0l5 5m-5-5v12"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-4 h-4 text-red-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 13l-5 5m0 0l-5-5m5 5V6"
                              />
                            </svg>
                          )}
                        </div>
                        <div>
                          <h3 className="font-telegraf font-medium text-gray-900 text-sm">
                            {transaction.description}
                          </h3>
                          <p className="text-xs font-source-code-pro text-gray-600">
                            {formatDate(transaction.date)} •{" "}
                            <span
                              className={`px-1 py-0.5 rounded text-xs ${getStatusColor(transaction.status)}`}
                            >
                              {getStatusText(transaction.status)}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-telegraf font-bold ${
                            transaction.type === "income"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.type === "income" ? "+" : "-"}
                          {formatCurrency(transaction.amount)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
