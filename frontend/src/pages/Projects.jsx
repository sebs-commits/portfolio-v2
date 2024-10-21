import { Link } from 'react-router-dom';
import ProjectCard from "../components/ProjectCard";
// will add more later, this is sample data for now
const Projects = ({ projects }) => {
  return (
    <div className="p-8 bg-green-200 border-4 border-black">
      <h2 className="text-5xl font-black mb-8 font-display text-center">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <ProjectCard {...project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
