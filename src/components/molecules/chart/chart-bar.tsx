import { FC, ReactElement } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
ChartJS.register(
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
);
const data = {
  labels: [
    "<5jt",
    "6jt- 10jt",
    "11jt - 15jt",
    "16jt - 20jt",
    "21jt - 25jt",
    "26jt - 30jt",
    "31jt - 35jt",
    ">40jt",
  ],
  datasets: [
    {
      label: "Sales",
      backgroundColor: "rgba(27, 153, 132, 0.61)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40, 80],
    },
  ],
};

const ChartBar: FC = (): ReactElement => {
  return <Bar data={data} />;
};

export default ChartBar;
