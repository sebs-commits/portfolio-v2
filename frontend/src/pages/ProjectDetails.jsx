import { useParams } from "react-router-dom";
import { FaArrowLeft, FaCalendar, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-8 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
      <Link to="/" className="inline-block mb-4">
        <button className="flex items-center space-x-2 bg-blue-400 text-black font-bold py-2 px-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          <FaArrowLeft />
          <span>Back to Projects</span>
        </button>
      </Link>

      <h1 className="text-6xl font-black mb-4 font-display">Project Details</h1>

      <h2 className="text-5xl font-black mb-8 font-display">{project.title}</h2>

      <div className="mb-8 flex justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-3/4 h-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        />
      </div>

      <p className="text-xl mb-8 font-body">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Project Details</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaCalendar className="mr-2" />
              <span>Date: {project.date || "Not specified"}</span>
            </li>
            <li className="flex items-center">
              <FaLink className="mr-2" />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Project Link
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-400 px-3 py-1 border-2 border-black text-sm font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {project.challenges && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Challenges</h3>
          <p className="text-lg font-body">{project.challenges}</p>
        </div>
      )}

      {project.learnings && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">What I Learned</h3>
          <p className="text-lg font-body">{project.learnings}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
