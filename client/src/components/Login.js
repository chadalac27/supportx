import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import {AuthContext} from '../Context/AuthContext';
import AuthService from '../utils/API';

const Login = () => {

  const [agent, setAgent] = useState({username: "", password: ""});
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);


  const onChange = e => {
    e.preventDefault();
    setAgent({...agent, [e.target.name] : e.target.value})
    console.log(agent);
  }

  const onSubmit = e =>{
    e.preventDefault();
    AuthService.Login(agent).then(data => {
      const {isAuthenticated, agent, message} = data;
      if(isAuthenticated){
        authContext.setAgent(agent);
        authContext.setIsAuthenticated(isAuthenticated);
      }
      else{
        setMessage(message);
      }
    })
    console.log(e.target);
  }

  


  return (
    <div className="login-wrapper">
      <div className="title">SupportX</div>
      <div className="formStyle">
        <form className="login-form" onSubmit={onSubmit}>
          <label htmlFor="login-email">Email: </label>
          <input
            id="login-email"
            type="email"
            className="inputStyle"
            name="email"
            onChange={onChange}
            placeholder="Enter Username"
          />
          <label htmlFor="login-pw">Password: </label>
          <input
            id="login-pw"
            type="password"
            className="inputStyle"
            name="password"
            onChange={onChange}
          />
          <Link to="/signup">Don't have an account?</Link>
          <button type="submit" className="buttonStyle">
            Log In
          </button>
        </form>
        {/* {message ? <Message message={message}/> : null} */}
      </div>
    </div>
  );
};

export default Login;
