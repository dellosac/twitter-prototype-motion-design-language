import { SidebarNavigation } from "../../components";
import { Outlet } from "react-router-dom";
import Lotties from "../../lotties";

import styles from "./TwitterWebLayout.module.scss";

const TwitterWebLayout = ({ activeLottieOption }) => {
  const onNavigationChange = (newNavSlug) => {
    console.log("navigation changed", newNavSlug);
  };

  return (
    <main className={styles.layout}>
      <nav className={styles.navigation}>
        <SidebarNavigation
          activeItem={activeLottieOption}
          onNavigationChange={onNavigationChange}
          lotties={Lotties[activeLottieOption]}
          animateIcons={(activeLottieOption !== "None")}
        />
      </nav>
      <article className={styles.pages}>
        <Outlet />
      </article>
    </main>
  );
};

export default TwitterWebLayout;
