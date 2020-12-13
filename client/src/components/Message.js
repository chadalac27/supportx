import React from "react";

function Message(props) {

  return (
    <div className="message">
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
        <div className="messageContent">{props.text}</div>
      </div>
    </div>
  );
}

export default Message;
