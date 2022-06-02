import styles from "./TestOptionsList.module.scss";

const TestOptionsList = ({ actionOption, options, onOptionSelectCallback }) => {
  return (
    <ul className={styles.TestOptionsList}>
      {options.map((option, index) => {
        const isActive = actionOption === option;
        const onClick = (e) => {
          e.preventDefault();
          onOptionSelectCallback(option);
        };

        return (
          <li
            key={`lol-${index}`}
            className={`${styles.TestOptionsListItem} ${
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

export default TestOptionsList;
