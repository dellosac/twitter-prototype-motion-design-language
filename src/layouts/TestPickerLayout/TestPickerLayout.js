import { LottieOptionsList } from "../../components";
import { Link } from "react-router-dom";

const TestPickerLayout = ({
  activePageLoaderOption,
  activeLottieOption,
  onLottieSelectCallback,
}) => {
  const onOptionSelectCallback = (option) => {
    
    if (typeof onLottieSelectCallback === "function") {
      onLottieSelectCallback(option);
    }
  };

  return (
    <main>
      Pick a Test
      <LottieOptionsList
        actionOption={activeLottieOption}
        onOptionSelectCallback={onOptionSelectCallback}
      />
      <Link to="/">Go to the home page</Link>
    </main>
  );
};

export default TestPickerLayout;
