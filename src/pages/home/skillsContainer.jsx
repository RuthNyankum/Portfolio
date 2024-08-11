import React from 'react';
import SkillProgressBar from './skillProgBar';

const skillsData = [
  { skill: 'HTML', percentage: 85 },
  { skill: 'CSS', percentage: 85 },
  { skill: 'JavaScript', percentage: 70 },
  { skill: 'React', percentage: 85 },
];

const SkillsContainer = () => {
  return (
    <div className="flex gap-5 bg-gray-800 p-8 rounded-lg shadow-lg my-7 w-[80rem] justify-center font-poppins-regular">
      {skillsData.map((skill) => (
        <SkillProgressBar
          key={skill.skill}
          skill={skill.skill}
          percentage={skill.percentage}
        />
      ))}
    </div>
  );
};

export default SkillsContainer;
