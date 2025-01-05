import { getCategories } from "@/services/db";
import CategoryCard from "./CategoryCard";

export default async function CategoryGrid() {
      const categories : any = await getCategories();
      const categoriesComponent = categories.map((category :any) => {
        return (
          <CategoryCard
            categoryDocId={category.categoryDocId}
            logo={category.logo}
            title={category.title}
          />
        );
      });
      
  return (
    <div className="grid grid-cols-4 gap-8 pt-10 px-20 pb-20">
      {categoriesComponent}
    </div>
  );
}
