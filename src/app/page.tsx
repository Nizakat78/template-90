import Herosection from "../components/Home/Herosection";
import AboutHero from "../components/Home/AboutHero";
import FoodCategory from "../components/Home/FoodCategory";
import WhyChooseUs from "../components/Home/Whychoose";
import Client from "../components/Home/Client";
import MenuSection from "../components/Home/Menusection";
import Chief from "../components/Home/Chief"
import Testimonials from "../components/Home/Testimonials"
import RestaurantActiveProcess from "../components/Home/RestaurantActiveProcess";
import Blognews from "../components/Home/Blognews"


export default function Home() {
  return (
    <div>
      <Herosection />
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
