import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar";
import { getArticleByDocId } from "@/services/db";
import ArticleBodySection from "./components/ArticleBodySection";

export default async function Article(props: any) {
  const article: any = await getArticleByDocId(props.params.articleDocId);

  return (
    <div className="flex flex-col w-full items-center justify-items-center font-[family-name:var(--font-geist-sans)] justify-stretch ">
      <NavBar />
      <ArticleBodySection article={article} />
      <Footer />
    </div>
  );
}
