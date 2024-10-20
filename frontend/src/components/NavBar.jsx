import "../styles/App.css";
import { FaHome, FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="fixed m-8 bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-300 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-1 z-50 bg-opacity-50 backdrop-blur-md">
      <ul className="menu menu-horizontal p-1 sm:p-2 font-main relative">
        <li className="mx-1 sm:mx-2">
          <a
            href="#home"
            className="text-black bg-green-400 hover:bg-yellow-400 font-black text-sm sm:text-base uppercase tracking-wider px-2 sm:px-3 py-1 sm:py-2 border border-black transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            <FaHome className="text-xl sm:text-2xl" />
          </a>
        </li>
        <li className="mx-1 sm:mx-2">
          <a
            href="https://github.com/sebs-commits"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-green-400 hover:bg-yellow-400 font-black text-sm sm:text-base uppercase tracking-wider px-2 sm:px-3 py-1 sm:py-2 border border-black transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            <FaGithub className="text-xl sm:text-2xl" />
          </a>
        </li>
        <li className="mx-1 sm:mx-2">
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-green-400 hover:bg-yellow-400 font-black text-sm sm:text-base uppercase tracking-wider px-2 sm:px-3 py-1 sm:py-2 border border-black transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            <FaLinkedin className="text-xl sm:text-2xl" />
          </a>
        </li>
      </ul>

      {/* more shapes */}
      <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-5 sm:w-8 h-5 sm:h-8 bg-purple-500 border border-black transform rotate-12 flex items-center justify-center bg-opacity-50 backdrop-blur-md"></div>
      <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-4 sm:w-6 h-4 sm:h-6 bg-red-500 border border-black transform -rotate-12 bg-opacity-50 backdrop-blur-md"></div>
      <div className="absolute -bottom-1 sm:-bottom-2 right-4 sm:right-6 w-3 sm:w-4 h-3 sm:h-4 bg-blue-500 border border-black rounded-full bg-opacity-50 backdrop-blur-md"></div>
    </div>
  );
};

export default NavBar;
