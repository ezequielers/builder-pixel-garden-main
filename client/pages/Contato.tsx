import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contato() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contato
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Entre em contato conosco. Esta página será desenvolvida em breve.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Telefone:</strong> (11) 9999-9999
            </p>
            <button className="bg-homeflip-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
              Em Breve
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
