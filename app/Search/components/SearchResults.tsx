import ArticlesGrid from "@/app/components/Home/ArticlesGrid";

type SearchResultsProps = {
  articles: any[];
};

export default function SearchResults({ articles }: SearchResultsProps) {
  return (
    <div className="text-center text-slate-700 mx-20 my-10">
      <ArticlesGrid key="Search" articles={articles} />
    </div>
  );
}
