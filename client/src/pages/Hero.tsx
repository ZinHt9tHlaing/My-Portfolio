import { Briefcase, Github } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

interface HeroProps {
  handlePageChange: (page: string) => void;
}

const Hero = ({ handlePageChange }: HeroProps) => (
  <PageWrapper pageKey="home">
    <div className="text-center py-16 md:py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4"
      >
        Hi, I'm <span className="text-blue-500">Zin Htet</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg sm:text-2xl text-gray-600 dark:text-gray-400 mb-8"
      >
        MERN Stack Developer
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-12"
      >
        I specialize in building elegant and scalable full-stack applications
        with MongoDB, Express.js, React, and Node.js. I'm passionate about
        creating responsive and user-friendly web experiences.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center space-x-4 md:space-x-6"
      >
        <button
          onClick={() => handlePageChange("projects")}
          className="flex items-center px-6 py-3 rounded-full text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 shadow-lg"
        >
          <Briefcase className="mr-2" /> View My Work
        </button>
        <a
          href="https://github.com/ZinHt9tHlaing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-3 rounded-full text-lg font-semibold border-2 border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors duration-300 active:scale-95"
        >
          <Github className="mr-2" /> GitHub
        </a>
      </motion.div>
    </div>
  </PageWrapper>
);

export default Hero;
