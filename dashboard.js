// Line Chart (Problem Solving Trends)
var ctx1 = document.getElementById("lineChart").getContext("2d");
new Chart(ctx1, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Problems Solved",
            data: [50, 70, 80, 120, 150, 180],
            borderColor: "blue",
            fill: false
        }]
    }
});

// Bar Chart (Difficulty Breakdown)
var ctx2 = document.getElementById("barChart").getContext("2d");
new Chart(ctx2, {
    type: "bar",
    data: {
        labels: ["Easy", "Medium", "Hard"],
        datasets: [{
            label: "Questions Solved",
            data: [120, 80, 30],
            backgroundColor: ["green", "orange", "red"]
        }]
    }
});

// Progress Completion Pie Chart
var ctx3 = document.getElementById("progressChart").getContext("2d");
new Chart(ctx3, {
    type: "doughnut",
    data: {
        labels: ["Completed", "Remaining"],
        datasets: [{
            data: [65, 35],
            backgroundColor: ["#00c853", "#ddd"]
        }]
    }
});
