import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import AboutBodySection from "./components/SearchBodySection";
import AboutMeHeroSection from "./components/SearchHeroSection";
import SearchResults from "./components/SearchResults";

export default function Search() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center font-[family-name:var(--font-geist-sans)] justify-stretch ">
      <NavBar />
      <AboutBodySection />
      <Footer />
    </div>
  );
}
