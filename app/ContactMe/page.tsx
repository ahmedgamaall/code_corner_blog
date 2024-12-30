import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import ContactMeBody from "./components/ContactMeBody";
import ContactMeHeroSection from "./components/ContactMeHeroSection";
import SocialMediaLinks from "./components/SocialMediaLinks";

export default function ContactMe() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center font-[family-name:var(--font-geist-sans)] justify-stretch ">
      <NavBar />
      <ContactMeHeroSection />
      <h5 style={{ color: "#172B4D" }}>
        You can reach out to me via email or social media platforms to discuss
        the query.
      </h5>
      <ContactMeBody />
      <SocialMediaLinks/>
      <Footer />
    </div>
  );
}
