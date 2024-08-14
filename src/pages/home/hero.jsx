// import React from 'react';
// import { IoMail, IoCall } from 'react-icons/io5';
// import { HiOutlineDownload } from 'react-icons/hi';
// import ruth from '../../assets/images/ruth.jpg';
// import { ReactTyped } from 'react-typed';

// const Hero = () => {
//   return (
//     <div className="bg-secondary text-white p-6 flex justify-center ">
//       <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-[90rem] mx-auto border-l-4 border-r-4 border-b-4 border-primary rounded-b-[50px] relative mb-14 font-poppins-regular">
//         {/* <header className="flex justify-between items-center mb-8">
//           <div className="text-4xl font-bold">RUTH.</div>
//           <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 flex items-center">
//             Hire Me <HiOutlineDownload className="ml-2" />
//           </button>
//         </header> */}
//         <div className="flex flex-col md:flex-row gap-10 mb-16">
//           {/* Profile Image */}
//           <div className="flex-shrink-0 w-full md:w-1/2 relative mb-8 md:mb-0">
//             <img
//               src={ruth}
//               alt="Profile"
//               className="w-[80%] h-[60vh] object-cover rounded-3xl border-2 mx-auto"
//             />

//             <div className="bg-secondary border-primary border-2 text-white w-32 h-32 flex items-center justify-center rounded-full absolute bottom-[-140px] right-[-60px] z-10 hover:animate-spin-slow">
//               <span className="text-2xl text-black font-bold bg-primary px-4 py-7 rounded-full cursor-pointer">
//                 RUTH
//               </span>
//             </div>
//           </div>
//           {/* Text Section */}
//           <div className="flex-1 p-6 text-center md:text-left md:w-1/2 mt-14">
//             <h1 className="text-2xl mb-2 text-primary">
//               Hello, I'm Ruth Nyankum
//             </h1>
//             <div className="text-[3rem] font-bold text-white mb-4 overflow-hidden">
//               <ReactTyped
//                 strings={['FRONTEND DEVELOPER']}
//                 typeSpeed={50}
//                 backSpeed={30}
//                 loop
//                 className="inline-block"
//               />
//             </div>
//             <div className="mb-4 text-[1.1rem]">
//               <p className="flex items-center gap-3 mb-2">
//                 <span>Address:</span> Alhaji-Tabora, Accra-Ghana
//               </p>
//               <p className="flex items-center gap-3 mb-2">
//                 <span>Email:</span>
//                 <a href="mailto:nana.nyankum99@gmail.com" className=" pl-7">
//                   nana.nyankum99@gmail.com
//                 </a>
//               </p>
//               <p className="flex items-center gap-3">
//                 <span>Phone:</span>{' '}
//                 <span className="pl-5">+(233)-541-009-905</span>
//               </p>
//             </div>
//             <p className="my-7 text-[1.1rem]">
//               I collaborate with innovators and experts who aspire to build
//               careers that are both intellectually rewarding and fulfilling for
//               their clients.
//             </p>

//             <button className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-primary flex items-center">
//               <a
//                 href="https://drive.google.com/uc?export=download&id=157klfk2YIq98u4pamM8gg539758ndPbA" // Replace with the actual URL to your CV file
//                 download="Ruth_Nyankum_CV.pdf" // This specifies the name of the downloaded file
//                 className="flex items-center"
//               >
//                 DOWNLOAD CV{' '}
//                 <HiOutlineDownload size={24} className="ml-2 font-bold" />
//               </a>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { IoMail, IoCall } from 'react-icons/io5';
import { HiOutlineDownload } from 'react-icons/hi';
import ruth from '../../assets/images/ruth.jpg';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Hero = () => {
  return (
    <div className="bg-secondary text-white p-6 flex justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-[90rem] mx-auto border-l-4 border-r-4 border-b-4 border-primary rounded-b-[50px] relative mb-14 font-poppins-regular">
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-full md:w-1/2 relative mb-8 md:mb-0">
            <motion.img
              src={ruth}
              alt="Profile"
              className="w-[80%] h-[60vh] object-cover rounded-3xl border-2 mx-auto"
              initial={{ x: -200, opacity: 0 }} // Start off 200px to the left and invisible
              animate={{ x: 0, opacity: 1 }} // Animate to its normal position and fully visible
              transition={{ duration: 1, ease: 'easeOut' }} // Animation duration and easing
            />

            <div className="bg-secondary border-primary border-2 text-white w-32 h-32 flex items-center justify-center rounded-full absolute bottom-[-140px] right-[-60px] z-10 hover:animate-spin-slow">
              <span className="text-2xl text-black font-bold bg-primary px-4 py-7 rounded-full cursor-pointer">
                RUTH
              </span>
            </div>
          </div>
          {/* Text Section */}
          <div className="flex-1 p-6 text-center md:text-left md:w-1/2 mt-14">
            <h1 className="text-2xl mb-2 text-primary">
              Hello, I'm Ruth Nyankum
            </h1>
            <div className="text-[3rem] font-bold text-white mb-4 overflow-hidden">
              <ReactTyped
                strings={['FRONTEND DEVELOPER']}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="inline-block"
              />
            </div>
            <div className="mb-4 text-[1.1rem]">
              <p className="flex items-center gap-3 mb-2">
                <span>Address:</span> Alhaji-Tabora, Accra-Ghana
              </p>
              <p className="flex items-center gap-3 mb-2">
                <span>Email:</span>
                <a href="mailto:nana.nyankum99@gmail.com" className="pl-7">
                  nana.nyankum99@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span>Phone:</span>
                <span className="pl-5">+(233)-541-009-905</span>
              </p>
            </div>
            <p className="my-7 text-[1.1rem]">
              I collaborate with innovators and experts who aspire to build
              careers that are both intellectually rewarding and fulfilling for
              their clients.
            </p>

            <button className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-primary flex items-center">
              <a
                href="https://drive.google.com/uc?export=download&id=157klfk2YIq98u4pamM8gg539758ndPbA" // Replace with the actual URL to your CV file
                download="Ruth_Nyankum_CV.pdf" // This specifies the name of the downloaded file
                className="flex items-center"
              >
                DOWNLOAD CV{' '}
                <HiOutlineDownload size={24} className="ml-2 font-bold" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
