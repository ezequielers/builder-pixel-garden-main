import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Bed,
  Bath,
  Car,
  Square,
  Heart,
  Calendar,
  MessageCircle,
  HandHeart,
  Star,
  PawPrint,
  Wifi,
  Car as ParkingIcon,
  Shield,
  DollarSign,
  Clock,
  Users,
  Video,
  Eye,
} from "lucide-react";

interface DetalheDeImoveisProps {
  property?: {
    id: number;
    status: string;
    title: string;
    address: string;
    price: string;
    pricePerSqft: string;
    image: string;
    gallery: string[];
    bedrooms: number;
    bathrooms: number;
    area: number;
    garages: number;
    cashback?: string;
    highlights?: Array<{
      text: string;
      icon: any;
      color: string;
    }>;
    taxes?: {
      condominio: string;
      iptu: string;
    };
  };
}

export default function DetalheDeImoveis({ property }: DetalheDeImoveisProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  // Mock property data seguindo o fluxo HomeFlip
  const mockProperty = {
    id: parseInt(id || "1"),
    status: "Para Alugar",
    title: "Apartamento moderno no centro",
    address: "Rua Augusta, 1200 - Consolação, São Paulo - SP",
    price: "R$ 2.800",
    pricePerSqft: "R$ 37/m²",
    cashback: "R$ 140",
    taxes: {
      condominio: "R$ 450",
      iptu: "R$ 180",
    },
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560449752-8b6b7b7d9e44?w=400&h=300&fit=crop",
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 75,
    garages: 1,
    highlights: [
      {
        icon: PawPrint,
        text: "Aceita pets",
        color: "bg-green-100 text-green-700",
      },
      { icon: Wifi, text: "Mobiliado", color: "bg-blue-100 text-blue-700" },
      {
        icon: ParkingIcon,
        text: "Vaga coberta",
        color: "bg-purple-100 text-purple-700",
      },
      {
        icon: Shield,
        text: "Portaria 24h",
        color: "bg-orange-100 text-orange-700",
      },
    ],
    location: {
      lat: -23.5505,
      lng: -46.6333,
    },
  };

  const currentProperty = property || mockProperty;

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleScheduleVisit = (type: "presencial" | "video") => {
    navigate(`/agendar-visita?imovel=${currentProperty.id}&tipo=${type}`);
  };

  const handleContactSpecialist = () => {
    // Simular abertura do chat
    alert("Chat com especialista HomeFlip será aberto!");
  };

  const handleSendProposal = () => {
    navigate(`/proposta-expressa?imovel=${currentProperty.id}`);
  };

  return (
    <div className="w-full bg-gray-50 py-6 md:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:gap-6 mb-6 md:mb-8 lg:mb-12">
          {/* Status Badge and Price Row */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 md:gap-6">
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Status Badge */}
              <div className="inline-flex w-fit">
                <Badge
                  style={{
                    background: "#9653DA",
                    fontSize: "18px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                  className=" text-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium font-gantari"
                >
                  {currentProperty.status}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-homeflip-purple/10 text-homeflip-purple border-homeflip-purple/20"
                >
                  <DollarSign className="w-3 h-3 mr-1" />
                  Cashback: {currentProperty.cashback || "R$ 0"}
                </Badge>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                {currentProperty.title}
              </h1>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-base md:text-lg">
                  {currentProperty.address}
                </span>
              </div>

              {/* Destaques */}
              <div className="flex flex-wrap gap-2 mb-4">
                {(currentProperty.highlights || []).map((highlight, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${highlight.color}`}
                  >
                    <highlight.icon className="w-3 h-3" />
                    {highlight.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Preços e ação de salvar */}
            <div className="text-left lg:text-right">
              <div className="flex items-center lg:justify-end gap-2 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">
                  {currentProperty.price}
                </span>
                <span className="text-lg text-gray-600">/mês</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSave}
                  className="ml-2"
                >
                  <Heart
                    className={`w-5 h-5 ${isSaved ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                  />
                </Button>
              </div>

              <div className="text-sm text-gray-600 space-y-1 lg:text-right">
                <div>
                  Condomínio: {currentProperty.taxes?.condominio || "R$ 0"}
                </div>
                <div>IPTU: {currentProperty.taxes?.iptu || "R$ 0"}</div>
                <div className="font-medium text-gray-500">
                  {currentProperty.pricePerSqft}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Galeria de imagens */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {/* Imagem principal */}
                  <div className="md:col-span-2 relative">
                    <img
                      src={currentProperty.image}
                      alt={currentProperty.title}
                      className="w-full h-64 md:h-80 object-cover rounded-t-xl"
                    />
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      1 / 8 fotos
                    </div>
                  </div>

                  {/* Imagens menores */}
                  {currentProperty.gallery.slice(0, 2).map((img, index) => (
                    <div key={index} className="relative">
                      <img
                        src={img}
                        alt={`Foto ${index + 2}`}
                        className="w-full h-32 md:h-40 object-cover rounded-bl-xl"
                      />
                    </div>
                  ))}
                </div>

                {/* Informações do imóvel */}
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium">
                        {currentProperty.bedrooms} quartos
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium">
                        {currentProperty.bathrooms} banheiros
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium">
                        {currentProperty.area}m²
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium">
                        {currentProperty.garages} vaga
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ações principais */}
          <div className="space-y-4">
            {/* Ações principais */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Ações rápidas</h3>

                <div className="space-y-3">
                  {/* Agendar visita */}
                  <div className="space-y-2">
                    <Button
                      onClick={() => handleScheduleVisit("presencial")}
                      variant="rental"
                      className="w-full"
                      size="lg"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Agendar visita presencial
                    </Button>

                    <Button
                      onClick={() => handleScheduleVisit("video")}
                      variant="outline"
                      className="w-full"
                      size="lg"
                    >
                      <Video className="w-5 h-5 mr-2" />
                      Visita por vídeo
                    </Button>
                  </div>

                  <Separator />

                  {/* Chamar especialista */}
                  <Button
                    onClick={handleContactSpecialist}
                    variant="outline"
                    className="w-full"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chamar especialista HomeFlip
                  </Button>

                  <Separator />

                  {/* Enviar proposta */}
                  <Button
                    onClick={handleSendProposal}
                    className="w-full bg-homeflip-green hover:bg-homeflip-green/90 text-white"
                    size="lg"
                  >
                    <HandHeart className="w-5 h-5 mr-2" />
                    Enviar proposta em 2 cliques
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Garantia HomeFlip */}
            <Card className="bg-gradient-to-br from-homeflip-gradient-from to-homeflip-gradient-to border-homeflip-purple/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-homeflip-purple/10 rounded-lg">
                    <Shield className="w-5 h-5 text-homeflip-purple" />
                  </div>
                  <h3 className="font-semibold text-lg">Garantia HomeFlip</h3>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-homeflip-purple rounded-full"></div>
                    <span>Sem fiador</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-homeflip-purple rounded-full"></div>
                    <span>Sem caução</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-homeflip-purple rounded-full"></div>
                    <span>Proteção para ambas as partes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informações do proprietário */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Maria Silva</h4>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>4.8 (23 avaliações)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Responde em até 2 horas</span>
                </div>
              </CardContent>
            </Card>

            {/* Visualizações recentes */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Eye className="w-4 h-4" />
                  <span>Interesse recente</span>
                </div>

                <div className="text-sm text-gray-600">
                  <div className="mb-1">18 pessoas visualizaram hoje</div>
                  <div>3 propostas enviadas esta semana</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
