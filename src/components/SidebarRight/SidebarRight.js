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
          </div>
          <div className={styles.whoToFollowModule}>
            <h1 className="headline1">Who to follow</h1>
          </div>
        </div>
      </div>
  );
};

export default SidebarRight;