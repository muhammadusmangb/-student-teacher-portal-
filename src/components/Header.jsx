import React from "react";
import { SunIcon, FeedbackIcon } from "./Icons";

export default function Header({ name }) {
  return (
    <div className="header">
      <div className="avatar" />
      <div style={{ display: "flex", gap: 10 }}>
        <button className="icon-btn" style={{ padding: 10 }}><SunIcon /></button>
        <button className="icon-btn"><FeedbackIcon /> Feedback</button>
      </div>
    </div>
  );
}
