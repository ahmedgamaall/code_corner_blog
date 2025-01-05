import Link from "next/link";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import AboutMeCard from "./components/AboutMeCard";
import AboutMeHeroSection from "./components/AboutMeHeroSection";

export default function AboutMe() {
  const softSkills = [
    " Strong attention to detail and ability to deliver high-quality work.",
    "Good communication and teamwork skills.",
    "Strong problem-solving skills.",
    "Time management.",
    "Adaptability.	Continuous learning.",
    "Collaboration.",
    "Creativity.",
    "Strong work ethic.",
    "Communication skills.",
    "Positive attitude.",
  ];

  const softSkillsContent = softSkills.map((skill) => (
    <li className="text-xl" key={skill} style={{ color: "#172B4D" }}>
      - {skill}
    </li>
  ));

  const technicalSkills = [
    " Dart Programming Language",
    "State Management (Bloc)",
    "RESTful APIs",
    "Firebase (or other relevant cloud platforms)",
    "Figma, Adobe XD	Flutter Development(Android & iOS)",
    "Git, GitHub, GitLab",
    "Geolocation and Maps Integration",
    "Audio and Video Playback",
  ];
  const technicalSkillsContent = technicalSkills.map((skill) => (
    <li className="text-xl" key={skill} style={{ color: "#172B4D" }}>
      - {skill}
    </li>
  ));
  const languages = ["Arabic (Native Language) ", "English - good"];
  const languagesContent = languages.map((language) => (
    <li className="text-xl" key={language} style={{ color: "#172B4D" }}>
      - {language}
    </li>
  ));
  return (
    <div className="flex flex-col w-full items-center justify-items-center font-[family-name:var(--font-geist-sans)] justify-stretch ">
      <NavBar />
      <AboutMeHeroSection />
      <AboutMeCard
        image="/Ahmed.jpg"
        title="Who am I ?"
        content="I am Ahmed Jamal, originally from Qena, Egypt. A results-oriented and ambitious individual, I am calm, kind, and possess a patient and understanding nature. I am open-minded and a people person who loves meeting new people and exchanging ideas.
Having been a professional runner in the past, I am passionate about sports, particularly swimming and running. This experience has cultivated discipline, perseverance, and a strong work ethic within me.
I possess excellent communication, public speaking, and critical thinking skills, making me a valuable asset in team-oriented environments. I am eager to apply my skills and knowledge to new challenges."
      />
      <AboutMeCard image="/StoryTime.jpg" title="Projects" direction="right">
        <div>
          <p className="text-xl" style={{ color: "#172B4D" }}>
            Story time web platform: is a Flutter web application that provides
            users with a convenient platform to browse and view stories. The app
            utilizes Firebase to fetch story data, and enable user interactions.
            It incorporates the BLoC pattern to manage state and abstract the
            data layer.
          </p>
          <Link
            href="https://github.com/ahmedgamaall/story_time"
            className="text-xl hover:underline hover:text-orange-600"
            style={{ color: "#172B4D" }}
          >
            ( source code )
          </Link>
        </div>
      </AboutMeCard>
      <AboutMeCard image="/TechnicalSkills.jpg" title="Technical Skills">
        <ul>{technicalSkillsContent}</ul>
      </AboutMeCard>
      <AboutMeCard
        image="/SoftSkills.jpg"
        direction="right"
        title="Soft Skills"
      >
        <ul>{softSkillsContent}</ul>
      </AboutMeCard>
      <AboutMeCard
        image="/UniversityOfGezira.jpg"
        title="Education"
        content="Bachelor's Degree, Accounting
                University of El-Gzira Academy, Qena
                2013 - 2017"
      />
      <AboutMeCard image="/certificate.jpg" title="Certifications">
        <Link
          href="https://www.udemy.com/certificate/UC-cb40e7df-0c88-4100-862f-ddcd5871374b/"
          className="text-xl hover:underline hover:text-orange-600"
          style={{ color: "#172B4D" }}
        >
          The Complete 2022 Flutter & Dart Development Course [Arabic]
        </Link>
      </AboutMeCard>
      <AboutMeCard
        image="/AhmedInFrontOfDoor.jpg"
        direction="right"
        title="Languages"
      >
        <div className="w-full">
          <ul>{languagesContent}</ul>
        </div>
      </AboutMeCard>
      <Footer />
    </div>
  );
}
