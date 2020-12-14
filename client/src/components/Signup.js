import React, {useState, useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import AuthService from '../utils/AuthServices';
import Alert from './Alert';

const Signup = (props) => {

  const [agent, setAgent] = useState({username: "", password: ""});
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return() =>{
      clearTimeout(timerID);
    }
  },[]);


  const onChange = e => {
    setAgent({...agent, [e.target.name] : e.target.value});
  }

  const resetForm= () => {
    //setAgent({})
  }

  const onSubmit = e =>{
    e.preventDefault();
    console.log("onSubmit - Agent",agent);
    AuthService.register(agent).then(data => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if(!message.msgError){
        timerID = setTimeout(() => {
          props.history.push('/login');
        },2000)
      }
    });
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

export default Signup;
