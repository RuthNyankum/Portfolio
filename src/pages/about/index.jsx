import React from 'react';
import PagesLayout from '../../components/pagesLayout';
import { HiOutlineDownload } from 'react-icons/hi';
import ruth from '../../assets/images/ruth.jpg';
import { ReactTyped } from 'react-typed';
import SubAbout from './subAbout';
import Aboutmee from './aboutMee';
import ProfessionalSkills from './professionalSkills';
import Education from './education';
import ExperienceTimeline from '../home/experienceTL';
import Achievements from './achievements';
import ConnectSection from '../home/connectSection';
import ContactMe from '../home/contactMe';

const About = () => {
  return (
    <>
      <div className="bg-gray-900 text-white p-6">
        <PagesLayout
          title="HELLO, I'M A FRONTEND DEVELOPER"
          subtitle="MY STORY"
        />

        <div className="bg-secondary text-white p-6 flex justify-center mt-14">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-[90rem] mx-auto border-y-2 border-x-2 border-primary rounded-b-[50px] relative mb-14 font-poppins-regular">
            <header className="flex justify-center flex-col items-center mb-8">
              <div className="flex items-center gap-3 mb-">
                <p className="h-4 w-4 rounded-full fade-in-out bg-primary"></p>
                <h2 className="text-lg text-white ">ABOUT ME</h2>
              </div>

              <div className="text-3xl md:text-4xl font-bold text-primary mb-5 overflow-hidden">
                <ReactTyped
                  strings={['Let work together.']}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                  className="inline-block"
                />
              </div>
            </header>

            <div className="flex flex-col md:flex-row gap-10 mb-16">
              {/* Profile Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 relative mb-8 md:mb-0">
                <img
                  src={ruth}
                  alt="Profile"
                  className="w-[90%] md:w-[80%] h-[50vh] md:h-[65vh] object-cover rounded-3xl border-2 mx-auto"
                />
              </div>
              {/* Text Section */}
              <div className="flex-1 p-6 text-center md:text-left md:w-1/2 mt-14">
                <h1 className="text-xl md:text-2xl text-white">
                  I'M FRONTEND DEVELOPER
                </h1>

                <p className="text-4xl md:text-6xl font-bold text-white">
                  RUTH NYANKUM
                </p>
                <p className="mt-5 mb-2 text-base md:text-lg">
                  I collaborate with innovators and experts who aspire to build
                  careers that are both intellectually rewarding and financially
                  fulfilling for their clients.
                </p>
                <p className="mb-7 text-base md:text-lg">
                  My focus is on creating seamless user experiences that engage
                  and delight users.
                </p>
                <div className="mb-6 text-base md:text-lg">
                  <p className="flex items-center gap-3 mb-2">
                    <span>Address:</span> Alhaji-Tabora, Accra-Ghana
                  </p>
                  <p className="flex items-center gap-3 mb-2">
                    <span>Email:</span>
                    <a
                      href="mailto:nana.nyankum99@gmail.com"
                      className="pl-7 break-all"
                    >
                      nana.nyankum99@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span>Phone:</span>{' '}
                    <span className="pl-5">+(233)-541-009-905</span>
                  </p>
                </div>

                <button className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-primary flex items-center">
                  <a
                    href="https://drive.google.com/uc?export=download&id=157klfk2YIq98u4pamM8gg539758ndPbA"
                    download="Ruth_Nyankum_CV.pdf"
                    className="flex items-center"
                  >
                    DOWNLOAD CV{' '}
                    <HiOutlineDownload size={24} className="ml-2 font-bold" />
                  </a>
                </button>
              </div>
            </div>
            <SubAbout />
            <hr />
            <ProfessionalSkills />
            <hr />
            <Education />
            <hr />
            <ExperienceTimeline />
            <hr />
            <Achievements />
          </div>
        </div>
      </div>
      <ConnectSection />
      <ContactMe />
    </>
  );
};

export default About;
