import { TestOptionsList } from "../../components";
import { Link } from "react-router-dom";

import TestPickerPageTransition from "./TestPickerPageTransition";
import TestPickerTransition from "./TestPickerTransition";
import styles from "./TestPickerLayout.module.scss";
import CONFIG from "../../config";

const TestPickerLayout = ({
  activePageLoaderOption,
  activeLottieOption,
  onLottieSelectCallback,
  onPageLoaderSelectCallback,
}) => {
  const onLottieOptionSelectCallback = (option) => {
    if (typeof onLottieSelectCallback === "function") {
      onLottieSelectCallback(option);
    }
  };

  const onPagerLoaderOptionSelectCallback = (option) => {
    if (typeof onLottieSelectCallback === "function") {
      onPageLoaderSelectCallback(option);
    }
  };

  const lottieOptions = Object.keys(CONFIG.LOTTIE_OPTIONS);
  const pageLoaderOptions = Object.keys(CONFIG.PAGE_LOADER_OPTIONS);

  return (
    <TestPickerPageTransition entranceDelay={0} exitDelay={0.2}>
      <main className={styles.wrapper}>
        <article className={styles.content_wrapper}>
          <TestPickerTransition entranceDelay={0}>
            <h1 className={`${styles.title} title1`}>Select Test Variables</h1>
          </TestPickerTransition>
          <TestPickerTransition entranceDelay={0.045}>
            <section className={styles.contentContainer}>
              <label className={`title4 ${styles.label}`}>Parameter A</label>
              <TestOptionsList
                actionOption={activeLottieOption}
                options={lottieOptions}
                onOptionSelectCallback={onLottieOptionSelectCallback}
              />
            </section>
          </TestPickerTransition>
          <TestPickerTransition entranceDelay={0.2}>
            <section className={styles.contentContainer}>
              <label className={`title4 ${styles.label}`}>Parameter B</label>
              <TestOptionsList
                actionOption={activePageLoaderOption}
                options={pageLoaderOptions}
                onOptionSelectCallback={onPagerLoaderOptionSelectCallback}
              />
            </section>
          </TestPickerTransition>
          <TestPickerTransition entranceDelay={0.25}>
            <Link className={styles.submitLink} to="/">
              Submit Test Changes
            </Link>
          </TestPickerTransition>
        </article>
      </main>
    </TestPickerPageTransition>
  );
};

export default TestPickerLayout;
