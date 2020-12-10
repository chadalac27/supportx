import React from "react";
import { makeStyles } from "@material-ui/styles";
import $ from "jquery";

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
      cursor: "pointer",
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
    display: "flex",
  },
  channels: {
    background: "#2f3236",
    width: "280px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    "&:hover": {
      cursor: "pointer",
    },
    borderBottom: "2px solid #2c2e31",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
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
    "&:hover": {
      cursor: "pointer",
      color: "white",
    },
    display: "flex",
    fontSize: "10px",
    alignItems: "center",
    textTransform: "uppercase",
  },
  channelDropdown: {
    paddingLeft: "8px",
  },
  channelListContent: {
    display: "flex",
    flexDirection: "column",
  },
  channelListItem: {
    fontSize: "14px",
    color: "#8e9296",
    background: "0",
    display: "flex",
    alignItems: "center",
    marginLeft: "4px",
    paddingLeft: "12px",
    border: "0",
    borderRadius: "5px",
    flexDirection: "row",
    outline: "0",
    "&:hover": {
      cursor: "pointer",
      color: "white",
      background: "#393d42",
    },
    "&:focus": {
      color: "white",
      background: "#393d42",
    },
  },
  channelListDiv: {
    display: "flex",
  },
  channelName: {
    margin: "8px",
  },
  hash: {
    fontSize: "24px",
    color: "#8e9296",
  },
  userArea: {
    marginTop: "auto",
    background: "#292c2f",
    padding: "10px 4px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  userIcon: {
    width: "50px",
    marginRight: "8px",
    borderRadius: "50%",
  },
  userName: {
    color: "white",
  },
  settingsIcon: {
    width: "50px",
    paddingLeft: "16px",
    cursor: "pointer",
  },
  userID: {
    fontSize: "14px",
  },
  chat: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  chatNav: {
    userSelect: "none",
    borderBottom: "2px solid #2c2e31",
    display: "flex",
    color: "white",
    justifyContent: "space-between",
  },
  chatHeader: {
    display: "flex",
    height: "60px",
    paddingLeft: "8px",
    alignItems: "center",
  },
  chatTitle: {
    margin: "0",
    paddingLeft: "8px",
    fontSize: "16px",
  },
  chatIcons: {
    display: "flex",
    alignItems: "center",
    marginRight: "16px",
  },
  searchBar: {
    marginLeft: "6px",
    background: "#202326",
    height: "30px",
    width: "150px",
    border: "0",
    borderRadius: "4px",
    outline: "0",
    padding: "8px",
    color: "#bbbbbb",
    "&:focus": {
      width: "250px",
    },
  },
  notificationIcon: {
    width: "30px",
    cursor: "pointer",
  },
  pinIcon: {
    width: "30px",
    margin: "0 8px",
    cursor: "pointer",
  },
  memberIcon: {
    width: "30px",
    cursor: "pointer",
  },
  chatInner: {
    display: "none",
    height: "100%",
  },
  messagesContainer: {
    padding: "15px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  messageSend: {
    marginTop: "auto",
    padding: "15px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  messageInput: {
    width: "100%",
    height: "40px",
    background: "#40454a",
    border: "0",
    borderRadius: "10px",
    outline: "0",
    fontSize: "15px",
    padding: "10px",
    color: "#bbbbbb",
    transition: "all 0.2s ease-in-out",
    "&:focus": {
      height: "100px",
    },
    resize: "none",
  },
  message: {
    display: "flex",
    flexDirection: "row",
    margin: "12px 0",
  },
  messageContent: {
    color: "#bbbbbb",
    border: "0",
    outline: "0",
    fontSize: "15px",
    paddingLeft: "10px",
    resize: "none",
    background: "none",
  },
  messageInfo: {
    display: "flex",
    flexDirection: "column",
  },
  userInfo: {
    paddingLeft: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  timeStamp: {
    marginLeft: "8px",
    color: "#777777",
    fontSize: "12px",
  },
  fileIcon: {
    width: "40px",
    marginRight: "16px",
    userSelect: "none",
    cursor: "pointer",
  },
  sendIcon: {
    width: "40px",
    marginLeft: "16px",
    userSelect: "none",
    cursor: "pointer",
  },
  members: {
    userSelect: "none",
    background: "#2f3236",
    width: "280px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "15px",
  },
  ticketList: {
    display: "flex",
    flexDirection: "column",
  },
  ticketItem: {
    border: "1px solid black",
    color: "black",
    padding: "24px",
    margin: "8px",
    background: "#42b680",
  },
  ticketInfo: {},
  ticketSeverity: {
    display: "flex",
    justifyContent: "center",
  },
  numAgents: {
    display: "flex",
    justifyContent: "center",
  },
  severityIndicator: {
    paddingLeft: "4px",
    color: "red",
  },
  agentsIndicator: {
    paddingLeft: "4px",
    color: "red",
  },
  maxRow: {
    display: "flex",
    flexDirection: "row",
  },
  midRow: {
    display: "flex",
    flexDirection: "row",
  },
  lowRow: {
    display: "flex",
    flexDirection: "row",
  },
});

