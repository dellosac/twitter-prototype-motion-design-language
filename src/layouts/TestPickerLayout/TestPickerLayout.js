import { TestOptionsList } from "../../components";
import { Link } from "react-router-dom";

import CONFIG from "../../config";

const TestPickerLayout = ({
  activePageLoaderOption,
  activeLottieOption,
  onLottieSelectCallback,
  onPageLoaderSelectCallback
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
  const pageLoaderOptions = Object.keys(CONFIG.PAGE_LOADER_OPTIONS)

  return (
    <main>
      Pick a Test
      <TestOptionsList
        actionOption={activeLottieOption}
        options={lottieOptions}
        onOptionSelectCallback={onLottieOptionSelectCallback}
      />
      <TestOptionsList
        actionOption={activePageLoaderOption}
        options={pageLoaderOptions}
        onOptionSelectCallback={onPagerLoaderOptionSelectCallback}
      />

      <Link to="/">Submit Test Changes</Link>
    </main>
  );
};

export default TestPickerLayout;
