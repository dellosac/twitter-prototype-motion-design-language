import styles from "./SidebarRight.module.scss";
import StaticItem from "../StaticItem";
import SearchIcon from "../../images/search-icon.png";
import Transition from "../Transition";

const SidebarRight = ({ loaderStyle }) => {

  return (
      <div className={styles.SidebarRight}>
        <div className={styles.wrapper}>
          <Transition 
            isActive={true}
            animationConfiguration={loaderStyle}
            entranceDelay={0 * loaderStyle.delayFactor}
          >
            <div className={styles.searchBar}>
              <div className={styles.searchWrapper}>
                <img className={styles.searchIcon} src={SearchIcon} />
                <span className={`body ${styles.searchLabel}`}>Search Twitter</span>
              </div>              
            </div>
          </Transition>
          <div className={styles.whatsHappeningModule}>
            <h1 className="headline1">What's happening</h1>
            <ul className={styles.whatsHappeningWrapper}>
              {[...Array(5)].map((e, i) => {
                return (
                  <Transition 
                    isActive={true}
                    animationConfiguration={loaderStyle}
                    entranceDelay={(2 * i) * loaderStyle.delayFactor}
                  >        
                    <StaticItem 
                      key={`lil-${i}`}
                      src={'./images/sidebar-right/whats-happening/item-' + (i + 1)} 
                      />
                  </Transition>
                );
              })}
            </ul>
            <h4 className={`body ${styles.showMoreLabel}`}>Show more</h4> 
          </div>
          <div className={styles.whoToFollowModule}>
            <h1 className="headline1">Who to follow</h1>
          </div>
        </div>
      </div>
  );
};

export default SidebarRight;