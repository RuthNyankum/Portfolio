import React from 'react';
import abstract from '../assets/images/abs.jpeg';

const PagesLayout = ({ title, subtitle }) => {
  return (
    <div
      className="relative w-full h-[30vh] bg-cover bg-center "
      style={{ backgroundImage: `url(${abstract})` }}
    >
      <div className="flex flex-col gap-y-5 items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-xl md:text-2xl text-primary">{title}</h1>
        <p className="text-4xl md:text-5xl font-bold mb-4 text-white">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PagesLayout;
