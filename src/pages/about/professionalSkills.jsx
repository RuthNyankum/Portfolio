import React from 'react';

const ProfessionalSkills = () => {
  const skills = [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 85 },
    { name: 'Databases', level: 70 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row">
        {/* Professional Skills Text Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
          <h2 className="text-4xl font-bold mb-4">Professional Skill</h2>
          <p className="text-lg mb-4">
            As a frontend developer, I use HTML5, CSS3, JavaScript, and React to
            craft visually appealing and functional web apps. By leveraging
            frameworks and Tailwind CSS, I build user-friendly experiences that
            look great on any device. My focus is on optimizing performance and
            ensuring that my sites are accessible to everyone.
          </p>
          <p className="text-lg">
            I’m enhancing my problem-solving and debugging skills while
            improving API integration and cross-browser compatibility. My focus
            on UX/UI design drives me to create intuitive and engaging
            interfaces. I prioritize clear communication and am committed to
            continuously learning and adapting to deliver exceptional results in
            every project.
          </p>
        </div>

        {/* Skills Progress Bars Section */}
        <div className="w-full md:w-1/2 px-4">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-lg font-medium">{skill.level}%</span>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
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
