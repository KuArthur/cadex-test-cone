import './App.scss';

import InputField from "./components/InputField/InputField";
import Button from "./components/Button/Button";
import ConfPanel from "./components/ConfPanel/ConfPanel";
import Figure from "./components/Figure/Figure"
const App = () => {
  return(
    <div className="App">
      <div className = "App--ConfPanel">
        <ConfPanel />
      </div>
      <div className="App--Figure">
        <Figure />
      </div>
    </div>
  )
}

export default App;
