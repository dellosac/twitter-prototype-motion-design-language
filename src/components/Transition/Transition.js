import { motion } from "framer-motion";

const Transition = ({
  animationConfiguration,
  isActive,
  entranceDuration = 0.3,
  exitDuration = 0.1,
  entranceDelay = 0.2,
  exitDelay = 0,
  children,
}) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: isActive ? entranceDuration : exitDuration,
        delay: isActive ? entranceDelay : exitDelay,
      }}
    >
      {children}
    </motion.div>
  );
};
export default Transition;