const Dashboard = () => {
  const classes = useStyles();

  function displayChat() {
    $(".makeStyles-ticketList-1199").css("display", "none");
    $(".makeStyles-chatInner-1238").css("display", "flex");
  }

  $(".makeStyles-ticketItem-1149").on("click", function () {
    displayChat();
  });

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
              className={classes.icon}
              width="15px"
              src="https://image.flaticon.com/icons/png/512/120/120890.png"
              alt="dropdown icon"
            ></img>
          </nav>
          <div className={classes.channelListOuter}>
            <div className={classes.channelListInner}>
              <div className={classes.channelListHeader}>
                <img
                  className={classes.icon}
                  width="10px"
                  src="https://image.flaticon.com/icons/png/512/120/120890.png"
                  alt="dropdown icon"
                ></img>
                <h3 className={classes.channelDropdown}>Channels</h3>
              </div>
              <div className={classes.channelListContent}>
                <button className={classes.channelListItem}>
                  <div className={classes.channelListDiv}>
                    <span className={classes.hash}>#</span>
                    <h5 className={classes.channelName}>General</h5>
                  </div>
                </button>
                <button className={classes.channelListItem}>
                  <div className={classes.channelListDiv}>
                    <span className={classes.hash}>#</span>
                    <h5 className={classes.channelName}>Shipping</h5>
                  </div>
                </button>
                <button className={classes.channelListItem}>
                  <div className={classes.channelListDiv}>
                    <span className={classes.hash}>#</span>
                    <h5 className={classes.channelName}>Processing</h5>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={classes.userArea}>
            <img
              alt="User Icon"
              src="https://via.placeholder.com/100"
              className={classes.userIcon}
            ></img>
            <div className={classes.userName}>
              Sebastian Brear
              <div className={classes.userID}>#1234</div>
            </div>
            <img
              alt="Settings icon"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gear-1961574-1659804.png"
              className={classes.settingsIcon}
            ></img>
          </div>
        </div>
        <div className={classes.chat}>
          <nav className={classes.chatNav}>
            <div className={classes.chatHeader}>
              <span className={classes.hash}>#</span>
              <h2 className={classes.chatTitle}>General</h2>
            </div>
            <div className={classes.chatIcons}>
              <img
                alt="Notification Icon"
                className={classes.notificationIcon}
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png"
              ></img>
              <img
                alt="Pinned Messages Icon"
                className={classes.pinIcon}
                src="https://simpleicon.com/wp-content/uploads/pin.png"
              ></img>
              <img
                alt="Member List Toggle"
                className={classes.memberIcon}
                src="https://static.thenounproject.com/png/983470-200.png"
              ></img>
              <input
                className={classes.searchBar}
                placeholder="Search"
                type="text"
              ></input>
            </div>
          </nav>
          <ul className={classes.ticketList}>
            <li className={classes.serverityRow}>
              <ul className={classes.maxRow}>
                <li className={classes.ticketItem}>
                  <h1 className={classes.ticketTitle}>Cat stuck in tree</h1>
                  <summary className={classes.ticketInfo}>
                    <div className={classes.ticketSeverity}>
                      Severity:{" "}
                      <span className={classes.severityIndicator}>10</span>
                    </div>
                    <div className={classes.numAgents}>
                      Number of Agents Assigned:{" "}
                      <span className={classes.agentsIndicator}>0</span>
                    </div>
                  </summary>
                </li>
              </ul>
            </li>
            <li className={classes.serverityRow}>
              <ul className={classes.midRow}>
                <li className={classes.ticketItem}>
                  <h1 className={classes.ticketTitle}>Cat stuck in tree</h1>
                  <summary className={classes.ticketInfo}>
                    <div className={classes.ticketSeverity}>
                      Severity:{" "}
                      <span className={classes.severityIndicator}>6</span>
                    </div>
                    <div className={classes.numAgents}>
                      Number of Agents Assigned:{" "}
                      <span className={classes.agentsIndicator}>0</span>
                    </div>
                  </summary>
                </li>
              </ul>
            </li>
            <li className={classes.serverityRow}>
              <ul className={classes.lowRow}>
                <li className={classes.ticketItem}>
                  <h1 className={classes.ticketTitle}>Cat stuck in tree</h1>
                  <summary className={classes.ticketInfo}>
                    <div className={classes.ticketSeverity}>
                      Severity:{" "}
                      <span className={classes.severityIndicator}>2</span>
                    </div>
                    <div className={classes.numAgents}>
                      Number of Agents Assigned:{" "}
                      <span className={classes.agentsIndicator}>0</span>
                    </div>
                  </summary>
                </li>
              </ul>
            </li>
          </ul>
          <div className={classes.chatInner}>
            <div className={classes.messagesContainer}>
              <div className={classes.pastMessages}>
                <div className={classes.message}>
                  <img
                    alt="User Icon"
                    src="https://via.placeholder.com/100"
                    className={classes.userIcon}
                  ></img>
                  <div className={classes.messageInfo}>
                    <div className={classes.userInfo}>
                      <div className={classes.userName}>Sebastian Brear</div>
                      <div className={classes.timeStamp}>Today at 2:03 AM</div>
                    </div>
                    <div className={classes.messageContent}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
                <div className={classes.message}>
                  <img
                    alt="User Icon"
                    src="https://via.placeholder.com/100"
                    className={classes.userIcon}
                  ></img>
                  <div className={classes.messageInfo}>
                    <div className={classes.userInfo}>
                      <div className={classes.userName}>Sebastian Brear</div>
                      <div className={classes.timeStamp}>Today at 2:03 AM</div>
                    </div>
                    <div className={classes.messageContent}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
                <div className={classes.message}>
                  <img
                    alt="User Icon"
                    src="https://via.placeholder.com/100"
                    className={classes.userIcon}
                  ></img>
                  <div className={classes.messageInfo}>
                    <div className={classes.userInfo}>
                      <div className={classes.userName}>Sebastian Brear</div>
                      <div className={classes.timeStamp}>Today at 2:03 AM</div>
                    </div>
                    <div className={classes.messageContent}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.messageSend}>
                <img
                  className={classes.fileIcon}
                  alt="Attach file icon"
                  src="https://freeiconshop.com/wp-content/uploads/edd/plus-flat.png"
                ></img>
                <textarea
                  placeholder="Message #General"
                  className={classes.messageInput}
                  type="text"
                ></textarea>
                <img
                  className={classes.sendIcon}
                  alt="Send message icon"
                  src="https://icon-library.com/images/32c192cd9d.svg.svg"
                ></img>
              </div>
            </div>
            <div className={classes.members}>Test</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
