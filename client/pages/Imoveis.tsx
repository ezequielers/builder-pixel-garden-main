import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  SlidersHorizontal,
  Grid3X3,
  List,
  ArrowUpDown,
  Filter,
  X,
} from "lucide-react";

interface Property {
  id: number;
  image: string;
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
}

interface SearchFilters {
  search: string;
  city: string;
  neighborhood: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  bathrooms: string;
  minArea: string;
  maxArea: string;
  garages: string;
  amenities: string[];
}

const mockProperties: Property[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop",
    status: "Para alugar",
    title: "Apartamento moderno no centro",
    address: "Rua das Flores, 123 - Centro",
    price: "R$ 2.500/mês",
    priceValue: 2500,
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    garages: 1,
    type: "Apartamento",
    neighborhood: "Centro",
    city: "São Paulo",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
    status: "Para alugar",
    title: "Casa espaçosa com jardim",
    address: "Av. Brasil, 456 - Jardim América",
    price: "R$ 4.200/mês",
    priceValue: 4200,
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    garages: 2,
    type: "Casa",
    neighborhood: "Jardim América",
    city: "São Paulo",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    status: "Para alugar",
    title: "Loft industrial na Vila Madalena",
    address: "Rua Augusta, 789 - Vila Madalena",
    price: "R$ 3.800/mês",
    priceValue: 3800,
    bedrooms: 1,
    bathrooms: 1,
    area: 95,
    garages: 1,
    type: "Loft",
    neighborhood: "Vila Madalena",
    city: "São Paulo",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=300&fit=crop",
    status: "Para alugar",
    title: "Cobertura com vista panorâmica",
    address: "Rua Oscar Freire, 321 - Jardins",
    price: "R$ 8.500/mês",
    priceValue: 8500,
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    garages: 3,
    type: "Cobertura",
    neighborhood: "Jardins",
    city: "São Paulo",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    status: "Para alugar",
    title: "Apartamento familiar em Moema",
    address: "Rua Ibirapuera, 555 - Moema",
    price: "R$ 3.200/mês",
    priceValue: 3200,
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
    garages: 2,
    type: "Apartamento",
    neighborhood: "Moema",
    city: "São Paulo",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=300&fit=crop",
    status: "Para alugar",
    title: "Studio compacto na Liberdade",
    address: "Rua da Glória, 111 - Liberdade",
    price: "R$ 1.800/mês",
    priceValue: 1800,
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    garages: 0,
    type: "Studio",
    neighborhood: "Liberdade",
    city: "São Paulo",
  },
];

