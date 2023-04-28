import { atom } from "recoil";
import { TDataCardDashboard } from "./types";

export const cardDashboardData = atom<TDataCardDashboard[]>({
  key: "data-card-dashboard",
  default: [
    {
      icon: "/assets/dashboard/card1.svg",
      title: "AI Automation",
      desc: "7.865 Total Permintaan",
      bgButton: "bg-purple-500",
    },
    {
      icon: "/assets/dashboard/card2.svg",
      title: "AI Document Verification",
      desc: "6.825 Total Permintaan",
      bgButton: "bg-primary-500",
    },
    {
      icon: "/assets/dashboard/card3.svg",
      title: "AI Location Movement",
      desc: "7.225 Total Permintaan",
      bgButton: "bg-secondary-500",
    },
    {
      icon: "/assets/dashboard/card4.svg",
      title: "AI Capacity & Earning Power",
      desc: "3.865 Total Permintaan",
      bgButton: "bg-warning-300",
    },
    {
      icon: "/assets/dashboard/card5.svg",
      title: "AI Capacital Strength Analisys",
      desc: "3.444 Total Permintaan",
      bgButton: "bg-primary-500",
    },
    {
      icon: "/assets/dashboard/card6.svg",
      title: "AI Collateral & Guarantee",
      desc: "1.444 Total Permintaan",
      bgButton: "bg-secondary-500",
    },
    {
      icon: "/assets/dashboard/card7.svg",
      title: "AI Condition Analysis",
      desc: "1.654 Total Permintaan",
      bgButton: "bg-warning-300",
    },
    {
      icon: "/assets/dashboard/card8.svg",
      title: "AI Digital FootPrint",
      desc: "1.212 Total Permintaan",
      bgButton: "bg-purple-500",
    },
  ],
});
