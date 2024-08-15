import React, { useState } from 'react';
import '../../../src/index.css';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const ContactMe = () => {
  const [country, setCountry] = useState(null);
  const options = countryList().getData();

  const handleCountryChange = (value) => {
    setCountry(value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-10 font-poppins-regular gap-10 bg-gray-900">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
        <div className="flex items-center gap-3">
          <p className="h-4 w-4 rounded-full fade-in-out bg-primary"></p>
          <h2 className="text-lg md:text-xl lg:text-2xl text-white">
            GET IN TOUCH
          </h2>
        </div>

        <h1 className="text-primary font-bold text-xl md:text-2xl lg:text-3xl mt-4">
          Got a project in mind? I’d love to get involved!
        </h1>

        <p className="text-gray-400 mt-2 text-sm md:text-base lg:text-lg">
          Feel free to ask any questions, and I’ll guide you in finding the best
          service to meet your needs.
        </p>

        <p className="flex flex-col md:flex-row items-start mt-4">
          <span className="text-white">Send Email:</span>
          <a
            href="mailto:nana.nyankum99@gmail.com"
            className="pl-2 text-cyan-400 mt-1 md:mt-0"
          >
            nana.nyankum99@gmail.com
          </a>
        </p>
      </div>

      {/* Form Section */}
      <form className="bg-gray-800 p-8 md:p-10 lg:p-12 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 mt-10 mb-20 border-primary border-2">
        <div className="mb-4">
          <label className="block text-gray-400 text-sm md:text-base lg:text-lg">
            Full Name
          </label>
          <input
            className="w-full p-2 mt-2 bg-white text-black rounded"
            type="text"
            placeholder="Ruth Snow"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm md:text-base lg:text-lg">
            Email
          </label>
          <input
            className="w-full p-2 mt-2 bg-white text-black rounded"
            type="email"
            placeholder="ruthsnow@gmail.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm md:text-base lg:text-lg">
            Phone Number
          </label>
          <input
            className="w-full p-2 mt-2 bg-white text-black rounded"
            type="text"
            placeholder="+123456789"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm md:text-base lg:text-lg">
            Select Country
          </label>
          <Select
            options={options}
            value={country}
            onChange={handleCountryChange}
            className="w-full mt-2"
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: 'white',
                color: 'black',
              }),
              option: (provided) => ({
                ...provided,
                color: 'black',
              }),
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm md:text-base lg:text-lg">
            Message
          </label>
          <textarea
            className="w-full p-2 mt-2 bg-white text-black rounded"
            rows="4"
            placeholder="e.g.: I would like you to design my company's website."
          ></textarea>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-400 text-sm md:text-base lg:text-lg">
            I have read and accepted the privacy policy
          </label>
        </div>
        <button className="w-full p-2 bg-cyan-400 text-gray-900 rounded font-bold text-sm md:text-base lg:text-lg">
          Send me a message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
