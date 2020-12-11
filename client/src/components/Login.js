import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="login-wrapper">
      <div class="title">SupportX</div>
      <div class="formStyle">
        <form class="login-form" action="#/dashboard">
          <label htmlFor="login-email">Email: </label>
          <input
            id="login-email"
            type="email"
            class="inputStyle"
            name="email"
          />
          <label htmlFor="login-pw">Password: </label>
          <input
            id="login-pw"
            type="password"
            class="inputStyle"
            name="password"
          />
          <Link to="/signup">Don't have an account?</Link>
          <button type="submit" class="buttonStyle">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
