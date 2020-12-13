import React from "react";
import SeverityRow from "./SeverityRow";

const ticketData = [
  [
    {
      title: "Cat stuck in tree on fire in tornado",
      severity: "8",
      numAgents: "0",
    },
    { title: "Wife is coming home early", severity: "9", numAgents: "3" },
  ],
  [
    {
      title: "Cat stuck in tree on fire",
      severity: "5",
      numAgents: "0",
    },
    { title: "Internet is down", severity: "7", numAgents: "0" },
  ],
  [
    {
      title: "Cat stuck in tree",
      severity: "2",
      numAgents: "0",
    },
    {
      title: "No one will date me",
      severity: "0",
      numAgents: "8",
    },
  ],
];

function Chat(props) {
  const [currentTicket, setTicket] = React.useState([false, null]);

  // INITIALLY SETS THE TITLE AS THE NAME OF THE CHANNEL CLICKED ON
  let currentTitle = props.data[props.server].channels[props.channel];

  // PREVENTS 'UNDEFINED' FROM BEING THE TITLE WHEN CHANGING TO SERVERS WITH FEWER CHANNELS
  if (currentTitle == null) {
    currentTitle = "";
  }

  // RESETS THE STATE OF THE TITLE
  function backButton() {
    setTicket([false, null]);
  }

  return (
    <div className="chat">
      <nav className="chatNav">
        <div className="chatHeader">
          <span className="hash">#</span>
          <h2 className="chatTitle">{`${
            currentTicket[0] === false ? currentTitle : currentTicket[1]
          }`}</h2>
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
          <input className="searchBar" placeholder="Search" type="text"></input>
        </div>
      </nav>
      <ul className={`${currentTicket[0] ? "ticketListHide" : "ticketList"}`}>
        <SeverityRow key={0} set={setTicket} tickets={ticketData[0]} />
        <SeverityRow key={1} set={setTicket} tickets={ticketData[1]} />
        <SeverityRow key={2} set={setTicket} tickets={ticketData[2]} />
      </ul>
      <div className={`${currentTicket[0] ? "chatInner" : "chatInnerHide"}`}>
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
          <button onClick={backButton} className="backButton">
            Return to ticket list
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
