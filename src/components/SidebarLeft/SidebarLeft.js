import NavConfig from "../../config/NavConfig";
import SidebarNavigationItem from "../SidebarNavigationItem";
import styles from "./SidebarLeft.module.scss";
import { ReactComponent as Larry } from "../../svg/larry.svg";
import MoreCTA from "../../images/more-cta.png";
import Transition from "../Transition";

const SidebarLeft = ({
  loaderStyle,
  lotties,
  activeItem,
  animateIcons,
  showLarryEntrance,
}) => {
  const initialPageLoadDelay = 1.3;

  const larryLogo = (
    <span className={styles.logo}>
      <Larry className={styles.larry} fill="#1D9BF0" />
    </span>
  );

  return (
    <div className={styles.SidebarLeft}>
      <Transition
        isActive={showLarryEntrance}
        animationConfiguration={loaderStyle}
        entranceDelay={initialPageLoadDelay}
        component={"logo"}
        exitDelay={0}
        exitDuration={0}
        entranceOnly={true}
      >
        {larryLogo}
      </Transition>

      <ul className={styles.SidebarNavigation}>
        {Object.keys(NavConfig).map((navItem, index) => {
          console.log("navitem", navItem);
          const isActive = activeItem === navItem;

          return (
            <Transition
              key={`lil-${index}`}
              isActive={showLarryEntrance}
              animationConfiguration={loaderStyle}
              entranceDelay={
                initialPageLoadDelay + (1 + index) * loaderStyle.delayFactor
              }
              exitDelay={0}
              exitDuration={0}
              entranceOnly={true}
            >
              <SidebarNavigationItem
                name={navItem}
                config={NavConfig[navItem]}
                hoverAnimation={lotties[navItem].hover}
                activeAnimation={lotties[navItem].active}
                isActive={isActive}
                animateIcon={animateIcons}
              />
            </Transition>
          );
        })}
      </ul>

      <Transition
        isActive={showLarryEntrance}
        animationConfiguration={loaderStyle}
        entranceDelay={initialPageLoadDelay + 0.35}
        component={"tweetCTA"}
        exitDelay={0}
        exitDuration={0}
        entranceOnly={true}
      >
        <div className={`headline2 ${styles.tweetCTA}`}>Tweet</div>
      </Transition>

      <Transition
        isActive={showLarryEntrance}
        animationConfiguration={loaderStyle}
        entranceDelay={8 * loaderStyle.delayFactor}
        component={"profileDock"}
        exitDelay={0}
        exitDuration={0}
        entranceOnly={true}
      >
        <div className={styles.profileDock}>
          <div className={styles.profileWrapper}>
            <img className={styles.pfp} />
            <div className={styles.labels}>
              <span className={`body ${styles.displayName}`}>First Last</span>
              <br />
              <span className={`subtext2 ${styles.username}`}>@username</span>
            </div>
          </div>
          <img className={styles.moreCTA} src={MoreCTA} />
        </div>
      </Transition>
    </div>
  );
};

export default SidebarLeft;
