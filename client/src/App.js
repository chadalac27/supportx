import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import DashboardClone from "./components/DashboardClone";

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/test" exact component={DashboardClone} />
    </div>
  );
}

export default App;
