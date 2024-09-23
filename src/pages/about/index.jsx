import React from 'react';
import SubAbout from './subAbout';
import Education from './education';

const About = () => {
  return (
    <div className="p-6 flex justify-center ">
      <div className="p-6 rounded-lg shadow-lg w-full max-w-[90rem] mx-auto  relative font-poppins-regular">
        <header className="flex justify-center flex-col items-center">
          <div className="flex items-center gap-3 mb-">
            <p className="h-5 w-5 rounded-full fade-in-out bg-primary"></p>
            <h2 className="text-2xl text-white font-bold">ABOUT ME</h2>
          </div>
        </header>

        <SubAbout />

        <Education />
      </div>
    </div>
  );
};

export default About;
