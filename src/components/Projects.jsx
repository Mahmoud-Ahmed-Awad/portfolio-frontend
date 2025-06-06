import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="bg-[#1c1c1c] py-20 px-3 text-[#bfbfbf]" id="projects">
      <h1 className="text-4xl font-bold text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 container mx-auto">
        {/* Card components will be placed here */}
        <ProjectCard
          title="Project Title"
          image="https://placehold.co/600x400"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores doloremque recusandae adipisci, eos reprehenderit eveniet eaque reiciendis incidunt velit dolores commodi deserunt dolorum est quos deleniti nam quasi ea!"
        />
        <ProjectCard
          title="Project Title"
          image="https://placehold.co/600x400"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores doloremque recusandae adipisci, eos reprehenderit eveniet eaque reiciendis incidunt velit dolores commodi deserunt dolorum est quos deleniti nam quasi ea!"
        />
        <ProjectCard
          title="Project Title"
          image="https://placehold.co/600x400"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores doloremque recusandae adipisci, eos reprehenderit eveniet eaque reiciendis incidunt velit dolores commodi deserunt dolorum est quos deleniti nam quasi ea!"
        />
        <ProjectCard
          title="Project Title"
          image="https://placehold.co/600x400"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores doloremque recusandae adipisci, eos reprehenderit eveniet eaque reiciendis incidunt velit dolores commodi deserunt dolorum est quos deleniti nam quasi ea!"
        />
        <ProjectCard
          title="Project Title"
          image="https://placehold.co/600x400"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores doloremque recusandae adipisci, eos reprehenderit eveniet eaque reiciendis incidunt velit dolores commodi deserunt dolorum est quos deleniti nam quasi ea!"
        />
        <ProjectCard
          title="Project Title"
          image="https://placehold.co/600x400"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores doloremque recusandae adipisci, eos reprehenderit eveniet eaque reiciendis incidunt velit dolores commodi deserunt dolorum est quos deleniti nam quasi ea!"
        />
      </div>
      {/* <Link
        to="/projects"
        className="block w-fit mx-auto mt-5 bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-md font-semibold"
      >
        View All Projects
      </Link> */}
    </div>
  );
};

export default Projects;
