import { useState } from "react";
import SidebarNavigationItem from "../SidebarNavigationItem";
import styles from "./SidebarNavigation.module.scss";

const SidebarNavigation = ({ lotties, onNavigationChange }) => {
  const [activeItem, setActiveItem] = useState(Object.keys(lotties)[0]);

  return (
    <ul className={styles.SidebarNavigation}>
      {Object.keys(lotties).map((lottie, index) => {
        const onClick = (e, lottieName) => {
          setActiveItem(lottieName);
          if (typeof onNavigationChange === "function") {
            onNavigationChange(lottieName);
          }
        };
        const isActive = activeItem === lottie;

        return (
          <SidebarNavigationItem
            key={`lil-${index}`}
            name={lottie}
            hoverAnimation={lotties[lottie].hover}
            activeAnimation={lotties[lottie].active}
            isActive={isActive}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

export default SidebarNavigation;
