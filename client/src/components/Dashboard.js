import React, { useState, useEffect } from "react";
import ServerList from "./ServerList";
import ChannelList from "./ChannelList";
import ServerNav from "./ServerNav";

const Dashboard = () => {
  const serverData = [
    { name: "Profile", channels: [""] },
    { name: "Server 1", channels: ["General", "Processing"] },
    { name: "Server 2", channels: ["General", "Shipping"] },
    { name: "Server 3", channels: ["Processing", "Shipping"] },
    { name: "Add New Server", channels: [""] },
  ];

  // CONTROLS STYLING WHEN A SERVER/CHANNEL IS FOCUSED
  const [focusServer, setFocusServer] = React.useState(0);
  const [focusChannel, setFocusChannel] = React.useState("");

  // CONTROLS OTHER ELEMENTS WHEN A SERVER/CHANNEL IS CLICKED
  const [currentChannelList, setCurrentChannelList] = React.useState(0);
  const [currentChannel, setCurrentChannel] = React.useState(0);

  function serverClick(e) {
    const serverIndex = e.target.getAttribute("index");
    setFocusServer(serverIndex);
    setCurrentChannelList(serverIndex);
  }

  function channelClick(e) {
    const channelIndex = e.target.getAttribute("index");
    setFocusChannel(channelIndex);
    setCurrentChannel(channelIndex);
    console.log(channelIndex);
  }

  return (
    <div className="app">
      <ServerList action={serverClick} data={serverData} focus={focusServer} />
      <div className="chatOuter">
        <div className="channels">
          <ServerNav data={serverData} focus={focusServer} />
          <div className="channelListOuter">
            <ChannelList
              action={channelClick}
              data={serverData}
              focus={currentChannelList}
              subfocus={currentChannel}
            />
          </div>
          <div className="userArea">
            <img
              alt="User Icon"
              src="https://via.placeholder.com/100"
              className="userIcon"
            ></img>
            <div className="userName">
              Sebastian Brear
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

export default Dashboard;
