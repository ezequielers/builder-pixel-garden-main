export default function AboutBlog() {
  const blogPosts = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5eb5e9194f1a9db2d4b6dd57ad998a1218126abc?width=837",
      date: "23 de Dezembro, 2025",
      title: "As vendas de casas aumentam significativamente",
      excerpt:
        "Análise detalhada do crescimento do mercado imobiliário e suas principais tendências para o próximo ano.",
      readTime: "5 min de leitura",
      category: "Mercado",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/417ca7daf0588e69bf2aaa7cea72b681100e69c4?width=837",
      date: "20 de Dezembro, 2025",
      title: "Tendências imobiliárias e de design para 2026",
      excerpt:
        "Descubra as principais tendências arquitetônicas e de design que vão dominar o mercado imobiliário.",
      readTime: "8 min de leitura",
      category: "Design",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9c3bc9fde272752c48f0f7ee9d929774f56a7692?width=837",
      date: "18 de Dezembro, 2025",
      title: "Taxas de juros caem abaixo de 7%",
      excerpt:
        "Como a redução das taxas de juros pode influenciar suas decisões de investimento imobiliário.",
      readTime: "6 min de leitura",
      category: "Finanças",
    },
  ];

  return (
    <section
      className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32
                       px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20
                       bg-gradient-to-b from-gray-100 to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16 lg:mb-20 space-y-4 md:space-y-6">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl
                       font-bold text-[#100E2C] font-gantari
                       leading-tight tracking-tight"
          >
            Confira nosso Blog
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-lg
                      text-gray-600 font-inter leading-relaxed
                      max-w-2xl mx-auto"
          >
            Mantenha-se atualizado com as últimas notícias, tendências e
            insights do mercado imobiliário brasileiro.
          </p>
        </header>

        {/* Blog Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                        gap-6 md:gap-8 lg:gap-6 xl:gap-8"
        >
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden
                         shadow-lg hover:shadow-2xl
                         transition-all duration-300 ease-out
                         hover:-translate-y-2 border border-gray-200/50
                         h-auto flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={`Imagem do artigo: ${post.title}`}
                  className="w-full h-full object-cover
                           transition-transform duration-700 ease-out
                           group-hover:scale-110"
                  loading="lazy"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="inline-flex items-center px-3 py-1
                                 rounded-full text-xs font-medium
                                 bg-blue-600 text-white"
                  >
                    {post.category}
                  </span>
                </div>

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-6 lg:p-8 space-y-4">
                {/* Date and Read Time */}
                <div className="flex items-center justify-between text-sm">
                  <time className="text-gray-500 font-inter font-medium">
                    {post.date}
                  </time>
                  <span className="text-gray-400 font-inter">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-gray-900 font-gantari
                             text-xl md:text-2xl lg:text-xl font-bold
                             leading-tight line-clamp-2
                             group-hover:text-blue-600 transition-colors duration-300"
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-gray-600 font-inter
                            text-base leading-relaxed
                            line-clamp-3 flex-1"
                >
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700
                             font-inter font-semibold text-sm
                             transition-colors duration-300 group/link"
                    aria-label={`Ler artigo completo: ${post.title}`}
                  >
                    Ler mais
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-300
                               group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <a
            href="#"
            className="inline-flex items-center justify-center
                     bg-blue-600 hover:bg-blue-700
                     text-white font-gantari font-semibold
                     text-base md:text-lg px-8 py-4 md:px-10 md:py-5
                     rounded-xl transition-all duration-300 ease-out
                     hover:scale-105 hover:shadow-xl
                     focus:outline-none focus:ring-4 focus:ring-blue-300/50"
            aria-label="Ver todos os artigos do blog"
          >
            Ver todos os artigos
          </a>
        </div>
      </div>
    </section>
  );
}
