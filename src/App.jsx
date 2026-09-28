import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";

import StudentLayout from "./pages/student/StudentLayout";
import StudentHome from "./pages/student/StudentHome";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentAttendance from "./pages/student/StudentAttendance";
import StudentAssignments from "./pages/student/StudentAssignments";
import StudentQuiz from "./pages/student/StudentQuiz";
import StudentProgress from "./pages/student/StudentProgress";
import StudentPayment from "./pages/student/StudentPayment";

import TeacherLayout from "./pages/teacher/TeacherLayout";
import TeacherHome from "./pages/teacher/TeacherHome";
import TeacherStudents from "./pages/teacher/TeacherStudents";
import TeacherAssignments from "./pages/teacher/TeacherAssignments";

export default function App() {
  const [role, setRole] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onLogin={setRole} />} />

        <Route path="/student" element={role ? <StudentLayout /> : <Navigate to="/" />}>
          <Route index element={<StudentHome />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="attendance" element={<StudentAttendance />} />
          <Route path="assignments" element={<StudentAssignments />} />
          <Route path="quiz" element={<StudentQuiz />} />
          <Route path="progress" element={<StudentProgress />} />
          <Route path="payment" element={<StudentPayment />} />
        </Route>

        <Route path="/teacher" element={role ? <TeacherLayout /> : <Navigate to="/" />}>
          <Route index element={<TeacherHome />} />
          <Route path="students" element={<TeacherStudents />} />
          <Route path="assignments" element={<TeacherAssignments />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
