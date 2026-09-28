import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
import { HomeIcon, GridIcon, WalletIcon, CapIcon, BookIcon } from "../../components/Icons";

const tabs = [
  { to: "/student", end: true, label: "Home", icon: <HomeIcon /> },
  { to: "/student/dashboard", label: "Dashboard", icon: <GridIcon /> },
  { to: "/student/payment", label: "Payment", icon: <WalletIcon /> },
  { to: "/student/quiz", label: "Quiz", icon: <CapIcon /> },
  { to: "/student/progress", label: "Progress", icon: <BookIcon /> }
];

export default function StudentLayout() {
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
