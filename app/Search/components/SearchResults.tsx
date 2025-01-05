import ArticleCard from "@/app/components/Home/ArticleCard";
import { getArticles, search } from "@/services/db";

type SearchResultsProps = {
  input: string;
};

export default async function SearchResults({ input }: SearchResultsProps) {
  const articles: any =
    input === "" ? await getArticles() : await search(input);

  const articlesComponent = articles.map((article: any) => {
    return (
      <ArticleCard
        articleDocId={article.articleDocId}
        coverImage={article.coverImage}
        title={article.title}
        timeToRead={article.timeToRead}
        category={article.category}
        createdAt={article.createdAt}
        authorName={article.authorName}
        content={article.content}
        isHome={false}
      />
    );
  });

  return (
    <div className="text-center text-slate-700 mx-20 my-10">
      {articles ? (
        <div key="grid" className="grid grid-cols-3 gap-8 py-2 px-2 m-2">
          {articlesComponent}
        </div>
      ) : (
        <div>
          <h2 className="mb-8 font-bold text-3xl">No result 😥</h2>

          <p className="text-lg">
            We couldn’t find any posts with the keyword `ke`. Please try another
            keyword.
          </p>
        </div>
      )}
    </div>
  );
}
