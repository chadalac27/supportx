import React from "react";

function ServerButton(props) {
  const [focusServer, setFocusServer] = React.useState();
  return (
    <button
      onClick={() => setFocusServer(props.name)}
      data-val={props.dataVal}
      className={`serverButton ${
        focusServer === props.name ? "focusServer" : ""
      }`}
    >
      {props.name}
    </button>
  );
}

export default ServerButton;
