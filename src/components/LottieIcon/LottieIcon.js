import { forwardRef } from "react";
import Lottie from "lottie-react";

import styles from "./LottieIcon.module.scss";

const LottieIcon = forwardRef(({ hoverAnimation, activeAnimation }, forwardedRef) => {
  return (
    <Lottie
      className={styles.lottieIcon}
      lottieRef={forwardedRef}
      loop={false}
      animationData={hoverAnimation}
    />
  );
});

export default LottieIcon;
