import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <div className="px-10 py-10 grid grid-cols-4 space-x-8 space-y-8 w-full">
      <CategoryCard logo="/code_corner_logo.svg" title="Flutter" />
      <CategoryCard logo="/code_corner_logo.svg" title="Flutter" />
      <CategoryCard logo="/code_corner_logo.svg" title="Flutter" />
      <CategoryCard logo="/code_corner_logo.svg" title="Flutter" />
      <CategoryCard logo="/code_corner_logo.svg" title="Flutter" />
      <CategoryCard logo="/code_corner_logo.svg" title="Flutter" />
      <CategoryCard logo="/code_corner_logo.svg" title="Flutter" />
    </div>
  );
}
