import React from "react";
import { STUDENT } from "../../data/mockData";

export default function StudentAttendance() {
  const { present, total } = STUDENT.attendance;
  const pct = Math.round((present / total) * 100);

  return (
    <div>
      <div className="card">
        <div className="stat-num">{present}/{total}</div>
        <div className="stat-lbl">Classes attended</div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: pct + "%" }} />
        </div>
        <div className="muted" style={{ marginTop: 8 }}>{pct}% attendance</div>
      </div>

      <div className="section-title">Weekly schedule</div>
      <div className="card">
        {STUDENT.schedule.map((slot, i) => (
          <div className="list-row" key={i}>
            <span>{slot}</span>
            <span className="badge badge-green">Present</span>
          </div>
        ))}
      </div>
    </div>
  );
}
