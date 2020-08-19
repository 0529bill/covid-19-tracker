import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { useState } from "react";
import { useEffect } from "react";
import { fetchDaily } from "../../api/index.js";

function Chart(props) {
  let {
    confirmed: selectConfirmed,
    deaths: selectDeaths,
    recovered: selectRecovered,
  } = props.selectCountries;

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let datas = await fetchDaily();
      setData(datas);
    };
    getData();
  }, []);

  const BarChart = selectConfirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              selectConfirmed.value,
              selectRecovered.value,
              selectDeaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${props.country}` },
      }}
    />
  ) : null;

  const LineChart = data[0] ? (
    <Line
      data={{
        labels: data.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: data.map(({ totalConfirmed }) => totalConfirmed),
            label: "confirmed cases",
            borderColor: "rgba(0, 123, 255, 0.7)",
          },
          {
            data: data.map(({ deaths }) => deaths),
            label: "death cases",
            borderColor: "rgba(220, 53, 69, 0.7)",
            backgroundColor: "#f4c2c2",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className="my-5">{selectConfirmed ? BarChart : LineChart}</div>;
  // return <div className="my-5">{LineChart}</div>;
}

export default Chart;
