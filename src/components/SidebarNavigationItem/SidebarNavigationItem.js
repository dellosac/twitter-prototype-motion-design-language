import { useRef } from "react";
import { useResolvedPath, useMatch, Link } from "react-router-dom";
import Lottie from "lottie-react";

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

  return (
    <li className={styles.sidebarListItem} onMouseEnter={onMouseEnter}>
      <Link className={styles.itemContainer} to={URL}>
        {animateIcon ? (
          <Lottie
            autoplay={false}
            className={styles.lottieIcon}
            lottieRef={lottieRef}
            loop={false}
            animationData={match ? activeAnimation : hoverAnimation}
             />
        ) : null}
        <span className={`headline1 ${styles.itemLabel}`}>{name}</span>
      </Link>
    </li>
  );
};

export default SidebarNavigationItem;
