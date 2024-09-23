import React from 'react';
import about from '../../assets/images/ab.png';
import { BiLogoCss3, BiLogoHtml5 } from 'react-icons/bi';
import { SiJavascript, SiReact } from 'react-icons/si';

const SubAbout = () => {
  return (
    <section className="w-full h-auto md:h-[40vh] bg-cover bg-center">
      <div className="flex items-center justify-center h-full">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <p className="text-white text-lg mb-6">
              I enjoy transforming complex ideas into sleek, user-friendly web
              applications. My goal is to create designs that are visually
              appealing and function seamlessly across all devices. With my
              experience in React, I build high-performance applications that
              make a significant impact.I’m dedicated to staying up-to-date with
              the latest trends and technologies to deliver cutting-edge
              solutions. My focus is on crafting seamless user experiences that
              engage and delight users. My expertise includes HTML, CSS,
              JavaScript, and React.
            </p>

            <div className="flex gap-5">
              <BiLogoHtml5 className="size-8" />
              <BiLogoCss3 className="size-8" />
              <SiJavascript className="size-8" />
              <SiReact className="size-8" />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center -mt-8">
            {' '}
            {/* Negative margin here */}
            <img src={about} alt="" className="max-w-xs md:max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubAbout;
