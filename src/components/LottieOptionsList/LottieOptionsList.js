import Lotties from "../../lotties";
import styles from "./LottieOptionsList.module.scss";

const LottieOptionsList = ({ actionOption, onOptionSelectCallback }) => {
  const options = Object.keys(Lotties);

  return (
    <ul className={styles.lottieOptionsList}>
      {options.map((option, index) => {
        const isActive = actionOption === option;
        const onClick = (e) => {
          e.preventDefault();
          onOptionSelectCallback(option);
        };

        return (
          <li
            key={`lol-${index}`}
            className={`${styles.lottieOptionsListItem} ${
              isActive ? styles.active : null
            }`}
            onClick={onClick}
          >
            {option}
          </li>
        );
      })}
    </ul>
  );
};

export default LottieOptionsList;
