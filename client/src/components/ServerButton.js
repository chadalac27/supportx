import React, { useState } from "react";

function ServerButton(props) {
  return (
    <button
      data-val={props.dataVal}
      className="serverButton"
    >
      {props.name}
    </button>
  );
}

export default ServerButton;
