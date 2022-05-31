import LottieIcon from "../LottieIcon";
import styles from "./LottieIconList.module.scss";

const LottieIconList = ({ lotties }) => {
  return (
    <ul className={styles.LottieIconList}>
      {Object.keys(lotties).map((lottie) => {
        return (
          <li>
            <LottieIcon
              hoverAnimation={lotties[lottie].hover}
              activeAnimation={lotties[lottie].active}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default LottieIconList;
