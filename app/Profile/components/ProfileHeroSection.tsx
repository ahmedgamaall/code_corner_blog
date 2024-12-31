export default function ProfileHeroSection() {
  return (
    <div
      className="w-full mb-2 flex flex-col space-y-4 px-72 justify-evenly items-center py-8"
      style={{ backgroundColor: "#B3CFE1" }}
    >
      <h1 className="font-black text-4xl" style={{ color: "#172B4D" }}>
        Categories
      </h1>
      <p className="text-lg text-center" style={{ color: "#172B4D" }}>
        Front-End Development, Back-End Development, Full-Stack Development,
        Mobile App Development, Data Science and Machine Learning, Game
        Development, Web Development, Cyber security, Software Engineering
      </p>
      <p className="text-lg text-center" style={{ color: "#172B4D" }}>
        By specializing in a particular area, programmers can become more
        proficient, valuable, and in-demand in the job market.
      </p>
    </div>
  );
}
