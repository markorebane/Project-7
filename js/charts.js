
/* ============================================= */
/* CHARTS */
/* ============================================= */

const trafficCanvas = document.getElementById('traffic-Chart');
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobileuser-chart");


// ============ TRAFFIC CHART VARIABLES ===========================//
  
  
let dataDefault = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"], datasets: [{
          data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
          borderWidth: 1,
        }]
    };

let hourlyData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"], datasets: [{
          data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
          borderWidth: 1,
        }]
    };
  
let dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      data: [800, 900, 1300, 1600, 400, 1460, 900],
      backgroundColor: ["rgba(116, 119, 191, 0.5)"],
      borderColor: ["rgba(116, 119, 191, 1)"],
      borderWidth: 1,
    },
  ],
};

  let weeklyData = {
    labels: ["1", "7", "14", "21", "28"],
    datasets: [
      {
        data: [700, 1200, 1000, 200, 1500],
        backgroundColor: ["rgba(116, 119, 191, 0.5)"],
        borderColor: ["rgba(116, 119, 191, 1)"],
        borderWidth: 1,
      },
    ],
  };
  
  let monthlyData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec,",
    ],
    datasets: [
      {
        data: [
          700, 1200, 1000, 200, 1500, 1650, 1350, 1800, 2250, 1500, 2500, 2000,
        ],
        backgroundColor: ["rgba(116, 119, 191, 0.5)"],
        borderColor: ["rgba(116, 119, 191, 1)"],
        borderWidth: 1,
      },
    ],
  };
  // ================ TRAFFIC OPTIONS ==================//
  
  let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)', 
    fill: true,
    aspectRatio: 2.5,
    scales: { y: {
           beginAtZero: true
         }
    }, plugins: {
    legend: {
           display: false
         }
    } };
  

    
  // ================= TRAFFIC CHART ========================//

let trafficChart = new Chart(trafficCanvas, { 
    type: 'line',
    data: dataDefault,
    options: trafficOptions
    });



//=========== UPDATE TRAFFIC CHART ==========//

let trafficLinks = document.querySelectorAll(".traffic-nav-link");

const updateChart = (chart, newData) => {
  chart.data.labels = newData.labels;
  chart.data.datasets[0].data = newData.datasets[0].data;
  chart.update({
    duration: 500,
    easing: "linear",
  });
};

trafficLinks.forEach((link) => {
  link.addEventListener("click", function () {
    trafficLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
    if (link.textContent === "Hourly") {
      updateChart(trafficChart, hourlyData);
    } else if (link.textContent === "Daily") {
      updateChart(trafficChart, dailyData);
    } else if (link.textContent === "Weekly") {
      updateChart(trafficChart, weeklyData);
    } else if (link.textContent === "Monthly") {
      updateChart(trafficChart, monthlyData);
    }
  });
});





// ============ DAILY BAR CHART  ===========================//

    // data for daily traffic bar chart

    let dailyChart = new Chart(dailyCanvas, {
        type: "bar",
        data: {
          labels: ["S", "M", "T", "W", "T", "F", "S"],
          datasets: [
            {
              label: "# of Hits",
              data: [75, 115, 175, 125, 225, 200, 100],
              backgroundColor: ["#7477BF"],
              borderColor: ["rgba(77, 76, 114, 0.2)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          aspectRatio: 2,
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              min: 0,
              max: 250,
            },
          },
        },
      });


// ============ MOBILE CHART  ===========================//

let mobileChart = new Chart(mobileCanvas, {
    type: "doughnut",
    data: {
      labels: ["Desktop", "Tablet", "Phones"],
      datasets: [
        {
          data: [2000, 550, 500],
          backgroundColor: [
            "#7477BF",
            "#78CF82",
            "#51B6C8",
          ],
          borderColor: ["rgba(77, 76, 114, 0.2)"],
          borderWidth: 0.1,
        },
      ],
    },
    options: {
      resonsive: true,
      aspectRatio: 2,
      plugins: {
        legend: {
          position: "right",
          labels: {
            boxWidth: 20,
            fontStyle: "bold",
          },
        },
      },
    },
  });
  
