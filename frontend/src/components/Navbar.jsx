import "../styles/App.css";

const Navbar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 z-50 bg-opacity-50 backdrop-blur-md">
      <ul className="menu menu-horizontal p-2 font-main relative">
        <li className="mx-2">
          <a
            href="#home"
            className="text-black bg-green-400 hover:bg-yellow-400 font-black text-xl uppercase tracking-wider px-4 py-2 border-2 border-black transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            About Me
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#about"
            className="text-black bg-green-400 hover:bg-yellow-400 font-black text-xl uppercase tracking-wider px-4 py-2 border-2 border-black transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Projects
          </a>
        </li>
        <li className="mx-2">
          <a
            href="#services"
            className="text-black bg-green-400 hover:bg-yellow-400 font-black text-xl uppercase tracking-wider px-4 py-2 border-2 border-black transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Experience
          </a>
        </li>
      </ul>

      {/* more shapes */}
      <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-500 border-2 border-black transform rotate-12 flex items-center justify-center bg-opacity-50 backdrop-blur-md">
        <span className="text-white font-black text-sm transform -rotate-12"></span>
      </div>
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-500 border-2 border-black transform -rotate-12 bg-opacity-50 backdrop-blur-md"></div>
      <div className="absolute -bottom-3 right-10 w-6 h-6 bg-blue-500 border-2 border-black rounded-full bg-opacity-50 backdrop-blur-md"></div>
    </div>
  );
};

export default Navbar;
