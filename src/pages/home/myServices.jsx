// import React from 'react';
// import {
//   FaCode,
//   FaLightbulb,
//   FaPalette,
//   FaHandshake,
//   FaCheckCircle,
//   FaBook,
// } from 'react-icons/fa';

// const MyService = () => {
//   const services = [
//     {
//       icon: <FaCode />,
//       title: 'Developers, project',
//       description: 'Define software requirements and project scope.',
//     },
//     {
//       icon: <FaPalette />,
//       title: 'Designing User Interfaces',
//       description:
//         'Creating intuitive and visually appealing user interfaces that enhance user experience.',
//     },
//     {
//       icon: <FaHandshake />,
//       title: 'Team Collaboration',
//       description:
//         'Collaborating effectively with designers, back-end developers, and other team members to deliver cohesive web solutions.',
//     },
//     {
//       icon: <FaCheckCircle />,
//       title: 'Implementing Best Practices',
//       description:
//         'Following front-end development best practices, including clean code, accessibility, and efficient workflows.',
//     },
//     {
//       icon: <FaLightbulb />,
//       title: 'Staying up-to-date',
//       description:
//         'With the latest programming languages, technologies, and practices.',
//     },
//     {
//       icon: <FaBook />,
//       title: 'Continuous Learning',
//       description:
//         'Staying up-to-date with the latest tools, frameworks, and trends to deliver modern and innovative web solutions.',
//     },
//   ];

//   return (
//     <div className="bg-gray-900">
//       <div className="max-w-6xl mx-auto px-8 py-12 bg-gray-900 rounded-lg shadow-lg font-poppins-regular">
//         <h2 className="text-3xl md:text-4xl text-cyan-400 font-bold text-center">
//           MY SERVICE
//         </h2>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center text-gray-400  mb-7"
//               style={{
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 backdropFilter: 'blur(10px)',
//                 border: '1px solid rgba(255, 255, 255, 0.18)',
//                 boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
//               }}
//             >
//               <div className="text-cyan-400 text-3xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-bold text-white mb-2">
//                 {service.title}
//               </h3>
//               <p>{service.description}</p>
//             </div>
//           ))}
//         </div>
//         {/* <div className="mt-8 text-center">
//           <h4 className="text-xl text-white font-semibold">
//             View work results portfolio & make productivity easier.
//           </h4>
//           <p className="mt-2">
//             Building applications and processes is the latest in my skills as a
//             professional programmer.
//           </p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default MyService;

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaLightbulb,
  FaPalette,
  FaHandshake,
  FaCheckCircle,
  FaBook,
} from 'react-icons/fa';

// Define motion variants
const cardVariants = {
  animate: {
    scale: [1, 1.1, 1.1, 1, 1],
    rotate: [0, 0, 10, 10, 0],
    borderRadius: ['0%', '10%', '10%', '0%', '0%'],
  },
  transition: {
    duration: 2,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 1,
  },
};

const MyService = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Developers, project',
      description: 'Define software requirements and project scope.',
    },
    {
      icon: <FaPalette />,
      title: 'Designing User Interfaces',
      description:
        'Creating intuitive and visually appealing user interfaces that enhance user experience.',
    },
    {
      icon: <FaHandshake />,
      title: 'Team Collaboration',
      description:
        'Collaborating effectively with designers, back-end developers, and other team members to deliver cohesive web solutions.',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Implementing Best Practices',
      description:
        'Following front-end development best practices, including clean code, accessibility, and efficient workflows.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Staying up-to-date',
      description:
        'With the latest programming languages, technologies, and practices.',
    },
    {
      icon: <FaBook />,
      title: 'Continuous Learning',
      description:
        'Staying up-to-date with the latest tools, frameworks, and trends to deliver modern and innovative web solutions.',
    },
  ];

  return (
    <div className="bg-gray-900">
      <div className="max-w-6xl mx-auto px-8 py-12 bg-gray-900 rounded-lg shadow-lg font-poppins-regular">
        <h2 className="text-3xl md:text-4xl text-cyan-400 font-bold text-center">
          MY SERVICE
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center text-gray-400 mb-7"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              }}
              animate={cardVariants.animate}
              transition={cardVariants.transition}
            >
              <div className="text-cyan-400 text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyService;
