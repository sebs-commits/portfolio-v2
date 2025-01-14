/* eslint-disable react/prop-types */
const colors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-purple-400",
];
const ProjectCard = ({
  title,
  shortDescription,
  image,
  tags,
  isExpanded,
  onExpand,
  onCollapse,
}) => {
  return (
    <div
      className={`w-full bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${
        isExpanded
          ? "md:[860px]:col-span-2 lg:col-span-3 z-10"
          : "hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
      }`}
      onMouseEnter={onExpand}
      onMouseLeave={onCollapse}
    >
      <div className={`flex ${isExpanded ? "flex-row" : "flex-col"}`}>
        <img
          src={image}
          alt={title}
          className={`object-cover border-black ${
            isExpanded ? "w-1/3 border-r-4" : "w-full h-48 border-b-4"
          }`}
        />
        <div className="p-4 flex-1">
          <h3 className="text-2xl font-bold mb-2 font-display">{title}</h3>
          <p className="text-sm mb-4 font-body">
            {isExpanded ? shortDescription : `${shortDescription.slice(0, 100)}...`}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`${
                  colors[index % colors.length]
                } px-2 py-1 text-xs font-semibold border-2 border-black`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
