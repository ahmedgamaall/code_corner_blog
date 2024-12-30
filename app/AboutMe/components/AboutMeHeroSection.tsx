export default function AboutMeHeroSection() {
  return (
    <div
      className="w-full flex flex-row px-72 justify-evenly items-center py-4"
      style={{ backgroundColor: "#B3CFE1" }}
    >
      <div className="w-full mb-2 flex flex-col py-8 space-y-8">
        <h1 className="font-black text-4xl" style={{ color: "#172B4D" }}>
          Wanna Know Me?
        </h1>
      </div>
      <img className="mx-auto w-40 h-40" src="/about_me.svg" alt="About Me" />
    </div>
  );
}
