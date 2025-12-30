import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Locations } from "../components/Locations";
import { Menu } from "../components/Menu";
import { Stories } from "../components/Stories";
import { Testimonials } from "../components/Testimonials";
import { Gallery } from "../components/Gallery";

const Landing = () => {
  return (
    <div className="min-h-screen font-['Lexend_Deca'] text-brown bg-beige">
      <Header />
      <Hero />
      <Gallery />
      <Menu />
      <Stories />
      <Locations />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;
