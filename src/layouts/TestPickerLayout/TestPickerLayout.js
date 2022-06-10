import { TestOptionsList } from "../../components";
import { Link, Outlet } from "react-router-dom";


import TestPickerPageTransition from "./TestPickerPageTransition";
import TestPickerTransition from "./TestPickerTransition";
import styles from "./TestPickerLayout.module.scss";
import CONFIG from "../../config";

const TestPickerLayout = () => {

  sessionStorage.setItem("show_larry", 1);

  return (
    <TestPickerPageTransition entranceDelay={0} exitDelay={0.2}>
      <main className={styles.wrapper}>
        <article className={styles.content_wrapper}>
          <Outlet />
        </article>
      </main>
    </TestPickerPageTransition>
  );
};

export default TestPickerLayout;
