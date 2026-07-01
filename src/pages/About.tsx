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
          I am a motivated FullStack Developer with a strong foundation in both
          frontend and backend technologies. During my 3-month internship as a
          Frontend Developer, I built mobile-responsive applications using
          <strong> React</strong>, <strong>TypeScript</strong>,
          <strong> Tailwind CSS</strong>, and <strong>TanStack Query</strong>.
          Currently, my primary focus is on building robust APIs and scalable
          backend systems using <strong>Node.js</strong>, <strong>Express.js</strong>,
          <strong>PostgreSQL</strong>, and <strong>Prisma</strong>.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          I enjoy building real-world projects, continuously improving my
          technical skills, and learning modern web technologies. My goal is to
          become a well-rounded Web developer who can build scalable,
          user-friendly, and efficient web applications while contributing
          positively to a collaborative development team.
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
