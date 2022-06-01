import { useRef } from "react";
import Lottie from "lottie-react";

import styles from "./SidebarNavigationItem.module.scss";

const SidebarNavigationItem = ({ name, hoverAnimation, activeAnimation, isActive = false, onClick }) => {
  const lottieRef = useRef();

  const iconOnClick = (e) => {
    e.preventDefault();
    if(typeof onClick === 'function') {
      onClick(e, name);
    }
  };

  const onMouseEnter = (e) => {
    e.preventDefault();
    lottieRef.current.goToAndPlay(0, true);
  };

  return (
    <li className={styles.sidebarListItem} onMouseEnter={onMouseEnter} onClick={iconOnClick}>
      <Lottie
        autoplay={isActive}
        className={styles.lottieIcon}
        lottieRef={lottieRef}
        loop={false}
        animationData={ isActive ? activeAnimation : hoverAnimation}
      />
      <span>{name}</span>
    </li>
  );
};

export default SidebarNavigationItem;
