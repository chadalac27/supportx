import React from "react";
import SeverityRow from "./SeverityRow";
import Messages from "./Messages";

// TICKET DATA SHOULD BE PASSED IN FROM THE SELECTED CHANNEL

function Chat(props) {
  const [currentTicket, setTicket] = React.useState([false, null, null]);

  // INITIALLY SETS THE TITLE AS THE NAME OF THE CHANNEL CLICKED ON
  let currentTitle = props.currentChannel;

  // PREVENTS 'UNDEFINED' FROM BEING THE TITLE WHEN CHANGING TO SERVERS WITH FEWER CHANNELS
  if (currentTitle == null) {
    currentTitle = "";
  }

  // RESETS THE STATE OF THE TITLE
  function backButton() {
    setTicket([false, null, null]);
  }

  return (
    <div className={`${props.currentChannel == null ? "none" : "chat"}`}>
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
      <ul className={`${currentTicket[0] ? "none" : "ticketList"}`}>
        <SeverityRow
          currentChannel={props.currentChannel}
          set={setTicket}
          ticketData={props.ticketData}
        />
      </ul>
      <div className={`${currentTicket[0] ? "chatInner" : "none"}`}>
        <div className="messagesContainer">
          <Messages ticketData={props.ticketData} ticketId={currentTicket[2]}/>
          <div className="pastMessages">
          </div>
          <div className="messageSend">
            <button className="fileBtn">
              <img
                className="fileIcon"
                alt="Attach file icon"
                src="https://freeiconshop.com/wp-content/uploads/edd/plus-flat.png"
              ></img>
            </button>
            <textarea
              placeholder={`Message #${currentTicket[1]}`}
              className="messageInput"
              type="text"
            ></textarea>
            <button className="sendBtn">
              <img
                className="sendIcon"
                alt="Send message icon"
                src="https://icon-library.com/images/32c192cd9d.svg.svg"
              ></img>
            </button>
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
