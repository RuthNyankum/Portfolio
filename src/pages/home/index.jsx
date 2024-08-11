import React from 'react';
import Hero from './hero';
import AboutMe from './about';
import SkillsContainer from './skillsContainer';
import ExperienceTimeline from './experienceTL';
import MyService from './myServices';
import ConnectSection from './connectSection';
import ContactMe from './contactMe';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />

      <div className="flex justify-center min-h-auto bg-gray-900">
        <SkillsContainer />
      </div>

      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <ExperienceTimeline />
      </div>

      <MyService />

      <div className="bg-gray-900">
        <ConnectSection />
      </div>

      <div className="bg-gray-900">
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
