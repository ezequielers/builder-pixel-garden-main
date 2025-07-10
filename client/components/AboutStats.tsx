export default function AboutStats() {
  const stats = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
          aria-hidden="true"
        >
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
            stroke="#7A7474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="#7A7474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      number: "1250",
      label: "Clientes Felizes",
      ariaLabel: "Mil duzentos e cinquenta clientes felizes",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
          aria-hidden="true"
        >
          <path
            d="M3 21H21V7L12 3L3 7V21Z"
            stroke="#7A7474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 21V12H15V21"
            stroke="#7A7474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      number: "320",
      label: "Imóveis alugados",
      ariaLabel: "Trezentos e vinte imóveis alugados",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
          aria-hidden="true"
        >
          <path d="M3 12L5 10L12 17L22 7L20 5L12 13L7 8L3 12Z" fill="#7A7474" />
        </svg>
      ),
      number: "125",
      label: "Imóveis Vendidos",
      ariaLabel: "Cento e vinte e cinco imóveis vendidos",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
          aria-hidden="true"
        >
          <path
            d="M3 20V7L12 2L21 7V20H3Z"
            stroke="#7A7474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14H16"
            stroke="#7A7474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 17H13"
            stroke="#7A7474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      number: "120",
      label: "Imóveis Cadastrados",
      ariaLabel: "Cento e vinte imóveis cadastrados",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 -mt-16 md:-mt-20 lg:-mt-24 xl:-mt-32 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          className="bg-white rounded-2xl shadow-2xl border border-gray-100/50
                        p-6 sm:p-8 md:p-10 lg:p-12
                        backdrop-blur-sm"
        >
          <div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
                          gap-6 sm:gap-8 lg:gap-10 xl:gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center
                         space-y-4 md:space-y-5 lg:space-y-6
                         py-4 md:py-6 lg:py-8 px-3
                         hover:scale-105 transition-transform duration-300 ease-out
                         group"
                aria-label={stat.ariaLabel}
              >
                {/* Icon Container */}
                <div
                  className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
                              flex items-center justify-center
                              bg-gray-50 rounded-full
                              group-hover:bg-blue-50 transition-colors duration-300"
                >
                  {stat.icon}
                </div>

                {/* Number */}
                <div
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl
                              font-bold text-[#100E2C] font-gantari
                              tracking-tight leading-none
                              group-hover:text-blue-600 transition-colors duration-300"
                >
                  {stat.number}
                </div>

                {/* Label */}
                <div
                  className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl
                              font-medium text-[#100E2C] font-inter
                              leading-tight max-w-[12rem] lg:max-w-none"
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
