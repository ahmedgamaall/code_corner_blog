import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar";
import { getCategory } from "@/services/db";
import CategoryHeroSection from "./CategoryHeroSection";
import CategoryBodySection from "./CategoryBodySection";

export default async function categoryDocId(props: any) {
  const category : any = await getCategory(props.params.categoryDocId);

  return (
    <div className="flex flex-col w-full items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <CategoryHeroSection
        categoryDocId={category.categoryDocId}
        description={category.description}
        title={category.title}
        logo={category.logo}
      />
      <CategoryBodySection title={category.title} />
      <Footer />
    </div>
  );
}
