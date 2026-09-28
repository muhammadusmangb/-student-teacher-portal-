import React from "react";
import { TEACHER } from "../../data/mockData";

export default function TeacherStudents() {
  return (
    <div>
      <div className="section-title">Batch {TEACHER.batchNo} · {TEACHER.batch}</div>
      <div className="card">
        {TEACHER.students.map((s, i) => (
          <div className="list-row" key={i}>
            <div>
              <div style={{ fontWeight: 600 }}>{s.name}</div>
              <div className="muted" style={{ fontSize: ".82rem" }}>Roll {s.roll} · {s.attendance} attendance</div>
            </div>
            <span className="badge badge-green">{s.progress}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
