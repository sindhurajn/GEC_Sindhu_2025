
import { Student } from "@/components/StudentTable";

// Mock Students Data
export const STUDENTS: Student[] = [
  {
    id: "1",
    name: "Alex Johnson",
    rollNo: "1001",
    class: "10",
    section: "A",
    attendancePercentage: 95,
    averageMarks: 85,
  },
  {
    id: "2",
    name: "Samantha Brown",
    rollNo: "1002",
    class: "10",
    section: "A",
    attendancePercentage: 88,
    averageMarks: 76,
  },
  {
    id: "3",
    name: "Michael Lee",
    rollNo: "1003",
    class: "10",
    section: "A",
    attendancePercentage: 92,
    averageMarks: 91,
  },
  {
    id: "4",
    name: "Emily Chen",
    rollNo: "1004",
    class: "10",
    section: "A",
    attendancePercentage: 97,
    averageMarks: 94,
  },
  {
    id: "5",
    name: "Daniel Martinez",
    rollNo: "1005",
    class: "10",
    section: "A",
    attendancePercentage: 79,
    averageMarks: 65,
  },
  {
    id: "6",
    name: "Olivia Wilson",
    rollNo: "1006",
    class: "10",
    section: "A",
    attendancePercentage: 82,
    averageMarks: 72,
  },
  {
    id: "7",
    name: "Ethan Taylor",
    rollNo: "1007",
    class: "10",
    section: "A",
    attendancePercentage: 68,
    averageMarks: 58,
  },
  {
    id: "8",
    name: "Sophia Garcia",
    rollNo: "1008",
    class: "10",
    section: "A",
    attendancePercentage: 90,
    averageMarks: 81,
  },
];

// Mock Attendance Data
export const ATTENDANCE_DATA = [
  { name: "Present", value: 85 },
  { name: "Absent", value: 15 },
];

// Mock Subjects Performance Data
export const SUBJECTS_PERFORMANCE = [
  { name: "Mathematics", value: 78 },
  { name: "Science", value: 85 },
  { name: "English", value: 92 },
  { name: "History", value: 74 },
  { name: "Art", value: 88 },
];

// Mock Monthly Attendance Data
export const MONTHLY_ATTENDANCE = [
  { name: "Jan", value: 92 },
  { name: "Feb", value: 88 },
  { name: "Mar", value: 95 },
  { name: "Apr", value: 90 },
  { name: "May", value: 85 },
  { name: "Jun", value: 80 },
];

// Mock Grades Distribution Data
export const GRADES_DISTRIBUTION = [
  { name: "A", value: 12 },
  { name: "B", value: 18 },
  { name: "C", value: 8 },
  { name: "D", value: 5 },
  { name: "F", value: 2 },
];

// Mock Student Marks Data for specific student
export type SubjectMark = {
  subject: string;
  assignments: number;
  quizzes: number;
  midterm: number;
  final: number;
  total: number;
  grade: string;
};

export type StudentMarks = {
  studentId: string;
  marks: SubjectMark[];
};

export const STUDENT_MARKS: StudentMarks[] = [
  {
    studentId: "1",
    marks: [
      {
        subject: "Mathematics",
        assignments: 85,
        quizzes: 78,
        midterm: 82,
        final: 88,
        total: 83,
        grade: "B+",
      },
      {
        subject: "Science",
        assignments: 92,
        quizzes: 88,
        midterm: 90,
        final: 94,
        total: 91,
        grade: "A",
      },
      {
        subject: "English",
        assignments: 88,
        quizzes: 92,
        midterm: 85,
        final: 90,
        total: 89,
        grade: "A-",
      },
      {
        subject: "History",
        assignments: 78,
        quizzes: 75,
        midterm: 72,
        final: 80,
        total: 76,
        grade: "C+",
      },
      {
        subject: "Art",
        assignments: 95,
        quizzes: 90,
        midterm: 88,
        final: 92,
        total: 91,
        grade: "A",
      },
    ],
  },
];

// Mock Attendance Records
export type AttendanceRecord = {
  date: string;
  status: "present" | "absent" | "late";
  subject?: string;
};

export type StudentAttendance = {
  studentId: string;
  records: AttendanceRecord[];
};

export const STUDENT_ATTENDANCE: StudentAttendance[] = [
  {
    studentId: "1",
    records: [
      { date: "2025-03-01", status: "present" },
      { date: "2025-03-02", status: "present" },
      { date: "2025-03-03", status: "present" },
      { date: "2025-03-04", status: "absent" },
      { date: "2025-03-05", status: "present" },
      { date: "2025-03-06", status: "present" },
      { date: "2025-03-07", status: "late" },
      { date: "2025-03-08", status: "present" },
      { date: "2025-03-09", status: "present" },
      { date: "2025-03-10", status: "present" },
      { date: "2025-03-11", status: "present" },
      { date: "2025-03-12", status: "present" },
      { date: "2025-03-13", status: "absent" },
      { date: "2025-03-14", status: "present" },
      { date: "2025-03-15", status: "present" },
      { date: "2025-03-16", status: "present" },
      { date: "2025-03-17", status: "present" },
      { date: "2025-03-18", status: "late" },
      { date: "2025-03-19", status: "present" },
      { date: "2025-03-20", status: "present" },
    ],
  },
];
