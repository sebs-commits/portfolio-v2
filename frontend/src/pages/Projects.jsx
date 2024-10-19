import ProjectCard from "../components/ProjectCard";
// will add more later, this is sample data for now
const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/seed/project1/300/200",
      tags: ["React", "TailwindCSS", "Node.js"],
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/seed/project2/300/200",
      tags: ["Vue", "Firebase", "Sass", "React", "TailwindCSS", "Node.js"],
    },
  ];

  return (
    <div className="p-8 bg-green-200 border-4 border-black">
      <h2 className="text-5xl font-black mb-8 font-display text-center">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
