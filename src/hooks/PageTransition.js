import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 100, transition: { duration: 0.5 } },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
