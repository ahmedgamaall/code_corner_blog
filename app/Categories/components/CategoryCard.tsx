import Link from "next/link";

type CategoryCardProps = {
  title: string;
  logo: string;
  categoryDocId: string;
};
export default function CategoryCard({
  title,
  logo,
  categoryDocId,
}: CategoryCardProps) {
  return (
    <Link href={`/categories/${categoryDocId}`} key={categoryDocId}>
      <div key={categoryDocId} className="flex flex-col rounded-lg p-10 space-y-6 items-center border border-slate-400 hover:bg-slate-400">
      <img className="mx-auto h-40 w-40" src={logo} alt="Category Logo" />
      <h2 className="text-2xl font-medium" style={{ color: "#172B4D" }}>
        {title}
      </h2>
    </div>
    </Link>
  );
}
