// import React from 'react';
// import hero from '../../assets/images/doc1.jpg';

// const pageSections = [
//   {
//     id: 1,
//     backgroundImage: hero,
//     title: "HELLO, I'M A PROFESSIONAL PROGRAMMER",
//     subtitle: 'MY STORY',
//     height: 'h-[30vh]',
//   },
//   // Add more section objects if needed
// ];

// const PagesLayout = () => {
//   return (
//     <div>
//       {pageSections.map((section) => (
//         <section
//           key={section.id}
//           className={`relative w-full ${section.height} bg-cover bg-center`}
//           style={{ backgroundImage: `url(${section.backgroundImage})` }}
//         >
//           <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
//             <div className="text-center text-white">
//               <h1 className="text-xl md:text-2xl">{section.title}</h1>
//               <p className="text-3xl md:text-5xl font-bold mb-4">
//                 {section.subtitle}
//               </p>
//             </div>
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default PagesLayout;

import React from 'react';
import ruth from '../assets/images/Ruth.jpg';

const PagesLayout = ({ title, subtitle }) => {
  return (
    <div
      className="relative w-full h-[30vh] bg-cover bg-center "
      style={{ backgroundImage: `url(${ruth})` }}
    >
      <div className="flex flex-col gap-y-5 items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-xl md:text-2xl text-primary">{title}</h1>
        <p className="text-4xl md:text-5xl font-bold mb-4 text-white">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PagesLayout;
