import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import img1 from '../../assets/images/restaurant.png';
import img2 from '../../assets/images/care.png';
import img3 from '../../assets/images/ite.png';
import img4 from '../../assets/images/ruthfolio.png';
import img5 from '../../assets/images/mindfulness.png';
import img6 from '../../assets/images/studio.png';
import Achievements from '../skills/achievements';

// Set the app element for react-modal
Modal.setAppElement('#root');

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Disable body scroll when modal is open
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen]);

  // Open modal with selected project
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: 'Restaurant',
      url: 'https://github.com/RuthNyankum/Ruthlicious-KetoDiet.git',
      image: img1,
      description:
        'A restaurant website that showcases keto diet meals, offering a variety of healthy options for customers.',
      preview: 'https://ketohaven.netlify.app/',
    },
    {
      title: 'Healthcare Platform',
      url: 'https://github.com/RuthNyankum/CareLink-Frontend.git',
      image: img2,
      description:
        'A comprehensive healthcare platform that allows patients to book appointments and manage their profile.',
      preview: 'https://carelink.netlify.app/',
    },
    {
      title: 'Tech Events',
      url: 'https://github.com/International-Tech-Events/ITE-Frontend.git',
      image: img3,
      description:
        'A platform to organize and showcase international tech events, providing details and schedules for attendees.',
      preview: 'https://internationaltectevents.netlify.app/',
    },
    {
      title: 'Portfolio',
      url: 'https://github.com/RuthNyankum/Portfolio.git',
      image: img4,
      description:
        'A personal portfolio website that highlights skills, projects, and experiences in web development.',
      preview: 'https://ruthfolio.netlify.app/',
    },
    {
      title: 'Haven of Mindulness',
      url: 'https://github.com/RuthNyankum/Haven-of-Mindfulness.git',
      image: img5,
      description:
        'Haven of Mindfulness is an online platform offering guided meditation, wellness articles, and calming products to help users achieve peace and balance in their lives.',
      preview: 'https://haven-of-mindfulness.netlify.app/',
    },
    {
      title: 'Ruths Studio',
      url: 'https://github.com/RuthNyankum/Ruths-Studio.git',
      image: img6,
      description:
        "Ruth's Frame of Mind showcases a collection of art, design projects, and photography, highlighting unique styles and creative processes.",
      preview: 'https://frame-of-mind.netlify.app/',
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 font-poppins-regular">
        <div className="text-center mb-12 ">
          <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold mb-4 text-primary">
            Explore My Work Portfolio
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl mb-9">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center cursor-pointer bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition w-full"
              onClick={() => openModal(project)}
            >
              {/* Image at the Left */}
              <div className="w-full md:w-1/2 mb-2 md:mb-0">
                <div className="rounded-lg bg-gradient-to-r from-[#22d3ee] to-[#0d93c9] p-1">
                  <img
                    src={project.image}
                    alt={`${project.title} Thumbnail`}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* TEXT WRAPPING APPROACH */}
              <div className="flex flex-col items-center md:items-start md:w-1/2 p-2">
                <p className="text-center md:text-left text-lg font-semibold mt-1">
                  {project.title}
                </p>
                <a
                  href={project.url}
                  className="text-blue-400 mt-1 text-sm break-all w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.url}
                </a>
                <p className="text-sm mt-2 text-center md:text-left">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Project Details"
            className="bg-gray-900 text-white p-6 rounded-lg max-w-3xl mx-auto mt-20 z-30"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-30"
          >
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="mb-4">
              Repository:{' '}
              <a
                href={selectedProject.url}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProject.url}
              </a>
            </p>
            <p className="mb-4">{selectedProject.description}</p>
            <div className="mb-4">
              <iframe
                src={selectedProject.preview}
                title={`${selectedProject.title} Preview`}
                className="w-full h-96 rounded-lg"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col">
              {' '}
              <a
                href={selectedProject.preview}
                className="text-blue-500 underline mb-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the live site
              </a>
              <button
                onClick={closeModal}
                className="bg-primary text-white p-2 rounded w-fit"
              >
                Close
              </button>
            </div>
          </Modal>
        )}

        <Achievements />
      </div>
    </>
  );
};

export default Projects;
