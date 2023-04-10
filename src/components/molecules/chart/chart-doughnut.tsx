import { FC, ReactElement } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartDoughnut: FC = (): ReactElement => {
  const data = {
    labels: ["A (Sangat Baik)", "B (Baik)", "C (Cukup Baik)", "D (Buruk)", "E (Sangat Buruk)"],
    datasets: [
      {
        label: "My First Dataset",
        data: [80, 40, 60, 50, 70],
        backgroundColor: [
          "rgb(19, 131, 123)",
          "rgb(74, 193, 162)",
          "rgb(253, 230, 138)",
          "rgb(231, 175, 82)",
          "rgb(137, 124, 192)",
        ],
        weight: 1,
      },
    ],
  };

  const options = {
    plugins: {
      animation: {
        animateScale: true,
        animateRotate: true,
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltip: {
        enabled: true,
      },
    },
    cutout: "70%",
    radius: "80%",
  };
  return <Doughnut data={data} options={options} />;
};

export default ChartDoughnut;
