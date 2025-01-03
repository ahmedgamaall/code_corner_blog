type CategoryHeroSectionProps = {
  title: string;
  logo: string;
  categoryDocId: string;
  description: string;
};

export default function CategoryHeroSection({
  title,
  logo,
  categoryDocId,
  description,
}: CategoryHeroSectionProps) {
  return (
    <div
      className="w-full mb-2 flex flex-col space-y-8 px-72 justify-evenly items-center py-4"
      style={{ backgroundColor: "#B3CFE1" }}
    >
      <img className="mx-auto h-42 w-42" src={logo} alt="Category Logo" />
      <h1 className="font-black text-4xl" style={{ color: "#172B4D" }}>
        {title}
      </h1>
      <p className="font-normal text-lg text-center" style={{ color: "#172B4D" }}>
        {description}
      </p>
    </div>
  );
}
