import React from "react";
import { STUDENT } from "../../data/mockData";

export default function StudentQuiz() {
  return (
    <div>
      <div className="card-blue">
        <div className="row" style={{ alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.3rem" }}>⚠️</span>
          <div style={{ flex: 1, marginLeft: 10 }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Important Information</div>
            <ul className="muted" style={{ paddingLeft: 18, lineHeight: 1.7, margin: 0 }}>
              <li>Once started, quizzes must be completed in one session</li>
              <li>Switching tabs or leaving the window will be recorded</li>
              <li>Ensure you have a stable internet connection</li>
              <li>The quiz will open in fullscreen mode</li>
            </ul>
          </div>
        </div>
      </div>

      {STUDENT.quizzes.map((q, i) => (
        <div className="card" key={i}>
          <div className="row">
            <h3 style={{ margin: 0 }}>{q.name}</h3>
            <span className="badge badge-green">{q.status}</span>
          </div>
          <div className="muted" style={{ marginBottom: 14 }}>{q.topic}</div>

          <div className="row">
            <div>
              <div className="muted" style={{ fontSize: ".82rem" }}>Questions</div>
              <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{q.questions}</div>
            </div>
            <div>
              <div className="muted" style={{ fontSize: ".82rem" }}>Percentage</div>
              <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{q.percentage}%</div>
            </div>
          </div>

          <div style={{ marginTop: 12 }}>
            <div className="muted" style={{ fontSize: ".82rem" }}>Attempts</div>
            <div style={{ fontWeight: 700 }}>{q.attempts}</div>
          </div>

          <button className="btn-primary" style={{ marginTop: 14, background: "#2a2a2a", color: "var(--text-muted)" }} disabled>
            Completed
          </button>
        </div>
      ))}
    </div>
  );
}
