import { useState } from "react";
import "./styles/App.scss";
import { LottieOptionsList, SidebarNavigation } from "./components";
import Lotties from "./lotties";

function App() {
  const [lottieOption, setLottieOption] = useState("Ease");
  const onOptionSelectCallback = (option) => {
    setLottieOption(option);
  }

  const onNavigationChange = (newNavSlug) => {
    console.log("navigation changed", newNavSlug);
  }

  return (
    <div className="App">
      <header className="App-header">
        <LottieOptionsList actionOption={lottieOption} onOptionSelectCallback={onOptionSelectCallback} />
        <SidebarNavigation onNavigationChange={onNavigationChange} lotties={Lotties[lottieOption]} />
      </header>
    </div>
  );
}

export default App;
