import { useEffect, useState } from "react";
import Hero from "./pages/Hero";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = window.localStorage.getItem("theme");
      return storedTheme ? storedTheme : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Hero handlePageChange={handlePageChange} />;
      case "about":
        return <AboutPage />;
      case "projects":
        return <Projects />;
      case "contact":
        return <ContactPage />;
      default:
        return <Hero handlePageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 font-sans">
      <Navbar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        theme={theme}
        handleThemeToggle={handleThemeToggle}
      />
      <AnimatePresence mode="wait">
        <main className="pt-24 min-h-screen flex flex-col justify-center">
          {renderPage()}
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
