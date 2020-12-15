import React, {useState, useContext} from "react";
import { Link, Redirect } from "react-router-dom";
import {AuthContext} from '../Context/AuthContext';
import AuthService from '../utils/AuthServices';
import Alert from './Alert';

const Login = (props) => {

  const [agent, setAgent] = useState({ username: "", password: ""});
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);


  const onChange = e => {
    console.log(agent);
    setAgent({...agent, [e.target.name] : e.target.value})
  }

  const onSubmit = e =>{
    e.preventDefault();
    AuthService.login(agent).then(data => {
      console.log("componenet/login/onsubmit:data", data);
      const {isAuthenticated, agent, message} = data;
      if(isAuthenticated){
        authContext.setAgent(agent);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push('/dashboard');
        //<Redirect to="/dashboard" />
      }
      else{
        setMessage(message);
      }
    });
  }

  


  return (
    <div className="login-wrapper">
      <div className="title">SupportX</div>
      <div className="formStyle">
        <form className="login-form" onSubmit={onSubmit}>
          <label htmlFor="login-email">Email: </label>
          <input
            id="login-email"
            type="test"
            className="inputStyle"
            name="username"
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
        {message ? <Alert message={message}/> : null}
      </div>
    </div>
  );
};

export default Login;
