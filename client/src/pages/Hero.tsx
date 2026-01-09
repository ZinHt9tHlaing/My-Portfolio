import { Download, Github } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => (
  <PageWrapper pageKey="home">
    <div className="text-center pb-16 pt-7 md:pt-0 md:pb-24">
      {/* Animated Profile Photo */}
      <motion.img
        src="/images/profile.jpg"
        alt="Profile Photo"
        loading="lazy"
        decoding="async"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-gray-300 dark:border-gray-700 object-cover"
      />
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
        <Typewriter
          words={[
            "Hi, I'm a Full-Stack Developer.",
            "ReactJS & NodeJS Lover",
            "I build web applications for a living.",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-3xl mx-auto text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-12 px-4"
      >
        I specialize in building elegant and scalable full-stack applications
        with React, Node.js, Express.js and MongoDB . I'm passionate about
        creating responsive and user-friendly web experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 px-4"
      >
        <a
          href="/images/ZHH_Resume.pdf"
          download="ZHH_Resume.pdf"
          className="w-full sm:w-auto"
        >
          <button className="w-[60%] mx-auto sm:mx-0 sm:w-auto flex items-center justify-center px-4 xs:px-5 md:px-6 lg:px-8 py-2 xs:py-2.5 md:py-3 rounded-full text-sm xs:text-base md:text-lg font-semibold bg-blue-600 border-2 border-blue-500 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg active:scale-95">
            <Download className="mr-2 size-4 md:h-5 md:w-5" /> Download CV
          </button>
        </a>
        <a
          href="https://github.com/ZinHt9tHlaing"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="w-[60%] mx-auto sm:mx-0 sm:w-auto flex items-center justify-center px-4 xs:px-5 md:px-6 lg:px-8 py-2 xs:py-2.5 md:py-3 rounded-full text-sm xs:text-base md:text-lg font-semibold border-2 border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 active:scale-95">
            <Github className="mr-2 size-4 md:h-5 md:w-5" /> GitHub
          </button>
        </a>
      </motion.div>
    </div>
  </PageWrapper>
);

export default Hero;
