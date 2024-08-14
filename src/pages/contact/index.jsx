import React from 'react';
import PagesLayout from '../../components/pagesLayout';
import ContactMe from '../home/contactMe';
import ConnectSection from '../home/connectSection';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white p-6">
      <PagesLayout title="HOW CAN I ASSIST YOU" subtitle="CONTACT ME" />
      <ContactMe />
      <ConnectSection />
      <div className="mb-14"></div>
    </div>
  );
};

export default Contact;
