import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    title: {
      marginTop: "10rem",
      fontSize: "40px",
      fontFamily: "Corben",
    },
    formStyle: {
      marginTop: "2rem",
      textAlign: "center",
    },
    inputStyle: {
      padding: "12px 20px",
      margin: "8px 0",
      boxSizing: "border-box",
      transition: "all 1s",
      "&:focus": {
        width: "30%",
      },
    },
    buttonStyle: {
      marginTop: "16px",
      background: "rgb(224, 221, 193)",
      padding: "15px 32px",
      borderRadius: "8px",
      border: "none",
      "&:active": {
        background: "rgb(121, 119, 104)"
      }
    }
});

const Signup = () => {
  const classes = useStyles();
  return [
    <div className="App">
      <div className={classes.title}>SupportX</div>
    </div>,
    <div className={classes.formStyle}>
      <form>
        <Grid container direction="column" justify="center" alignItems="center">
          <label htmlFor="login-email">Email: </label>
          <input
            id="login-email"
            type="email"
            className={classes.inputStyle}
            name="email"
          />
          <label htmlFor="login-pw">Password: </label>
          <input
            id="login-pw"
            type="password"
            className={classes.inputStyle}
            name="password"
          />
          <Link to="/">Already have an account?</Link>
          <button type="submit" className={classes.buttonStyle}>Sign Up</button>
        </Grid>
      </form>
    </div>,
  ];
};

export default Signup;
