import "../styles/App.css";
import subjectImage from "../assets/Subject.png";

const AboutMe = () => {
  return (
    <div className="relative p-4 sm:p-8 bg-yellow-400 border-2 border-black rounded-none font-main">
      {/* shapes */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-red-500 border-2 border-black transform rotate-45"></div>
      <div className="absolute bottom-3 -left-3 w-20 h-20 bg-blue-500 border-2 border-black rounded-full"></div>

      <div className="relative flex flex-col lg:flex-row items-start gap-8">
        {/* image container */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden z-10 transform -rotate-3 mx-auto lg:mx-0">
          <img
            src={subjectImage}
            alt="Placeholder"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>

        {/* text content */}
        <div className="flex-1 p-6 bg-green-100 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
          <h2 className="text-5xl font-black mb-6 text-black uppercase tracking-tight">
            About Me
          </h2>
          <p className="text-xl mb-4 text-black font-bold">
            Hey! I'm-
            <div className="relative inline-block">
              
              <div className="absolute -left-1 -top-4 w-32 h-16 bg-blue-500 border-2 border-black transform skew-x-14 z-0 rotate-1"></div>
              <span
                className="text-4xl font-black text-yellow-300 relative z-10 transform -rotate-2"
                style={{ textShadow: "2px 2px 0px black" }}
              >
                Sebastian!
              </span>
            </div>
                [Lets insert basic introduction seen on pretty much all student SWE
            portfolio's.]
          </p>
          <p className="text-xl text-black font-bold">
            Jokes aside, I'm currently a Software Engineering student at
            Centennial College. I have a strong passion for healthcare and
            technology. I would someday like to work on software that lets
            healthcare professionals work more efficiently and spend less time
            yelling at their computers. Outside of school, I often ponder why
            Ctrl-Z doesn't work in real life.
          </p>
          <a href="#contact">
          <button className="mt-6 px-6 py-3 bg-green-400 text-black font-bold text-xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Get in Touch!
          </button>
          </a>
        </div>
      </div>

      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500 border-4 border-black transform rotate-12 flex items-center justify-center">
        <span className="text-white font-black text-2xl transform -rotate-12"></span>
      </div>
    </div>
  );
};

export default AboutMe;
