import React from 'react';
import SkillProgressBar from '../home/skillProgBar';

const skillsData = [
  { skill: 'HTML', percentage: 85 },
  { skill: 'CSS', percentage: 85 },
  { skill: 'JavaScript', percentage: 70 },
  { skill: 'React', percentage: 85 },
];

const SkillsContainer = () => {
  return (
    <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg my-7 w-full max-w-5xl mx-auto font-poppins-regular">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
        {skillsData.map((skill) => (
          <SkillProgressBar
            key={skill.skill}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
