import { useState } from "react";
import { LottieOptionsList, SidebarNavigation } from "../../components";
import { HomePage } from "../../pages";
import Lotties from "../../lotties";

import styles from "./TwitterWebLayout.module.scss";

const TwitterWebLayout = () => {
    const [lottieOption, setLottieOption] = useState("Ease");
    const onOptionSelectCallback = (option) => {
      setLottieOption(option);
    }
  
    const onNavigationChange = (newNavSlug) => {
      console.log("navigation changed", newNavSlug);
    }

    return (<main className={styles.layout}>
      <nav className={styles.navigation}>
        <LottieOptionsList actionOption={lottieOption} onOptionSelectCallback={onOptionSelectCallback} />
        <SidebarNavigation onNavigationChange={onNavigationChange} lotties={Lotties[lottieOption]} />
      </nav>
      <article className={styles.pages}>
        <HomePage />
      </article>
    </main>)
}

export default TwitterWebLayout;