// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import vid1 from '../../assets/video/tech1.mp4';
// import vid2 from '../../assets/video/tech1.mp4';
// import vid3 from '../../assets/video/tech1.mp4';
// import vid4 from '../../assets/video/tech.mp4';
// import vid5 from '../../assets/video/tech.mp4';
// import vid6 from '../../assets/video/tech.mp4';

// // Set the app element for react-modal
// Modal.setAppElement('#root');

// const Projects = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     // Disable body scroll when modal is open
//     if (modalOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [modalOpen]);

//   // Open modal with selected project
//   const openModal = (project) => {
//     setSelectedProject(project);
//     setModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedProject(null);
//   };

//   const projects = [
//     {
//       title: 'Restaurant',
//       url: 'https://github.com/RuthNyankum/Ruthlicious-KetoDiet.git',
//       video: vid1,
//       description:
//         'A restaurant website that showcases keto diet meals, offering a variety of healthy options for customers.',
//       preview: 'https://carelink.netlify.app/', // URL to be embedded
//     },
//     {
//       title: 'Healthcare Platform',
//       url: 'https://carelink.netlify.app/',
//       video: vid2,
//       description:
//         'A comprehensive healthcare platform that allows patients to book appointments and manage their health records.',
//       preview: 'https://carelink.netlify.app/', // URL to be embedded
//     },
//     {
//       title: 'Tech Events',
//       url: 'https://github.com/International-Tech-Events/ITE-Frontend.git',
//       video: vid3,
//       description:
//         'A platform to organize and showcase international tech events, providing details and schedules for attendees.',
//       preview: 'https://carelink.netlify.app/', // URL to be embedded
//     },
//     {
//       title: 'Portfolio',
//       url: 'https://github.com/International-Tech-Events/Portfolio-Frontend.git',
//       video: vid4,
//       description:
//         'A personal portfolio website that highlights skills, projects, and experiences in web development.',
//       preview: 'https://carelink.netlify.app/', // URL to be embedded
//     },
//     {
//       title: 'E-commerce Site',
//       url: 'https://github.com/yourusername/ecommerce-site.git',
//       video: vid5,
//       description:
//         'An e-commerce platform for selling products online, featuring a user-friendly interface and secure payment options.',
//       preview: 'https://carelink.netlify.app/', // URL to be embedded
//     },
//     {
//       title: 'Social Media App',
//       url: 'https://github.com/yourusername/social-media-app.git',
//       video: vid6,
//       description:
//         'A social media application that connects users, allowing them to share posts, chat, and follow each other.',
//       preview: 'https://carelink.netlify.app/', // URL to be embedded
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:flex-row items-center cursor-pointer bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition w-full"
//             onClick={() => openModal(project)}
//           >
//             {/* Video at the Left */}
//             <div className="w-full md:w-1/2 mb-2 md:mb-0">
//               <div className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-1">
//                 <video
//                   src={project.video}
//                   className="rounded-full w-full h-48 object-cover"
//                   autoPlay
//                   loop
//                   muted
//                 />
//               </div>
//             </div>

//             {/* Title, URL, and Description on the Right */}
//             <div className="flex flex-col items-center md:items-start md:w-1/2 p-2">
//               <p className="text-center md:text-left text-sm font-semibold mt-1">
//                 {project.title}
//               </p>
//               <a
//                 href={project.url}
//                 className="text-blue-400 mt-1 text-xs"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {project.url}
//               </a>
//               <p className="text-xs mt-2 text-center md:text-left">
//                 {project.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <Modal
//           isOpen={modalOpen}
//           onRequestClose={closeModal}
//           contentLabel="Project Details"
//           className="bg-gray-900 text-white p-6 rounded-lg max-w-3xl mx-auto mt-20 z-30"
//           overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-30"
//         >
//           <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
//           <p className="mb-4">
//             Repository:{' '}
//             <a
//               href={selectedProject.url}
//               className="text-blue-500"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {selectedProject.url}
//             </a>
//           </p>
//           <p className="mb-4">{selectedProject.description}</p>
//           <div className="mb-4">
//             <iframe
//               src={selectedProject.preview}
//               title={`${selectedProject.title} Preview`}
//               className="w-full h-96 rounded-lg"
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//             ></iframe>
//           </div>
//           <button
//             onClick={closeModal}
//             className="bg-blue-500 text-white p-2 rounded"
//           >
//             Close
//           </button>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Projects;

// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import img1 from '../../assets/images/restaurant.png'; // Replace with your image paths
// import img2 from '../../assets/images/ruth.jpg';
// import img3 from '../../assets/images/ite.png';
// import img4 from '../../assets/images/ruth.jpg';
// import img5 from '../../assets/images/mindfulness.png';
// import img6 from '../../assets/images/studio.png';

// // Set the app element for react-modal
// Modal.setAppElement('#root');

// const Projects = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     // Disable body scroll when modal is open
//     if (modalOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [modalOpen]);

