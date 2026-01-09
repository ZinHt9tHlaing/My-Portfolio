import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCss3, SiExpress, SiMongodb, SiPrisma } from "react-icons/si";

export const skillIcons = {
  HTML: <FaHtml5 className="text-orange-600" />,
  CSS: <SiCss3 className="text-blue-700" />,
  "Tailwind CSS": <RiTailwindCssFill className="text-teal-600" />,
  JavaScript: <IoLogoJavascript className="text-yellow-500" />,
  TypeScript: <BiLogoTypescript className="text-blue-600" />,
  ReactJS: <FaReact className="text-blue-500" />,
  GitHub: <FaGithub className="text-gray-900 dark:text-white" />,
  NodeJS: <FaNode className="text-green-600" />,
  ExpressJS: <SiExpress className="text-gray-700 dark:text-gray-200" />,
  MongoDB: <SiMongodb className="text-green-700 dark:text-green-600" />,
  Prisma: <SiPrisma />,
  // PostgreSQL: <SiPostgresql className="text-blue-700 dark:text-blue-600" />,
} as const;
