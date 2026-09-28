import React from "react";
import { useNavigate } from "react-router-dom";
import { STUDENT } from "../../data/mockData";
import { ClockIcon, CapIcon } from "../../components/Icons";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const s = STUDENT;

  return (
    <div>
      <div className="card" onClick={() => navigate("/student/attendance")} style={{ cursor: "pointer" }}>
        <div className="row">
          <div>
            <div className="stat-num">{s.attendance.present}/{s.attendance.total}</div>
            <div className="stat-lbl">Attendance</div>
          </div>
          <div className="stat-icon" style={{ background: "#12301f", color: "var(--green)" }}>
            <ClockIcon />
          </div>
        </div>
      </div>

      <div className="card" onClick={() => navigate("/student/assignments")} style={{ cursor: "pointer" }}>
        <div className="row">
          <div>
            <div className="stat-num">{s.assignmentsDone}/{s.assignmentsTotal}</div>
            <div className="stat-lbl">Assignment</div>
          </div>
          <div className="stat-icon" style={{ background: "#2a1d3d", color: "var(--purple)" }}>
            <CapIcon />
          </div>
        </div>
      </div>

      <div className="section-title">Active Course</div>
      <div className="card-blue">
        <div className="row">
          <h2 style={{ margin: 0, fontSize: "1.3rem" }}>{s.batch}</h2>
          <span className="badge badge-blue">Enrolled</span>
        </div>

        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
          {s.schedule.map((slot, i) => (
            <div key={i} className="muted" style={{ background: "#15223a", padding: "10px 14px", borderRadius: 10 }}>
              {slot}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16 }}>
          <div className="row">
            <span className="muted">Progress</span>
            <span>{s.progress}% Completed</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: s.progress + "%" }} />
          </div>
        </div>

        <div className="row" style={{ marginTop: 16 }}>
          <span className="muted">Batch: {s.batchNo}</span>
          <span className="muted">Roll: {s.roll}</span>
        </div>
        <div className="row" style={{ marginTop: 8 }}>
          <span className="muted">Campus: {s.campus}</span>
          <span className="muted">City: {s.city}</span>
        </div>
      </div>
    </div>
  );
}
