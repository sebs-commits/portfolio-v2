import "./styles/App.css";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Navbar from "./components/NavBar";
import ScrollingText from "./components/ScrollingText";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen p-4 sm:p-8 flex flex-col font-mono bg-indigo-200 relative overflow-hidden">
      {/* bunch of shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 border-2 border-black transform -rotate-12"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-400 border-2 border-black rounded-full"></div>

      <main className="flex-grow bg-green-50 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-10 z-10 mb-20">
        <div className="mb-12">
          <AboutMe />
        </div>
        <div className="mb-4">
          <ScrollingText />
        </div>
        <div className="mb-12">
          <Projects />
          <Footer />
        </div>
      </main>

      <div className="absolute m-4 top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 rotate-90">
        <span
          className="text-4xl font-black text-white stroke-black stroke-1"
          style={{ WebkitTextStroke: "1px black" }}
        >
          SEBASTIAN DAVID
        </span>
      </div>

      <Navbar />
    </div>
  );
};

export default App;
