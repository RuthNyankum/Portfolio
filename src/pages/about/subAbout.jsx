// import React from 'react';
// import { GlobeAltIcon, AcademicCapIcon } from '@heroicons/react/24/outline'; // Import the icons

// const SubAbout = () => {
//   return (
//     <section
//       className="w-full h-[40vh] bg-cover bg-center"
//       //   style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
//     >
//       <div className="flex items-center justify-center h-full">
//         <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
//           {/* Text Section */}
//           <div className="w-full md:w-1/2">
//             <p className="text-white text-sm md:text-lg mb-9">
//               I’m a frontend developer who’s passionate about React and
//               JavaScript. I enjoy turning complex ideas into sleek,
//               user-friendly web applications. My goal is to create designs that
//               are not only visually appealing but also function flawlessly on
//               any device. With my experience in React, I build high-performance
//               apps that really make an impact.
//             </p>
//             <p className="text-white text-sm md:text-lg mb-4">
//               I’m dedicated to staying current with the latest trends and
//               technologies to deliver cutting-edge solutions. My focus is on
//               creating seamless user experiences that engage and delight users.
//             </p>
//           </div>

//           {/* Vision and Mission Section */}
//           <div className="w-full md:w-1/2 text-white">
//             <div className="mb-8">
//               <div className="flex items-center mb-4">
//                 <GlobeAltIcon className="h-6 w-6 text-blue-400 mr-3" />{' '}
//                 {/* Vision Icon */}
//                 <h2 className="text-2xl md:text-2xl font-bold">VISION</h2>
//               </div>
//               <p className="text-sm md:text-lg">
//                 "My vision is to drive the future of frontend development with
//                 innovative, user-centered web experiences. I strive to merge
//                 creativity and technology to make the web engaging and
//                 accessible for all."
//               </p>
//             </div>
//             <div>
//               <div className="flex items-center mb-4">
//                 <AcademicCapIcon className="h-6 w-6 text-green-400 mr-3" />{' '}
//                 {/* Mission Icon */}
//                 <h2 className="text-2xl md:text-2xl font-bold">MISSION</h2>
//               </div>
//               <p className="text-sm md:text-lg">
//                 "My mission is to create visually stunning and accessible
//                 websites that are easy to use. By combining design and
//                 functionality with the latest technology, I strive to make a
//                 meaningful impact online."
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SubAbout;

import React from 'react';
import { GlobeAltIcon, AcademicCapIcon } from '@heroicons/react/24/outline'; // Import the icons

const SubAbout = () => {
  return (
    <section
      className="w-full h-auto md:h-[40vh] bg-cover bg-center"
      //   style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <p className="text-white text-lg md:text-lg mb-6 md:mb-9">
              I’m a frontend developer who’s passionate about React and
              JavaScript. I enjoy turning complex ideas into sleek,
              user-friendly web applications. My goal is to create designs that
              are not only visually appealing but also function flawlessly on
              any device. With my experience in React, I build high-performance
              apps that really make an impact.
            </p>
            <p className="text-white text-lg md:text-lg mb-6 md:mb-4">
              I’m dedicated to staying current with the latest trends and
              technologies to deliver cutting-edge solutions. My focus is on
              creating seamless user experiences that engage and delight users.
            </p>
          </div>

          {/* Vision and Mission Section */}
          <div className="w-full md:w-1/2 text-white">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <GlobeAltIcon className="h-6 w-6 text-blue-400 mr-3" />{' '}
                {/* Vision Icon */}
                <h2 className="text-lg md:text-2xl font-bold">VISION</h2>
              </div>
              <p className="text-lg md:text-lg">
                "My vision is to drive the future of frontend development with
                innovative, user-centered web experiences. I strive to merge
                creativity and technology to make the web engaging and
                accessible for all."
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <AcademicCapIcon className="h-6 w-6 text-green-400 mr-3" />{' '}
                {/* Mission Icon */}
                <h2 className="text-lg md:text-2xl font-bold">MISSION</h2>
              </div>
              <p className="text-lg md:text-lg">
                "My mission is to create visually stunning and accessible
                websites that are easy to use. By combining design and
                functionality with the latest technology, I strive to make a
                meaningful impact online."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubAbout;
