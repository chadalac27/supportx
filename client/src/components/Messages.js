import React from "react";
import API from "../utils/API";

function Messages(props) {
  const ticket = props.ticketData.filter(
    (element) => element._id === props.ticketId
  )[0];
  if (props.ticketId == null || ticket == null) {
    return null;
  } else {
    return (
      <div className="pastMessages">
        {ticket.messages.map((message, i) => {
          // Time stuff
          let timeStamp = message.timeStamp
            .split("T")[1]
            .split("Z")[0]
            .split(":");
          let label = "AM";
          if (parseInt(timeStamp[0]) > 11) {
            label = "PM";
          }
          if (parseInt(timeStamp[0] > 12)) {
            timeStamp[0] = timeStamp[0] - 12;
          }
          let convertedStamp = `${timeStamp[0]}:${timeStamp[1]}${label}`;
          let senderIcon = "https://www.seekpng.com/png/detail/46-462652_this-icon-for-gender-neutral-user-is-an.png";
          // Image stuff
          if (message.senderName !== "Customer") {
            senderIcon = message.avatarURL;
          }
          return (
            <div key={i} className="message">
              <img className="userIcon" alt="user Icon" src={senderIcon}></img>
              <div className="messageInfo">
                <div className="userInfo">
                  <div className="userName">{message.senderName}</div>
                  <div className="timeStamp">{convertedStamp}</div>
                </div>
                <div className="messageContent">{message.message}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Messages;
