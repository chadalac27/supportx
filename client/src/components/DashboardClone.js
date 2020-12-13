import React, { useState, useEffect } from "react";
import ServerList from "./ServerList";
import ChannelList from "./ChannelList";
import API from "../utils/API";
// import $ from "jquery";

const DashboardClone = () => {
  

  const serverData = [
    { name: "Profile", channels: [""] },
    { name: "Server 1", channels: ["General", "Processing"] },
    { name: "Server 2", channels: ["General", "Shipping"] },
    { name: "Server 3", channels: ["Processing", "Shipping"] },
    { name: "Add New Server", channels: [""] },
  ];

  const [userState, setUser] = React.useState({});
  const [focusServer, setFocusServer] = React.useState();
  const [currentChannels, setCurrentChannels] = React.useState(0);

  function serverClick(e) {
    const serverIndex = e.target.getAttribute("index");
    setFocusServer(serverIndex);
    setCurrentChannels(serverIndex)
  }

  useEffect(() => {
    loadUser()
  }, []);

  function loadUser(){
    API.getUserByID("5fd2ead7b75ded58f0e43cb2")
    .then(res => {
      setUser(res.data);
    })
  }

  function loadCompanies(){
    
  }
  
  return (
    <div className="app">
      <ServerList action={serverClick} data={serverData} focus={focusServer} />
      <div className="chatOuter">
        <div className="channels">
          <nav className="nav">
            <h3 className="serverTitle">TEST 1</h3>
            <img
              className="icon"
              width="15px"
              src="https://image.flaticon.com/icons/png/512/120/120890.png"
              alt="dropdown icon"
            ></img>
          </nav>
          <div className="channelListOuter">
            <ChannelList data={serverData} focus={currentChannels} />
          </div>
          <div className="userArea">
            <img
              alt="User Icon"
              src="https://via.placeholder.com/100"
              className="userIcon"
            ></img>
            <div className="userName">
              {/* DBG-REF */}
              {userState.username}
              <div className="userID">#1234</div>
            </div>
            <img
              alt="Settings icon"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gear-1961574-1659804.png"
              className="settingsIcon"
            ></img>
          </div>
        </div>
        <div className="chat">
          <nav className="chatNav">
            <div className="chatHeader">
              <span className="hash">#</span>
              <h2 className="chatTitle">General</h2>
            </div>
            <div className="chatIcons">
              <img
                alt="Notification Icon"
                className="notificationIcon"
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png"
              ></img>
              <img
                alt="Pinned Messages Icon"
                className="pinIcon"
                src="https://simpleicon.com/wp-content/uploads/pin.png"
              ></img>
              <img
                alt="Member List Toggle"
                className="memberIcon"
                src="https://static.thenounproject.com/png/983470-200.png"
              ></img>
              <input
                className="searchBar"
                placeholder="Search"
                type="text"
              ></input>
            </div>
          </nav>
          <ul className="ticketList">
            <li className="severityRow">
              <ul className="maxRow">
                <li className="ticketItem">
                  <h1 className="ticketTitle">
                    Cat stuck in tree on fire in tornado
                  </h1>
                  <summary className="ticketInfo">
                    <div className="ticketSeverity">
                      Severity: <span className="severityIndicator">10</span>
                    </div>
                    <div className="numAgents">
                      Number of Agents Assigned:{" "}
                      <span className="agentsIndicator">0</span>
                    </div>
                  </summary>
                </li>
              </ul>
            </li>
            <li className="severityRow">
              <ul className="midRow">
                <li className="ticketItem">
                  <h1 className="ticketTitle">Cat stuck in tree on fire</h1>
                  <summary className="ticketInfo">
                    <div className="ticketSeverity">
                      Severity: <span className="severityIndicator">6</span>
                    </div>
                    <div className="numAgents">
                      Number of Agents Assigned:{" "}
                      <span className="agentsIndicator">0</span>
                    </div>
                  </summary>
                </li>
              </ul>
            </li>
            <li className="severityRow">
              <ul className="lowRow">
                <li className="ticketItem">
                  <h1 className="ticketTitle">Cat stuck in tree</h1>
                  <summary className="ticketInfo">
                    <div className="ticketSeverity">
                      Severity: <span className="severityIndicator">2</span>
                    </div>
                    <div className="numAgents">
                      Number of Agents Assigned:{" "}
                      <span className="agentsIndicator">0</span>
                    </div>
                  </summary>
                </li>
              </ul>
            </li>
          </ul>
          <div className="chatInner">
            <div className="messagesContainer">
              <div className="pastMessages"></div>
              <div className="messageSend">
                <img
                  className="fileIcon"
                  alt="Attach file icon"
                  src="https://freeiconshop.com/wp-content/uploads/edd/plus-flat.png"
                ></img>
                <textarea
                  placeholder="Message #General"
                  className="messageInput"
                  type="text"
                ></textarea>
                <img
                  className="sendIcon"
                  alt="Send message icon"
                  src="https://icon-library.com/images/32c192cd9d.svg.svg"
                ></img>
              </div>
            </div>
            <div className="sidebar">
              <button className="backButton">Return to ticket list</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardClone;
