import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import vid from '../../assets/video/tech.mp4';
import { BsTwitterX } from 'react-icons/bs';

const ConnectSection = () => {
  return (
    <div className="bg-gray-900 p-8 shadow-lg font-poppins-regular">
      <div className="border-4 border-primary max-w-[80rem] mx-auto py-24 rounded-3xl">
        <div className="text-center mb-4">
          <div className="w-32 h-24 mx-auto mb-7">
            <video
              src={vid}
              className="w-full h-full object-cover rounded"
              autoPlay
              loop
              muted
            />
          </div>
          <h2 className="text-3xl text-primary font-bold">
            Glad to start a project with you.
          </h2>
          <p className="text-gray-400 mt-2 text-lg">
            Feel free to reach out if you're looking for a great website or just
            want to connect!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <a
              href="https://x.com/ruth_nanarain"
              className="text-cyan-400 hover:text-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX className="w-6 h-6" />
            </a>
            <span className="text-white">Twitter</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/RuthNyankum"
              className="text-cyan-400 hover:text-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <span className="text-white">Github</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/ruthnyankum/"
              className="text-cyan-400 hover:text-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <span className="text-white">LinkedIn</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://telegram.org"
              className="text-cyan-400 hover:text-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="w-6 h-6" />
            </a>
            <span className="text-white">Telegram</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
