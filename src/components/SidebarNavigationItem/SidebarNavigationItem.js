import { useRef } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import styles from "./SidebarNavigationItem.module.scss";

const SidebarNavigationItem = ({
  name,
  hoverAnimation,
  activeAnimation,
  isActive = false,
  onClick,
}) => {
  const lottieRef = useRef();

  const iconOnClick = (e) => {
    e.preventDefault();
    if (typeof onClick === "function") {
      onClick(e, name);
    }
  };

  const onMouseEnter = (e) => {
    e.preventDefault();
    lottieRef.current.goToAndPlay(0, true);
  };

  const URL = (name === "Home") ? '/' : `/${name}`;

  return (
    <li
      className={styles.sidebarListItem}
      onMouseEnter={onMouseEnter}
      onClick={iconOnClick}
    >
      <Link to={URL}>
        <Lottie
          autoplay={isActive}
          className={styles.lottieIcon}
          lottieRef={lottieRef}
          loop={false}
          animationData={isActive ? activeAnimation : hoverAnimation}
        />
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default SidebarNavigationItem;
