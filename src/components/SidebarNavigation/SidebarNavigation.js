import { motion } from 'framer-motion';
import NavConfig from "../../config/NavConfig";
import SidebarNavigationItem from "../SidebarNavigationItem";
import styles from "./SidebarNavigation.module.scss";
import { ReactComponent as Larry } from "../../svg/larry.svg";
import MoreCTA from "../../images/more-cta.png";

const SidebarNavigation = ({ lotties, activeItem, animateIcons }) => {

  return (
      <div className={styles.Sidebar}>
        <motion.div className={styles.logo} initial={{background: '#FFFFFF'}} whileHover={{background: '#edf5fd'}}>
          <Larry className={styles.larry} fill="#1D9BF0" />
        </motion.div>
        <ul className={styles.SidebarNavigation}>
          {Object.keys(NavConfig).map((navItem, index) => {
            const isActive = activeItem === navItem;

            return (
              <SidebarNavigationItem
                key={`lil-${index}`}
                name={navItem}
                config={NavConfig[navItem]}
                hoverAnimation={lotties[navItem].hover}
                activeAnimation={lotties[navItem].active}
                isActive={isActive}
                animateIcon={animateIcons}
              />
            );
          })}
        </ul>
        <div className={`headline2 ${styles.tweetCTA}`}>Tweet</div>
        <div className={styles.profileDock}>
          <div className={styles.profileWrapper}>
            <img className={styles.pfp} />
            <div className={styles.labels}>
              <span className={`body ${styles.displayName}`}>First Last</span><br />
              <span className={`subtext2 ${styles.username}`}>@username</span>
            </div>
          </div>
          <img className={styles.moreCTA} src={MoreCTA} />
        </div>

      </div>
  );
};

export default SidebarNavigation;
