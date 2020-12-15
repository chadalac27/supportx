import React from "react";

function ServerList(props) {
  return (
    <div
      className={`smooth ${
        props.focus === null ? "serverListBegin" : "serverList"
      }`}
    >
      {props.data.map((server, i) => (
        <button
          className={`serverButton ${
            props.focus === String(i) ? "focusServer" : ""
          }`}
          index={i}
          key={i}
          onClick={props.action}
          data-id={server._id}
        >
          <img
            className="serverAvatar"
            alt="Server Avatar"
            src={server.avatarURL}
          ></img>
          {/* Consider only making visible on hover */}
          <span className="serverTooltip">{server.name}</span>
        </button>
      ))}
    </div>
  );
}

export default ServerList;
