import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
      <h2 className="text-5xl font-black mb-8 font-display">{project.title}</h2>
      <div className="mb-8">
        <img src={project.image} alt={project.title} className="w-full h-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
      </div>
      <p className="text-xl mb-8 font-body">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-400 px-3 py-1 border-2 border-black text-sm font-bold"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Add more project details here */}
    </div>
  );
};

export default ProjectDetails;