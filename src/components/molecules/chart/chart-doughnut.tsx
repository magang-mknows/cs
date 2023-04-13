import { FC, ReactElement } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartDoughnut: FC = (): ReactElement => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: [90, 60, 40, 30, 18],
        backgroundColor: [
          "rgb(19, 131, 123)",
          "rgb(74, 193, 162)",
          "rgb(253, 230, 138)",
          "rgb(231, 175, 82)",
          "rgb(137, 124, 192)",
        ],
        borderColor: [
          "rgb(19, 131, 123)",
          "rgb(74, 193, 162)",
          "rgb(253, 230, 138)",
          "rgb(231, 175, 82)",
          "rgb(137, 124, 192)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    cutout: "80%",
    radius: "100%",
  };

  return <Doughnut data={data} options={options} />;
};

export default ChartDoughnut;
