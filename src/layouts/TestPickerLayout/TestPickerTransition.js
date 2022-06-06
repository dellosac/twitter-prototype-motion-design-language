import { useResolvedPath, useMatch } from "react-router-dom";
import { Transition } from "../../components";

const ANIMATION_CONFIG = {
  initial: { opacity: 0, translateY: 10 },
  animate: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: 10 },
};

const TestPickerTransition = ({ entranceDelay, children }) => {
  let resolved = useResolvedPath("/test");
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Transition
      isActive={match}
      animationConfiguration={ANIMATION_CONFIG}
      entranceDelay={entranceDelay}
      exitDuration={0.15}
    >
      {children}
    </Transition>
  );
};

export default TestPickerTransition;
