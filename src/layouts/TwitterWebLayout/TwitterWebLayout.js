import { SidebarLeft, SidebarRight } from "../../components";
import { Outlet } from "react-router-dom";
import Lotties from "../../lotties";

import TwitterWebLayoutTransition from "./TwitterWebLayoutTransition";
import { Transition } from "../../components";
import styles from "./TwitterWebLayout.module.scss";
import { useResolvedPath, useMatch } from "react-router-dom";

const TwitterWebLayout = ({
  pageLoaderConfig,
  activeLottieOption,
  showLarryEntrance = false,
}) => {
  let resolved = useResolvedPath("/");
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
    <main className={`${styles.layout}`}>
      <nav className={styles.navigation}>
        <SidebarLeft
          showLarryEntrance={showLarryEntrance}
          loaderStyle={pageLoaderConfig}
          activeItem={activeLottieOption}
          onNavigationChange={onNavigationChange}
          lotties={Lotties[activeLottieOption]}
          animateIcons={activeLottieOption !== "None"}
          pageLoaderConfig={pageLoaderConfig}
        />
      </nav>
      <article className={styles.pages}>
        <Outlet />
      </article>
      <SidebarRight
        showLarryEntrance={showLarryEntrance}
        loaderStyle={pageLoaderConfig}
      />
      {showLarryEntrance == true && (
        <TwitterWebLayoutTransition
          isActive={showLarryEntrance}
          entranceDelay={pageLoaderConfig.name === "None" ? 0 : 1}
          entranceDuration={pageLoaderConfig.name === "None" ? 0 : 0.3}
          exitDelay={0}
          exitDuration={0}
          animationConfiguration={ANIMATION_CONFIG}
          entranceOnly={true}
        >
          <div className={styles.animateLarry}></div>
        </TwitterWebLayoutTransition>
      )}
    </main>
  );
};

export default TwitterWebLayout;
