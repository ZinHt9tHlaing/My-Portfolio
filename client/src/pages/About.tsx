import { skillIcons } from "../assets/icons/SkillIcons";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";

type SkillKey = keyof typeof skillIcons;

const About = () => (
  <PageWrapper pageKey="about">
    <SectionTitle
      title="About Me"
      subtitle="A little bit about my journey and skills."
    />
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2"
      >
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          Hello! I'm a passionate and motivated FullStack developer with a
          strong foundation in modern web technologies. I enjoy solving complex
          problems and building applications that are both functional and
          delightful to use. My journey began with a curiosity for how the web
          works, which quickly evolved into a full-fledged passion for coding.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I'm a quick learner and always eager to take on new challenges. I'm
          looking for a junior developer role where I can contribute to a team,
          grow my skills, and build meaningful products.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6"
      >
        {(Object.keys(skillIcons) as SkillKey[]).map((skill) => (
          <div
            key={skill}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-2">{skillIcons[skill]}</div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              {skill}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </PageWrapper>
);

export default About;
