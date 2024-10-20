import React from 'react';
import Marquee from 'react-marquee-slider';

const ScrollingText = () => {
  const tools = [
    "JavaScript", "React", "Node.js", "Tailwind CSS", "HTML", "CSS", 
    "Git", "SQL", "C#", "AWS"
  ];

  return (
    <div className="border-4 border-black bg-yellow-300 p-4 overflow-hidden">
      <Marquee velocity={100} minScale={0.7} resetAfterTries={200}>
        {tools.map((tool, index) => (
          <div key={index} className="inline-block mx-4 text-2xl font-bold text-black">
            {tool}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingText;