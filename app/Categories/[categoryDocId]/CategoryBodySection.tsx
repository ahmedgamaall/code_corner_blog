import ArticlesGrid from "@/app/components/Home/ArticlesGrid";
import { getArticles } from "@/services/db";

type CategoryBodySectionProps = {
  title: string;
};

export default async function CategoryBodySection({
  title,
}: CategoryBodySectionProps) {
  const articles: any = await getArticles();

  return (
    <div className="mt-6 mb-10">
      <ArticlesGrid articles={articles} />
    </div>
  );
}
