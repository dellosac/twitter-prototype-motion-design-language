import SidebarNavigationItem from "../SidebarNavigationItem";
import styles from "./SidebarNavigation.module.scss";

const SidebarNavigation = ({ lotties, activeItem, animateIcons }) => {

  return (
    <ul className={styles.SidebarNavigation}>
      {Object.keys(lotties).map((lottie, index) => {
        const isActive = activeItem === lottie;

        return (
          <SidebarNavigationItem
            key={`lil-${index}`}
            name={lottie}
            hoverAnimation={lotties[lottie].hover}
            activeAnimation={lotties[lottie].active}
            isActive={isActive}
            animateIcon={animateIcons}
          />
        );
      })}
    </ul>
  );
};

export default SidebarNavigation;
