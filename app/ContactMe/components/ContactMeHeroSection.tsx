export default function ContactMeHeroSection() {
  return (
      <div
        className="w-full flex flex-row px-60 justify-evenly items-center py-4"
        style={{ backgroundColor: "#B3CFE1" }}
      >
        <div className="w-full mb-2 flex flex-col py-8 space-y-8">
          <h1 className="font-black text-4xl" style={{ color: "#172B4D" }}>
            Have a Query in Mind?
          </h1>
          <h3 className="font-semibold text-lg " style={{ color: "#172B4D" }}>
            Feel free to reach out to me
          </h3>
        </div>
        <img
          className="mx-auto w-60 h-60"
          src="/contract.svg"
          alt="Contact Me"
        />
      </div>
  );
}
