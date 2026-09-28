import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
import { HomeIcon, UsersIcon, DocIcon } from "../../components/Icons";

const tabs = [
  { to: "/teacher", end: true, label: "Home", icon: <HomeIcon /> },
  { to: "/teacher/students", label: "Students", icon: <UsersIcon /> },
  { to: "/teacher/assignments", label: "Assignments", icon: <DocIcon /> }
];

export default function TeacherLayout() {
  return (
    <div className="app-shell">
      <Header />
      <div className="page">
        <Outlet />
      </div>
      <TabBar items={tabs} />
    </div>
  );
}
