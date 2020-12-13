import { connection } from "mongoose";
import React from "react";

function ServerList(props) {
  return (
    <div className="serverList">
      {props.data.map((server, i) => (
        <button
          className={`serverButton ${
            props.focus === String(i) ? "focusServer" : ""
          }`}
          index={i}
          key={i}
          onClick={props.action}
        >
          {server.name}
        </button>
      ))}
    </div>
  );
}

export default ServerList;
