import React, { useState, useEffect } from "react";
import ServerButton from "./ServerButton";
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

  return (
    <div class="app">
      <div class="serverList">
        <ServerButton name="Profile" dataVal="profile" />
        <ServerButton name="Server 1" dataVal="1" />
        <ServerButton name="Server 2" dataVal="2" />
        <ServerButton name="Server 3" dataVal="3" />
        <ServerButton name="Server 4" dataVal="4" />
        <ServerButton name="Add New Server" dataVal="newServer" />
      </div>
      <div class="chatOuter">
        <div class="channels">
          <nav class="nav">
            <h3 class="serverTitle">Server 1</h3>
            <img
              class="icon"
              width="15px"
              src="https://image.flaticon.com/icons/png/512/120/120890.png"
              alt="dropdown icon"
            ></img>
          </nav>
          <div class="channelListOuter">
            <div class="channelListInner">
              <div class="channelListHeader">
                <img
                  class="icon"
                  width="10px"
                  src="https://image.flaticon.com/icons/png/512/120/120890.png"
                  alt="dropdown icon"
                ></img>
                <h3 class="channelDropdown">Channels</h3>
              </div>
              <div class="channelListContent">
                <button class="channelListItem">
                  <div class="channelListDiv">
                    <span class="hash">#</span>
                    <h5 class="channelName">General</h5>
                  </div>
                </button>
                <button class="channelListItem">
                  <div class="channelListDiv">
                    <span class="hash">#</span>
                    <h5 class="channelName">Shipping</h5>
                  </div>
                </button>
                <button class="channelListItem">
                  <div class="channelListDiv">
                    <span class="hash">#</span>
                    <h5 class="channelName">Processing</h5>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="userArea">
            <img
              alt="User Icon"
              src="https://via.placeholder.com/100"
              class="userIcon"
            ></img>
            <div class="userName">
              Sebastian Brear
              <div class="userID">#1234</div>
            </div>
            <img
              alt="Settings icon"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gear-1961574-1659804.png"
              class="settingsIcon"
            ></img>
          </div>
        </div>
        <div class="chat">
          <nav class="chatNav">
            <div class="chatHeader">
              <span class="hash">#</span>
              <h2 class="chatTitle">General</h2>
            </div>
            <div class="chatIcons">
              <img
                alt="Notification Icon"
                class="notificationIcon"
                src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png"
              ></img>
              <img
                alt="Pinned Messages Icon"
                class="pinIcon"
                src="https://simpleicon.com/wp-content/uploads/pin.png"
              ></img>
              <img
                alt="Member List Toggle"
                class="memberIcon"
                src="https://static.thenounproject.com/png/983470-200.png"
              ></img>
              <input class="searchBar" placeholder="Search" type="text"></input>
            </div>
          </nav>
          <ul class="ticketList">
            <li class="severityRow">
              <ul class="maxRow">
                <li class="ticketItem">
                  <h1 class="ticketTitle">
                    Cat stuck in tree on fire in tornado
                  </h1>
                  <summary class="ticketInfo">
                    <div class="ticketSeverity">
                      Severity: <span class="severityIndicator">10</span>
                    </div>
                    <div class="numAgents">
                      Number of Agents Assigned:{" "}
                      <span class="agentsIndicator">0</span>
                    </div>
                  </summary>
                </li>
              </ul>
            </li>
            <li class="severityRow">
              <ul class="midRow">
                <li class="ticketItem">
                  <h1 class="ticketTitle">Cat stuck in tree on fire</h1>
                  <summary class="ticketInfo">
                    <div class="ticketSeverity">
                      Severity: <span class="severityIndicator">6</span>
                    </div>
                    <div class="numAgents">
                      Number of Agents Assigned:{" "}
                      <span class="agentsIndicator">0</span>
                    </div>
                  </summary>
                </li>
              </ul>
            </li>
            <li class="severityRow">
              <ul class="lowRow">
                <li class="ticketItem">
                  <h1 class="ticketTitle">Cat stuck in tree</h1>
                  <summary class="ticketInfo">
                    <div class="ticketSeverity">
                      Severity: <span class="severityIndicator">2</span>
                    </div>
                    <div class="numAgents">
                      Number of Agents Assigned:{" "}
                      <span class="agentsIndicator">0</span>
                    </div>
                  </summary>
                </li>
              </ul>
            </li>
          </ul>
          <div class="chatInner">
            <div class="messagesContainer">
              <div class="pastMessages"></div>
              <div class="messageSend">
                <img
                  class="fileIcon"
                  alt="Attach file icon"
                  src="https://freeiconshop.com/wp-content/uploads/edd/plus-flat.png"
                ></img>
                <textarea
                  placeholder="Message #General"
                  class="messageInput"
                  type="text"
                ></textarea>
                <img
                  class="sendIcon"
                  alt="Send message icon"
                  src="https://icon-library.com/images/32c192cd9d.svg.svg"
                ></img>
              </div>
            </div>
            <div class="sidebar">
              <button class="backButton">Return to ticket list</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
