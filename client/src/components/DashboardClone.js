import React, { useContext } from "react";
import ServerList from "./ServerList";
import ChannelList from "./ChannelList";
import ServerNav from "./ServerNav";
import Chat from "./Chat";
import API from "../utils/API";
import {AuthContext} from "../Context/AuthContext";



// DATA STRUCTURE RECEIVED FROM A SINGLE SERVER
let channelData = [];
let serverApi = [];
let ticketApi = [];



const DashboardClone = () => {
  const [ticketData, setTicketData] = React.useState(ticketApi);
  const authContext = useContext(AuthContext)
    API.getCompanyByUserID(authContext.agent._id).then((res) => {
    res.data.forEach((server) => {
      serverApi.push(server);
    })
    console.log("serverAPI", serverApi);
    setTicketData(ticketApi);
    
  }
  )
  
  console.log("componenets/test/authContext", authContext);
  const [currentServer, setServer] = React.useState(null);
  const [currentChannel, setChannel] = React.useState(null);
  const [currentTicket, setTicket] = React.useState([false, null, null]);
  const [load, setLoad] = React.useState(false);

  function serverClick(e) {
    const serverIndex = e.currentTarget.getAttribute("index");
    const serverListNode = e.currentTarget.parentNode;
    API.getTicketByCompanyID(e.currentTarget.dataset.id).then((res) => {
      if (load === false) {
        serverListNode.style.visibility = "hidden";
        serverListNode.style.opacity = "0";
        setTimeout(function () {
          setChannel(null);
          setServer(serverIndex);
          channelData = res.data
            .map((ticket) => ticket.channel)
            .filter((name, i, array) => array.indexOf(name) === i);
          setTicketData(res.data);
          setTimeout(function () {
            setLoad(true);
            serverListNode.style.visibility = "visible";
            serverListNode.style.opacity = "1";
          }, 500);
        }, 500);
        return;
      }
      setChannel(null);
      setServer(serverIndex);
      // API CALL TO RETRIEVE TICKET DATA FROM SERVER
      // setTicketData()
      channelData = res.data
        .map((ticket) => ticket.channel)
        .filter((name, i, array) => array.indexOf(name) === i);
      setTicketData(res.data);
    });
  }

  function channelClick(e) {
    const channelIndex = e.currentTarget.getAttribute("index");
    setChannel(channelIndex);
    setTicket([false, null, null]);
    // POPULATE TICKETS WITH STORED DATA
  }

  return (
    <div className="app">
      <ServerList
        load={load}
        data={serverApi}
        action={serverClick}
        focus={currentServer}
      />
      <div
        className={`${currentServer === null ? "none" : "chatOuter"} ${
          load === false ? "hide" : ""
        }`}
      >
        <div className="channels">
          <ServerNav
            name={`${
              currentServer === null ? "" : serverApi[currentServer].name
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
            {authContext.agent.username}
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
          currentTicket={currentTicket}
          setTicket={setTicket}
          ticketData={ticketData}
          setTicketData={setTicketData}
        />
      </div>
    </div>
  );
};

export default DashboardClone;
