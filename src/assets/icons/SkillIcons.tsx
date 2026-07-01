import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub, FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiPrisma, SiPostgresql } from "react-icons/si";

export const skillIcons = {
  "Tailwind CSS": <RiTailwindCssFill className="text-teal-600" />,
  TypeScript: <BiLogoTypescript className="text-blue-600" />,
  ReactJS: <FaReact className="text-blue-500" />,
  "TanStack Query": (
    <img
      className="w-11 h-11"
      src="https://tanstack.com/images/logos/logo-color-100.png"
      alt="TanStack Query"
    />
  ),
  GitHub: <FaGithub className="text-gray-900 dark:text-white" />,
  NodeJS: <FaNode className="text-green-600" />,
  ExpressJS: <SiExpress className="text-gray-700 dark:text-gray-200" />,
  PostgreSQL: <SiPostgresql className="text-blue-700 dark:text-blue-600" />,
  Prisma: <SiPrisma />,
} as const;
