import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/Home/HeroSection";
import Footer from "./components/Footer/Footer";
import HomeBodySection from "./components/Home/HomeBodySection";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center font-[family-name:var(--font-geist-sans)] justify-stretch ">
    <NavBar/>
    <HeroSection/>
    <HomeBodySection />
    <Footer/>
    </div>
  );
}
