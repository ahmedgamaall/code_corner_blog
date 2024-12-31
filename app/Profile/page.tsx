import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import ProfileHeroSection from "./components/ProfileHeroSection";

export default function Profile() {
  return (
  <div className="flex flex-col w-full items-center justify-items-center font-[family-name:var(--font-geist-sans)] justify-stretch ">
    <NavBar/>
    <ProfileHeroSection />
    <Footer/>
    </div>  );
}
