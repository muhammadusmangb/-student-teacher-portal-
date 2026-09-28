import React from "react";
import { TEACHER } from "../../data/mockData";
import { UsersIcon, DocIcon } from "../../components/Icons";

export default function TeacherHome() {
  return (
    <div>
      <div className="card">
        <div className="row">
          <div>
            <div className="stat-num">{TEACHER.totalStudents}</div>
            <div className="stat-lbl">Students</div>
          </div>
          <div className="stat-icon" style={{ background: "#12301f", color: "var(--green)" }}><UsersIcon /></div>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <div>
            <div className="stat-num">{TEACHER.pendingReview}</div>
            <div className="stat-lbl">Pending review</div>
          </div>
          <div className="stat-icon" style={{ background: "#2a1d3d", color: "var(--purple)" }}><DocIcon /></div>
        </div>
      </div>

      <div className="section-title">{TEACHER.batch} · Batch {TEACHER.batchNo}</div>
      <div className="card">
        {TEACHER.assignments.map((a, i) => (
          <div className="list-row" key={i}>
            <div>
              <div style={{ fontWeight: 600 }}>{a.title}</div>
              <div className="muted" style={{ fontSize: ".82rem" }}>Due {a.due}</div>
            </div>
            <span className="muted">{a.submitted}/{a.total} submitted</span>
          </div>
        ))}
      </div>
    </div>
  );
}
