import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function RelatedListings() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const relatedProperties = [
    {
      id: 7,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8b29cefa75611e0f0f971affde684dbaef91a844?width=832",
      status: "Para Alugar",
      title: "Apartamento em Piscataway",
      address: "19 North Road Piscataway, NJ 08854",
      price: "$142000",
      bedrooms: 3,
      bathrooms: 1,
      area: 120,
      garages: 0,
    },
    {
      id: 8,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b7abc6330a3ca38420fbbd2c8bfb18f0eb8c3b55?width=832",
      status: "Para Alugar",
      title: "Apartamento da Rua Division",
      address: "506 Division Road Pembroke Pines, FL 33028",
      price: "$120000",
      bedrooms: 2,
      bathrooms: 2,
      area: 140,
      garages: 0,
    },
    {
      id: 9,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/71d03cf967510455a85c8f9c9e64a4f2fecb5d16?width=832",
      status: "Para Alugar",
      title: "Apartamento Tanglewood",
      address: "8911 Tanglewood Ave. Capitol Heights, MD 20743",
      price: "$160000",
      bedrooms: 3,
      bathrooms: 1,
      area: 100,
      garages: 0,
    },
  ];

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const cardWidth =
        containerRef.current.querySelector(".property-card")?.clientWidth ||
        416;
      const gap = 24;
      const scrollPosition = index * (cardWidth + gap);
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % relatedProperties.length;
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      currentIndex === 0 ? relatedProperties.length - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  const features = [
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.8284 12.5311V12.074C22.8284 11.232 22.3924 10.4903 21.7348 10.0614V5.07538C21.7348 3.76354 20.6675 2.69629 19.3557 2.69629H4.64433C3.33248 2.69629 2.26519 3.76354 2.26519 5.07538V10.0613C1.60753 10.4902 1.17159 11.2319 1.17159 12.074V12.531C0.498187 12.7084 0 13.3224 0 14.0508V19.399C0 20.2404 0.664781 20.9294 1.49667 20.9685V21.6014C1.49667 21.989 1.81088 22.3032 2.19844 22.3032C2.586 22.3032 2.9002 21.989 2.9002 21.6014V20.9704H21.0998V21.6014C21.0998 21.989 21.414 22.3032 21.8015 22.3032C22.1891 22.3032 22.5033 21.989 22.5033 21.6014V20.9685C23.3352 20.9293 24 20.2404 24 19.399V14.0508C24 13.3224 23.5018 12.7084 22.8284 12.5311ZM3.66877 5.07538C3.66877 4.53745 4.10639 4.09982 4.64433 4.09982H19.3557C19.8936 4.09982 20.3312 4.53745 20.3312 5.07538V9.67227H19.3955V8.43534C19.3955 7.56955 18.6912 6.86516 17.8253 6.86516H14.0492C13.1834 6.86516 12.479 7.56955 12.479 8.43534V9.67227H11.521V8.43534C11.521 7.56955 10.8166 6.86516 9.95081 6.86516H6.17466C5.30883 6.86516 4.60448 7.56955 4.60448 8.43534V9.67227H3.66877V5.07538ZM17.9919 8.43529V9.50563C17.9919 9.59751 17.9172 9.67223 17.8253 9.67223H14.0492C13.9573 9.67223 13.8826 9.59746 13.8826 9.50563V8.43529C13.8826 8.34341 13.9574 8.2687 14.0492 8.2687H17.8253C17.9172 8.2687 17.9919 8.34341 17.9919 8.43529ZM10.1174 8.43529V9.50563C10.1174 9.59751 10.0426 9.67223 9.95081 9.67223H6.17466C6.08278 9.67223 6.00806 9.59746 6.00806 9.50563V8.43529C6.00806 8.34341 6.08283 8.2687 6.17466 8.2687H9.95081C10.0426 8.2687 10.1174 8.34341 10.1174 8.43529ZM2.57517 12.074C2.57517 11.5236 3.02297 11.0758 3.57338 11.0758H20.4266C20.977 11.0758 21.4248 11.5236 21.4248 12.074V12.4793H2.57517V12.074ZM22.5964 19.399C22.5964 19.4915 22.5211 19.5668 22.4286 19.5668H1.57139C1.47886 19.5668 1.40353 19.4915 1.40353 19.399V14.0508C1.40353 13.9582 1.47881 13.883 1.57139 13.883H22.4286C22.5211 13.883 22.5965 13.9582 22.5965 14.0508V19.399H22.5964Z"
            fill="#100E2C"
          />
        </svg>
      ),
      label: "Quartos",
    },
    {
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4302_1060)">
            <path
              d="M23.6302 13.2973H22.7208H5.95175V5.39771C5.95175 4.35648 6.79883 3.5094 7.84002 3.5094C8.66342 3.5094 9.365 4.03937 9.62263 4.77601C8.33647 5.01015 7.35795 6.13787 7.35795 7.49063V8.17252C7.35795 8.56084 7.67277 8.87565 8.06108 8.87565H12.8017C13.19 8.87565 13.5049 8.56084 13.5049 8.17252V7.49063C13.5049 6.0789 12.4393 4.91209 11.0703 4.75046C10.7687 3.24273 9.43508 2.10315 7.84002 2.10315C6.02342 2.10315 4.5455 3.58107 4.5455 5.39771V13.2973H1.94581H1.03644C0.648125 13.2973 0.333313 13.6121 0.333313 14.0004C0.333313 14.3887 0.648125 14.7035 1.03644 14.7035H1.37628L2.03473 17.8064C2.27473 18.9376 2.90178 19.9613 3.80028 20.6891C3.85452 20.7331 3.90964 20.7757 3.96552 20.8172L3.38009 21.8451C3.18791 22.1825 3.30566 22.6119 3.64311 22.804C3.75294 22.8666 3.87247 22.8963 3.99041 22.8963C4.23486 22.8963 4.47242 22.7686 4.60203 22.541L5.20058 21.49C5.76847 21.7042 6.37395 21.8178 6.98675 21.8178H17.6799C18.2927 21.8178 18.8982 21.7042 19.466 21.49L20.0646 22.541C20.1943 22.7686 20.4318 22.8963 20.6762 22.8963C20.7942 22.8963 20.9137 22.8666 21.0235 22.804C21.361 22.6119 21.4787 22.1825 21.2865 21.8451L20.7011 20.8172C20.757 20.7757 20.8122 20.7331 20.8663 20.6891C21.7648 19.9613 22.3919 18.9376 22.6319 17.8064L23.2903 14.7035H23.6302C24.0185 14.7035 24.3333 14.3887 24.3333 14.0004C24.3333 13.6121 24.0185 13.2973 23.6302 13.2973ZM12.0984 7.46935H8.76439C8.77578 6.73266 9.37859 6.13684 10.1179 6.13684H10.7449C11.4842 6.13684 12.087 6.73266 12.0984 7.46935ZM21.2563 17.5145C20.9 19.1932 19.3959 20.4116 17.6798 20.4116H6.98675C5.27066 20.4116 3.76653 19.1932 3.41028 17.5145L2.8138 14.7035H21.8527L21.2563 17.5145Z"
              fill="#100E2C"
            />
            <path
              d="M11.8002 9.86011C11.7995 9.86011 11.799 9.86011 11.7984 9.86011C11.4101 9.86104 11.0961 10.1766 11.097 10.5649L11.0998 11.7197C11.1007 12.1074 11.4153 12.4211 11.8028 12.4211H11.8046C12.1929 12.4202 12.5069 12.1047 12.506 11.7163L12.5032 10.5615C12.5023 10.1738 12.1877 9.86011 11.8002 9.86011Z"
              fill="#100E2C"
            />
            <path
              d="M9.0626 9.86011C8.67508 9.86011 8.36046 10.1738 8.35952 10.5615L8.35675 11.7163C8.35582 12.1047 8.66988 12.4202 9.05819 12.4211H9.05992C9.44744 12.4211 9.76207 12.1074 9.763 11.7197L9.76577 10.5649C9.76671 10.1766 9.45264 9.861 9.06433 9.86011C9.06377 9.86011 9.06321 9.86011 9.0626 9.86011Z"
              fill="#100E2C"
            />
          </g>
          <defs>
            <clipPath id="clip0_4302_1060">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.333313 0.499756)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      label: "Banheiros",
    },
    {
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8533 2.49976H6.47999C5.46917 2.50152 4.50026 2.90385 3.7855 3.6186C3.07075 4.33336 2.66842 5.30227 2.66666 6.31309V18.6864C2.66842 19.6972 3.07075 20.6662 3.7855 21.3809C4.50026 22.0957 5.46917 22.498 6.47999 22.4998H18.8533C19.8641 22.498 20.8331 22.0957 21.5478 21.3809C22.2626 20.6662 22.6649 19.6972 22.6667 18.6864V6.31309C22.6649 5.30227 22.2626 4.33336 21.5478 3.6186C20.8331 2.90385 19.8641 2.50152 18.8533 2.49976ZM21.3333 18.6864C21.3316 19.3436 21.0697 19.9734 20.605 20.4381C20.1403 20.9028 19.5105 21.1647 18.8533 21.1664H6.47999C5.82279 21.1647 5.19302 20.9028 4.72831 20.4381C4.2636 19.9734 4.00175 19.3436 3.99999 18.6864V6.31309C4.00175 5.65589 4.2636 5.02612 4.72831 4.56141C5.19302 4.0967 5.82279 3.83485 6.47999 3.83309H18.8533C19.5105 3.83485 20.1403 4.0967 20.605 4.56141C21.0697 5.02612 21.3316 5.65589 21.3333 6.31309V18.6864Z"
            fill="#100E2C"
          />
          <path
            d="M19.266 13.8489C19.0715 13.8489 18.885 13.9262 18.7475 14.0637C18.6099 14.2012 18.5327 14.3878 18.5327 14.5823V17.3323L7.83334 6.63293H10.5833C10.7778 6.63293 10.9644 6.55566 11.1019 6.41814C11.2394 6.28061 11.3167 6.09409 11.3167 5.89959C11.3167 5.7051 11.2394 5.51857 11.1019 5.38105C10.9644 5.24352 10.7778 5.16626 10.5833 5.16626H5.83867C5.70447 5.16626 5.57577 5.21957 5.48088 5.31446C5.38598 5.40936 5.33267 5.53806 5.33267 5.67226V10.4169C5.33267 10.6114 5.40993 10.7979 5.54746 10.9355C5.68499 11.073 5.87151 11.1503 6.06601 11.1503C6.2605 11.1503 6.44702 11.073 6.58455 10.9355C6.72208 10.7979 6.79934 10.6114 6.79934 10.4169V7.66693L17.4987 18.3663H14.7487C14.5542 18.3663 14.3677 18.4435 14.2301 18.581C14.0926 18.7186 14.0153 18.9051 14.0153 19.0996C14.0153 19.2941 14.0926 19.4806 14.2301 19.6181C14.3677 19.7557 14.5542 19.8329 14.7487 19.8329H19.4933C19.6275 19.8329 19.7562 19.7796 19.8511 19.6847C19.946 19.5898 19.9993 19.4611 19.9993 19.3269V14.5823C19.9993 14.3878 19.9221 14.2012 19.7846 14.0637C19.647 13.9262 19.4605 13.8489 19.266 13.8489Z"
            fill="#100E2C"
          />
        </svg>
      ),
      label: "Área total",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.1055 7.3398L12.3555 2.0898C12.1343 1.97055 11.8665 1.97055 11.6453 2.0898L1.89525 7.3398C1.6515 7.4703 1.5 7.7238 1.5 7.9998V22.2498C1.5 22.6638 1.83525 22.9998 2.25 22.9998H21.75C22.1647 22.9998 22.5 22.6638 22.5 22.2498V7.9998C22.5 7.7238 22.3485 7.4703 22.1055 7.3398ZM6.75 15.4998H17.25V17.7498H6.75V15.4998ZM17.25 13.9998H6.75V11.7498H17.25V13.9998ZM6.75 21.4998V19.2498H17.25V21.4998H6.75ZM21 21.4998H18.75V10.9998C18.75 10.5858 18.4147 10.2498 18 10.2498H6C5.58525 10.2498 5.25 10.5858 5.25 10.9998V21.4998H3V8.44755L12 3.6018L21 8.44755V21.4998Z"
            fill="#100E2C"
          />
        </svg>
      ),
      label: "Garagens",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 font-gantari leading-tight mb-4 md:mb-6">
            Imóveis Relacionados
          </h2>
          <p className="text-gray-600 font-inter text-sm md:text-base max-w-2xl line-clamp-2">
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis
            rhoncus é uma frase em la...
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Container */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {relatedProperties.map((property, index) => (
              <Link
                key={property.id}
                to={`/imoveis/${property.id}`}
                className="property-card flex-none w-80 md:w-96 snap-start"
              >
                <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 cursor-pointer">
                  {/* Property Image */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span                   
                        style={{
                          background: "#9653DA",
                          fontSize: "18px",
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          paddingLeft: "30px",
                          paddingRight: "30px",
                        }}
                      className="text-white px-4 py-2 rounded-md text-sm font-medium font-inter">
                        {property.status}
                      </span>
                    </div>
                  </div>

                  {/* Property Info */}
                  <div className="p-6" style={{minHeight:'320px' }}>
                    {/* Title and Address */}
                    <div className="mb-5">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 font-gantari mb-3 group-hover:text-homeflip-purple transition-colors duration-300">
                        {property.title}
                      </h3>
                      <p className="text-gray-600 font-inter text-sm md:text-base mb-5">
                        {property.address}
                      </p>
                      <div className="text-xl md:text-2xl font-bold text-black font-inter">
                        {property.price}
                      </div>
                    </div>

                    {/* Property Features */}
                    <div className="pt-3 border-t border-gray-100">
                      <div className="grid grid-cols-4 gap-4 text-gray-700">
                        <div className="flex flex-col items-center text-center">
                          <div className="mb-3">{features[0].icon}</div>
                          <span className="font-medium text-base font-inter">
                            {property.bedrooms}
                          </span>
                          <span className="text-xs font-gantari mt-1">
                            {features[0].label}
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="mb-3">{features[1].icon}</div>
                          <span className="font-medium text-base font-inter">
                            {property.bathrooms}
                          </span>
                          <span className="text-xs font-gantari mt-1">
                            {features[1].label}
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="mb-3">{features[2].icon}</div>
                          <span className="font-medium text-base font-inter">
                            {property.area}
                          </span>
                          <span className="text-xs font-gantari mt-1">
                            {features[2].label}
                          </span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="mb-3">{features[3].icon}</div>
                          <span className="font-medium text-base font-inter">
                            {property.garages}
                          </span>
                          <span className="text-xs font-gantari mt-1">
                            {features[3].label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <div className="hidden md:block">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              disabled={currentIndex === 0}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              disabled={currentIndex === relatedProperties.length - 1}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {relatedProperties.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-homeflip-purple scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
