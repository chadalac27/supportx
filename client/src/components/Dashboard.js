import React from "react";
import ServerList from "./ServerList";
import ChannelList from "./ChannelList";
import ServerNav from "./ServerNav";
import Chat from "./Chat";

// DATA STRUCTURE RECEIVED FROM A SINGLE SERVER
let ticketData = [];
let channelData = [];

const serverData = [
  {
    name: "Server 1",
  },
  {
    name: "Server 2",
  },
];

const Dashboard = () => {
  const [currentServer, setServer] = React.useState(null);
  const [currentChannel, setChannel] = React.useState(null);

  function serverClick(e) {
    const serverIndex = e.currentTarget.getAttribute("index");
    setChannel(null);
    setServer(serverIndex);
    // API CALL TO RETRIEVE TICKET DATA FROM SERVER
    ticketData = [
      {
        agents: [
          {
            _id: "1234",
            username: "asda",
            avatarURL: "https://via.placeholder.com/100",
          },
        ],
        severity: "0",
        id: "34123421",
        title: "Cat in tree",
        messages: [
          {
            message: "sss",
            timeStamp: "sss",
            senderName: "sss",
          },
        ],
        channel: "General",
      },
      {
        agents: [
          {
            _id: "1234",
            username: "asda",
            avatarURL: "https://via.placeholder.com/100",
          },
        ],
        severity: "0",
        id: "34123421",
        title: "Cat in tree",
        messages: [
          {
            message: "sss",
            timeStamp: "sss",
            senderName: "sss",
          },
        ],
        channel: "Processing",
      },
      {
        agents: [
          {
            _id: "1234",
            username: "asda",
            avatarURL: "https://via.placeholder.com/100",
          },
        ],
        severity: "0",
        id: "34123421",
        title: "Cat in tree",
        messages: [
          {
            message: "sss",
            timeStamp: "sss",
            senderName: "sss",
          },
        ],
        channel: "General",
      },
    ];
    channelData = ticketData
      .map((ticket) => ticket.channel)
      .filter((name, i, array) => array.indexOf(name) === i);
  }

  function channelClick(e) {
    const channelIndex = e.currentTarget.getAttribute("index");
    setChannel(channelIndex);
    // POPULATE TICKETS WITH STORED DATA
  }

  return (
    <div className="app">
      <ServerList
        data={serverData}
        action={serverClick}
        focus={currentServer}
      />
      <div className={`${currentServer === null ? "none" : "chatOuter"}`}>
        <div className="channels">
          <ServerNav
            name={`${
              currentServer === null ? "" : serverData[currentServer].name
            }`}
          />
          <div className="channelListOuter">
            <ChannelList
              action={channelClick}
              data={channelData}
              focus={currentChannel}
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
        <Chat
          currentChannel={channelData[currentChannel]}
          ticketData={ticketData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
