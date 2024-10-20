import React from "react";
import Marquee from "react-marquee-slider";

const ScrollingText = () => {
  const tools = [
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
    "SQL",
    "C#",
    "AWS",
  ];

  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
  ];

  const randomRotation = () => {
    return Math.floor(Math.random() * 11) - 5;
  };

  return (
    <div className="border-4 border-black bg-teal-300 p-4 overflow-hidden">
      <Marquee velocity={100} minScale={0.7} resetAfterTries={200}>
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`
              inline-block mx-4 px-4 py-2 my-1 
              ${colors[index % colors.length]} 
              text-black font-black text-xl 
              border-4 border-black 
              shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              transition-all duration-300 hover:rotate-0 hover:scale-105
              animate-bobbing
            `}
            style={{
              transform: `rotate(${randomRotation()}deg)`,
              animationDelay: `${index * 0.1}s`, // Add delay for each item
            }}
          >
            {tool}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingText;
