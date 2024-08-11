// // import React, { useState } from 'react';
// // import Select from 'react-select';
// // import countryList from 'react-select-country-list';
// // import { ReactTyped } from 'react-typed';

// // const ContactMe = () => {
// //   const [country, setCountry] = useState(null);
// //   const options = countryList().getData();

// //   const handleCountryChange = (value) => {
// //     setCountry(value);
// //   };

// //   return (
// //     <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-10 font-poppins-regular gap-10">
// //       {/* Text Section */}
// //       <div className="flex flex-col justify-center items-start w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
// //         <h2 className="text-xl text-white font-bold mb-3">GET IN TOUCH</h2>
// //         <div className="text-primary text-5xl mt-2">
// //           <ReactTyped
// //             strings={['Got a project in mind? I’d love to get involved!']}
// //             typeSpeed={50}
// //             backSpeed={30}
// //             loop
// //           />
// //         </div>
// //         <p className="text-gray-400 mt-2">
// //           Feel free to ask any questions, and I’ll guide you in finding the best
// //           service to meet your needs.
// //         </p>
// //         <p className="text-cyan-400 mb-36">
// //           Send Email: nana.nyankum99@gmail.com
// //         </p>
// //       </div>

// //       {/* Form Section */}
// //       <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 my-8 border-primary border-2">
// //         <div className="mb-4">
// //           <label className="block text-gray-400">Full Name</label>
// //           <input
// //             className="w-full p-2 mt-2 bg-white text-black rounded"
// //             type="text"
// //             placeholder="Ruth Snow"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-400">Email</label>
// //           <input
// //             className="w-full p-2 mt-2 bg-white text-black rounded"
// //             type="email"
// //             placeholder="ruthsnow@gmail.com"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-400">Phone Number</label>
// //           <input
// //             className="w-full p-2 mt-2 bg-white text-black rounded"
// //             type="text"
// //             placeholder="+123456789"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-400">Select Country</label>
// //           <Select
// //             options={options}
// //             value={country}
// //             onChange={handleCountryChange}
// //             className="w-full p-2 mt-2 bg-white text-black rounded"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-gray-400">Message</label>
// //           <textarea
// //             className="w-full p-2 mt-2 bg-white text-black rounded"
// //             rows="4"
// //             placeholder="e.g.: I would like you to design my company's website."
// //           ></textarea>
// //         </div>
// //         <div className="flex items-center mb-4">
// //           <input type="checkbox" className="mr-2" />
// //           <label className="text-gray-400">
// //             I have read and accepted the privacy policy
// //           </label>
// //         </div>
// //         <button className="w-full p-2 bg-cyan-400 text-gray-900 rounded font-bold">
// //           Send us a message
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ContactMe;

// import React, { useState } from 'react';
// import Select from 'react-select';
// import countryList from 'react-select-country-list';
// import ReactTyped from 'react-typed';

// const ContactMe = () => {
//   const [country, setCountry] = useState(null);
//   const options = countryList().getData();

//   const handleCountryChange = (value) => {
//     setCountry(value);
//   };

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-10 font-poppins-regular gap-10">
//       {/* Text Section */}
//       <div className="flex flex-col justify-center items-start w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
//         <h2 className="text-xl text-white font-bold mb-3">GET IN TOUCH</h2>
//         <div className="text-primary text-5xl mt-2 overflow-hidden">
//           <ReactTyped
//             strings={['Got a project in mind? I’d love to get involved!']}
//             typeSpeed={50}
//             backSpeed={30}
//             loop
//             className="inline-block"
//           />
//         </div>

//         <p className="text-gray-400 mt-2">
//           Feel free to ask any questions, and I’ll guide you in finding the best
//           service to meet your needs.
//         </p>
//         <p className="text-cyan-400 mb-36">
//           Send Email: nana.nyankum99@gmail.com
//         </p>
//       </div>

//       {/* Form Section */}
//       <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 my-8 border-primary border-2">
//         <div className="mb-4">
//           <label className="block text-gray-400">Full Name</label>
//           <input
//             className="w-full p-2 mt-2 bg-white text-black rounded"
//             type="text"
//             placeholder="Ruth Snow"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-400">Email</label>
//           <input
//             className="w-full p-2 mt-2 bg-white text-black rounded"
//             type="email"
//             placeholder="ruthsnow@gmail.com"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-400">Phone Number</label>
//           <input
//             className="w-full p-2 mt-2 bg-white text-black rounded"
//             type="text"
//             placeholder="+123456789"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-400">Select Country</label>
//           <Select
//             options={options}
//             value={country}
//             onChange={handleCountryChange}
//             className="w-full mt-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-400">Message</label>
//           <textarea
//             className="w-full p-2 mt-2 bg-white text-black rounded"
//             rows="4"
//             placeholder="e.g.: I would like you to design my company's website."
//           ></textarea>
//         </div>
//         <div className="flex items-center mb-4">
//           <input type="checkbox" className="mr-2" />
//           <label className="text-gray-400">
//             I have read and accepted the privacy policy
//           </label>
//         </div>
//         <button className="w-full p-2 bg-cyan-400 text-gray-900 rounded font-bold">
//           Send us a message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactMe;

