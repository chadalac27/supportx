import React from "react";

function Ticket(props) {
  function selectTicket() {
    props.set([true, props.ticket.title, props.ticket._id]);
  }

  return (
    <li className="ticketItem">
      <button
        onClick={selectTicket}
        className="ticketBtn"
        id={`${props.ticket._id}`}
      >
        <h1 className="ticketTitle">{props.ticket.title}</h1>
        <summary className="ticketInfo">
          <div className="ticketSeverity">
            Severity:
            <span className="severityIndicator">{props.ticket.severity}</span>
          </div>
          <div className="numAgents">
            Number of Agents Assigned:
            <span className="agentsIndicator">
              {props.ticket.agents.length}
            </span>
          </div>
        </summary>
      </button>
    </li>
  );
}

export default Ticket;
