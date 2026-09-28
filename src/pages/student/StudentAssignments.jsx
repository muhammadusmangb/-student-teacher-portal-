import React from "react";
import { STUDENT } from "../../data/mockData";

const badgeClass = (status) => (status === "Pending" ? "badge-blue" : "badge-green");

export default function StudentAssignments() {
  return (
    <div>
      <div className="section-title">Your assignments</div>
      <div className="card">
        {STUDENT.assignments.map((a, i) => (
          <div className="list-row" key={i}>
            <div>
              <div style={{ fontWeight: 600 }}>{a.title}</div>
              <div className="muted" style={{ fontSize: ".82rem" }}>
                Due {a.due}{a.grade ? ` · Grade ${a.grade}` : ""}
              </div>
            </div>
            <span className={"badge " + badgeClass(a.status)}>{a.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
