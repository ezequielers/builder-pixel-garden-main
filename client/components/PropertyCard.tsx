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
        <img
          src="/images/IconQuarto.svg"
          alt="Quartos"
          className="w-4 h-4"
        />
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
        <img
          src="/images/IconTotal.svg"
          alt="Área total"
          className="w-4 h-4"
        />
      ),
      value: property.area,
      label: "Área total",
    },
    {
      icon: (
        <img
          src="/images/IconGaragem.svg"
          alt="Garagens"
          className="w-4 h-4"
        />
      ),
      value: property.garages,
      label: "Garagens",
    },
  ];

  return (
    <Link to={`/imoveis/${property.id}`} className="block">
      <div className="group bg-white rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer">
        {/* Property Image */}
        <div className="relative h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 sm:top-7 left-4 sm:left-5">
            <span
              style={{
                background: "#9653DA",
                fontSize: "18px",
                paddingTop: "8px",
                paddingBottom: "8px",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
              className="text-white rounded text-xs font-medium font-inter"
            >
              {property.status}
            </span>
          </div>
        </div>

        {/* Property Info */}
        <div className="p-3 sm:p-4 lg:p-5">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 font-inter mb-2 group-hover:text-homeflip-purple transition-colors duration-300 line-clamp-2">
            {property.title}
          </h3>
          <p className="text-gray-600 font-inter text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-1">
            {property.address}
          </p>
          <div className="text-base sm:text-lg lg:text-xl font-bold text-homeflip-purple font-inter mb-3 sm:mb-4">
            {property.price}
          </div>

          {/* Property Features */}
          <div className="grid grid-cols-4 gap-1 sm:gap-2 text-xs text-gray-600 font-inter">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-1 text-gray-700">{feature.icon}</div>
                <span className="font-medium text-xs sm:text-sm">
                  {feature.value}
                </span>
                <span className="text-[10px] sm:text-xs leading-tight">
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
