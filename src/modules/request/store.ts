import { atom, selector, selectorFamily } from "recoil";
import { TRequestDummyData, TResultDataDummy } from "./types";

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

export const resultSearch = atom({
  key: "result-query",
  default: "",
});

export const resultDummyData = atom<TResultDataDummy[]>({
  key: "result-dummy-data",
  default: [
    {
      no: 10002345,
      nik: 327000189266,
      nama: "Albert Maniqueen",
      tggl_permintaan: "11/2/2021",
      tggl_selesai: "11/2/2021",
      kendala_proses: "-",
      skor: "Sangat Baik",
      detail: "Lihat Detail",
    },
    {
      no: 11122334,
      nik: 32356789,
      nama: "Ludwig Bethoven",
      tggl_permintaan: "15/3/2022",
      tggl_selesai: "11/2/2023",
      kendala_proses: "NIK salah",
      skor: "Cukup Buruk",
      detail: "Lihat Detail",
    },
    {
      no: 123578912,
      nik: 3278532111,
      nama: "Jawadal Al Hilal",
      tggl_permintaan: "11/8/2021",
      tggl_selesai: "11/2/2024",
      kendala_proses: "Kualitas KTP buruk",
      skor: "Sangat Baik",
      detail: "Lihat Detail",
    },
    {
      no: 10002345,
      nik: 327000189266,
      nama: "Yasmin Siahaan",
      tggl_permintaan: "11/2/2021",
      tggl_selesai: "11/2/2021",
      kendala_proses: "-",
      skor: "Sangat Buruk",
      detail: "Lihat Detail",
    },
  ],
});

export const resultFilter = selector({
  key: "result-filter",
  get: ({ get }) =>
    get(resultDummyData).filter(
      (user) =>
        user.nama.toLowerCase().includes(get(resultSearch).toLowerCase()) ||
        user.nik.toString().toLowerCase().includes(get(resultSearch).toLowerCase()),
    ),
});

export const sortedTable = selectorFamily({
  key: "sorted-table",
  get:
    (sortedType) =>
    ({ get }) => {
      const dataTable = get(resultDummyData);
      return sortedType === "ASC"
        ? dataTable.sort((a, b) => a.no - b.no)
        : dataTable.sort((a, b) => b.no - a.no);
    },
});
