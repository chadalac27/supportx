import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div class="login-wrapper">
      <div class="title">SupportX</div>
      <div class="formStyle">
        <form class="signup-form" action="#">
          <label htmlFor="signup-email">Email: </label>
          <input
            id="signup-email"
            type="email"
            class="inputStyle"
            name="email"
          />
          <label htmlFor="signup-pw">Password: </label>
          <input
            id="signup-pw"
            type="password"
            class="inputStyle"
            name="password"
          />
          <Link to="/">Already have an account?</Link>
          <button type="submit" class="buttonStyle">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
