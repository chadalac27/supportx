import React from "react";
import SeverityRow from "./SeverityRow";
import Messages from "./Messages";
import API from "../utils/API";

// TICKET DATA SHOULD BE PASSED IN FROM THE SELECTED CHANNEL

function Chat(props) {
  const [currentMessage, setMessage] = React.useState("");

  // INITIALLY SETS THE TITLE AS THE NAME OF THE CHANNEL CLICKED ON
  let currentTitle = props.currentChannel;

  // PREVENTS 'UNDEFINED' FROM BEING THE TITLE WHEN CHANGING TO SERVERS WITH FEWER CHANNELS
  if (currentTitle == null) {
    currentTitle = "";
  }

  // RESETS THE STATE OF THE TITLE
  function backButton() {
    props.setTicket([false, null, null]);
  }

  function updateMessage(e) {
    setMessage(e.target.value);
  }

  function sendMessage(e) {
    if (currentMessage === "") {
      return;
    }
    let previousTickets = [...props.ticketData];
    let updatedTicket = props.ticketData.filter(
      (element) => element._id === props.currentTicket[2]
    )[0];
    let newMessage = {
      message: currentMessage,
      timeStamp: new Date(),
      senderName: props.user[0],
    };
    let ticketIndex = previousTickets.findIndex(
      (ticket) => ticket._id === props.currentTicket[2]
    );
    updatedTicket.messages.push(newMessage);
    API.updateTicketByID(props.currentTicket[2], {
      messages: updatedTicket.messages,
    }).then((res) => {
      previousTickets[ticketIndex] = res.data;
      props.setTicketData(previousTickets);
      setMessage("");
    });
  }

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`${props.currentChannel == null ? "none" : "chat"}`}>
      <nav className="chatNav">
        <div className="chatHeader">
          <span className="hash">#</span>
          <h2 className="chatTitle">{`${
            props.currentTicket[0] === false
              ? currentTitle
              : props.currentTicket[1]
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
      <ul className={`${props.currentTicket[0] ? "none" : "ticketList"}`}>
        <SeverityRow
          currentChannel={props.currentChannel}
          setTicket={props.setTicket}
          ticketData={props.ticketData}
        />
      </ul>
      <div className={`${props.currentTicket[0] ? "chatInner" : "none"}`}>
        <div className="messagesContainer">
          <Messages
            user={props.user}
            ticketData={props.ticketData}
            ticketId={props.currentTicket[2]}
          />
          <div className="messageSend">
            <button className="fileBtn">
              <img
                className="fileIcon"
                alt="Attach file icon"
                src="https://freeiconshop.com/wp-content/uploads/edd/plus-flat.png"
              ></img>
            </button>
            <form className="messageForm">
              <textarea
                onKeyDown={onEnterPress}
                value={currentMessage}
                onChange={updateMessage}
                placeholder={`Message #${props.currentTicket[1]}`}
                className="messageInput"
                type="text"
              ></textarea>
            </form>
            <button className="sendBtn" onClick={sendMessage}>
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
