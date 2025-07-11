import { Link } from "react-router-dom";

interface PropertyCardProps {
  property: {
    id: number;
    image: string;
    status: string;
    title: string;
    address: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    garages: number;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const features = [
    {
      icon: (
        <img src="/images/IconQuarto.svg" alt="Quartos" className="w-4 h-4" />
      ),
      value: property.bedrooms,
      label: "Quartos",
    },
    {
      icon: (
        <img
          src="/images/IconBanheiro.svg"
          alt="Banheiros"
          className="w-4 h-4"
        />
      ),
      value: property.bathrooms,
      label: "Banheiros",
    },
    {
      icon: (
        <img src="/images/IconTotal.svg" alt="Área total" className="w-4 h-4" />
      ),
      value: property.area,
      label: "Área total",
    },
    {
      icon: (
        <img src="/images/IconGaragem.svg" alt="Garagens" className="w-4 h-4" />
      ),
      value: property.garages,
      label: "Garagens",
    },
  ];

  return (
    <Link to={`/imoveis/${property.id}`} className="block">
      <div className="group bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer h-full flex flex-col">
        {/* Property Image */}
        <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden flex-shrink-0">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <span className="bg-homeflip-purple text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium font-inter whitespace-nowrap">
              {property.status}
            </span>
          </div>
        </div>

        {/* Property Info */}
        <div className="p-3 sm:p-4 lg:p-5 flex-1 flex flex-col">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 font-inter mb-2 group-hover:text-homeflip-purple transition-colors duration-300 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
            {property.title}
          </h3>
          <p className="text-gray-600 font-inter text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 flex-1">
            {property.address}
          </p>
          <div className="text-base sm:text-lg lg:text-xl font-bold text-homeflip-purple font-inter mb-3 sm:mb-4 truncate">
            {property.price}
          </div>

          {/* Property Features */}
          <div className="grid grid-cols-4 gap-1 sm:gap-2 text-xs text-gray-600 font-inter mt-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center min-h-[3rem] sm:min-h-[3.5rem]"
              >
                <div className="mb-1 text-gray-700 flex-shrink-0">
                  {feature.icon}
                </div>
                <span className="font-medium text-xs sm:text-sm leading-tight">
                  {feature.value}
                </span>
                <span className="text-[9px] sm:text-xs leading-tight line-clamp-2 px-1">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
