import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  Car,
  Bed,
  Bath,
  Maximize,
  Wifi,
  AirVent,
  Shield,
  Camera,
  Users,
  Utensils,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Property {
  id: number;
  images: string[];
  status: string;
  title: string;
  address: string;
  price: string;
  priceValue: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  garages: number;
  type: string;
  neighborhood: string;
  city: string;
  description: string;
  amenities: string[];
  features: string[];
  ownerInfo: {
    name: string;
    phone: string;
    email: string;
    avatar: string;
  };
}

const mockProperty: Property = {
  id: 1,
  images: [
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  ],
  status: "Para alugar",
  title: "Apartamento moderno no centro",
  address: "Rua das Flores, 123 - Centro, São Paulo - SP",
  price: "R$ 2.500/mês",
  priceValue: 2500,
  bedrooms: 2,
  bathrooms: 1,
  area: 85,
  garages: 1,
  type: "Apartamento",
  neighborhood: "Centro",
  city: "São Paulo",
  description:
    "Apartamento moderno e bem localizado no centro da cidade. Totalmente reformado com acabamentos de primeira qualidade. Próximo ao metrô e principais vias de acesso. Ideal para quem busca praticidade e conforto na região central.",
  amenities: [
    "Portaria 24h",
    "Elevador",
    "Área de serviço",
    "Sacada",
    "Ar condicionado",
    "Internet banda larga",
  ],
  features: [
    "Cozinha americana",
    "Piso laminado",
    "Janelas amplas",
    "Banheiro com box",
    "Armários embutidos",
    "Iluminação LED",
  ],
  ownerInfo: {
    name: "Maria Silva",
    phone: "(11) 99999-9999",
    email: "maria@homeflip.com.br",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b566?w=150&h=150&fit=crop&crop=face",
  },
};

export default function DetalheImovel() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // In a real app, you would fetch the property data based on the ID
  const property = mockProperty;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1,
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1,
    );
  };

  const iconMap = {
    Wifi: Wifi,
    "Ar condicionado": AirVent,
    "Portaria 24h": Shield,
    Elevador: Users,
    "Área de serviço": Utensils,
    Sacada: Camera,
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Back Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              to="/imoveis"
              className="inline-flex items-center text-homeflip-purple hover:text-homeflip-purple/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para a busca
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={property.images[currentImageIndex]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Arrows */}
                  {property.images.length > 1 && (
                    <>
                      <button
                        onClick={previousImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {property.images.length}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                {property.images.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto">
                    {property.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          index === currentImageIndex
                            ? "border-homeflip-purple"
                            : "border-gray-300"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Imagem ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Property Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge className="mb-2">{property.status}</Badge>
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {property.title}
                      </h1>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        {property.address}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={isFavorite ? "text-red-500" : ""}
                      >
                        <Heart
                          className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`}
                        />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-homeflip-purple mb-6">
                    {property.price}
                  </div>

                  {/* Property Features */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Bed className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-semibold">{property.bedrooms}</div>
                        <div className="text-sm text-gray-600">Quartos</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Bath className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-semibold">
                          {property.bathrooms}
                        </div>
                        <div className="text-sm text-gray-600">Banheiros</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Maximize className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-semibold">{property.area}m²</div>
                        <div className="text-sm text-gray-600">Área total</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Car className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-semibold">{property.garages}</div>
                        <div className="text-sm text-gray-600">Vagas</div>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Descrição</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {property.description}
                    </p>
                  </div>

                  <Separator className="my-6" />

                  {/* Amenities */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Comodidades</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {property.amenities.map((amenity, index) => {
                        const IconComponent =
                          iconMap[amenity as keyof typeof iconMap] || Wifi;
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <IconComponent className="w-4 h-4" />
                            <span className="text-sm">{amenity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Características
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {property.features.map((feature, index) => (
                        <div key={index} className="text-sm text-gray-600">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Entre em contato
                  </h3>

                  {/* Owner Info */}
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src={property.ownerInfo.avatar}
                      alt={property.ownerInfo.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">
                        {property.ownerInfo.name}
                      </div>
                      <div className="text-sm text-gray-600">Proprietário</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Ligar agora
                    </Button>

                    <Button variant="outline" className="w-full" size="lg">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enviar mensagem
                    </Button>

                    <Button variant="outline" className="w-full" size="lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar e-mail
                    </Button>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-3">
                    <Link
                      to={`/agendar-visita?imovel=${property.id}&tipo=presencial`}
                    >
                      <Button variant="outline" className="w-full" size="lg">
                        <Calendar className="w-4 h-4 mr-2" />
                        Agendar visita presencial
                      </Button>
                    </Link>

                    <Link
                      to={`/agendar-visita?imovel=${property.id}&tipo=video`}
                    >
                      <Button variant="outline" className="w-full" size="lg">
                        <Camera className="w-4 h-4 mr-2" />
                        Visita por vídeo
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-blue-800">
                      <div className="font-semibold mb-1">Dica HomeFlip</div>
                      <div>
                        Agende uma visita para conhecer o imóvel pessoalmente
                        antes de tomar sua decisão.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Similar Properties */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Imóveis similares
                  </h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex gap-3">
                        <img
                          src={`https://images.unsplash.com/photo-${1560448204 + item}-e02f11c3d0e2?w=100&h=80&fit=crop`}
                          alt="Imóvel similar"
                          className="w-20 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm line-clamp-1">
                            Apartamento no centro
                          </div>
                          <div className="text-xs text-gray-600 line-clamp-1">
                            Centro, São Paulo
                          </div>
                          <div className="text-sm font-semibold text-homeflip-purple">
                            R$ {2000 + item * 300}/mês
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Ver mais similares
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
