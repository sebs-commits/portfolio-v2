import "../styles/App.css";
import { FaHome, FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-300 border-2 sm:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 z-50 bg-opacity-50 backdrop-blur-md">
      <ul className="menu menu-horizontal p-1 sm:p-2 font-main relative">
        <li className="mx-1 sm:mx-2">
          <a
            href="#home"
            className="text-black bg-green-400 hover:bg-yellow-400 font-black text-sm sm:text-xl uppercase tracking-wider px-2 sm:px-4 py-1 sm:py-2 border border-black sm:border-2 transition-all hover:translate-x-0.5 hover:translate-y-0.5 sm:hover:translate-x-1 sm:hover:translate-y-1 hover:shadow-none"
          >
            <FaHome className="text-2xl sm:text-3xl" />
          </a>
        </li>
        <li className="mx-1 sm:mx-2">
          <a
            href="https://github.com/sebs-commits"
            target="_blank"
            className="text-black bg-green-400 hover:bg-yellow-400 font-black text-sm sm:text-xl uppercase tracking-wider px-2 sm:px-4 py-1 sm:py-2 border border-black sm:border-2 transition-all hover:translate-x-0.5 hover:translate-y-0.5 sm:hover:translate-x-1 sm:hover:translate-y-1 hover:shadow-none"
          >
            <FaGithub className="text-2xl sm:text-3xl" />
          </a>
        </li>
        <li className="mx-1 sm:mx-2">
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            className="text-black bg-green-400 hover:bg-yellow-400 font-black text-sm sm:text-xl uppercase tracking-wider px-2 sm:px-4 py-1 sm:py-2 border border-black sm:border-2 transition-all hover:translate-x-0.5 hover:translate-y-0.5 sm:hover:translate-x-1 sm:hover:translate-y-1 hover:shadow-none"
          >
            <FaLinkedin className="text-2xl sm:text-3xl" />
          </a>
        </li>
      </ul>

      {/* more shapes */}
      <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-6 sm:w-12 h-6 sm:h-12 bg-purple-500 border border-black sm:border-2 transform rotate-12 flex items-center justify-center bg-opacity-50 backdrop-blur-md">
        <span className="text-white font-black text-xs sm:text-sm transform -rotate-12"></span>
      </div>
      <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-4 sm:w-8 h-4 sm:h-8 bg-red-500 border border-black sm:border-2 transform -rotate-12 bg-opacity-50 backdrop-blur-md"></div>
      <div className="absolute -bottom-2 sm:-bottom-3 right-5 sm:right-10 w-3 sm:w-6 h-3 sm:h-6 bg-blue-500 border border-black sm:border-2 rounded-full bg-opacity-50 backdrop-blur-md"></div>
    </div>
  );
};

export default NavBar;
