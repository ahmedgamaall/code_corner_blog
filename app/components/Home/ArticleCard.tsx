import { Timestamp } from "firebase/firestore";
import Link from "next/link";

type ArticleCardProps = {
  articleDocId?: any;
  title: any;
  content: any;
  timeToRead: any;
  category?: any;
  coverImage: any;
  createdAt?: Timestamp;
  authorName: any;
  isHome: boolean;
};
export default function ArticleCard({
  articleDocId,
  title,
  content,
  timeToRead,
  category,
  coverImage,
  createdAt,
  authorName,
  isHome,
}: ArticleCardProps) {
  return (
    <Link
      href={isHome ? `articles/${articleDocId}` : `../articles/${articleDocId}`}
      key={articleDocId}
    >
      <div className="flex flex-row space-x-0 space-y-5 md:space-x-5 md:space-y-0 w-full">
        <div
          key={articleDocId}
          className="bg-slate-100 hover:bg-orange-100 flex flex-col p-4 rounded-lg space-y-2 border border-slate-200 items-center drop-shadow-sm shadow-md shadow-slate-400"
        >
          <img
            src={coverImage}
            alt={articleDocId}
            className="w-full rounded-s"
          />
          <h5
            className="font-bold text-lg text-slate-900"
            style={{ color: "#172B4D" }}
          >
            {title}
          </h5>
          <p className="leading-5 text-sm text-slate-700">
            {content.substring(0, 200)}...
          </p>
        </div>
      </div>
    </Link>
  );
}
