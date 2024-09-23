import React from 'react';
import SkillProgressBar from './skillProgBar';

const skillsData = [
  { skill: 'Adaptability', percentage: 85 },
  { skill: 'Communication', percentage: 65 },
  { skill: 'Atention to detail', percentage: 85 },
  { skill: 'Team collaboration', percentage: 75 },
];

const SkillsContainer = () => {
  return (
    <div className=" p-6 md:p-8 rounded-lg my-7 w-full max-w-5xl mx-auto font-poppins-regular">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Professional Skills</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
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
