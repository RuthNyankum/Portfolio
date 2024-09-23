import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const ConnectSection = () => {
  return (
    <div className="bg-gray-900 p-4 shadow-lg font-poppins-regular">
      <div className="max-w-[80rem] mx-auto rounded-3xl text-center">
        <p className="text-gray-400 text-lg">
          Feel free to reach out if you're looking for a great website or just
          want to connect!
        </p>

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
        <p className="mt-2">Ruth Nyankum</p>
      </div>
    </div>
  );
};

export default ConnectSection;
