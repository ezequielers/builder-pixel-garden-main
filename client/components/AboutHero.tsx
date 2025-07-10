export default function AboutHero() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20 pb-8 md:pb-12 lg:pb-16">
      <div className="relative max-w-7xl mx-auto">
        {/* Video Section */}
        <div className="relative h-80 sm:h-96 md:h-[500px] lg:h-[580px] xl:h-[620px] rounded-xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9155c8a54c431d085172ae0e9d3020c8e10bfd4?width=2592"
              alt="Imóvel perfeito - Video background"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40"></div>
          </div>

          {/* Play Button */}
          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                       w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[84px] lg:h-[84px]
                       bg-blue-600 hover:bg-blue-700
                       rounded-full flex items-center justify-center
                       transition-all duration-300 ease-out
                       hover:scale-110 hover:shadow-2xl
                       focus:outline-none focus:ring-4 focus:ring-blue-300/50
                       group"
            aria-label="Reproduzir vídeo"
          >
            <svg
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 ml-0.5
                         transition-transform duration-300 group-hover:scale-110"
            >
              <path
                d="M32.0234 59.4015C31.3568 59.7864 30.5234 59.3052 30.5234 58.5354V25.4645C30.5234 24.6947 31.3568 24.2135 32.0234 24.5984L60.6637 41.1339C61.3304 41.5188 61.3304 42.4811 60.6637 42.866L32.0234 59.4015Z"
                fill="white"
              />
            </svg>
          </button>

          {/* Main Content */}
          <div
            className="absolute inset-x-4 sm:inset-x-6 md:inset-x-8 lg:inset-x-12
                          top-1/4 md:top-20 lg:top-24
                          max-w-2xl lg:max-w-3xl"
          >
            <div className="space-y-3 md:space-y-4 lg:space-y-6">
              <h1
                className="text-white font-gantari
                           text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                           font-bold leading-tight
                           drop-shadow-lg"
              >
                O Imóvel perfeito para você!
              </h1>
              <p
                className="text-[#DFFFA4] font-inter
                          text-sm md:text-base lg:text-lg
                          font-medium drop-shadow-md"
              >
                assista o vídeo
              </p>
            </div>
          </div>

          {/* Bottom Description */}
          <div
            className="absolute inset-x-4 sm:inset-x-6 md:inset-x-8 lg:inset-x-12
                          bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12
                          max-w-lg lg:max-w-xl xl:max-w-2xl ml-auto"
          >
            <p
              className="text-white font-inter
                        text-sm md:text-base lg:text-lg
                        leading-relaxed drop-shadow-md
                        bg-black/20 backdrop-blur-sm rounded-lg p-3 md:p-4"
            >
              Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec
              aliquet interdum bibendum tellus sed ultricies pharetra in lorem
              eget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
