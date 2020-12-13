import React, { useState, useEffect } from "react";
import ServerList from "./ServerList";
import ChannelList from "./ChannelList";
// import $ from "jquery";

const Dashboard = () => {
  // function displayChat(title) {
  //   $(".ticketList").css("display", "none");
  //   // UPDATE CHAT FROM SERVER HERE
  //   $(".chatInner").css("display", "flex");
  //   $(".chatTitle").text(title);
  // }
  // $(document).on("click", ".ticketItem", function () {
  //   displayChat($(this).children(":first").text());
  // });
  // $(document).on("click", ".backButton", function () {
  //   $(".chatInner").css("display", "none");
  //   // UPDATE TICKET LIST FROM SERVER HERE
  //   $(".ticketList").css("display", "flex");

  //   // Returns the chat title to the focused channel
  //   const channelList = $(".channelListContent").children();
  //   for (let i = 0; i < channelList.length; i++) {
  //     const classList = $(channelList[i]).attr("class").split(/\s+/);
  //     for (let j = 0; j < classList.length; j++) {
  //       if (classList[j] === "focusChannel") {
  //         $(".chatTitle").text($($($(channelList[i]).children(":first")).children()[1]).text());
  //         return;
  //       }
  //     }
  //   }
  // });
  // $(document).on("click", ".sendIcon", function (e) {
  //   e.stopImmediatePropagation();
  //   newMessage($(".messageInput").val());
  //   // STORE THE MESSAGE ON THE SERVER HERE
  // });
  // $(document).on("click", ".serverButton", function (e) {
  //   e.stopImmediatePropagation();
  //   const serverArray = $($(this).parent()).children();
  //   // Check if any server is focused
  //   for (let i = 0; i < serverArray.length; i++) {
  //     $(serverArray[i]).removeClass("focusServer");
  //   }
  //   $(this).addClass("focusServer");
  // });
  // $(document).on("click", ".channelListItem", function (e) {
  //   e.stopImmediatePropagation();
  //   const channelArray = $($(this).parent()).children();
  //   // Check if any server is focused
  //   for (let i = 0; i < channelArray.length; i++) {
  //     $(channelArray[i]).removeClass("focusChannel");
  //   }
  //   $(this).addClass("focusChannel");
  // });

  // function newMessage(input) {
  //   const message = $("<div>").addClass("message");
  //   const userIcon = $("<img>").attr({
  //     class: "userIcon",
  //     alt: "User Icon",
  //     // SOURCE NEEDS TO BE BROUGHT IN FROM SERVER OR DEFAULTED WITH RANDOM COLOUR
  //     src: "https://via.placeholder.com/100",
  //   });
  //   const messageInfo = $("<div>").addClass("messageInfo");
  //   const userInfo = $("<div>").addClass("userInfo");
  //   const userName = $("<div>").addClass("userName").text("Sebastian Brear");
  //   const timeStamp = $("<div>").addClass("timeStamp").text("Today at 2:03 AM");
  //   const messageContent = $("<div>").addClass("messageContent").text(input);

  //   userInfo.append(userName, timeStamp);
  //   messageInfo.append(userInfo, messageContent);
  //   message.append(userIcon, messageInfo);

  //   $(".pastMessages").append(message);
  // }

  const serverData = [
    { name: "Profile", channels: [] },
    { name: "Server 1", channels: ["General", "Processing"] },
    { name: "Server 2", channels: ["General", "Shipping"] },
    { name: "Server 3", channels: ["Processing", "Shipping"] },
    { name: "Add New Server", channels: [] },
  ];

  let currentServer = { name: "", channels: [] };

  const [focusServer, setFocusServer] = React.useState();

  function serverClick(e) {
    const serverIndex = e.target.getAttribute("index");
    setFocusServer(serverIndex);
    currentServer = serverData[serverIndex];
  }

  return (
    <div className="app">
      <ServerList action={serverClick} data={serverData} focus={focusServer} />
      <div className="chatOuter">
        <div className="channels">
          <nav className="nav">
            <h3 className="serverTitle">Server 1</h3>
            <img
              className="icon"
              width="15px"
              src="https://image.flaticon.com/icons/png/512/120/120890.png"
              alt="dropdown icon"
            ></img>
          </nav>
          <div className="channelListOuter">
            <ChannelList data={currentServer.channels} />
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
