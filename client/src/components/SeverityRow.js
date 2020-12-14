import React from "react";
import Ticket from "./Ticket";

function SeverityRow(props) {
  return (
    <li className="severityRow">
      <ul className="maxRow">
        {/* CONSIDER SORTING THE TICKETS BY SEVERITY (NOT MVP) */}

        {props.ticketData
          .filter((ticket) => ticket.channel === props.currentChannel)
          .map((ticket, i) => (
            <Ticket set={props.set} key={i} ticket={ticket} />
          ))}
      </ul>
    </li>
  );
}

export default SeverityRow;
