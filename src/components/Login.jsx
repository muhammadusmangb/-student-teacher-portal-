import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(role);
    navigate(role === "student" ? "/student" : "/teacher");
  }

  return (
    <div className="app-shell">
      <form className="login-wrap" onSubmit={handleSubmit}>
        <div className="login-title">Class Portal</div>
        <div className="muted">Sign in to continue</div>

        <div className="role-toggle">
          <button type="button" className={role === "student" ? "active" : ""} onClick={() => setRole("student")}>
            Student
          </button>
          <button type="button" className={role === "teacher" ? "active" : ""} onClick={() => setRole("teacher")}>
            Teacher
          </button>
        </div>

        <input className="field" placeholder={role === "student" ? "Roll number" : "Teacher ID"} required />
        <input className="field" type="password" placeholder="Password" required />

        <button className="btn-primary" type="submit">
          Log in as {role === "student" ? "Student" : "Teacher"}
        </button>
      </form>
    </div>
  );
}
