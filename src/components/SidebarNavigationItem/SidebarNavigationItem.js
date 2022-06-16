import { useRef } from "react";
import { useResolvedPath, useMatch, Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import CONFIG from "../../config";

import styles from "./SidebarNavigationItem.module.scss";

const SidebarNavigationItem = ({
  name,
  config,
  hoverAnimation,
  activeAnimation,
  animateIcon,
}) => {
  const lottieRef = useRef();
  const URL = name === "Home" ? "/" : `/${name}`;

  let resolved = useResolvedPath(URL);
  let match = useMatch({ path: resolved.pathname, end: true });

  const onMouseEnter = (e) => {
    e.preventDefault();
    if (!animateIcon) {
      return;
    }

    lottieRef.current.stop();
    lottieRef.current.play();
  };

  const _staticIcon = (name, isActive) => {
    const imgSrc = isActive
      ? CONFIG.StaticIconSettings[name].active
      : CONFIG.StaticIconSettings[name].default;

    return (
      <span className={styles.staticIcon}>
        <img src={`./images/icons/${imgSrc}`} alt={name} />
      </span>
    );
  };

  return (
    <li
      className={`${match ? styles.active : null} ${styles.sidebarListItem}`}
      onMouseEnter={onMouseEnter}
    >
      <Link className={styles.itemContainer} to={URL}>
        {animateIcon ? (
          <Player
            className={styles.lottieIcon}
            ref={lottieRef} // set the ref to your class instance
            autoplay={match}
            loop={false}
            controls={true}
            keepLastFrame={match}
            src={match ? activeAnimation : hoverAnimation}
          />
        ) : (
          _staticIcon(name, match)
        )}
        <span className={`headline1 ${styles.itemLabel}`}>{name}</span>
      </Link>
    </li>
  );
};

export default SidebarNavigationItem;
