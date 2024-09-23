import React from 'react';
import SkillsContainer from './skillsContainer';
import ProfessionalSkills from './professionalSkills';
import ExperienceTimeline from './experienceTL';
import MyService from './myServices';

const Skills = () => {
  return (
    <div className="bg-secondary text-white p-6 ">
      <div className="shadow-lg w-full max-w-[90rem] mx-auto bg-gray-800 p-6 rounded-lg border-y-2 border-x-2 border-primary rounded-b-[50px] relative mb-14 font-poppins-regular">
        <div className="flex flex-col md:flex-row justify-center md:justify-between">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <SkillsContainer />
          </div>
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <ProfessionalSkills />
          </div>
        </div>

        <div className="mt-6">
          <ExperienceTimeline />
        </div>
        <div>
          <MyService />
        </div>
      </div>
    </div>
  );
};

export default Skills;
