import IconTable from "@/components/atoms/icons/ic-table";
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { atom, selector } from "recoil";
import { TRequestDummyData, TResultDataDummy } from "./types";

export const requestDummyData = atom<TRequestDummyData[]>({
  key: "request-dummy-data",
  default: [
    {
      icon: "/assets/dashboard/card1.svg",
      name: "Ai Automation",
      totalData: 500,
      totalNotifikasi: 1,
      category: "AI Automation",
    },
    {
      icon: "/assets/dashboard/card2.svg",
      name: "Ai Document Verification",
      totalData: 500,
      totalNotifikasi: 1,
      category: "AI Document Verivication",
    },
    {
      icon: "/assets/dashboard/card3.svg",
      name: "Ai Location & Movement",
      totalData: 500,
      totalNotifikasi: 1,
      category: "AI Condition Analisys",
    },
    {
      icon: "/assets/dashboard/card4.svg",
      name: "AI Capacity & Earning Power",
      totalData: 500,
      totalNotifikasi: 3,
      category: "AI Location & Movement",
    },
    {
      icon: "/assets/dashboard/card2.svg",
      name: "AI Capital Strength Analysis",
      totalData: 500,
      totalNotifikasi: 1,
      category: "AI Location & Movement",
    },
    {
      icon: "/assets/dashboard/card1.svg",
      name: "Ai Automation",
      totalData: 500,
      totalNotifikasi: 4,
      category: "AI Condition Analisys",
    },
    {
      icon: "/assets/dashboard/card4.svg",
      name: "Ai Document Verification",
      totalData: 500,
      totalNotifikasi: 8,
      category: "AI Document Verivication",
    },
    {
      icon: "/assets/dashboard/card3.svg",
      name: "Ai Location & Movement",
      totalData: 500,
      totalNotifikasi: 1,
      category: "AI Automation",
    },
    {
      icon: "/assets/dashboard/card4.svg",
      name: "AI Capacity & Earning Power",
      totalData: 500,
      totalNotifikasi: 4,
      category: "AI Document Verivication",
    },
    {
      icon: "/assets/dashboard/card3.svg",
      name: "AI Capital Strength Analysis",
      totalData: 500,
      totalNotifikasi: 2,
      category: "AI Condition Analisys",
    },
    {
      icon: "/assets/dashboard/card2.svg",
      name: "Ai Automation",
      totalData: 500,
      totalNotifikasi: 1,
      category: "AI Condition Analisys",
    },
    {
      icon: "/assets/dashboard/card1.svg",
      name: "Ai Document Verification",
      totalData: 500,
      totalNotifikasi: 1,
      category: "AI Automation",
    },
  ],
});

export const resultSearch = atom({
  key: "result-query",
  default: "",
});

export const resultOption = atom({
  key: "result-option-query",
  default: "",
});

export const resultDummyData = atom<TResultDataDummy[]>({
  key: "result-dummy-data",
  default: [
    {
      id: 1,
      no: 10002345,
      nik: 327000189266,
      nama: "Albert Maniqueen",
      tggl_permintaan: "11/2/2021",
      tggl_selesai: "11/2/2021",
      skor: "Sangat Baik",
    },
    {
      id: 2,
      no: 11122334,
      nik: 32356789,
      nama: "Ludwig Bethoven",
      tggl_permintaan: "15/3/2022",
      tggl_selesai: "11/2/2023",
      skor: "Cukup Buruk",
    },
    {
      id: 3,
      no: 123578912,
      nik: 3278532111,
      nama: "Jawadal Al Hilal",
      tggl_permintaan: "11/8/2021",
      tggl_selesai: "11/2/2024",
      skor: "Sangat Baik",
    },
    {
      id: 4,
      no: 10002345,
      nik: 327000189266,
      nama: "Yasmin Siahaan",
      tggl_permintaan: "11/2/2021",
      tggl_selesai: "11/2/2021",
      skor: "Sangat Buruk",
    },
  ],
});

//state for resultDUmmyData
export const resultDataState = atom({
  key: "resultDataState",
  default: resultDummyData,
});

// Define the sort direction atom
export const sortDirection = atom<boolean>({
  key: "sort-direction",
  default: true,
});

// Define the selector to sort the data by nik
export const sortedResultData = selector({
  key: "sorted-result-data",
  get: ({ get }) => {
    // Get the original data
    const data = get(resultDummyData);

    // Get the current sort direction
    const isAscending = get(sortDirection);

    // Sort the data by nik in ascending or descending order
    const sortedData = data.sort((a, b) => (isAscending ? a.nik - b.nik : b.nik - a.nik));

    // Return the sorted data
    return sortedData;
  },
});
// export type SortType = "ASC" | "DSC";

// export type SortState = {
//   key: keyof TResultDataDummy;
//   type: SortType;
// };

// export const sortState = atom<SortState>({
//   key: "sortState",
//   default: { key: "id", type: "ASC" },
// });

// export const sortedDataState = selector<TResultDataDummy[]>({
//   key: "sortedDataState",
//   get: ({ get }) => {
//     const data = get(resultDummyData);
//     const sort = get(sortState);
//     const sortedData = data.sort((a, b) => {
//       const aValue = typeof a[sort.key] === "number" ? a[sort.key] : (a[sort.key] as number);
//       const bValue = typeof b[sort.key] === "number" ? b[sort.key] : (b[sort.key] as number);
//       return sort.type === "ASC" ? aValue - bValue : bValue - aValue;
//     });
//     return sortedData;
//   },
// });

export const resultFilter = selector({
  key: "result-filter",
  get: ({ get }) =>
    get(resultDummyData).filter(
      (user) =>
        user.nama.toLowerCase().includes(get(resultSearch).toLowerCase()) ||
        user.nik.toString().toLowerCase().includes(get(resultSearch).toLowerCase()),
    ),
});
