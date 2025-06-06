import SkillCard from "./SkillCard";
import htmlIcon from "../assets/skills/html.png";
import cssIcon from "../assets/skills/css.png";
import javascriptIcon from "../assets/skills/javascript.png";
import reactIcon from "../assets/skills/react.png";
import nodejsIcon from "../assets/skills/nodejs.png";
import tailwindcssIcon from "../assets/skills/tailwindcss.png";
import bootstrapIcon from "../assets/skills/bootstrap.png";
import expressIcon from "../assets/skills/express.png";
import mongodbIcon from "../assets/skills/mongodb.png";
import sassIcon from "../assets/skills/sass.png";

const Skills = () => {
  const skills = [
    {
      image: htmlIcon,
      name: "HTML",
      description: "Markup language for structuring web content.",
    },
    {
      image: cssIcon,
      name: "CSS",
      description: "Stylesheet language for designing web pages.",
    },
    {
      image: javascriptIcon,
      name: "JavaScript",
      description: "Programming language for interactive web features.",
    },
    {
      image: reactIcon,
      name: "React",
      description: "JavaScript library for building user interfaces.",
    },
    {
      image: nodejsIcon,
      name: "Node.js",
      description: "JavaScript runtime for server-side development.",
    },
    {
      image: tailwindcssIcon,
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
    },
    {
      image: bootstrapIcon,
      name: "Bootstrap",
      description:
        "Popular CSS framework for responsive and mobile-first web development.",
    },
    {
      image: expressIcon,
      name: "Expressjs",
      description: "Minimal and flexible Node.js web application framework.",
    },
    {
      image: mongodbIcon,
      name: "MongoDB",
      description: "NoSQL database for scalable and flexible data storage.",
    },
    {
      image: sassIcon,
      name: "SASS",
      description:
        "CSS preprocessor that adds power and elegance to the basic language.",
    },
  ];

  return (
    <div className="bg-gray-800 py-20 px-3 text-[#bfbfbf]" id="skills">
      <h1 className="text-4xl font-bold text-center">Skills</h1>
      <div className="container mx-auto flex flex-wrap items-center justify-center mt-10 gap-5 max-w-[830px]">
        {skills.map((skill, idx) => (
          <SkillCard
            key={skill.name + idx}
            image={skill.image}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
