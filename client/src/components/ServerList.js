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
          } ${i === 0 ? "logoutButton" : ""} `}
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
                : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D"
            }`}
          ></img>
          {/* Consider only making visible on hover */}
          <span className="serverTooltip">{`${i === 0 ? "Logout" : ""}`}</span>
        </button>
      ))}
    </div>
  );
}

export default ServerList;
