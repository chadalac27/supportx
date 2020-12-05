import "./App.css";
import {Route} from 'react-router-dom';
import Home from "./components/Login"
import Signup from "./components/Signup"

function App() {
  return(
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
    </div>
  )
}

export default App;