//   // Open modal with selected project
//   const openModal = (project) => {
//     setSelectedProject(project);
//     setModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedProject(null);
//   };

//   const projects = [
//     {
//       title: 'Restaurant',
//       url: 'https://github.com/RuthNyankum/Ruthlicious-KetoDiet.git',
//       image: img1,
//       description:
//         'A restaurant website that showcases keto diet meals, offering a variety of healthy options for customers.',
//       preview: 'https://ketohaven.netlify.app/',
//     },
//     {
//       title: 'Healthcare Platform',
//       url: 'https://github.com/RuthNyankum/CareLink-Frontend.git',
//       image: img2,
//       description:
//         'A comprehensive healthcare platform that allows patients to book appointments and manage their profile.',
//       preview: 'https://carelink.netlify.app/', //
//     },
//     {
//       title: 'Tech Events',
//       url: 'https://github.com/International-Tech-Events/ITE-Frontend.git',
//       image: img3,
//       description:
//         'A platform to organize and showcase international tech events, providing details and schedules for attendees.',
//       preview: 'https://internationaltectevents.netlify.app/',
//     },
//     {
//       title: 'Portfolio',
//       url: 'https://github.com/International-Tech-Events/Portfolio-Frontend.git',
//       image: img4,
//       description:
//         'A personal portfolio website that highlights skills, projects, and experiences in web development.',
//       preview: 'https://rteg.netlify.app/',
//     },
//     {
//       title: 'Haven of Mindulness',
//       url: 'https://github.com/RuthNyankum/Haven-of-Mindfulness.git',
//       image: img5,
//       description:
//         'Haven of Mindfulness is an online platform offering guided meditation, wellness articles, and calming products to help users achieve peace and balance in their lives.',
//       preview: 'https://haven-of-mindfulness.netlify.app/',
//     },
//     {
//       title: 'Ruths Studio',
//       url: 'https://github.com/RuthNyankum/Ruths-Studio.git',
//       image: img6,
//       description:
//         "Ruth's Frame of Mind showcases a collection of art, design projects, and photography, highlighting unique styles and creative processes.",
//       preview: 'https://frame-of-mind.netlify.app/',
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:flex-row items-center cursor-pointer bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition w-full"
//             onClick={() => openModal(project)}
//           >
//             {/* Image at the Left */}
//             <div className="w-full md:w-1/2 mb-2 md:mb-0">
//               <div className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 p-1">
//                 <img
//                   src={project.image}
//                   alt={`${project.title} Thumbnail`}
//                   className="rounded-lg w-full h-48 object-cover"
//                 />
//               </div>
//             </div>

//             {/* Title, URL, and Description on the Right */}
//             <div className="flex flex-col items-center md:items-start md:w-1/2 p-2">
//               <p className="text-center md:text-left text-sm font-semibold mt-1">
//                 {project.title}
//               </p>
//               <a
//                 href={project.url}
//                 className="text-blue-400 mt-1 text-xs"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {project.url}
//               </a>
//               <p className="text-xs mt-2 text-center md:text-left">
//                 {project.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <Modal
//           isOpen={modalOpen}
//           onRequestClose={closeModal}
//           contentLabel="Project Details"
//           className="bg-gray-900 text-white p-6 rounded-lg max-w-3xl mx-auto mt-20 z-30"
//           overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-30"
//         >
//           <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
//           <p className="mb-4">
//             Repository:{' '}
//             <a
//               href={selectedProject.url}
//               className="text-blue-500"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {selectedProject.url}
//             </a>
//           </p>
//           <p className="mb-4">{selectedProject.description}</p>
//           <div className="mb-4">
//             <iframe
//               src={selectedProject.preview}
//               title={`${selectedProject.title} Preview`}
//               className="w-full h-96 rounded-lg"
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//             ></iframe>
//           </div>
//           <button
//             onClick={closeModal}
//             className="bg-blue-500 text-white p-2 rounded"
//           >
//             Close
//           </button>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Projects;

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import img1 from '../../assets/images/restaurant.png'; // Replace with your image paths
import img2 from '../../assets/images/ruth.jpg';
import img3 from '../../assets/images/ite.png';
import img4 from '../../assets/images/ruth.jpg';
import img5 from '../../assets/images/mindfulness.png';
import img6 from '../../assets/images/studio.png';

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
      preview: 'https://rteg.netlify.app/', // Added preview link
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center cursor-pointer bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition w-full"
            onClick={() => openModal(project)}
          >
            {/* Image at the Left */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <div className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 p-1">
                <img
                  src={project.image}
                  alt={`${project.title} Thumbnail`}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Title, URL, and Description on the Right */}
            <div className="flex flex-col items-center md:items-start md:w-1/2 p-2">
              <p className="text-center md:text-left text-sm font-semibold mt-1">
                {project.title}
              </p>
              <a
                href={project.url}
                className="text-blue-400 mt-1 text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.url}
              </a>
              <p className="text-xs mt-2 text-center md:text-left">
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
              className="bg-blue-500 text-white p-2 rounded w-fit"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Projects;
