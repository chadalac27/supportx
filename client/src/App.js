import "./App.css";
import {Route} from 'react-router-dom';
import Home from "./components/Login"

function App() {
  return(
    <div>
      <Route path="/" exact component={Home} />
    </div>
  )
}

export default App;
