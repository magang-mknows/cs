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
      label: "salary",
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#1B9984");
        gradient.addColorStop(1, "#D0F9E3");
        return gradient;
      },
      borderColor: "white",
      borderWidth: 1,
      data: [320, 270, 320, 400, 420, 500, 440, 240],
    },
  ],
};

const ChartBar: FC = (): ReactElement => {
  return <Bar data={data} />;
};

export default ChartBar;
