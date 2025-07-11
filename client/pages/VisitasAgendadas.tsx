import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Visit {
  id: number;
  propertyTitle: string;
  propertyAddress: string;
  visitorName: string;
  visitorAge: number;
  visitorOccupation: string;
  date: string;
  time: string;
  type: "presencial" | "video_tour";
  status: "pending" | "confirmed" | "completed" | "cancelled";
  propertyImage: string;
}

export default function VisitasAgendadas() {
  const [visits] = useState<Visit[]>([
    {
      id: 1,
      propertyTitle: "Apartamento Vila Olímpia",
      propertyAddress: "Rua dos Pinheiros, 123 - Vila Olímpia, SP",
      visitorName: "João Silva",
      visitorAge: 27,
      visitorOccupation: "Desenvolvedor de Software",
      date: "2024-01-15",
      time: "14:00",
      type: "presencial",
      status: "pending",
      propertyImage:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      propertyTitle: "Casa Jardim Paulista",
      propertyAddress: "Av. Paulista, 456 - Jardim Paulista, SP",
      visitorName: "Maria Santos",
      visitorAge: 32,
      visitorOccupation: "Arquiteta",
      date: "2024-01-16",
      time: "10:30",
      type: "video_tour",
      status: "confirmed",
      propertyImage:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      propertyTitle: "Apartamento Vila Olímpia",
      propertyAddress: "Rua dos Pinheiros, 123 - Vila Olímpia, SP",
      visitorName: "Carlos Oliveira",
      visitorAge: 29,
      visitorOccupation: "Designer Gráfico",
      date: "2024-01-17",
      time: "16:00",
      type: "presencial",
      status: "pending",
      propertyImage:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "text-green-600 bg-green-50 border-green-200";
      case "pending":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "completed":
        return "text-blue-600 bg-blue-50 border-blue-200";
      case "cancelled":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmada";
      case "pending":
        return "Pendente";
      case "completed":
        return "Concluída";
      case "cancelled":
        return "Cancelada";
      default:
        return "Desconhecido";
    }
  };

  const getTypeText = (type: string) => {
    return type === "presencial" ? "Presencial" : "Vídeo-tour";
  };

  const getTypeIcon = (type: string) => {
    if (type === "presencial") {
      return (
        <svg
          className="w-5 h-5 text-blue-500"
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
      );
    }
    return (
      <svg
        className="w-5 h-5 text-purple-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    );
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleApprove = (visitId: number) => {
    console.log("Aprovar visita:", visitId);
  };

  const handleReject = (visitId: number) => {
    console.log("Rejeitar visita:", visitId);
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
              Visitas Agendadas
            </h1>
            <p className="text-gray-600 font-source-code-pro">
              Gerencie as visitas aos seus imóveis e aprove horários
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Total de Visitas
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-gray-900">
                    {visits.length}
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

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-source-code-pro text-gray-600">
                    Pendentes
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-yellow-600">
                    {visits.filter((v) => v.status === "pending").length}
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
                    Confirmadas
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-green-600">
                    {visits.filter((v) => v.status === "confirmed").length}
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
                    Presenciais
                  </p>
                  <p className="text-2xl font-telegraf font-bold text-purple-600">
                    {visits.filter((v) => v.type === "presencial").length}
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Visits List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-telegraf font-semibold text-gray-900">
                Próximas Visitas
              </h2>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {visits.map((visit) => (
                  <div
                    key={visit.id}
                    className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <img
                          src={visit.propertyImage}
                          alt={visit.propertyTitle}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-telegraf font-semibold text-gray-900">
                              {visit.propertyTitle}
                            </h3>
                            <div className="flex items-center gap-1">
                              {getTypeIcon(visit.type)}
                              <span className="text-sm font-source-code-pro text-gray-600">
                                {getTypeText(visit.type)}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm font-source-code-pro text-gray-600 mb-3">
                            {visit.propertyAddress}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-telegraf font-medium text-gray-900 mb-1">
                                Visitante
                              </h4>
                              <p className="font-source-code-pro text-gray-700">
                                {visit.visitorName}, {visit.visitorAge} anos
                              </p>
                              <p className="text-sm font-source-code-pro text-gray-600">
                                {visit.visitorOccupation}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-telegraf font-medium text-gray-900 mb-1">
                                Data e Horário
                              </h4>
                              <p className="font-source-code-pro text-gray-700">
                                {formatDate(visit.date)}
                              </p>
                              <p className="text-sm font-source-code-pro text-gray-600">
                                às {visit.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-source-code-pro font-medium border ${getStatusColor(visit.status)}`}
                        >
                          {getStatusText(visit.status)}
                        </span>

                        {visit.status === "pending" && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleReject(visit.id)}
                              className="px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors duration-200 font-source-code-pro text-sm"
                            >
                              Rejeitar
                            </button>
                            <button
                              onClick={() => handleApprove(visit.id)}
                              className="px-4 py-2 bg-homeflip-purple text-white rounded-lg hover:bg-[#4A0D5F] transition-colors duration-200 font-source-code-pro text-sm"
                            >
                              Aprovar
                            </button>
                          </div>
                        )}
                      </div>
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
