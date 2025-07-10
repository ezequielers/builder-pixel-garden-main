import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import PropertyListings from "../components/PropertyListings";
import TenantsLandlords from "../components/TenantsLandlords";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Benefits />
      <PropertyListings />
      <TenantsLandlords />
      <Footer />
    </div>
  );
}
