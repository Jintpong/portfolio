import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Hero from './components/Hero.jsx'; 
import Technologies from './components/Technologies';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Chatbot from './components/Chatbot.jsx';
import Experience from './components/Experience.jsx';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-stone-300 antialiased">
      {/* Background Gradient */}
      <div
        className="fixed inset-0 -z-10 h-full w-full"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)"
        }}
      ></div>

      {/* Social Icons Top Right */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <a
          href="https://www.linkedin.com/notifications/?filter=all"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white text-2xl hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:jintpongchababnapa@gmail.com"
          aria-label="Email"
          className="text-white text-2xl hover:text-pink-400 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Jintpong"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white text-2xl hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold"></h1>
      </nav>

      {/* Page Content - Centered */}
      <div className="flex flex-col items-center justify-center text-center min-h-screen px-4 space-y-12">
        <Hero />
        <Technologies />
        <Projects />
        <Education />
        <Experience />
        <Chatbot />
      </div>
    </div>
  );
};

export default App;
