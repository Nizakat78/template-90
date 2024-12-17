import HeroSection from "../components/Herosection";
import AboutHero from "../components/AboutHero";
import FoodCategory from "../components/FoodCategory";
import WhyChooseUs from "../components/Whychoose";
import Client from "../components/Client";
import MenuSection from "../components/Menusection";
import Chief from "../components/Chief"
import Testimonials from "../components/Testimonials"
import RestaurantActiveProcess from "../components/RestaurantActiveProcess";
import Blognews from "../components/Blognews"


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutHero />
      <FoodCategory />
      <WhyChooseUs />
      <Client />
      <MenuSection />
      <Chief />
      <Testimonials />
      < RestaurantActiveProcess />
      <Blognews />
    </div>
  );
}
