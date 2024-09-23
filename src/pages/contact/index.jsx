import React from 'react';
import ContactMe from './contactMe';
import ConnectSection from './connectSection';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white p-6">
      <h1 className="text-center text-4xl md:text-3xl font-bold mb-4 text-white">
        CONTACT ME
      </h1>
      <ContactMe />
      <ConnectSection />
      <div className="mb-14"></div>
    </div>
  );
};

export default Contact;
