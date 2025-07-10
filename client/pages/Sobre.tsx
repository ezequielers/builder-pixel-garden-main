import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import AboutTextImage from "../components/AboutTextImage";
import AboutServices from "../components/AboutServices";
import AboutBanner from "../components/AboutBanner";
import AboutPersonalized from "../components/AboutPersonalized";
import AboutBlog from "../components/AboutBlog";

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AboutStats />
        <AboutTextImage />
        <AboutServices />
        <AboutBanner />
        <AboutPersonalized />
        <AboutBlog />
      </main>
      <Footer />
    </div>
  );
}
