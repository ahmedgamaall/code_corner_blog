import SearchInputField from "./SearchInputField";

export default function AboutMeHeroSection() {
  return (
    <div
      className="w-full px-40 justify-center items-center py-10 space-y-10"
      style={{ backgroundColor: "#B3CFE1" }}
    >
        <h1 className="font-black text-3xl text-center" style={{ color: "#172B4D" }}>
          Search for your favorite article
        </h1>
        <SearchInputField />
      </div>
  );
}
