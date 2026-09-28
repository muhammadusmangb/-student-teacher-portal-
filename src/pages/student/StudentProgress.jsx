import React from "react";
import { STUDENT } from "../../data/mockData";
import { BookIcon, CapIcon, ClockIcon } from "../../components/Icons";

function RingProgress({ pct }) {
  const r = 22, c = 2 * Math.PI * r;
  return (
    <svg width="56" height="56" viewBox="0 0 56 56">
      <circle cx="28" cy="28" r={r} stroke="#2A2A2A" strokeWidth="5" fill="none" />
      <circle
        cx="28" cy="28" r={r} stroke="var(--blue)" strokeWidth="5" fill="none"
        strokeDasharray={c} strokeDashoffset={c - (pct / 100) * c}
        strokeLinecap="round" transform="rotate(-90 28 28)"
      />
      <text x="28" y="32" textAnchor="middle" fontSize="12" fill="var(--blue)" fontWeight="700">{pct}%</text>
    </svg>
  );
}

export default function StudentProgress() {
  const s = STUDENT;
  return (
    <div>
      <div className="card">
        <div className="row">
          <div>
            <div className="stat-num">{s.totalTopics}</div>
            <div className="stat-lbl">Total Topics</div>
          </div>
          <div className="stat-icon" style={{ background: "#12301f", color: "var(--green)" }}><BookIcon /></div>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <div>
            <div className="stat-num">{s.completedTopics}</div>
            <div className="stat-lbl">Completed Topics</div>
          </div>
          <div className="stat-icon" style={{ background: "#2a1d3d", color: "var(--purple)" }}><CapIcon /></div>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <div>
            <div className="stat-num">{s.pendingTopics}</div>
            <div className="stat-lbl">Pending Topics</div>
          </div>
          <div className="stat-icon" style={{ background: "#3a1c1c", color: "var(--red)" }}><ClockIcon /></div>
        </div>
      </div>

      {s.courses.map((c, i) => (
        <div className="card" key={i}>
          <div className="row">
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{c.name}</div>
              <div className="muted" style={{ marginTop: 4 }}>Topics: {c.done}/{c.total}</div>
            </div>
            <RingProgress pct={Math.round((c.done / c.total) * 100)} />
          </div>
        </div>
      ))}
    </div>
  );
}
