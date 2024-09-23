import React from 'react';

const ProfessionalSkills = () => {
  const skills = [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 85 },
    { name: 'Figma', level: 70 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-6">
        {/* Professional Skills Text Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        </div>

        {/* Skills Progress Bars Section */}
        <div className="flex flex-col">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-lg font-medium">{skill.level}%</span>
              </div>
              <div className="relative pt-1">
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkills;
