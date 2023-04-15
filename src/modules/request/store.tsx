import { atom } from "recoil";
import { TRequestDummyData } from "./types";

export const requestDummyData = atom<TRequestDummyData[]>({
  key: "request-dummy-data",
  default: [
    {
      icon: "/assets/dashboard/card1.svg",
      name: "Ai Automation",
      totalData: 500,
      totalNotifikasi: 1,
    },
    {
      icon: "/assets/dashboard/card2.svg",
      name: "Ai Document Verification",
      totalData: 500,
      totalNotifikasi: 1,
    },
    {
      icon: "/assets/dashboard/card3.svg",
      name: "Ai Location & Movement",
      totalData: 500,
      totalNotifikasi: 1,
    },
    {
      icon: "/assets/dashboard/card4.svg",
      name: "AI Capacity & Earning Power",
      totalData: 500,
      totalNotifikasi: 3,
    },
    {
      icon: "/assets/dashboard/card2.svg",
      name: "AI Capital Strength Analysis",
      totalData: 500,
      totalNotifikasi: 1,
    },
    {
      icon: "/assets/dashboard/card1.svg",
      name: "Ai Automation",
      totalData: 500,
      totalNotifikasi: 4,
    },
    {
      icon: "/assets/dashboard/card4.svg",
      name: "Ai Document Verification",
      totalData: 500,
      totalNotifikasi: 8,
    },
    {
      icon: "/assets/dashboard/card3.svg",
      name: "Ai Location & Movement",
      totalData: 500,
      totalNotifikasi: 1,
    },
    {
      icon: "/assets/dashboard/card4.svg",
      name: "AI Capacity & Earning Power",
      totalData: 500,
      totalNotifikasi: 4,
    },
    {
      icon: "/assets/dashboard/card3.svg",
      name: "AI Capital Strength Analysis",
      totalData: 500,
      totalNotifikasi: 2,
    },
    {
      icon: "/assets/dashboard/card2.svg",
      name: "Ai Automation",
      totalData: 500,
      totalNotifikasi: 1,
    },
    {
      icon: "/assets/dashboard/card1.svg",
      name: "Ai Document Verification",
      totalData: 500,
      totalNotifikasi: 1,
    },
  ],
});
