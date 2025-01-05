import { getCategories, getTags } from "@/services/db";
import WriteArticleForm from "./WriteArticleForm";

export default async function WriteArticleBodySection() {
  const tags = await getTags();
  const categories = await getCategories();

  return (
    <div className="w-full flex flex-col justify-center items-start py-2 space-y-4 px-40">
      <h3 className="font-bold  text-4xl" style={{ color: "#172B4D" }}>
        Write Article
      </h3>
      <WriteArticleForm tags={tags} categories={categories} />
    </div>
  );
}
