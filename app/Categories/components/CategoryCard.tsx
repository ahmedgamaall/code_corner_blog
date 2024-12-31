type CategoryCardProps = {
  title: string;
  logo: string;
};
export default function CategoryCard({ title, logo }: CategoryCardProps) {
  return (
    <div className="flex flex-col rounded-lg p-10 space-y-6 items-center border border-slate-400 hover:bg-slate-400">
      <img className="mx-auto h-20 w-20" src={logo} alt="Category Logo" />
      <h2 className="text-2xl font-medium" style={{ color: "#172B4D" }}>
        {title}
      </h2>
    </div>
  );
}
