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
            component={"searchBar"}
          >
            <div className={styles.searchBar}>
              <div className={styles.searchWrapper}>
                <img className={styles.searchIcon} src={SearchIcon} />
                <span className={`body ${styles.searchLabel}`}>Search Twitter</span>
              </div>              
            </div>
          </Transition>
          <Transition 
            isActive={true}
            animationConfiguration={loaderStyle}
            entranceDelay={1 * loaderStyle.delayFactor}
            component={"whatsHappeningModule"}
          >
            <div className={styles.whatsHappeningModule}>
              <Transition 
                isActive={true}
                animationConfiguration={loaderStyle}
                entranceDelay={1.5 * loaderStyle.delayFactor}
                component={"whatsHappeningLabel"}
              >
                <h1 className={`headline1 ${styles.whatsHappeningLabel}`}>What's happening</h1>
              </Transition>
              <ul className={styles.whatsHappeningWrapper}>
                {[...Array(5)].map((e, i) => {
                  return (
                    <Transition 
                      key={`lil-${i}`}
                      isActive={true}
                      animationConfiguration={loaderStyle}
                      entranceDelay={(2 + i) * loaderStyle.delayFactor}
                    >        
                      <StaticItem src={'./images/sidebar-right/whats-happening/item-' + (i + 1)} />
                    </Transition>
                  );
                })}
              </ul>
              <Transition 
                isActive={true}
                animationConfiguration={loaderStyle}
                entranceDelay={7 * loaderStyle.delayFactor}
              >
                <h4 className={`body ${styles.showMoreLabel}`}>Show more</h4> 
              </Transition>
            </div>
          </Transition>
          <Transition 
            isActive={true}
            animationConfiguration={loaderStyle}
            entranceDelay={8 * loaderStyle.delayFactor}
            component={"whoToFollowModule"}
          >
            <div className={styles.whoToFollowModule}>
              <Transition 
                    isActive={true}
                    animationConfiguration={loaderStyle}
                    entranceDelay={8.5 * loaderStyle.delayFactor}
                    component={"whoToFollowLabel"}
              >
                <h1 className="headline1">Who to follow</h1>
              </Transition>
              <ul className={styles.whoToFollowWrapper}>
                  {[...Array(3)].map((e, i) => {
                    return (
                      <Transition 
                        key={`lil-${i}`}
                        isActive={true}
                        animationConfiguration={loaderStyle}
                        entranceDelay={(9 + i) * loaderStyle.delayFactor}
                      >        
                        <StaticItem src={'./images/sidebar-right/who-to-follow/account-' + (i + 1)} />
                      </Transition>
                    );
                  })}
                </ul>
                <Transition 
                  isActive={true}
                  animationConfiguration={loaderStyle}
                  entranceDelay={10 * loaderStyle.delayFactor}
                >
                  <h4 className={`body ${styles.showMoreLabel}`}>Show more</h4> 
                </Transition>
            </div>
          </Transition>
        </div>
      </div>
  );
};

export default SidebarRight;