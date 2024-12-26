export default function HeroSection() {
  return    <section id="hero w-full">
          <div className="container flex mx-auto flex-col-reverse md:flex-row">
            <div className="md:w-1/2 flex flex-col justify-center space-y-6 py-6 text-center md:text-left text-slate-900">
              <h1 className="font-bold text-3xl md:text-5xl">
                Where dreams turn into codes
              </h1>
              <p>
                "Code is like poetry, written in the language of logic, where
                each line tells a story of creation and problem-solving."
              </p>
            </div>
            <div className="w-1/2">
              <img
                src="pair_programming.svg"
                alt="Code Corner Banner"
                className="w-full"
              />
            </div>
          </div>
        </section>;
}
