import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar";

export default function Article() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center font-[family-name:var(--font-geist-sans)] justify-stretch ">
      <NavBar />
      <Footer />
    </div>
  );
}
