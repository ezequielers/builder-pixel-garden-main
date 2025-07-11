export default function Hero() {
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
            className="w-full h-[900px] sm:h-[900px] lg:h-[600px] rounded-t-lg md:rounded-t-xl relative"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('https://cdn.builder.io/api/v1/image/assets/TEMP/083e6f86a30d3717f17cc5dcf1c69d289b5aabe3?width=2592') center/cover no-repeat`,
            }}
          >
            {/* Hero Text Content */}
            <div className="absolute left-4 sm:left-8 lg:left-[72px] top-[30px] sm:top-[40px] lg:top-[141px] right-4 sm:right-8 lg:right-auto">
              <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-8 max-w-sm sm:max-w-md lg:max-w-lg">
                {/* Main Headline */}
                <h1 className="text-white font-telegraf text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  Encontre o Imóvel Perfeito para Seu Estilo de Vida!
                </h1>

                {/* Description */}
                {/* <p className="text-white font-inter text-sm md:text-base font-normal leading-relaxed max-w-md">
                  Lorem ipsum dolor sit amet consectetur. Nec risus quis viverra
                  libero tellus eget. Leo morbi faucibus mattis pharetra tellus
                  velit ultricies duis rhoncus. Porttitor fermentum eu urna eget
                </p> */}
              </div>
            </div>

            {/* Search Controls Section */}
            <div className="absolute left-4 md:left-[72px] bottom-4 md:top-[450px] right-4 md:right-auto lg:w-[860px] xl:w-[1076px]">
              {/* Search Control Bar */}
              <div
                className="flex flex-col md:flex-row gap-3 mb-4"
                style={{ marginTop: -20 }}
              >
                {/* Alugar Button (Single Option) */}
                <div className="inline-flex p-2 justify-start items-center rounded-lg border-[1.5px] border-[#E0DEF7] bg-[#F0EFFB] backdrop-blur-sm shadow-lg">
                  <div className="w-full md:w-[250px] h-12 relative group">
                    <div className="w-full md:w-[250px] h-12 rounded-md border-2 border-[#7065F0] bg-white shadow-[0px_8px_50px_0px_rgba(14,8,84,0.25)] absolute transition-all duration-300 group-hover:shadow-[0px_12px_60px_0px_rgba(14,8,84,0.35)]" />
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
                          stroke="#1A0A4A"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.7417 14.575L7.65837 16.4916"
                          stroke="#1A0A4A"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.0833 9.16675C12.7736 9.16675 13.3333 8.6071 13.3333 7.91675C13.3333 7.22639 12.7736 6.66675 12.0833 6.66675C11.3929 6.66675 10.8333 7.22639 10.8333 7.91675C10.8333 8.6071 11.3929 9.16675 12.0833 9.16675Z"
                          stroke="#1A0A4A"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-[#1A0A4A] font-telegraf text-lg font-bold leading-[145%] tracking-[-0.09px] transition-all duration-200 group-hover:text-[#0F0529]">
                        Alugar
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Search Bar */}
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
                    <span className="text-[#000929] font-montserrat text-base font-normal leading-[150%] opacity-50 transition-opacity duration-200 group-hover:opacity-70">
                      Pesquisar Imóvel
                    </span>
                  </div>
                </div>
              </div>

              {/* Enhanced Search Form */}
              <div className="flex flex-col lg:flex-row w-full h-auto p-4 md:p-6 lg:p-10 items-start lg:items-center gap-4 md:gap-6 lg:gap-3 rounded-xl bg-white shadow-[0px_8px_40px_0px_rgba(0,0,0,0.20)] backdrop-blur-lg transition-all duration-300 hover:shadow-[0px_12px_50px_0px_rgba(0,0,0,0.25)] border border-white/20">
                {/* Categoria Select */}
                <div className="flex flex-col items-start gap-2 w-full lg:flex-1 group">
                  <div className="flex h-12 md:h-[50px] px-4 py-3 md:py-[9px] items-center gap-2 w-full rounded-md bg-[#F6F6F6] transition-all duration-200 hover:bg-[#E0DEF7] hover:shadow-md cursor-pointer">
                    <span className="flex-1 text-black font-montserrat text-sm md:text-base font-normal leading-5">
                      Categoria
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.31267 4.64592C2.35911 4.59935 2.41429 4.56241 2.47503 4.5372C2.53578 4.512 2.6009 4.49902 2.66667 4.49902C2.73243 4.49902 2.79755 4.512 2.8583 4.5372C2.91904 4.56241 2.97422 4.59935 3.02067 4.64592L8.66667 10.2929L14.3127 4.64592C14.3592 4.59943 14.4143 4.56255 14.4751 4.53739C14.5358 4.51223 14.6009 4.49929 14.6667 4.49929C14.7324 4.49929 14.7975 4.51223 14.8582 4.53739C14.919 4.56255 14.9742 4.59943 15.0207 4.64592C15.0672 4.6924 15.104 4.74759 15.1292 4.80833C15.1543 4.86907 15.1673 4.93417 15.1673 4.99992C15.1673 5.06566 15.1543 5.13076 15.1292 5.1915C15.104 5.25224 15.0672 5.30743 15.0207 5.35392L9.02067 11.3539C8.97422 11.4005 8.91904 11.4374 8.8583 11.4626C8.79755 11.4878 8.73243 11.5008 8.66667 11.5008C8.6009 11.5008 8.53578 11.4878 8.47503 11.4626C8.41429 11.4374 8.35911 11.4005 8.31266 11.3539L2.31267 5.35392C2.2661 5.30747 2.22916 5.2523 2.20395 5.19155C2.17875 5.13081 2.16577 5.06568 2.16577 4.99992C2.16577 4.93415 2.17875 4.86903 2.20395 4.80828C2.22916 4.74754 2.2661 4.69236 2.31267 4.64592Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>

                {/* Tipo de Imovel Select */}
                <div className="flex flex-col items-start gap-2 w-full lg:flex-1 group">
                  <div className="flex h-12 md:h-[50px] px-4 py-3 md:py-[9px] items-center gap-2 w-full rounded-md bg-[#F6F6F6] transition-all duration-200 hover:bg-[#E0DEF7] hover:shadow-md cursor-pointer">
                    <span className="flex-1 text-black font-montserrat text-sm md:text-base font-normal leading-5">
                      Tipo de Imovel
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.97917 4.64592C2.02561 4.59935 2.08079 4.56241 2.14154 4.5372C2.20228 4.512 2.2674 4.49902 2.33317 4.49902C2.39894 4.49902 2.46406 4.512 2.5248 4.5372C2.58555 4.56241 2.64072 4.59935 2.68717 4.64592L8.33317 10.2929L13.9792 4.64592C14.0257 4.59943 14.0808 4.56255 14.1416 4.53739C14.2023 4.51223 14.2674 4.49929 14.3332 4.49929C14.3989 4.49929 14.464 4.51223 14.5248 4.53739C14.5855 4.56255 14.6407 4.59943 14.6872 4.64592C14.7337 4.6924 14.7705 4.74759 14.7957 4.80833C14.8209 4.86907 14.8338 4.93417 14.8338 4.99992C14.8338 5.06566 14.8209 5.13076 14.7957 5.1915C14.7705 5.25224 14.7337 5.30743 14.6872 5.35392L8.68717 11.3539C8.64072 11.4005 8.58555 11.4374 8.5248 11.4626C8.46406 11.4878 8.39894 11.5008 8.33317 11.5008C8.2674 11.5008 8.20228 11.4878 8.14154 11.4626C8.08079 11.4374 8.02561 11.4005 7.97917 11.3539L1.97917 5.35392C1.93261 5.30747 1.89566 5.2523 1.87046 5.19155C1.84525 5.13081 1.83228 5.06568 1.83228 4.99992C1.83228 4.93415 1.84525 4.86903 1.87046 4.80828C1.89566 4.74754 1.93261 4.69236 1.97917 4.64592Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>

                {/* Localização Select */}
                <div className="flex flex-col items-start gap-2 w-full lg:flex-1 group">
                  <div className="flex h-12 md:h-[50px] px-4 py-3 md:py-[9px] items-center gap-2 w-full rounded-md bg-[#F6F6F6] transition-all duration-200 hover:bg-[#E0DEF7] hover:shadow-md cursor-pointer">
                    <span className="flex-1 text-black font-montserrat text-sm md:text-base font-normal leading-5">
                      Localização
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.64592 4.64592C1.69236 4.59935 1.74754 4.56241 1.80828 4.5372C1.86903 4.512 1.93415 4.49902 1.99992 4.49902C2.06568 4.49902 2.13081 4.512 2.19155 4.5372C2.2523 4.56241 2.30747 4.59935 2.35392 4.64592L7.99992 10.2929L13.6459 4.64592C13.6924 4.59943 13.7476 4.56255 13.8083 4.53739C13.8691 4.51223 13.9342 4.49929 13.9999 4.49929C14.0657 4.49929 14.1308 4.51223 14.1915 4.53739C14.2522 4.56255 14.3074 4.59943 14.3539 4.64592C14.4004 4.6924 14.4373 4.74759 14.4624 4.80833C14.4876 4.86907 14.5005 4.93417 14.5005 4.99992C14.5005 5.06566 14.4876 5.13076 14.4624 5.1915C14.4373 5.25224 14.4004 5.30743 14.3539 5.35392L8.35392 11.3539C8.30747 11.4005 8.2523 11.4374 8.19155 11.4626C8.13081 11.4878 8.06568 11.5008 7.99992 11.5008C7.93415 11.5008 7.86903 11.4878 7.80828 11.4626C7.74754 11.4374 7.69236 11.4005 7.64592 11.3539L1.64592 5.35392C1.59935 5.30747 1.56241 5.2523 1.5372 5.19155C1.512 5.13081 1.49902 5.06568 1.49902 4.99992C1.49902 4.93415 1.512 4.86903 1.5372 4.80828C1.56241 4.74754 1.59935 4.69236 1.64592 4.64592Z"
                        fill="black"
                      />
                    </svg>
                  </div>
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
                <button className="flex w-full lg:w-[160px] h-12 md:h-[50px] px-5 py-2 justify-center items-center gap-3 rounded-md bg-homeflip-purple cursor-pointer transition-all duration-300 hover:bg-[#4A0D5F] hover:shadow-[0px_8px_25px_0px_rgba(94,17,119,0.4)] hover:scale-105 active:scale-95 group">
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
                  <span className="text-white font-telegraf text-base font-normal leading-5 uppercase transition-all duration-200 group-hover:font-semibold group-hover:tracking-wider">
                    BUSCAR
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
