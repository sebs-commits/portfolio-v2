import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/NavBar";
import ScrollingText from "./components/ScrollingText";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const App = () => {
  const projects = [
    {
      id: 1,
      title: "Quiz Application",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/id/237/200/300",
      date: "2024-01-01",
      link: "https://www.google.com",
      learnings: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["React", "TailwindCSS", "Node.js"],
    },
    {
      id: 2,
      title: "Patient Tracker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/id/237/200/300",
      tags: ["Vue", "Firebase", "Sass", "React", "TailwindCSS", "Node.js"],
    },
  ];

  return (
    <Router>
      <div className="min-h-screen p-4 sm:p-8 flex flex-col font-mono bg-indigo-200 relative overflow-hidden">
        {/* bunch of shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 border-2 border-black transform -rotate-12"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-400 border-2 border-black rounded-full"></div>

        <main className="flex-grow bg-green-50 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-10 z-10 mb-20">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="mb-12">
                    <AboutMe />
                  </div>
                  <div className="mb-4">
                    <ScrollingText />
                  </div>
                  <div className="mb-12">
                    <Projects projects={projects} />
                  </div>
                  <div className="mb-12" id="contact">
                    <ContactForm />
                  </div>
                  <Footer />
                </>
              }
            />
            <Route
              path="/project/:id"
              element={<ProjectDetails projects={projects} />}
            />
          </Routes>
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
    </Router>
  );
};

export default App;
