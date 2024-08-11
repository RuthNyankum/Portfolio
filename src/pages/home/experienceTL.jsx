// src/components/ExperienceTimeline.js
import React from 'react';
import TimelineItem from './timeLineItem';

const experienceData = [
  {
    period: 'May 2024',
    title: 'MEST',
    description:
      'Starting in May 2024 at MEST, I embarked on my coding journey diving into HTML and CSS. I worked on various projects that deepened my understanding of key web technologies and design principles. This period was dedicated to laying a solid foundation—enhancing my skills in building dynamic web applications and gaining valuable experience in teamwork.',
  },
  {
    period: 'May 2024',
    title: 'MEST',
    description:
      'I expanded my skills by diving deep into HTML, CSS, and JavaScript. I took on projects that pushed me to create interactive and user-friendly web experiences. This phase was crucial for me, as it really shaped my abilities and understanding of front-end development.',
  },
  {
    period: 'May 2024',
    title: 'MEST',
    description:
      'During my internship with CourExtrem, I tackled challenging, hands-on projects that pushed me to dive into more complex programming concepts. This experience was invaluable, as it involved real-world applications that sharpened my problem-solving skills and deepened my understanding of front-end development. I designed user profiles and a code upload feature for an open-source project(using React and JavaScript), which further enhanced my practical skills and experience.',
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 bg-gray-800 rounded-lg shadow-lg my-7 font-poppins-regular">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-cyan-400 font-bold">
          Work Experience in this field.
        </h2>
        {/* <p className="text-gray-400 mt-2">
          Building applications and Processes is the latest in my skills as a
          professional programmer
        </p> */}
      </div>
      <div className="relative flex flex-col items-center">
        {experienceData.map((item, index) => (
          <div
            className={`flex ${
              index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
            } items-center mb-8`}
            key={index}
          >
            <TimelineItem isLeft={index % 2 === 0} />
            <div
              className={`bg-gray-900 p-6 rounded-lg shadow-lg w-[80%] ${
                index % 2 === 0 ? 'ml-8' : 'mr-8'
              } ${index === 1 ? 'ml-auto' : ''}`}
            >
              <p className="text-cyan-400 font-semibold">{item.period}</p>
              <h3 className="text-xl md:text-2xl text-white font-bold">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
