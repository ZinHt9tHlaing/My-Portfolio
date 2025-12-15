import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => (
  <footer className="w-full text-center py-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <p className="text-sm text-gray-500">
      &copy; {new Date().getFullYear()}{" "}
      <span className="text-portfolio-accent">Zin Htet</span>. All rights
      reserved.
    </p>
    <div className="flex justify-center space-x-4 mt-2">
      <a
        href="https://www.linkedin.com/in/zinhtetdev/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-colors duration-200"
      >
        <BsLinkedin size={20} />
      </a>
      <a
        href="https://github.com/ZinHt9tHlaing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-colors duration-200"
      >
        <BsGithub size={20} />
      </a>
    </div>
  </footer>
);

export default Footer;
