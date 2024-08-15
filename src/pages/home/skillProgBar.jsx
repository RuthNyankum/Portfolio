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
    <div className="flex flex-col items-center w-full max-w-xs md:w-1/4">
      <div
        id={`circle-${skill}`}
        className="relative w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-b from-cyan-400 to-transparent"
        style={{
          background: `conic-gradient(#00e0ff ${percentage}%, transparent ${percentage}% 100%)`,
        }}
      ></div>
      <div className="mt-3 text-center text-cyan-400">
        <p className="text-sm md:text-base">{percentage}%</p>
        <p className="text-xs md:text-sm">{skill}</p>
      </div>
    </div>
  );
};

export default SkillProgressBar;
