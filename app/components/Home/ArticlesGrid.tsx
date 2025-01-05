import ArticleCard from "./ArticleCard";

type ArticlesGridProps = {
  articles: any;
};
export default function ArticlesGrid({ articles }: ArticlesGridProps) {
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
        isHome={true}
      />
    );
  });
  return (
    <div key="grid" className="grid grid-cols-3 gap-8 py-2 px-2 m-2">
      {articlesComponent}
    </div>
  );
}
