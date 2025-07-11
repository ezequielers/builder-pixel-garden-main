import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Hero() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    propertyType: "",
    location: "",
    search: "",
  });

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (filters.category) searchParams.set("category", filters.category);
    if (filters.propertyType) searchParams.set("type", filters.propertyType);
    if (filters.location) searchParams.set("location", filters.location);
    if (filters.search) searchParams.set("search", filters.search);

    navigate(`/imoveis?${searchParams.toString()}`);
  };

  return (
    <section
      style={{ background: "linear-gradient(to bottom, #E3E1F8, #FFFFFF)" }}
      className="relative w-full min-h-[500px] sm:min-h-[600px] lg:h-[730px] bg-white shadow-[0px_4px_200px_0px_rgba(232,249,247,0.20)] overflow-hidden"
    >
      {/* Enhanced Gradient Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(224, 222, 247, 0.3) 0%, rgba(224, 222, 247, 0.00) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="flex flex-col items-center">
          {/* Hero Image and Text Section */}
          <div
            className="w-full h-[700px] sm:h-[800px] md:h-[850px] lg:h-[600px] rounded-t-lg md:rounded-t-xl relative"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('https://cdn.builder.io/api/v1/image/assets/TEMP/083e6f86a30d3717f17cc5dcf1c69d289b5aabe3?width=2592') center/cover no-repeat`,
            }}
          >
            {/* Hero Text Content */}
            <div className="absolute left-4 sm:left-8 lg:left-[72px] top-[40px] sm:top-[60px] md:top-[80px] lg:top-[141px] right-4 sm:right-8 lg:right-auto">
              <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                {/* Main Headline */}
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
                  Encontre o imóvel perfeito para seu estilo de vida!
                </h1>

                {/* Subtitle */}
                <p className="text-white/90 font-montserrat text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-lg">
                  Mais que um imóvel. Um lugar para chamar de seu lar. Seu
                  estilo de vida merece o imóvel certo. Descubra com a gente.
                </p>
              </div>
            </div>

            {/* Search Controls Section */}
            <div className="absolute left-4 md:left-[72px] bottom-6 md:bottom-8 lg:top-[450px] right-4 md:right-auto lg:w-[860px] xl:w-[1076px] z-10">
              {/* Enhanced Search Form */}
              <div className="flex flex-col lg:flex-row w-full h-auto p-4 sm:p-6 lg:p-8 xl:p-10 items-start lg:items-center gap-4 sm:gap-6 lg:gap-4 xl:gap-3 rounded-xl bg-white shadow-[0px_8px_40px_0px_rgba(0,0,0,0.20)] backdrop-blur-lg transition-all duration-300 hover:shadow-[0px_12px_50px_0px_rgba(0,0,0,0.25)] border border-white/20 relative">
                {/* Categoria Select */}
                <div className="flex flex-col items-start gap-2 w-full lg:flex-1 group">
                  <Select
                    value={filters.category}
                    onValueChange={(value) =>
                      setFilters({ ...filters, category: value })
                    }
                  >
                    <SelectTrigger className="h-12 md:h-[56px] px-4 bg-[#F6F6F6] border-none font-montserrat text-base md:text-lg transition-all duration-200 hover:bg-[#E0DEF7] hover:shadow-md relative">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent
                      className="z-[60]"
                      position="popper"
                      sideOffset={4}
                    >
                      <SelectItem value="rent">Alugar</SelectItem>
                      <SelectItem value="buy">Comprar</SelectItem>
                      <SelectItem value="sell">Vender</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Tipo de Imovel Select */}
                <div className="flex flex-col items-start gap-2 w-full lg:flex-1 group">
                  <Select
                    value={filters.propertyType}
                    onValueChange={(value) =>
                      setFilters({ ...filters, propertyType: value })
                    }
                  >
                    <SelectTrigger className="h-12 md:h-[56px] px-4 bg-[#F6F6F6] border-none font-montserrat text-base md:text-lg transition-all duration-200 hover:bg-[#E0DEF7] hover:shadow-md relative">
                      <SelectValue placeholder="Tipo de imóvel" />
                    </SelectTrigger>
                    <SelectContent
                      className="z-[60]"
                      position="popper"
                      sideOffset={4}
                    >
                      <SelectItem value="Apartamento">Apartamento</SelectItem>
                      <SelectItem value="Casa">Casa</SelectItem>
                      <SelectItem value="Loft">Loft</SelectItem>
                      <SelectItem value="Studio">Studio</SelectItem>
                      <SelectItem value="Comercial">Comercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Localização Select */}
                <div className="flex flex-col items-start gap-2 w-full lg:flex-1 group">
                  <Select
                    value={filters.location}
                    onValueChange={(value) =>
                      setFilters({ ...filters, location: value })
                    }
                  >
                    <SelectTrigger className="h-12 md:h-[56px] px-4 bg-[#F6F6F6] border-none font-montserrat text-base md:text-lg transition-all duration-200 hover:bg-[#E0DEF7] hover:shadow-md relative">
                      <SelectValue placeholder="Localização" />
                    </SelectTrigger>
                    <SelectContent
                      className="z-[60]"
                      position="popper"
                      sideOffset={4}
                    >
                      <SelectItem value="São Paulo">São Paulo</SelectItem>
                      <SelectItem value="Rio de Janeiro">
                        Rio de Janeiro
                      </SelectItem>
                      <SelectItem value="Belo Horizonte">
                        Belo Horizonte
                      </SelectItem>
                      <SelectItem value="Curitiba">Curitiba</SelectItem>
                      <SelectItem value="Porto Alegre">Porto Alegre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Filter Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    d="M0.75 6.26308H12.9615C13.2984 7.62405 14.5295 8.63622 15.9931 8.63622C17.4567 8.63622 18.6878 7.62405 19.0246 6.26308H23.25C23.6642 6.26308 24 5.92727 24 5.51308C24 5.09889 23.6642 4.76308 23.25 4.76308H19.0246C18.6878 3.40211 17.4567 2.38989 15.993 2.38989C14.5294 2.38989 13.2983 3.40211 12.9615 4.76308H0.75C0.335812 4.76308 0 5.09889 0 5.51308C0 5.92727 0.335812 6.26308 0.75 6.26308ZM15.9931 3.88989C16.8881 3.88989 17.6163 4.61805 17.6163 5.51303C17.6163 6.40806 16.8881 7.13622 15.9931 7.13622C15.0981 7.13622 14.3699 6.40806 14.3699 5.51303C14.3699 4.61805 15.0981 3.88989 15.9931 3.88989ZM0.75 12.75H4.97541C5.31225 14.111 6.54333 15.1232 8.00695 15.1232C9.47058 15.1232 10.7017 14.111 11.0385 12.75H23.25C23.6642 12.75 24 12.4142 24 12C24 11.5858 23.6642 11.25 23.25 11.25H11.0385C10.7016 9.88905 9.47053 8.87683 8.00691 8.87683C6.54328 8.87683 5.3122 9.88905 4.97536 11.25H0.75C0.335812 11.25 0 11.5858 0 12C0 12.4142 0.335766 12.75 0.75 12.75ZM8.00691 10.3768C8.90194 10.3768 9.63009 11.105 9.63009 12C9.63009 12.895 8.90194 13.6232 8.00691 13.6232C7.11187 13.6232 6.38372 12.895 6.38372 12C6.38372 11.105 7.11187 10.3768 8.00691 10.3768ZM23.25 17.737H19.0246C18.6878 16.376 17.4567 15.3638 15.993 15.3638C14.5294 15.3638 13.2983 16.376 12.9615 17.737H0.75C0.335812 17.737 0 18.0728 0 18.487C0 18.9011 0.335812 19.237 0.75 19.237H12.9615C13.2984 20.5979 14.5295 21.6101 15.9931 21.6101C17.4567 21.6101 18.6878 20.5979 19.0246 19.237H23.25C23.6642 19.237 24 18.9011 24 18.487C24 18.0728 23.6642 17.737 23.25 17.737ZM15.9931 20.1101C15.0981 20.1101 14.3699 19.382 14.3699 18.487C14.3699 17.5919 15.0981 16.8638 15.9931 16.8638C16.8881 16.8638 17.6163 17.5919 17.6163 18.487C17.6163 19.382 16.8881 20.1101 15.9931 20.1101Z"
                    fill="black"
                  />
                </svg>

                {/* Enhanced Search Button */}
                <button
                  onClick={handleSearch}
                  className="flex w-full lg:w-[160px] h-12 md:h-[50px] px-5 py-2 justify-center items-center gap-3 rounded-md bg-homeflip-purple cursor-pointer transition-all duration-300 hover:bg-homeflip-purple/90 hover:shadow-[0px_8px_25px_0px_rgba(74,13,95,0.4)] hover:scale-105 active:scale-95 group"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-200 group-hover:rotate-12"
                  >
                    <path
                      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.0004 20.9999L16.6504 16.6499"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white text-base sm:text-lg font-normal leading-5 transition-all duration-200 group-hover:font-semibold">
                    Buscar
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
