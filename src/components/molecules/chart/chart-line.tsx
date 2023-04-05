import { FC, ReactElement } from "react";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agust",
  "Sept",
  "Oktob",
  "Nov",
  "Des",
];
const dataLine = {
  labels: labels,
  datasets: [
    {
      data: [0, 120, 198, 200, 389, 400, 435, 400, 365, 600, 670, 654, 800],
      fill: false,
      borderColor: "rgba (47, 97, 68, 1) ",
      tension: 0.1,
    },
  ],
};

const optionsLine = {
  scales: {
    y: {
      max: 4.5,
      min: 0,
      ticks: {
        stepSize: 1,
        max: 4,
        callback: function (value: any) {
          if (value === 4.5) {
            return "";
          } else {
            return value;
          }
        },
      },
      grid: {
        display: true,
      },
    },
    x: {
      grid: {
        display: true,
      },
      ticks: {
        display: true,
      },
      reverse: false,
    },
  },
  element: {
    line: {
      tension: 0,
      borderwidth: 2,
      borderColor: "rgba (47, 97, 68, 1) ",
      fill: "start",
      backgroundColor: "rgba (47, 97, 68, 0.3) ",
    },
    point: {
      radius: 0,
      hintRadius: 0,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const SummaryChart: FC = (): ReactElement => {
  return (
    <div className="h-[400px] -mt-4 overflow-hidden ">
      <Line data={dataLine} />
    </div>
  );
};

export default SummaryChart;
