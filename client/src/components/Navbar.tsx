import { motion, AnimatePresence } from "framer-motion";
import { Code, Home, Menu, Moon, Smartphone, Sun, User, X } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  handlePageChange: (page: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  theme: string;
  handleThemeToggle: () => void;
}

const Navbar = ({
  currentPage,
  handlePageChange,
  isMenuOpen,
  setIsMenuOpen,
  theme,
  handleThemeToggle,
}: NavbarProps) => {
  const navLinks = [
    { name: "Home", page: "home", icon: <Home /> },
    { name: "About", page: "about", icon: <User /> },
    { name: "Projects", page: "projects", icon: <Code /> },
    { name: "Contact", page: "contact", icon: <Smartphone /> },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-white dark:bg-gray-900 shadow-md py-4 transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-900 dark:text-white font-bold text-2xl"
        >
          <a href="#" onClick={() => handlePageChange("home")}>
            &lt;Dev/&gt;
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handlePageChange(link.page)}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-colors duration-200 
              ${
                currentPage === link.page
                  ? "text-blue-500 bg-gray-100 dark:bg-gray-800"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <span className="text-lg">{link.name}</span>
            </button>
          ))}
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100 }}
              className="fixed inset-0 bg-white dark:bg-gray-950 z-40 flex flex-col items-center justify-start space-y-8 md:hidden pt-24"
            >
              <button
                className="absolute top-6 right-6 text-gray-600 dark:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={32} />
              </button>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handlePageChange(link.page)}
                  className={`text-3xl font-bold p-4 rounded-lg transition-colors duration-200 ${
                    currentPage === link.page
                      ? "text-blue-500"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
export default Navbar;
