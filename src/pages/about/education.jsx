// import React from 'react';

// const Education = () => {
//   const education = [
//     {
//       degree: 'Web Development',
//       institution: 'MEST Accra, Ghana',
//       year: 'May 2024 - August 2024',
//       description: 'Focused on Frontend Development',
//     },
//     {
//       degree: 'BSc. Disability and Rehabilitation Studies',
//       institution:
//         'Kwame Nkrumah University of Science and Technology, Kumasi, Ghana',
//       year: 'September 2016 - June 2020',
//       description: 'Emphasized Disabilty studies with research work ',
//     },
//   ];

//   return (
//     <section className="w-full py-12">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
//         <div className="relative">
//           {education.map((edu, index) => (
//             <div key={index} className="mb-8">
//               <div className="flex items-center">
//                 <div className="h-4 w-4 bg-primary rounded-full"></div>
//                 <div className="flex-1 ml-4">
//                   <div className="flex justify-between">
//                     <h3 className="text-xl font-semibold">{edu.degree}</h3>
//                     <span className="text-white">{edu.year}</span>
//                   </div>
//                   <p className="text-lg text-white">{edu.institution}</p>
//                   <p className="mt-2 text-white">{edu.description}</p>
//                 </div>
//               </div>
//               {index < education.length - 1 && (
//                 <div className="absolute left-2 top-4 bottom-4 w-1 bg-primary"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;

import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Web Development',
      institution: 'MEST Accra, Ghana',
      year: 'May 2024 - August 2024',
      description: 'Focused on Frontend Development',
    },
    {
      degree: 'BSc. Disability and Rehabilitation Studies',
      institution:
        'Kwame Nkrumah University of Science and Technology, Kumasi, Ghana',
      year: 'September 2016 - June 2020',
      description: 'Emphasized Disability studies with research work',
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Education
        </h2>
        <div className="relative">
          {education.map((edu, index) => (
            <div key={index} className="mb-8 sm:mb-12 flex relative">
              {/* Circle and Line */}
              <div className="flex flex-col items-center mr-4 sm:mr-6">
                <div className="h-4 w-4 bg-primary rounded-full"></div>
                <div
                  className={`${
                    index < education.length - 1 ? 'flex-1' : 'h-8'
                  } w-0.5 sm:w-1 bg-primary`}
                ></div>
              </div>

              {/* Education Content */}
              <div className="flex-1">
                <div className="flex justify-between flex-col sm:flex-row">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {edu.degree}
                  </h3>
                  <span className="text-sm sm:text-base text-white mt-1 sm:mt-0">
                    {edu.year}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-white">
                  {edu.institution}
                </p>
                <p className="mt-2 text-sm sm:text-base text-white">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
