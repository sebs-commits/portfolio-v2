/* eslint-disable react/prop-types */

const ProjectCard = ({ title, description, image, tags }) => {
  return (
    <div className="cursor-pointer relative w-72 h-96 bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transform rotate-1 transition-all duration-300 hover:rotate-0">
      <div className="h-1/2 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110 hover:translate-y-2"
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-black mb-2 font-display">{title}</h3>
        <p className="text-sm mb-4 font-body">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white border-2 border-black text-xs font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* create a new tag in replacement of this shape */}
      {/* <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-purple-500 border-2 border-black transform rotate-12 flex items-center justify-center"></div> */}
    </div>
  );
};

export default ProjectCard;