// import { React, useState } from 'react';
// import '../../../src/index.css';
// import { ReactTyped } from 'react-typed';
// import Select from 'react-select';
// import countryList from 'react-select-country-list';

// const ContactMe = () => {
//   const [country, setCountry] = useState(null);
//   const options = countryList().getData();

//   const handleCountryChange = (value) => {
//     setCountry(value);
//   };

//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-10 font-poppins-regular gap-10">
//       {/* Text Section */}
//       <div className="flex flex-col justify-center items-start w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
//         <div className="flex items-center gap-3">
//           <p className="h-4 w-4 rounded-full fade-in-out bg-primary"></p>
//           <h2 className="text-xl text-white font-bold">GET IN TOUCH</h2>
//         </div>

//         <div className="text-primary text-5xl mt-2 overflow-hidden">
//           <ReactTyped
//             strings={['Got a project in mind? I’d love to get involved!']}
//             typeSpeed={50}
//             backSpeed={30}
//             loop
//             className="inline-block"
//           />
//         </div>
//         <p className="text-gray-400 mt-2">
//           Feel free to ask any questions, and I’ll guide you in finding the best
//           service to meet your needs.
//         </p>
//         <p className="text-cyan-400 mb-36">
//           Send Email: nana.nyankum99@gmail.com
//         </p>
//       </div>

//       {/* Form Section */}
//       <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 my-8 border-primary border-2">
//         <div className="mb-4">
//           <label className="block text-gray-400">Full Name</label>
//           <input
//             className="w-full p-2 mt-2 bg-white text-black rounded"
//             type="text"
//             placeholder="Ruth Snow"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-400">Email</label>
//           <input
//             className="w-full p-2 mt-2 bg-white text-black rounded"
//             type="email"
//             placeholder="ruthsnow@gmail.com"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-400">Phone Number</label>
//           <input
//             className="w-full p-2 mt-2 bg-white text-black rounded"
//             type="text"
//             placeholder="+123456789"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-400">Select Country</label>
//           <Select
//             options={options}
//             value={country}
//             onChange={handleCountryChange}
//             className="w-full p-2 mt-2 bg-white text-black rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-400">Message</label>
//           <textarea
//             className="w-full p-2 mt-2 bg-white text-black rounded"
//             rows="4"
//             placeholder="e.g.: I would like you to design my company's website."
//           ></textarea>
//         </div>
//         <div className="flex items-center mb-4">
//           <input type="checkbox" className="mr-2" />
//           <label className="text-gray-400">
//             I have read and accepted the privacy policy
//           </label>
//         </div>
//         <button className="w-full p-2 bg-cyan-400 text-gray-900 rounded font-bold">
//           Send us a message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactMe;

import React, { useState } from 'react';
import '../../../src/index.css';
import { ReactTyped } from 'react-typed';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const ContactMe = () => {
  const [country, setCountry] = useState(null);
  const options = countryList().getData();

  const handleCountryChange = (value) => {
    setCountry(value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-10 font-poppins-regular gap-10">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
        <div className="flex items-center gap-3">
          <p className="h-4 w-4 rounded-full fade-in-out bg-primary"></p>
          <h2 className="text-xl text-white ">GET IN TOUCH</h2>
        </div>

        <div className="relative w-full text-primary mt-2 ">
          <div className="text-primary font-bold text-2xl mt-2 overflow-hidden">
            <ReactTyped
              strings={['Got a project in mind? I’d love to get involved!']}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="inline-block "
            />
          </div>
        </div>

        <p className="text-gray-400 mt-2">
          Feel free to ask any questions, and I’ll guide you in finding the best
          service to meet your needs.
        </p>
        <p className="text-cyan-400 mb-36">
          Send Email: nana.nyankum99@gmail.com
        </p>
      </div>

      {/* Form Section */}
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 mt-10 mb-20 border-primary border-2">
        <div className="mb-4">
          <label className="block text-gray-400">Full Name</label>
          <input
            className="w-full p-2 mt-2 bg-white text-black rounded"
            type="text"
            placeholder="Ruth Snow"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Email</label>
          <input
            className="w-full p-2 mt-2 bg-white text-black rounded"
            type="email"
            placeholder="ruthsnow@gmail.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Phone Number</label>
          <input
            className="w-full p-2 mt-2 bg-white text-black rounded"
            type="text"
            placeholder="+123456789"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Select Country</label>
          <Select
            options={options}
            value={country}
            onChange={handleCountryChange}
            className="w-full p-2 mt-2 bg-white text-black rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400">Message</label>
          <textarea
            className="w-full p-2 mt-2 bg-white text-black rounded"
            rows="4"
            placeholder="e.g.: I would like you to design my company's website."
          ></textarea>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-400">
            I have read and accepted the privacy policy
          </label>
        </div>
        <button className="w-full p-2 bg-cyan-400 text-gray-900 rounded font-bold">
          Send us a message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
