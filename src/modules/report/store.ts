import { atom, selector } from "recoil";
import { TReportDataDummy } from "./type";

export const reportSearch = atom({
  key: "report-query",
  default: "",
});

export const reportDummyData = atom<TReportDataDummy[]>({
  key: "report-dummy-data",
  default: [
    {
      no: 1,
      nik: 327000189266,
      nama: "Ludwig van Biethoven",
      status: "Sangat Baik",
    },
    {
      no: 2,
      nik: 327012111,
      nama: "Putri Santoso",
      status: "Cukup Buruk",
    },
    {
      no: 3,
      nik: 327000189266,
      nama: "Albert Maniqueen",
      status: "Sangat Baik",
    },
    {
      no: 4,
      nik: 327012111,
      nama: "Yasmin Sumbul",
      status: "Sangat Buruk",
    },
  ],
});

export const reportFilter = selector({
  key: "report-filter",
  get: ({ get }) =>
    get(reportDummyData).filter(
      (report) =>
        report.nama.toLowerCase().includes(get(reportSearch).toLowerCase()) ||
        report.nik.toString().toLowerCase().includes(get(reportSearch).toLowerCase()),
    ),
});
