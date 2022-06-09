import { motion } from 'framer-motion';
import styles from "./SidebarRight.module.scss";
import SearchIcon from "../../images/search-icon.png";

const SidebarRight = () => {

  return (
      <div className={styles.SidebarRight}>
        <div className={styles.wrapper}>
          <div className={styles.searchBar}>
            <div className={styles.searchWrapper}>
              <img className={styles.searchIcon} src={SearchIcon} />
              <span className={`body ${styles.searchLabel}`}>Search Twitter</span>
            </div>              
          </div>
          <div className={styles.whatsHappeningModule}>
            <h1 className="headline1">What's happening</h1>
            {/* <ul className={styles.SidebarNavigation}>
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
            </ul> */}
          </div>
          <div className={styles.whoToFollowModule}>
            <h1 className="headline1">Who to follow</h1>
          </div>
        </div>
      </div>
  );
};

export default SidebarRight;