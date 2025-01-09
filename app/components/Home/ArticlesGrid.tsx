import ArticleCard from "./ArticleCard";

type ArticlesGridProps = {
  articles: any;
  key: any;
};
export default function ArticlesGrid({ articles, key }: ArticlesGridProps) {
  return (
    <div key={key} className="grid grid-cols-3 gap-8 py-2 px-2 m-2">
      {articles.map((article: any) => {
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
            key={article.articleDocId}
          />
        );
      })}
    </div>
  );
}
