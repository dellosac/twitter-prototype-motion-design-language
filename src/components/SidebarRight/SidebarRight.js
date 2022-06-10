import styles from "./SidebarRight.module.scss";
import StaticItem from "../StaticItem";
import SearchIcon from "../../images/search-icon.png";

const SidebarRight = ({ loaderStyle }) => {

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
            <ul className={styles.whatsHappeningWrapper}>
              {[...Array(5)].map((e, i) => {
                return (
                  <StaticItem 
                    key={`lil-${i}`}
                    src={'./images/sidebar-right/whats-happening/item-' + (i + 1)} 
                    />
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