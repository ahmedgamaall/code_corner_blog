import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import CategoriesHeroSection from "./components/CategoriesHeroSection";
import CategoryGrid from "./components/CategoryGrid";

export default function Categories() {
  return (
  <div className="flex flex-col w-full items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
    <NavBar/>
    <CategoriesHeroSection />
    <CategoryGrid/>
    <Footer/>
    </div>  );
}
