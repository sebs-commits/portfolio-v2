import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="p-4 sm:p-8 bg-green-200 border-4 border-black">
      <h2 className="text-4xl sm:text-5xl font-black mb-6 sm:mb-8 font-display text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:[860px]:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="block"
          >
            <ProjectCard {...project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
