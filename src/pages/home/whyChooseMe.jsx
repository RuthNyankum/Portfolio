import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';
import { IoThumbsUp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const WhyChooseMe = () => {
  return (
    <div className="bg-gray-900 text-white p-6 flex justify-center poppins-regular'">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-[90rem] mx-auto border-4 border-primary flex">
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Choose Me</h2>
            <p className="mb-4 text-lg">
              I bring a solid understanding of React and JavaScript to the
              table, which means I can build interactive and scalable
              applications that deliver a great user experience. I focus on
              creating designs that are intuitive and engaging, ensuring your
              project stands out.
            </p>
          </div>

          <div className="text-center mt-8">
            <h2 className="text-3xl font-bold mb-4">
              Create New Opportunities with Me
            </h2>
            <p className="mb-4 text-lg">
              I’m dedicated to getting every detail right and believe in clear,
              open communication throughout the development process. By
              collaborating closely with you, I make sure your vision comes to
              life and your project goals are achieved.
            </p>
            <p className="mb-4 text-lg">
              Let’s create new opportunities together! I bring a fresh
              perspective and a hands-on approach to frontend development with
              React and JavaScript. By working with me, you’ll tap into
              innovative solutions and dynamic applications that really make an
              impact. I’m excited to explore new ideas and push boundaries with
              you, ensuring your project stands out and achieves its goals.
            </p>

            <Link
              to="/contact-me"
              className="px-6 py-2 text-black bg-white rounded hover:bg-primary flex items-center mx-auto w-36 text-center"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="grid grid-rows-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg text-center my-24">
            <FaLightbulb className="text-primary text-6xl mb-2 mx-auto" />
            <p className="text-lg">
              "Ready to create exceptional experiences."
            </p>
          </div>

          <div>
            {' '}
            <div className="bg-gray-700 p-4 rounded-lg text-center mb-4">
              <IoThumbsUp className="text-primary text-6xl mb-2 mx-auto" />
              <p className="text-lg">
                Committed to delivering outstanding results and ensuring client
                satisfaction.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <FiTarget className="text-primary text-6xl mb-2 mx-auto" />
              <p className="text-lg">
                Driven to achieve exceptional results with every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseMe;
