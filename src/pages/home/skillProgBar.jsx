import React, { useEffect } from 'react';

const SkillProgressBar = ({ skill, percentage }) => {
  useEffect(() => {
    const circle = document.getElementById(`circle-${skill}`);
    let current = 0;
    const end = percentage;
    const increment = end > current ? 1 : -1;
    const timer = setInterval(() => {
      current += increment;
      circle.style.background = `conic-gradient(#00e0ff ${current}%, transparent ${current}% 100%)`;
      if (current === end) clearInterval(timer);
    }, 10);
  }, [skill, percentage]);

  return (
    <div className="flex flex-col items-center w-1/4">
      <div
        id={`circle-${skill}`}
        className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-b from-cyan-400 to-transparent"
        style={{
          background: `conic-gradient(#00e0ff ${percentage}%, transparent ${percentage}% 100%)`,
        }}
      ></div>
      <div className="mt-4 text-center text-cyan-400">
        <p className="text-lg md:text-xl">{percentage}%</p>
        <p className="text-base md:text-lg">{skill}</p>
      </div>
    </div>
  );
};

export default SkillProgressBar;
