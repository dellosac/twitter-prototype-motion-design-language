import * as React from "react";

import { TestOptionsList, Transition } from "../components";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

import styles from "./TestPickerPage.module.scss";
import CONFIG from "../config";

const TestPickerPage = ({
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
    <React.Fragment>
      <TestPickerTransition entranceDelay={0.25}>
        <section className={styles.contentContainer}>
          <label className={`title4 ${styles.label}`}>Parameter A</label>
          <TestOptionsList
            actionOption={activeLottieOption}
            options={lottieOptions}
            onOptionSelectCallback={onLottieOptionSelectCallback}
          />
        </section>
      </TestPickerTransition>
      <TestPickerTransition entranceDelay={0.4}>
        <section className={styles.contentContainer}>
          <label className={`title4 ${styles.label}`}>Parameter B</label>
          <TestOptionsList
            actionOption={activePageLoaderOption}
            options={pageLoaderOptions}
            onOptionSelectCallback={onPagerLoaderOptionSelectCallback}
          />
        </section>
      </TestPickerTransition>
      <TestPickerTransition entranceDelay={0.5}>
        <Link className={styles.submitLink} to="/">
          Submit Test Changes
        </Link>
      </TestPickerTransition>
    </React.Fragment>
  );
};

const ANIMATION_CONFIG = {
  initial: { opacity: 0, translateY: 10 },
  animate: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: 10 },
};

const TestPickerTransition = ({ entranceDelay, children }) => {
  let resolved = useResolvedPath("/test/picker");
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Transition
      isActive={match}
      animationConfiguration={ANIMATION_CONFIG}
      entranceDelay={entranceDelay}
      exitDuration={0.15}
    >
      {children}
    </Transition>
  );
};

export default TestPickerPage;
