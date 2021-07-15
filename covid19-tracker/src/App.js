import "./App.css";
import Home from "./components/Home.js";
import { CovidData } from "./context/CovidContext.js";
function App() {
  return (
    <CovidData>
      <div className="App">
        <Home />
      </div>
    </CovidData>
  );
}

export default App;
