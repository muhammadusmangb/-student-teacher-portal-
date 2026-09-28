import React, { useState } from "react";
import { TEACHER } from "../../data/mockData";

export default function TeacherAssignments() {
  const [list, setList] = useState(TEACHER.assignments);
  const [title, setTitle] = useState("");

  function addAssignment(e) {
    e.preventDefault();
    if (!title.trim()) return;
    setList([{ title, submitted: 0, total: TEACHER.totalStudents, due: "TBD" }, ...list]);
    setTitle("");
  }

  return (
    <div>
      <div className="card">
        <div className="section-title" style={{ marginTop: 0 }}>Post a new assignment</div>
        <form onSubmit={addAssignment} style={{ display: "flex", gap: 8 }}>
          <input
            className="field" style={{ margin: 0, flex: 1 }}
            placeholder="Assignment title" value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="btn-primary" style={{ width: "auto", padding: "0 18px" }} type="submit">Post</button>
        </form>
      </div>

      <div className="section-title">All assignments</div>
      <div className="card">
        {list.map((a, i) => (
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
