import React from 'react';

const Bio = () => {
  return (
    <div className="bg-gray-900 text-white p-6 flex justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-[90rem]  font-poppins-regular mx-auto ">
        <div className="flex flex-col md:flex-row">
          {/* About Me Section */}
          <div className="flex-1 p-6">
            <div className="flex items-center gap-3 mb-">
              <p className="h-4 w-4 rounded-full fade-in-out bg-primary"></p>
              <h2 className="text-3xl text-white ">About Me</h2>
            </div>
            <p className="mb-4">
              I’m a frontend developer who’s passionate about React and
              JavaScript. I enjoy turning complex ideas into sleek,
              user-friendly web applications.
            </p>

            <p>
              My goal is to create designs that are not only visually appealing
              but also function flawlessly on any device. With my experience in
              React, I build high-performance apps that really make an impact.
            </p>
          </div>
          {/* Let's Work Together Section */}
          <div className="flex-1 p-6">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="mb-4">
              Let’s work together to bring your vision to life! I’m excited to
              collaborate and turn your ideas into stunning, high-performance
              web applications. With my expertise in React and JavaScript, we
              can create user experiences that not only meet but exceed your
              expectations.
            </p>
            <p>
              Let’s combine our efforts to build something exceptional and make
              your project standout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
