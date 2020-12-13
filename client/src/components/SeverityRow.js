import React from "react";
import Ticket from "./Ticket";

function SeverityRow(props) {
  return (
    <li className="severityRow">
      <ul className="maxRow">
        {/* CONSIDER SORTING THE TICKETS BY SEVERITY (NOT MVP) */}
        {props.tickets.map((ticket, i) => (
          <Ticket
            set={props.set}
            key={i}
            title={ticket.title}
            severity={ticket.severity}
            numAgents={ticket.numAgents}
          />
        ))}
      </ul>
    </li>
  );
}

export default SeverityRow;
