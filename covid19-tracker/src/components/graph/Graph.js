import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";
import numeral from "numeral";

import "./Graph.css";

const options = {
  plugins: {
    legend: {
      display: false
    }
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

function Graph({ casesType, title}) {
  const [data, setData] = useState({});

  const buildChartData = (data, casesType) => {
    const charData = [];
    let lastDataPoint;

    for (let date in data.cases) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        charData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return charData;
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((res) => res.json())
        .then((data) => {
          const charData = buildChartData(data, casesType);
          setData(charData);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="graph">
        <h2 className="title">{title}</h2>
      {data.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data,
                
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default Graph;
