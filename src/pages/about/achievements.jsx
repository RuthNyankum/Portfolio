import {
  AcademicCapIcon,
  CodeBracketSquareIcon,
  GiftIcon,
} from '@heroicons/react/24/outline';

const Achievements = () => {
  return (
    <section className="w-full py-12 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Achievement 1 */}
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-white/30">
            <AcademicCapIcon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Completed Web Development Course
            </h3>
            <p className="text-white">
              Built several projects using HTML, CSS, and React, including a
              responsive portfolio site.
            </p>
          </div>

          {/* Achievement 2 */}
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-white/30">
            <CodeBracketSquareIcon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Personal Project: Portfolio Website
            </h3>
            <p className="text-white">
              Developed a personal portfolio to showcase my projects and skills
              using modern web technologies.
            </p>
          </div>

          {/* Achievement 3 */}
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 border border-white/30">
            <GiftIcon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              Open Source Contributions
            </h3>
            <p className="text-white">
              Contributed to front-end projects on GitHub, focusing on improving
              UI components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
