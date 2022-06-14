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

  let a = JSON.parse(JSON.stringify(animationConfiguration));

  if (component in CONFIG) {
    let c = CONFIG[component];
    if (!c.translateY) a.initial.translateY = 0;
    else if (!c.opacity) a.initial.opacity = 1;
    else if (!c.scale) a.initial.scale = 1;
    if(component === "tweetComposer") console.log("a", c.opacity, !c.opacity, animationConfiguration.initial.opacity, a.initial.opacity);
  }

  if(window.showLarryEntrance) {
    entranceDelay += 1.3;
  }
  console.log("window.showLarryEntrance", window.showLarryEntrance);
  console.log("window.showLarryEntrance", entranceDelay);
  
  return entranceOnly && !isActive ? children : (
    <motion.div
      variants={a}
      initial="initial"
      animate="animate"
      exit={null}
      transition={{
        duration: isActive ? entranceDuration : exitDuration,
        delay: isActive ? entranceDelay + 1.3 : exitDelay,
      }}
    >
      {children}
    </motion.div>
  );
};
export default Transition;