export default function Imoveis() {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("price-asc");
  const [filters, setFilters] = useState<SearchFilters>({
    search: "",
    city: "",
    neighborhood: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    minArea: "",
    maxArea: "",
    garages: "",
    amenities: [],
  });

  // Handle URL parameters from Hero search
  useEffect(() => {
    const search = searchParams.get("search") || "";
    const type = searchParams.get("type") || "";
    const location = searchParams.get("location") || "";
    const category = searchParams.get("category") || "";

    setFilters((prev) => ({
      ...prev,
      search,
      propertyType: type,
      city: location,
    }));

    if (search || type || location || category) {
      setShowFilters(true);
    }
  }, [searchParams]);

  const propertyTypes = [
    "Apartamento",
    "Casa",
    "Loft",
    "Studio",
    "Cobertura",
    "Kitnet",
    "Sobrado",
  ];

  const neighborhoods = [
    "Centro",
    "Jardim América",
    "Vila Madalena",
    "Jardins",
    "Moema",
    "Liberdade",
    "Pinheiros",
    "Itaim Bibi",
    "Vila Olímpia",
    "Brooklin",
  ];

  const amenities = [
    "Piscina",
    "Academia",
    "Salão de festas",
    "Churrasqueira",
    "Playground",
    "Portaria 24h",
    "Elevador",
    "Sacada",
    "Varanda",
    "Área de serviço",
  ];

  const filteredProperties = useMemo(() => {
    let result = mockProperties.filter((property) => {
      // Text search
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        if (
          !property.title.toLowerCase().includes(searchTerm) &&
          !property.address.toLowerCase().includes(searchTerm) &&
          !property.neighborhood.toLowerCase().includes(searchTerm)
        ) {
          return false;
        }
      }

      // City filter
      if (filters.city && property.city !== filters.city) {
        return false;
      }

      // Neighborhood filter
      if (
        filters.neighborhood &&
        property.neighborhood !== filters.neighborhood
      ) {
        return false;
      }

      // Property type filter
      if (filters.propertyType && property.type !== filters.propertyType) {
        return false;
      }

      // Price range filter
      if (
        filters.minPrice &&
        property.priceValue < parseInt(filters.minPrice)
      ) {
        return false;
      }
      if (
        filters.maxPrice &&
        property.priceValue > parseInt(filters.maxPrice)
      ) {
        return false;
      }

      // Bedrooms filter
      if (filters.bedrooms && property.bedrooms < parseInt(filters.bedrooms)) {
        return false;
      }

      // Bathrooms filter
      if (
        filters.bathrooms &&
        property.bathrooms < parseInt(filters.bathrooms)
      ) {
        return false;
      }

      // Area filter
      if (filters.minArea && property.area < parseInt(filters.minArea)) {
        return false;
      }
      if (filters.maxArea && property.area > parseInt(filters.maxArea)) {
        return false;
      }

      // Garages filter
      if (filters.garages && property.garages < parseInt(filters.garages)) {
        return false;
      }

      return true;
    });

    // Sort results
    result.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.priceValue - b.priceValue;
        case "price-desc":
          return b.priceValue - a.priceValue;
        case "area-asc":
          return a.area - b.area;
        case "area-desc":
          return b.area - a.area;
        case "bedrooms-desc":
          return b.bedrooms - a.bedrooms;
        default:
          return 0;
      }
    });

    return result;
  }, [filters, sortBy]);

  const handleFilterChange = (
    key: keyof SearchFilters,
    value: string | string[],
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      city: "",
      neighborhood: "",
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
      minArea: "",
      maxArea: "",
      garages: "",
      amenities: [],
    });
  };

  const getActiveFiltersCount = () => {
    return Object.entries(filters).filter(([key, value]) => {
      if (key === "amenities") {
        return Array.isArray(value) && value.length > 0;
      }
      return value !== "";
    }).length;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Search Hero Section */}
      <section className="bg-gradient-to-r from-homeflip-purple to-homeflip-violet py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Encontre seu imóvel ideal
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Pesquise entre milhares de imóveis disponíveis para aluguel
            </p>
          </div>

          {/* Main Search Bar */}
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Buscar por localização, bairro ou características..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange("search", e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 px-6"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtros
                {getActiveFiltersCount() > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {getActiveFiltersCount()}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Select
                      value={filters.city}
                      onValueChange={(value) =>
                        handleFilterChange("city", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Todas as cidades" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Todas as cidades</SelectItem>
                        <SelectItem value="São Paulo">São Paulo</SelectItem>
                        <SelectItem value="Rio de Janeiro">
                          Rio de Janeiro
                        </SelectItem>
                        <SelectItem value="Belo Horizonte">
                          Belo Horizonte
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="neighborhood">Bairro</Label>
                    <Select
                      value={filters.neighborhood}
                      onValueChange={(value) =>
                        handleFilterChange("neighborhood", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Todos os bairros" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Todos os bairros</SelectItem>
                        {neighborhoods.map((neighborhood) => (
                          <SelectItem key={neighborhood} value={neighborhood}>
                            {neighborhood}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="propertyType">Tipo de imóvel</Label>
                    <Select
                      value={filters.propertyType}
                      onValueChange={(value) =>
                        handleFilterChange("propertyType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Todos os tipos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Todos os tipos</SelectItem>
                        {propertyTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="bedrooms">Quartos mínimos</Label>
                    <Select
                      value={filters.bedrooms}
                      onValueChange={(value) =>
                        handleFilterChange("bedrooms", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Qualquer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Qualquer</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="minPrice">Preço mínimo</Label>
                    <Input
                      placeholder="R$ 0"
                      value={filters.minPrice}
                      onChange={(e) =>
                        handleFilterChange("minPrice", e.target.value)
                      }
                      type="number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="maxPrice">Preço máximo</Label>
                    <Input
                      placeholder="R$ 50.000"
                      value={filters.maxPrice}
                      onChange={(e) =>
                        handleFilterChange("maxPrice", e.target.value)
                      }
                      type="number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="minArea">Área mínima (m²)</Label>
                    <Input
                      placeholder="0"
                      value={filters.minArea}
                      onChange={(e) =>
                        handleFilterChange("minArea", e.target.value)
                      }
                      type="number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="garages">Vagas de garagem</Label>
                    <Select
                      value={filters.garages}
                      onValueChange={(value) =>
                        handleFilterChange("garages", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Qualquer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Qualquer</SelectItem>
                        <SelectItem value="0">Sem garagem</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button variant="outline" onClick={clearFilters}>
                    <X className="w-4 h-4 mr-2" />
                    Limpar filtros
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredProperties.length} imóveis encontrados
              </h2>
              <p className="text-gray-600 mt-1">Resultados da sua pesquisa</p>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Options */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Menor preço</SelectItem>
                  <SelectItem value="price-desc">Maior preço</SelectItem>
                  <SelectItem value="area-asc">Menor área</SelectItem>
                  <SelectItem value="area-desc">Maior ��rea</SelectItem>
                  <SelectItem value="bedrooms-desc">Mais quartos</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {getActiveFiltersCount() > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {filters.search && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    Busca: "{filters.search}"
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => handleFilterChange("search", "")}
                    />
                  </Badge>
                )}
                {filters.city && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    Cidade: {filters.city}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => handleFilterChange("city", "")}
                    />
                  </Badge>
                )}
                {filters.neighborhood && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    Bairro: {filters.neighborhood}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => handleFilterChange("neighborhood", "")}
                    />
                  </Badge>
                )}
                {filters.propertyType && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    Tipo: {filters.propertyType}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => handleFilterChange("propertyType", "")}
                    />
                  </Badge>
                )}
                {(filters.minPrice || filters.maxPrice) && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    Preço: R$ {filters.minPrice || "0"} - R${" "}
                    {filters.maxPrice || "∞"}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => {
                        handleFilterChange("minPrice", "");
                        handleFilterChange("maxPrice", "");
                      }}
                    />
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  Limpar todos
                </Button>
              </div>
            </div>
          )}

          {/* Results Grid/List */}
          {filteredProperties.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }
            >
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Nenhum imóvel encontrado
                </h3>
                <p className="text-gray-600 mb-4">
                  Não encontramos imóveis que correspondam aos seus critérios de
                  busca.
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Limpar filtros e ver todos os imóveis
                </Button>
              </div>
            </div>
          )}

          {/* Load More Button */}
          {filteredProperties.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Carregar mais imóveis
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
