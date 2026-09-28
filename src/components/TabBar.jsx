import React from "react";
import { NavLink } from "react-router-dom";

export default function TabBar({ items }) {
  return (
    <div className="tabbar">
      {items.map((it) => (
        <NavLink
          key={it.to}
          to={it.to}
          end={it.end}
          className={({ isActive }) => "tab" + (isActive ? " active" : "")}
        >
          <span className="tab-ic-wrap">{it.icon}</span>
          {it.label}
        </NavLink>
      ))}
    </div>
  );
}
