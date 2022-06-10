import { SidebarLeft, SidebarRight } from "../../components";
import { Outlet } from "react-router-dom";
import Lotties from "../../lotties";

import styles from "./TwitterWebLayout.module.scss";

const TwitterWebLayout = ({ pageLoaderConfig, activeLottieOption }) => {
  const onNavigationChange = (newNavSlug) => {
    console.log("navigation changed", newNavSlug);
  };

  return (
    <main className={styles.layout}>
      <nav className={styles.navigation}>
        <SidebarLeft
          loaderStyle={pageLoaderConfig}
          activeItem={activeLottieOption}
          onNavigationChange={onNavigationChange}
          lotties={Lotties[activeLottieOption]}
          animateIcons={(activeLottieOption !== "None")}
        />
      </nav>
      <article className={styles.pages}>
        <Outlet />
      </article>
      <SidebarRight loaderStyle={pageLoaderConfig} />
    </main>
  );
};

export default TwitterWebLayout;
