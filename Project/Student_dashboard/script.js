// Student Status Chart
new Chart(document.getElementById('statusChart'), {
  type: 'doughnut',
  data: {
    labels: ['Active', 'At Risk', 'Inactive'],
    datasets: [{
      data: [5, 1, 0],
      backgroundColor: ['#10b981', '#ef4444', '#d1d5db']
    }]
  }
});

// Grade Distribution Chart
new Chart(document.getElementById('gradeChart'), {
  type: 'pie',
  data: {
    labels: ['Grade B', 'Grade C', 'Grade D'],
    datasets: [{
      data: [3, 1, 1],
      backgroundColor: ['#10b981', '#f59e0b', '#3b82f6']
    }]
  }
});

// Attendance Overview Chart
new Chart(document.getElementById('attendanceChart'), {
  type: 'doughnut',
  data: {
    labels: ['Present', 'Late', 'Absent'],
    datasets: [{
      data: [117, 19, 14],
      backgroundColor: ['#10b981', '#f59e0b', '#ef4444']
    }]
  }
});

// Performance Bar Chart
new Chart(document.getElementById('performanceChart'), {
  type: 'bar',
  data: {
    labels: ['Quiz 1', 'Assignment 1', 'Midterm', 'Quiz 2', 'Assignment 2'],
    datasets: [{
      label: 'Scores',
      data: [78, 76, 72, 74, 79],
      backgroundColor: '#3b82f6'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

//Search option
document.getElementById("searchInput").addEventListener("keyup", function () {
  const filter = this.value.toLowerCase();
  const listItems = document.querySelectorAll("#studentList li");

  listItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "" : "none";
  });
});