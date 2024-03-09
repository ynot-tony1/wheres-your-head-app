document.addEventListener("DOMContentLoaded", () => {
  const { emotionLevels, dates } = window.appData;
  const context = document.getElementById("emotionChart").getContext("2d");

  const emotions = ["Enjoyment", "Sadness", "Anger", "Contempt", "Disgust", "Fear", "Surprise"];
  const colors = ["rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(153, 102, 255)", "rgb(201, 203, 207)", "rgb(255, 205, 86)"];

  const chart = new Chart(context, {
    type: "line",
    data: {
      labels: dates,

      //chatGPT helped me figure out how to map the data to the chart
      datasets: emotions.map((emotion, index) => ({
        label: emotion,
        data: emotionLevels.map(level => level[`${emotion.toLowerCase()}_level`]),
        borderColor: colors[index],
        tension: 0.1,
        pointStyle: 'dash', 
        backgroundColor: colors[index], 
      })),
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'left',
        },
      },
      elements: {
        line: {
          fill: false 
        }
      },
      layout: {
        padding: {
          bottom: 120 
        }
      },
      legend: {
        align: 'start', 
        labels: {
          color: '#495057', 
          textAlign: 'left', 
          padding: 20, 
          boxWidth: 100,
          fontSize: 46, 
        }
      }
    },
  });

  
  //chatGPT assisted me in writing the following timeFrame logic

  /**
   * Updates the chart with filtered data based on the specified time frame.
   *
   * @param {string} timeFrame - The time frame to filter the data by.
   */
  const updateChart = (timeFrame) => {
    const filteredEmotionLevels = filterDataByTimeFrame(emotionLevels, timeFrame);
    const filteredDates = filterLabelsByTimeFrame(dates, timeFrame);

    chart.data.labels = filteredDates;
    chart.data.datasets.forEach((dataset, index) => {
      dataset.data = filteredEmotionLevels.map(
        (level) => level[`${emotions[index].toLowerCase()}_level`]
      );
    });
    chart.update();
};

  /**
   * Filters the data array based on the specified time frame.
   *
   * @param {Array} data - The data array to be filtered.
   * @param {string} timeFrame - The time frame to filter the data by. Possible values are "day", "week", "month", and "year".
   * @returns {Array} - The filtered data array.
   */
  const filterDataByTimeFrame = (data, timeFrame) => {
    const endDate = new Date();
    let startDate = new Date();

    switch (timeFrame) {
      case "day":
        startDate.setDate(endDate.getDate() - 1);
        break;
      case "week":
        startDate.setDate(endDate.getDate() - 7);
        break;
      case "month":
        startDate.setMonth(endDate.getMonth() - 1);
        break;
      case "year":
        startDate.setFullYear(endDate.getFullYear() - 1);
        break;
      default:
        return data;
    }

    return data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
  };

  /**
   * Filters an array of labels based on a given time frame.
   *
   * @param {Array<string>} labels - The array of labels to filter.
   * @param {string} timeFrame - The time frame to filter by. Possible values are "day", "week", "month", and "year".
   * @returns {Array<string>} - The filtered array of labels.
   */
  const filterLabelsByTimeFrame = (labels, timeFrame) => {
    const endDate = new Date();
    let startDate = new Date();

    switch (timeFrame) {
      case "day":
        startDate.setDate(endDate.getDate() - 1);
        break;
      case "week":
        startDate.setDate(endDate.getDate() - 7);
        break;
      case "month":
        startDate.setMonth(endDate.getMonth() - 1);
        break;
      case "year":
        startDate.setFullYear(endDate.getFullYear() - 1);
        break;
      default:
        return labels; 
    }

    return labels.filter((label) => {
      const labelDate = new Date(label);
      return labelDate >= startDate && labelDate <= endDate;
    });
  };

  document
    .getElementById("viewDay")
    .addEventListener("click", () => updateChart("day"));
  document
    .getElementById("viewWeek")
    .addEventListener("click", () => updateChart("week"));
  document
    .getElementById("viewMonth")
    .addEventListener("click", () => updateChart("month"));
  document
    .getElementById("viewYear")
    .addEventListener("click", () => updateChart("year"));
});
