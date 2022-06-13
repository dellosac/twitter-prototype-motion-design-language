import { motion } from "framer-motion";
import CONFIG from "../../config/ComponentAnimations";

const Transition = ({
  animationConfiguration,
  isActive,
  entranceDuration = 0.3,
  exitDuration = 0.1,
  entranceDelay = 0.2,
  exitDelay = 0,
  component = "",
  children,
  entranceOnly = false,
}) => {
  let a = Object.assign({}, animationConfiguration);
  if (component in CONFIG) {
    console.log("hi");
    let c = CONFIG[component];
    if (!c.translateY) {
      a.initial.translateY = 0;
    }
  }
  console.log("a", a);
  return entranceOnly && !isActive ? children : (
    <motion.div
      variants={a}
      initial="initial"
      animate="animate"
      exit={entranceOnly ? null : "exit"}
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
