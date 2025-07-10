import Header from "../components/Header";
import PropertiesHero from "../components/PropertiesHero";
import PropertyListings from "../components/PropertyListings";
import Footer from "../components/Footer";

export default function Imoveis() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PropertiesHero />
      <PropertyListings />
      <Footer />
    </div>
  );
}
