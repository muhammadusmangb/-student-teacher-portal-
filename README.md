# Class Portal (React)

Student & Teacher portal, dark theme matching Saylani/SMIT app style.
Har feature apna alag page/route hai.

## Setup
```
npm install
npm start
```
Browser mein `http://localhost:3000` khulega.

## Structure
```
src/
  App.jsx                 -> routes (student/teacher)
  index.js                -> entry point
  components/
    Login.jsx              -> role select login
    Header.jsx              -> top avatar + feedback bar
    TabBar.jsx               -> bottom nav
    Icons.jsx                -> svg icons
  data/
    mockData.js              -> sample student/teacher data (replace with API calls)
  pages/student/
    StudentLayout.jsx         -> wraps all student pages + tab bar
    StudentHome.jsx            -> enrolled course card
    StudentDashboard.jsx        -> attendance + assignment summary
    StudentAttendance.jsx        -> attendance detail (separate page)
    StudentAssignments.jsx        -> assignment list (separate page)
    StudentQuiz.jsx                -> quiz list (separate page)
    StudentProgress.jsx             -> topics/courses progress (separate page)
    StudentPayment.jsx               -> fee/voucher info (separate page)
  pages/teacher/
    TeacherLayout.jsx
    TeacherHome.jsx
    TeacherStudents.jsx
    TeacherAssignments.jsx
  styles/theme.css           -> all colors/spacing (edit here to restyle)
```

## Login
Home page pe Student/Teacher toggle hai — koi bhi roll/ID + password daal kar login karein (abhi mock hai, real auth nahi hai). Login hone ke baad respective portal khulega.

## Connecting real data
`src/data/mockData.js` mein `STUDENT` aur `TEACHER` objects hain — inko apne backend API response se replace kar dein (fetch/axios call `useEffect` mein daal kar).
