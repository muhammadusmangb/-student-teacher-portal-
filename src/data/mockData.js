export const STUDENT = {
  name: "Hamza Sheikh",
  roll: "884107",
  batch: "Web Designing",
  batchNo: 41,
  campus: "Gulshan Campus",
  city: "Karachi",
  progress: 18,
  totalTopics: 20,
  completedTopics: 3,
  pendingTopics: 17,
  attendance: { present: 4, total: 10 },
  assignmentsDone: 1,
  assignmentsTotal: 6,
  schedule: [
    "Tue 04:00 PM - 06:00 PM",
    "Thu 04:00 PM - 06:00 PM"
  ],
  courses: [
    { name: "Web Designing", done: 3, total: 20, status: "progress" }
  ],
  quizzes: [
    { name: "HTML Basics (Quiz-1)", topic: "Web Designing", status: "Passed", questions: 15, percentage: 60, attempts: "1/3" }
  ],
  assignments: [
    { title: "Create a Personal Profile Page", due: "05 Oct 2026", status: "Pending" },
    { title: "Basic HTML Structure", due: "27 Sep 2026", status: "Submitted" }
  ],
  fees: [
    { month: "Sep 2026", due: "08-Sep-2026", amount: 1000, type: "Monthly", status: "Paid", voucherId: "202609884107" }
  ]
};

export const TEACHER = {
  name: "Miss Sana Rehman",
  batch: "Web Designing",
  batchNo: 41,
  totalStudents: 14,
  pendingReview: 3,
  students: [
    { name: "Hamza Sheikh", roll: "884107", progress: 18, attendance: "4/10" },
    { name: "Faryal Nadeem", roll: "884109", progress: 25, attendance: "6/10" },
    { name: "Bilal Anwar", roll: "884112", progress: 10, attendance: "3/10" }
  ],
  assignments: [
    { title: "Create a Personal Profile Page", submitted: 5, total: 14, due: "05 Oct 2026" },
    { title: "Basic HTML Structure", submitted: 9, total: 14, due: "27 Sep 2026" }
  ]
};
