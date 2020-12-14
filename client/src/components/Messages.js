import React from "react";

function Messages(props) {
  if (props.ticketId == null) {
    return null;
  } else {
    const ticket = props.ticketData.filter(
      (element) => element._id === props.ticketId
    )[0];
    console.log(ticket);
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
          let senderIcon = "https://via.placeholder.com/100";
          // Image stuff
          if (message.senderName !== "Customer") {
            let agent = ticket.agents.filter(
              (element) => element.username === message.senderName
            )[0];
            senderIcon = agent.avatarURL;
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
