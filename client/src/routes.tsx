import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Hero from "./pages/Hero";
import AboutPage from "./pages/About";
import Projects from "./pages/Projects";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Hero handlePageChange={() => {}} /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);
