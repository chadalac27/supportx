import React from "react";

function ChannelList(props) {
  const [focusChannel, setFocusChannel] = React.useState();

  function btnClick(e) {
    setFocusChannel(e.target.getAttribute("index"));
  }

  return (
    <div className="channelListInner">
      <div className="channelListHeader">
        <img
          className="icon"
          width="10px"
          src="https://image.flaticon.com/icons/png/512/120/120890.png"
          alt="dropdown icon"
        ></img>
        <h3 className="channelDropdown">Channels</h3>
      </div>
      <div className="channelListContent">
        {props.data[props.focus].channels.map((channel, i) => (
          <button
            index={i}
            key={i}
            className={`channelListItem ${
              focusChannel === String(i) ? "focusChannel" : ""
            }`}
            onClick={btnClick}
          >
            <div className="channelListDiv">
              <span className="hash">#</span>
              <h5 className="channelName">{channel}</h5>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChannelList;
