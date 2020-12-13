import React from "react";
import ServerList from "./ServerList";
import ChannelList from "./ChannelList";
import ServerNav from "./ServerNav";
import Chat from "./Chat";

const serverData = [
  { name: "Profile", channels: [""] },
  { name: "Server 1", channels: ["General", "Processing"] },
  { name: "Server 2", channels: ["General", "Shipping"] },
  { name: "Server 3", channels: ["Processing", "Shipping"] },
  { name: "Add New Server", channels: [""] },
];

const Dashboard = () => {
  // CONTROLS STYLING WHEN A SERVER/CHANNEL IS FOCUSED
  const [focusServer, setFocusServer] = React.useState(0);
  const [focusChannel, setFocusChannel] = React.useState("");

  // CONTROLS OTHER ELEMENTS WHEN A SERVER/CHANNEL IS CLICKED
  const [currentChannelList, setCurrentChannelList] = React.useState(0);
  const [currentChannel, setCurrentChannel] = React.useState(0);

  function serverClick(e) {
    const serverIndex = e.target.getAttribute("index");
    setFocusServer(serverIndex);
    setCurrentChannelList(serverIndex);
  }

  function channelClick(e) {
    const channelIndex = e.currentTarget.getAttribute("index");
    setFocusChannel(channelIndex);
    setCurrentChannel(channelIndex);
  }

  return (
    <div className="app">
      <ServerList action={serverClick} data={serverData} focus={focusServer} />
      <div className="chatOuter">
        <div className="channels">
          <ServerNav data={serverData} focus={focusServer} />
          <div className="channelListOuter">
            <ChannelList
              action={channelClick}
              data={serverData}
              focus={currentChannelList}
              subfocus={currentChannel}
            />
          </div>
          <div className="userArea">
            <img
              alt="User Icon"
              src="https://via.placeholder.com/100"
              className="userIcon"
            ></img>
            <div className="userName">
              Sebastian Brear
              <div className="userID">#1234</div>
            </div>
            <img
              alt="Settings icon"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gear-1961574-1659804.png"
              className="settingsIcon"
            ></img>
          </div>
        </div>
        <Chat data={serverData} server={focusServer} channel={focusChannel} />
      </div>
    </div>
  );
};

export default Dashboard;
