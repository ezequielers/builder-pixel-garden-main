import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">404</h1>
          <p className="text-xl text-gray-600 mb-4">Página não encontrada</p>
          <Link
            to="/"
            className="bg-homeflip-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-block"
          >
            Voltar ao Início
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
