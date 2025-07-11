import { Link } from "react-router-dom";
import PropertyCard from "./PropertyCard";

export default function PropertyListings() {
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop",
      status: "Para Alugar",
      title: "Condomínio da Avenida Rockville",
      address: "8800 Rockville Ave, Greenville, NC 27834",
      price: "$300000",
      bedrooms: 2,
      bathrooms: 1,
      area: 100,
      garages: 2,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
      status: "Para Alugar",
      title: "Villa Escocesa de Ohio",
      address: "820 Ohio Road Scotch Plains, NJ 07076",
      price: "$600000",
      bedrooms: 4,
      bathrooms: 2,
      area: 984,
      garages: 3,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      status: "Para Alugar",
      title: "Vila de Enxofre",
      address: "8214 Smoky Hollow St, Sulphur, LA 70663",
      price: "$350000",
      bedrooms: 3,
      bathrooms: 1,
      area: 480,
      garages: 1,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=300&fit=crop",
      status: "Para Alugar",
      title: "Apartamento na Avenida Pawnee",
      address: "9 Pawnee St, Bloomfield, NJ 07003",
      price: "$180000",
      bedrooms: 2,
      bathrooms: 2,
      area: 220,
      garages: 0,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      status: "Para Alugar",
      title: "Apartamento na Avenida Oxford",
      address: "7 Maple Ave, Cary, NC 27511",
      price: "$150000",
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      garages: 0,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=300&fit=crop",
      status: "Para Alugar",
      title: "Apartamentos da Avenida Fremont",
      address: "123 Fremont Ave, Hamden, CT 06514",
      price: "$210000",
      bedrooms: 3,
      bathrooms: 2,
      area: 480,
      garages: 0,
    },
  ];

  return (
    <section className="w-full bg-white shadow-[0px_4px_200px_0px_rgba(232,249,247,0.20)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 font-telegraf mb-3">
            Com base na sua localização
          </h2>
          <p className="text-gray-600 font-source-code-pro text-sm md:text-base max-w-2xl mx-auto">
            Algumas das propriedades selecionadas perto de você.
          </p>
        </div>

        {/* Search Tabs */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12">
          {/* Tab Buttons */}
          <div className="lg:flex-1">
            <div className="inline-flex p-2  justify-start items-center rounded-lg border-[1.5px] border-[#E0DEF7] bg-[#F0EFFB] backdrop-blur-sm shadow-lg">
              <div className="w-full md:w-[250px] h-12 relative group">
                <div className="w-full md:w-[250px] h-12 rounded-md border-2 border-[#E0DEF7] bg-white shadow-[0px_8px_50px_0px_rgba(14,8,84,0.15)] absolute transition-all duration-300 group-hover:shadow-[0px_12px_60px_0px_rgba(14,8,84,0.25)]" />
                <div className="flex items-center gap-3 absolute left-4 md:left-[77px] top-[11px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-200 group-hover:scale-110"
                  >
                    <path
                      d="M16.4917 12.4416C14.775 14.1499 12.3167 14.6749 10.1584 13.9999L6.23337 17.9166C5.95004 18.2083 5.39171 18.3833 4.99171 18.3249L3.17504 18.0749C2.57504 17.9916 2.01671 17.4249 1.92504 16.8249L1.67504 15.0083C1.61671 14.6083 1.80837 14.0499 2.08337 13.7666L6.00004 9.84994C5.33337 7.68327 5.85004 5.22494 7.56671 3.5166C10.025 1.05827 14.0167 1.05827 16.4834 3.5166C18.95 5.97494 18.95 9.98327 16.4917 12.4416Z"
                      stroke="#3A2A72"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.7417 14.575L7.65837 16.4916"
                      stroke="#3A2A72"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.0833 9.16675C12.7736 9.16675 13.3333 8.6071 13.3333 7.91675C13.3333 7.22639 12.7736 6.66675 12.0833 6.66675C11.3929 6.66675 10.8333 7.22639 10.8333 7.91675C10.8333 8.6071 11.3929 9.16675 12.0833 9.16675Z"
                      stroke="#3A2A72"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[#3A2A72] font-telegraf text-lg font-bold leading-[145%] tracking-[-0.09px] transition-all duration-200 group-hover:text-[#2A1A5F]">
                    Alugar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-[352px] h-16 rounded-lg border-2 border-[#E0DEF7] bg-[#F7F7FD] relative group shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-[#7065F0]">
            <div className="flex items-center gap-4 absolute left-4 md:left-6 top-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-200 group-hover:scale-105"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#3A2A72"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="#3A2A72"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#000929] font-source-code-pro text-base font-normal leading-[150%] opacity-50 transition-opacity duration-200 group-hover:opacity-70">
                Pesquisar Imóvel
              </span>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center" style={{ marginBottom: "80px" }}>
          <Link
            to="/imoveis"
            className="inline-block bg-homeflip-purple text-white px-6 py-3 rounded-lg font-medium font-source-code-pro text-sm transition-all duration-300 hover:bg-[#4A0D5F] hover:shadow-lg hover:scale-105"
          >
            Ver mais imóveis
          </Link>
        </div>
      </div>
    </section>
  );
}
