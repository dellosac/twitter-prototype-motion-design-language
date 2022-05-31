import { useState } from "react";
import "./styles/App.scss";
import { LottieOptionsList, LottieIconList } from "./components";
import Lotties from "./lotties";

function App() {
  const [lottieOption, setLottieOption] = useState("Ease");
  const onOptionSelectCallback = (option) => {
    setLottieOption(option);
  }

  return (
    <div className="App">
      <header className="App-header">
        <LottieOptionsList actionOption={lottieOption} onOptionSelectCallback={onOptionSelectCallback} />
        <LottieIconList lotties={Lotties[lottieOption]} />
      </header>
    </div>
  );
}

export default App;
