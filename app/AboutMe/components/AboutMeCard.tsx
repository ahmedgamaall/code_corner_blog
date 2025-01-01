type AboutMeCardProps = {
  title: string;
  content?: string;
  image: string;
  direction?: string;
  children?: React.ReactNode;
};
export default function AboutMeCard({
  title,
  content,
  image,
  direction = "left",
  children = null,
}: AboutMeCardProps) {
  return (
    <div
      className={
        direction === "left"
          ? "w-full flex flex-row px-40 justify-between items-center py-10"
          : "w-full flex flex-row-reverse px-40 justify-between items-center py-10"
      }
    >
      <div className="flex flex-col py-4 justify-around space-y-4 mx-12">
        <h2 className="text-4xl font-bold" style={{ color: "#172B4D" }}>
          {title}
        </h2>
        {children === null ? (
          <p className="text-xl" style={{ color: "#172B4D" }}>
            {content}
          </p>
        ) : (
          children
        )}
      </div>

      <img className="mx-auto w-1/3 rounded-lg" src={image} alt="About Me" />
    </div>
  );
}
