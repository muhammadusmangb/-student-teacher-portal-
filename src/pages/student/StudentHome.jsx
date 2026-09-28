import React from "react";
import { useNavigate } from "react-router-dom";
import { STUDENT } from "../../data/mockData";

export default function StudentHome() {
  const navigate = useNavigate();
  const s = STUDENT;

  return (
    <div>
      <div className="row" style={{ gap: 12, marginBottom: 16 }}>
        <input className="field" style={{ margin: 0 }} placeholder="Search Course" />
        <span className="badge badge-blue" style={{ whiteSpace: "nowrap" }}>Enrolled</span>
      </div>

      <div className="card-blue">
        <div className="row">
          <h2 style={{ margin: 0, fontSize: "1.3rem" }}>{s.batch}</h2>
          <span className="badge badge-blue">Enrolled</span>
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

        <button className="btn-primary" style={{ marginTop: 16 }} onClick={() => navigate("/student/dashboard")}>
          View Details
        </button>
      </div>
    </div>
  );
}
