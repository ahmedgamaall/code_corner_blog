import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import WriteArticleBodySection from "./components/WriteArticleBodySection";

export default function WriteArticle() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center font-[family-name:var(--font-geist-sans)] justify-stretch ">
      <NavBar/>
      <WriteArticleBodySection />
      <Footer />
    </div>
  );
}
