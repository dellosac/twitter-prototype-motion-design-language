import { useRef } from "react";
import { useResolvedPath, useMatch, Link } from "react-router-dom";
import Lottie from "lottie-react";
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

    if (!match) {
      lottieRef.current.goToAndPlay(0, true);
    } else {
      lottieRef.current.goToAndPlay(0, true);
    }
  };

  const _staticIcon = (name, isActive) => {
    const imgSrc = isActive ? CONFIG.StaticIconSettings[name].active : CONFIG.StaticIconSettings[name].default;

    return <span className={styles.staticIcon}>
      <img src={`./images/icons/${imgSrc}`} alt={name} />
    </span>
  }

  return (
    <li className={`${match ? styles.active : null} ${styles.sidebarListItem}`} onMouseEnter={onMouseEnter}>
      <Link className={styles.itemContainer} to={URL}>
        {animateIcon ? (
          <Lottie
            autoplay={false}
            className={styles.lottieIcon}
            lottieRef={lottieRef}
            loop={false}
            animationData={match ? activeAnimation : hoverAnimation}
             />
        ) : _staticIcon(name, match)}
        <span className={`headline1 ${styles.itemLabel}`}>{name}</span>
      </Link>
    </li>
  );
};

export default SidebarNavigationItem;
