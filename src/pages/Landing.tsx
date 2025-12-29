import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Locations } from "../components/Locations";
import { Menu } from "../components/Menu";
import { Stories } from "../components/Stories";
import { Testimonials } from "../components/Testimonials";

const Landing = () => {
  return (
    <div className="min-h-screen font-['Lexend_Deca'] text-brown bg-beige">
      <Header />
      <Hero />
      <Locations />
      <Menu />
      <Stories />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;
