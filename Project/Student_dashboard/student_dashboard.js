const ctx = document.getElementById("trendChart").getContext("2d");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Quiz 1", "Assignment 1", "Midterm", "Assignment 2"],
    datasets: [{
      label: "Score",
      data: [80, 95, 75, 88],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
      tension: 0.3,
      pointRadius: 5,
      pointHoverRadius: 7,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});