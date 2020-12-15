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
          className={`${props.focus === String(i) ? "focusServer" : ""} ${
            i === 0 ? "" : "serverButton"
          } ${props.load === false && i === 0 ? "none" : "logoutButton"} `}
          index={i}
          key={i}
          onClick={props.action}
          data-id={server._id}
        >
          <img
            className="serverAvatar"
            alt="Server Avatar"
            src={`${
              server.avatarURL.length > 0
                ? server.avatarURL
                : "https://via.placeholder.com/100"
            }`}
          ></img>
          {/* Consider only making visible on hover */}
          <span className="serverTooltip">{server.name}</span>
        </button>
      ))}
    </div>
  );
}

export default ServerList;
