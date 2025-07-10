import { useParams } from "react-router-dom";

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
  };
}

export default function DetalheDeImoveis({ property }: DetalheDeImoveisProps) {
  const { id } = useParams();

  // Mock property data based on Figma design
  const mockProperty = {
    id: parseInt(id || "1"),
    status: "À venda",
    title: "Incrível apartamento moderno",
    address: "43 W. Wellington Road Fairhope, AL 36532",
    price: "$120.000",
    pricePerSqft: "$1200/sq.ft",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f9d104d65bad4566f22b937d345ae17f91f3fc5a?width=1712",
    gallery: [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c1f437e0c04a5d9d800cbcfb9181ac12f418a6b5?width=832",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f8ae3cfa1201eb1697b835085a65187fb906f1c4?width=832",
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    garages: 1,
  };

  const currentProperty = property || mockProperty;

  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:gap-6 mb-6 md:mb-8 lg:mb-12">
          {/* Status Badge and Price Row */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 md:gap-6">
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Status Badge */}
              <div className="inline-flex w-fit">
                <span className="bg-green-500 text-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium font-gantari">
                  {currentProperty.status}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 font-gantari leading-tight">
                {currentProperty.title}
              </h1>
            </div>

            {/* Price */}
            <div className="text-left lg:text-right">
              <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-black font-inter leading-tight">
                {currentProperty.price}
              </div>
            </div>
          </div>

          {/* Address and Price per sqft */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 md:gap-4">
            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-inter">
              {currentProperty.address}
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-inter">
              {currentProperty.pricePerSqft}
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="flex flex-col xl:flex-row gap-4 md:gap-6">
          {/* Main Image */}
          <div className="xl:flex-1">
            <img
              src={currentProperty.image}
              alt={currentProperty.title}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[544px] object-cover rounded-lg md:rounded-xl lg:rounded-2xl"
            />
          </div>

          {/* Gallery Images */}
          <div className="xl:w-[416px] flex flex-row xl:flex-col gap-4 md:gap-6">
            {/* Show All Photos Button */}
            <div
              className="relative flex-1 xl:flex-none xl:h-[260px] h-32 sm:h-40 md:h-48 rounded-lg md:rounded-xl overflow-hidden cursor-pointer group"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.37) 0%, rgba(0,0,0,0.37) 100%), url(${currentProperty.gallery[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mx-auto mb-1 md:mb-2"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 19.5C23 20.0304 22.7893 20.5391 22.4142 20.9142C22.0391 21.2893 21.5304 21.5 21 21.5H3C2.46957 21.5 1.96086 21.2893 1.58579 20.9142C1.21071 20.5391 1 20.0304 1 19.5V8.5C1 7.96957 1.21071 7.46086 1.58579 7.08579C1.96086 6.71071 2.46957 6.5 3 6.5H7L9 3.5H15L17 6.5H21C21.5304 6.5 22.0391 6.71071 22.4142 7.08579C22.7893 7.46086 23 7.96957 23 8.5V19.5Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17.5C14.2091 17.5 16 15.7091 16 13.5C16 11.2909 14.2091 9.5 12 9.5C9.79086 9.5 8 11.2909 8 13.5C8 15.7091 9.79086 17.5 12 17.5Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="text-sm md:text-base lg:text-lg font-bold font-gantari">
                    Mostrar tudo
                  </div>
                  <div className="text-xs md:text-sm font-gantari">
                    12 fotos
                  </div>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div
              className="relative flex-1 xl:flex-none xl:h-[260px] h-32 sm:h-40 md:h-48 rounded-lg md:rounded-xl border border-gray-300 overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `url(${currentProperty.gallery[1]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                  viewBox="0 0 24 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 29.6666C12 29.6666 24 21.6666 24 12.3333C24 9.15065 22.7357 6.09841 20.4853 3.84797C18.2348 1.59753 15.1826 0.333252 12 0.333252C8.8174 0.333252 5.76515 1.59753 3.51472 3.84797C1.26428 6.09841 0 9.15065 0 12.3333C0 21.6666 12 29.6666 12 29.6666ZM16 12.3333C16 14.5424 14.2091 16.3333 12 16.3333C9.79086 16.3333 8 14.5424 8 12.3333C8 10.1241 9.79086 8.33325 12 8.33325C14.2091 8.33325 16 10.1241 16 12.3333Z"
                    fill="#0057FF"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
