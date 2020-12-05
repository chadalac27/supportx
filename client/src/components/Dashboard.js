import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  serverList: {
    background: "#202326",
    height: "100%",
    width: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "12px",
  },
  serverButton: {
    background: "#363a3e",
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    border: "none",
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    justifyContent: "center",
    transition: "all 0.2s ease-in-out",
    position: "relative",
    userSelect: "none",
    "&:hover": {
      borderRadius: "20%",
    },
    "&:focus": {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      outline: "0",
      background: "#6c747c"
    },
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.serverList}>
      <button className={classes.serverButton}>Profile</button>
      <button className={classes.serverButton}>Server 2</button>
      <button className={classes.serverButton}>Server 3</button>
      <button className={classes.serverButton}>Server 4</button>
      <button className={classes.serverButton}>Server 5</button>
      <button className={classes.serverButton}>Add New Server</button>
    </div>
  );
};

export default Dashboard;
