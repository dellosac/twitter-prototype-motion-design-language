import Page from "./Page";
import styles from "./HomePage.module.scss";
import OrderCTA from "../images/order-cta.png";
import TweetOptions from '../images/tweet-options.png';

const HomePage = ({ pageLoaderConfig, slug }) => {
  console.log("home rednered");
  return (
    <Page slug={slug} pageLoaderConfig={pageLoaderConfig}>
      <article className={styles.homePage}>
        <div className={styles.pageHeader}>
          <h1 className={`headline2 ${styles.pageLabel}`}>Home</h1>
          <img className={styles.orderCTA} src={OrderCTA} />
        </div>
        <div className={styles.tweetComposer}>
          <img className={styles.pfp} />
          <div className={styles.wrapper}>
            <span className={`headline1 ${styles.prompt}`}>What's happening?</span>
            <div className={styles.divider}></div>
            <div className={styles.ctas}>
              <img className={styles.tweetOptions} src={TweetOptions} />
              <div className={`body ${styles.tweetCTA}`}>Tweet</div>
            </div>
          </div>
        </div>
      </article>
    </Page>
  );
};

export default HomePage;
