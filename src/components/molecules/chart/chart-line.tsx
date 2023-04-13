import { FC, ReactElement } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
);

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
      label: "",
      data: [100, 200, 220, 380, 430, 420, 400, 600, 780, 700, 850, 1000],
      borderColor: "white",
      tension: 0.1,
      fill: true,
      backgroundColor: "#D0F9E3",
      hoverBackgroundColor: "#3b83f67e",
      hoverBorderColor: "#3b83f652",
      pointRadius: 6,
      pointHoverRadius: 20,
      pointStyle: "circle",
      pointBackgroundColor: "#737373",
      borderWidth: 2,
    },
  ],
};

const ChartLine: FC = (): ReactElement => {
  return (
    <div className="h-[600px] mt-4 overflow-hidden ">
      <Line data={dataLine} />
    </div>
  );
};

export default ChartLine;
