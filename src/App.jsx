import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/project';
import Contact from './pages/contact';
import Skills from './pages/skills';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div
          style={{
            backgroundColor: '#111827',
            minHeight: '100vh',
            color: 'white',
          }}
        >
          <Navbar activeSection={activeSection} />
          <div id="home" className="section">
            <Home />
          </div>
          <div id="about" className="section">
            <About />
          </div>
          <div id="skills" className="section">
            <Skills />
          </div>
          <div id="projects" className="section">
            <Projects />
          </div>
          <div id="contact" className="section">
            <Contact />
          </div>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
