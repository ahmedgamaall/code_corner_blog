import ArticlesGrid from "@/app/components/Home/ArticlesGrid";
import { getArticles, getArticlesByCategory } from "@/services/db";

type CategoryBodySectionProps = {
  title: string;
};

export default async function CategoryBodySection({
  title,
}: CategoryBodySectionProps) {
  const articles: any = await getArticlesByCategory(title);

  return (
    <div className="mt-6 mb-10">
      {articles ? (
        <ArticlesGrid key="Category" articles={articles} />
      ) : (
        <div className="mb-20 mt-10 font-bold text-3xl text-slate-800">
          There is no articles in this category
        </div>
      )}
    </div>
  );
}
