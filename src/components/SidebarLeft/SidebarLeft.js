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
        component={"logo"}
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
              entranceDelay={(1 + index) * loaderStyle.delayFactor}
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
        entranceDelay={7 * loaderStyle.delayFactor}
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
