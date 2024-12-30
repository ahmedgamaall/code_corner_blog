import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import AboutMeCard from "./components/AboutMeCard";
import AboutMeHeroSection from "./components/AboutMeHeroSection";

export default function AboutMe() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center font-[family-name:var(--font-geist-sans)] justify-stretch ">
      <NavBar />
      <AboutMeHeroSection />
      <AboutMeCard
        image="/Ahmed.jpg"
        title="Who am I?"
        content="What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
versions of Lorem Ipsum."
      />
      <Footer />
    </div>
  );
}
