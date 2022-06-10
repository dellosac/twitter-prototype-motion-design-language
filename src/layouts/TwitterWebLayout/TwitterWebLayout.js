import { SidebarNavigation, SidebarRight } from "../../components";
import { Outlet } from "react-router-dom";
import Lotties from "../../lotties";

import { Transition } from "../../components";
import styles from "./TwitterWebLayout.module.scss";
import { useResolvedPath, useMatch } from 'react-router-dom';

const TwitterWebLayout = ({ activeLottieOption, showLarryEntrance }) => {
  let resolved = useResolvedPath('/');
  let match = useMatch({ path: resolved.pathname, end: true });

  const onNavigationChange = (newNavSlug) => {
    console.log("navigation changed", newNavSlug);
  };

  const ANIMATION_CONFIG = {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    exit: { opacity: 0 },
  };

  return (
    <main
      className={`${styles.layout}`}
    >
      <nav className={styles.navigation}>
        <SidebarNavigation
          activeItem={activeLottieOption}
          onNavigationChange={onNavigationChange}
          lotties={Lotties[activeLottieOption]}
          animateIcons={activeLottieOption !== "None"}
        />
      </nav>
      <article className={styles.pages}>
        <Outlet />
      </article>
      <SidebarRight />
      {showLarryEntrance && (
        <Transition
          isActive={match}
          entranceDelay={1}
          exitDelay={0}
          exitDuration={0}
          animationConfiguration={ANIMATION_CONFIG}
        >
          <div className={styles.animateLarry}></div>
        </Transition>
      )}
    </main>
  );
};

export default TwitterWebLayout;
