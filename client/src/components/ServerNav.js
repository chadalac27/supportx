import React from "react";

function ServerNav(props) {
  return (
    <nav className="nav">
      <h3 className="serverTitle">{props.name}</h3>
      <img
        className="icon"
        width="15px"
        src="https://image.flaticon.com/icons/png/512/120/120890.png"
        alt="dropdown icon"
      ></img>
    </nav>
  );
}

export default ServerNav;