import { getArticles } from "@/services/db";
import ArticlesGrid from "./ArticlesGrid";

export default async function HomeBodySection() {
  const popularArticles: any = await getArticles();
  const resentArticles: any = await getArticles();

  return (
    <div className="flex flex-col justify-start items-start p-10">
      <h3 className="text-slate-800 font-bold text-2xl mt-2">
        Popular Articles
      </h3>
      <ArticlesGrid articles={popularArticles} />
      <h3 className="text-slate-800 font-bold text-2xl mt-2">
        Resent Articles
      </h3>
      <ArticlesGrid articles={resentArticles} />
    </div>
  );
}
