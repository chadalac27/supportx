import React from "react";

function Messages(props) {
  if (props.ticketId == null) {
    return null;
  } else {
    const ticket = props.ticketData.filter(
      (element) => element._id === props.ticketId
    )[0];
    return (
      <div className="pastMessages">
        {ticket.messages.map((message, i) => (
          <div key={i} className="message">
            <img
              className="userIcon"
              alt="user Icon"
              src="https://via.placeholder.com/100"
            ></img>
            <div className="messageInfo">
              <div className="userInfo">
                <div className="userName">Sebastian Brear</div>
                <div className="timeStamp">Today at 2:03 AM</div>
              </div>
              <div className="messageContent">{message.message}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Messages;
