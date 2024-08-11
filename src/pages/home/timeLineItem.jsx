import React from 'react';

const TimelineItem = ({ isLeft }) => {
  return (
    <div
      className={`flex ${
        isLeft ? 'flex-row-reverse' : 'flex-row'
      } items-center`}
    >
      <div className="flex-shrink-0 bg-cyan-400 w-4 h-4 rounded-full"></div>
      <div
        className={`bg-gray-900 p-6 rounded-lg shadow-lg w-[80%] ${
          isLeft ? 'ml-8' : 'mr-8'
        }`}
      ></div>
    </div>
  );
};

export default TimelineItem;
