const students = [
  {
    name: "Emma Davis",
    email: "emma.davis@example.com",
    course: "Literature 301",
    lastActive: "11/05/2025",
    assignments: "9/10",
    attendanceRate: 95,
    status: "Active",
    grade: "A"
  },
  {
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    course: "History 201",
    lastActive: "12/05/2025",
    assignments: "10/10",
    attendanceRate: 98,
    status: "Active",
    grade: "A"
  },
  {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    course: "Mathematics 101",
    lastActive: "10/05/2025",
    assignments: "8/10",
    attendanceRate: 92,
    status: "Active",
    grade: "B"
  },
  {
    name: "Olivia Martin",
    email: "olivia.martin@example.com",
    course: "Biology 201",
    lastActive: "09/05/2025",
    assignments: "8/10",
    attendanceRate: 90,
    status: "Active",
    grade: "B"
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    course: "Physics 101",
    lastActive: "07/05/2025",
    assignments: "6/10",
    attendanceRate: 85,
    status: "Active",
    grade: "C"
  },
  {
    name: "David Wilson",
    email: "david.wilson@example.com",
    course: "Chemistry 102",
    lastActive: "28/04/2025",
    assignments: "4/10",
    attendanceRate: 65,
    status: "At-Risk",
    grade: "D"
  }
];

const container = document.getElementById("studentCards");
students.forEach(student => {
  const card = document.createElement("div");
  card.className = "col-md-4";
  card.innerHTML = `
    <div class="card p-3">
      <div class="d-flex justify-content-between align-items-center">
        <strong>${student.name}</strong>
        <span class="badge bg-${student.status === 'Active' ? 'success' : 'danger'}">${student.status}</span>
      </div>
      <small>${student.email}</small>
      <p class="mb-1">Course: ${student.course}</p>
      <p class="mb-1">Last Active: ${student.lastActive}</p>
      <p class="mb-1">Assignments: ${student.assignments}</p>
      <p class="mb-1">Attendance Rate: <strong>${student.attendanceRate}%</strong></p>
      <div class="text-end"><button class="btn btn-link">View Full Profile</button></div>
    </div>
  `;
  container.appendChild(card);
});