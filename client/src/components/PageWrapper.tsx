import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
  pageKey: string;
};

const PageWrapper = ({ children, pageKey }: PageWrapperProps) => {
  return (
    <motion.div
      key={pageKey}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 md:py-16"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
