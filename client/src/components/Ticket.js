import React from "react";

function Ticket(props) {
  return (
    <li className="ticketItem">
      <h1 className="ticketTitle">{props.title}</h1>
      <summary className="ticketInfo">
        <div className="ticketSeverity">
          Severity: <span className="severityIndicator">{props.severity}</span>
        </div>
        <div className="numAgents">
          Number of Agents Assigned:
          <span className="agentsIndicator">{props.numAgents}</span>
        </div>
      </summary>
    </li>
  );
}

export default Ticket;
