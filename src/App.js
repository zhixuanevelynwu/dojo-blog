import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowswerRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
