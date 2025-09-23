import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { projectData } from "../data/projectData";
import { Briefcase, Github } from "lucide-react";

const Projects = () => (
  <PageWrapper pageKey="projects">
    <SectionTitle
      title="My Projects"
      subtitle="Explore some of my recent work."
    />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectData.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: project.id * 0.1 }}
          className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
        >
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-blue-600 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Github className="mr-2" size={16} /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
              >
                <Briefcase className="mr-2" size={16} /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </PageWrapper>
);

export default Projects;
