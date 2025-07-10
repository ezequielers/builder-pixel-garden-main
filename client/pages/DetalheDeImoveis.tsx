import Header from "../components/Header";
import Footer from "../components/Footer";
import DetalheDeImoveis from "../components/DetalheDeImoveis";
import RelatedListings from "../components/RelatedListings";

export default function DetalheDeImoveisPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DetalheDeImoveis />
      <RelatedListings />
      <Footer />
    </div>
  );
}
