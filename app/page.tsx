import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
    <NavBar/>
    <HeroSection/>
    </div>
  );
}
