import { motion } from "framer-motion";

const TwitterWebLayoutTransition = ({
  animationConfiguration,
  entranceDuration = 0.3,
  entranceDelay = 0.2,
  children,
}) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit={null}
      transition={{
        duration: entranceDuration,
        delay: entranceDelay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TwitterWebLayoutTransition;
