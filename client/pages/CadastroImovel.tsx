import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface PropertyData {
  address: string;
  cep: string;
  city: string;
  state: string;
  propertyType: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  garages: string;
  monthlyRent: string;
  acceptsPets: boolean;
  isFurnished: boolean;
  hasCondominium: boolean;
  condominiumFee: string;
  iptu: string;
  photos: File[];
  highlights: string[];
}

export default function CadastroImovel() {
  const [currentStep, setCurrentStep] = useState(1);
  const [propertyData, setPropertyData] = useState<PropertyData>({
    address: "",
    cep: "",
    city: "",
    state: "",
    propertyType: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    garages: "",
    monthlyRent: "",
    acceptsPets: false,
    isFurnished: false,
    hasCondominium: false,
    condominiumFee: "",
    iptu: "",
    photos: [],
    highlights: [],
  });

  const totalSteps = 4;

  const steps = [
    { id: 1, title: "Endereço", description: "Localização do imóvel" },
    { id: 2, title: "Detalhes", description: "Características do imóvel" },
    { id: 3, title: "Valor", description: "Preços e taxas" },
    { id: 4, title: "Fotos", description: "Imagens do imóvel" },
  ];

  const propertyTypes = [
    "Apartamento",
    "Casa",
    "Kitnet/Studio",
    "Loft",
    "Cobertura",
    "Casa de Condomínio",
    "Sobrado",
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updatePropertyData = (field: keyof PropertyData, value: any) => {
    setPropertyData((prev) => ({ ...prev, [field]: value }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-telegraf font-medium text-gray-700 mb-2">
                Endereço completo *
              </label>
              <input
                type="text"
                value={propertyData.address}
                onChange={(e) => updatePropertyData("address", e.target.value)}
                placeholder="Ex: Rua das Flores, 123 - Vila Madalena"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeflip-purple focus:border-transparent font-source-code-pro"
              />
              <p className="text-xs font-source-code-pro text-gray-500 mt-1">
                Começamos a completar automaticamente com base no CEP
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-telegraf font-medium text-gray-700 mb-2">
                  CEP *
                </label>
                <input
                  type="text"
                  value={propertyData.cep}
                  onChange={(e) => updatePropertyData("cep", e.target.value)}
                  placeholder="00000-000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeflip-purple focus:border-transparent font-source-code-pro"
                />
              </div>

              <div>
                <label className="block text-sm font-telegraf font-medium text-gray-700 mb-2">
                  Cidade *
                </label>
                <input
                  type="text"
                  value={propertyData.city}
                  onChange={(e) => updatePropertyData("city", e.target.value)}
                  placeholder="São Paulo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeflip-purple focus:border-transparent font-source-code-pro"
                />
              </div>

              <div>
                <label className="block text-sm font-telegraf font-medium text-gray-700 mb-2">
                  Estado *
                </label>
                <select
                  value={propertyData.state}
                  onChange={(e) => updatePropertyData("state", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeflip-purple focus:border-transparent font-source-code-pro"
                >
                  <option value="">Selecione</option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="MG">Minas Gerais</option>
                </select>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-500 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-telegraf font-medium text-blue-900 mb-1">
                    Estimativa de aluguel ideal
                  </h4>
                  <p className="text-sm font-source-code-pro text-blue-700">
                    Com base na região informada, imóveis similares são alugados
                    por R$ 2.800 - R$ 3.200 por mês.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-telegraf font-medium text-gray-700 mb-2">
                Tipo de imóvel *
              </label>
              <select
                value={propertyData.propertyType}
                onChange={(e) =>
                  updatePropertyData("propertyType", e.target.value)
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeflip-purple focus:border-transparent font-source-code-pro"
              >
                <option value="">Selecione o tipo</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-telegraf font-medium text-gray-700 mb-2">
                  Área (m²) *
                </label>
                <input
                  type="number"
                  value={propertyData.area}
                  onChange={(e) => updatePropertyData("area", e.target.value)}
                  placeholder="80"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeflip-purple focus:border-transparent font-source-code-pro"
                />
              </div>

              <div>
                <label className="block text-sm font-telegraf font-medium text-gray-700 mb-2">
                  Quartos *
                </label>
                <select
                  value={propertyData.bedrooms}
                  onChange={(e) =>
                    updatePropertyData("bedrooms", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeflip-purple focus:border-transparent font-source-code-pro"
                >
                  <option value="">0</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-telegraf font-medium text-gray-700 mb-2">
                  Banheiros *
                </label>
                <select
                  value={propertyData.bathrooms}
                  onChange={(e) =>
                    updatePropertyData("bathrooms", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeflip-purple focus:border-transparent font-source-code-pro"
                >
                  <option value="">0</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-telegraf font-medium text-gray-700 mb-2">
                  Vagas Garagem
                </label>
                <select
                  value={propertyData.garages}
                  onChange={(e) =>
                    updatePropertyData("garages", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeflip-purple focus:border-transparent font-source-code-pro"
                >
                  <option value="">0</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-telegraf font-semibold text-gray-900">
                Preferências
              </h3>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="acceptsPets"
                  checked={propertyData.acceptsPets}
                  onChange={(e) =>
                    updatePropertyData("acceptsPets", e.target.checked)
                  }
                  className="w-4 h-4 text-homeflip-purple border-gray-300 rounded focus:ring-homeflip-purple"
                />
                <label
                  htmlFor="acceptsPets"
                  className="font-source-code-pro text-gray-700"
                >
                  Aceita animais de estimação
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isFurnished"
                  checked={propertyData.isFurnished}
                  onChange={(e) =>
                    updatePropertyData("isFurnished", e.target.checked)
                  }
                  className="w-4 h-4 text-homeflip-purple border-gray-300 rounded focus:ring-homeflip-purple"
                />
                <label
                  htmlFor="isFurnished"
                  className="font-source-code-pro text-gray-700"
                >
                  Imóvel mobiliado
                </label>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-telegraf font-medium text-gray-700 mb-2">
                Valor do aluguel (R$) *
              </label>
              <input
                type="number"
                value={propertyData.monthlyRent}
                onChange={(e) =>
                  updatePropertyData("monthlyRent", e.target.value)
                }
                placeholder="3000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeflip-purple focus:border-transparent font-source-code-pro"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="hasCondominium"
                checked={propertyData.hasCondominium}
                onChange={(e) =>
                  updatePropertyData("hasCondominium", e.target.checked)
                }
                className="w-4 h-4 text-homeflip-purple border-gray-300 rounded focus:ring-homeflip-purple"
              />
              <label
                htmlFor="hasCondominium"
                className="font-source-code-pro text-gray-700"
              >
                Possui taxa de condomínio
              </label>
            </div>

            {propertyData.hasCondominium && (
              <div>
                <label className="block text-sm font-telegraf font-medium text-gray-700 mb-2">
                  Taxa de condomínio (R$)
                </label>
                <input
                  type="number"
                  value={propertyData.condominiumFee}
                  onChange={(e) =>
                    updatePropertyData("condominiumFee", e.target.value)
                  }
                  placeholder="400"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeflip-purple focus:border-transparent font-source-code-pro"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-telegraf font-medium text-gray-700 mb-2">
                IPTU anual (R$)
              </label>
              <input
                type="number"
                value={propertyData.iptu}
                onChange={(e) => updatePropertyData("iptu", e.target.value)}
                placeholder="1200"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-homeflip-purple focus:border-transparent font-source-code-pro"
              />
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-0.5"
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
                <div>
                  <h4 className="font-telegraf font-medium text-green-900 mb-1">
                    Simulação de antecipação
                  </h4>
                  <p className="text-sm font-source-code-pro text-green-700">
                    Com esse valor, você pode antecipar até R$ 36.000 (12 meses)
                    com nossa parceria financeira.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-telegraf font-semibold text-gray-900 mb-4">
                Fotos do imóvel
              </h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="mt-4">
                  <button className="bg-homeflip-purple text-white px-6 py-2 rounded-lg font-source-code-pro hover:bg-[#4A0D5F] transition-colors duration-200">
                    Escolher fotos
                  </button>
                  <p className="mt-2 text-sm font-source-code-pro text-gray-600">
                    PNG, JPG até 10MB cada
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-500 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h4 className="font-telegraf font-medium text-blue-900 mb-1">
                    Fotógrafo profissional HomeFlip
                  </h4>
                  <p className="text-sm font-source-code-pro text-blue-700">
                    Prefere que um profissional fotografe seu imóvel? Agende um
                    fotógrafo HomeFlip gratuitamente.
                  </p>
                  <button className="mt-2 text-blue-600 font-source-code-pro text-sm hover:text-blue-800">
                    Agendar fotógrafo →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-yellow-500 mt-0.5"
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
                <div>
                  <h4 className="font-telegraf font-medium text-yellow-900 mb-1">
                    Tempo médio de locação
                  </h4>
                  <p className="text-sm font-source-code-pro text-yellow-700">
                    Na sua região, imóveis similares são alugados em média em 15
                    dias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header showGradient={false} />

      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Cadastrar Novo Imóvel
            </h1>
            <p className="text-gray-600 font-source-code-pro">
              Siga os passos abaixo para cadastrar seu imóvel de forma rápida e
              fácil
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.id
                        ? "bg-homeflip-purple border-homeflip-purple text-white"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <span className="text-sm font-telegraf font-medium">
                        {step.id}
                      </span>
                    )}
                  </div>
                  <div className="ml-3">
                    <p
                      className={`text-sm font-telegraf font-medium ${
                        currentStep >= step.id
                          ? "text-homeflip-purple"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs font-source-code-pro text-gray-500">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-4 ${
                        currentStep > step.id
                          ? "bg-homeflip-purple"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-source-code-pro font-medium transition-colors duration-200 ${
                  currentStep === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Anterior
              </button>

              {currentStep === totalSteps ? (
                <button className="bg-homeflip-purple text-white px-8 py-3 rounded-lg font-source-code-pro font-medium hover:bg-[#4A0D5F] transition-colors duration-200">
                  Finalizar Cadastro
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="bg-homeflip-purple text-white px-6 py-3 rounded-lg font-source-code-pro font-medium hover:bg-[#4A0D5F] transition-colors duration-200"
                >
                  Próximo
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
