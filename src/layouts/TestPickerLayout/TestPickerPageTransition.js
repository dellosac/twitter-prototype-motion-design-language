import { useResolvedPath, useMatch } from "react-router-dom";
import { Transition } from "../../components";

const ANIMATION_CONFIG = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const TestPickerPageTransition = ({ entranceDelay, exitDelay, children }) => {
  let resolved = useResolvedPath("/test");
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Transition
      isActive={match}
      animationConfiguration={ANIMATION_CONFIG}
      exitDelay={exitDelay}
      entranceDelay={entranceDelay}
      exitDuration={0.15}
    >
      {children}
    </Transition>
  );
};

export default TestPickerPageTransition;
