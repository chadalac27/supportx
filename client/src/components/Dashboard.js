import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  app: {
    height: "100vh",
    display: "flex",
  },
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
      background: "#42b680",
    },
    "&:focus": {
      background: "#42b680",
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      outline: "0",
    },
  },
  chatOuter: {
    background: "#363a3e",
    height: "100%",
    width: "100%",
  },
  channels: {
    background: "#2f3236",
    width: "240px",
    height: "100%",
  },
  nav: {
    borderBottom: "2px solid #2c2e31",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  serverTitle: {
    marginTop: "0",
    marginBottom: "0",
    color: "white",
    fontSize: "15px",
  },
  channelListOuter: {
    color: "#8e9296",
    padding: "10px",
  },
  channelListHeader: {
    display: "flex",
    fontSize: "10px",
    alignItems: "center",
    textTransform: "uppercase"
  },
  channelDropdown: {
    paddingLeft: "8px",
  },
  channelListContent: {
  },
  channelListItem: {
    display: "flex",
    alignItems: "center",
    marginLeft: "4px",
    paddingLeft: "12px",
    borderRadius: "5px",
    "&:hover, &:focus": {
      color: "white",
      background: "#393d42"
    },
  },
  channelName: {
    margin: "8px",
  },
  hash: {
    fontSize: "24px",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.serverList}>
        <button className={classes.serverButton}>Profile</button>
        <button className={classes.serverButton}>Server 1</button>
        <button className={classes.serverButton}>Server 2</button>
        <button className={classes.serverButton}>Server 3</button>
        <button className={classes.serverButton}>Server 4</button>
        <button className={classes.serverButton}>Add New Server</button>
      </div>
      <div className={classes.chatOuter}>
        <div className={classes.channels}>
          <nav className={classes.nav}>
            <h3 className={classes.serverTitle}>Server 1</h3>
            <img
              width="15px"
              src="https://image.flaticon.com/icons/png/512/120/120890.png"
              alt="dropdown icon"
            ></img>
          </nav>
          <div className={classes.channelListOuter}>
            <div className={classes.channelListInner}>
              <div className={classes.channelListHeader}>
                <img
                  width="10px"
                  src="https://image.flaticon.com/icons/png/512/120/120890.png"
                  alt="dropdown icon"
                ></img>
                <h3 className={classes.channelDropdown}>Channels</h3>
              </div>
              <div className={classes.channelListContent}>
                <div className={classes.channelListItem}>
                  <span className={classes.hash}>#</span>
                  <h5 className={classes.channelName}>General</h5>
                </div>
                <div className={classes.channelListItem}>
                  <span className={classes.hash}>#</span>
                  <h5 className={classes.channelName}>Shipping</h5>
                </div>
                <div className={classes.channelListItem}>
                  <span className={classes.hash}>#</span>
                  <h5 className={classes.channelName}>Processing</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
