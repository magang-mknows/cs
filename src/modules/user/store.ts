import { atom, selector } from "recoil";
import { TUserDataDummy } from "./types";

export const userSearch = atom({
  key: "user-query",
  default: "",
});

export const userDummyData = atom<TUserDataDummy[]>({
  key: "user-dummy-data",
  default: [
    {
      no: 1,
      nik: 327000189266,
      nama: "Ludwig van Biethoven",
      tanggal: "02/08/22 09:23:30",
    },
    {
      no: 2,
      nik: 327012111,
      nama: "Putri Santoso",
      tanggal: "10/08/21 09:26:30",
    },
    {
      no: 3,
      nik: 327000189266,
      nama: "Albert Maniqueen",
      tanggal: "02/10/22 07:23:30",
    },
    {
      no: 4,
      nik: 327012111,
      nama: "Yasmin Sumbul",
      tanggal: "11/12/23 08:15:30",
    },
  ],
});

export const userFilter = selector({
  key: "user-filter",
  get: ({ get }) =>
    get(userDummyData).filter(
      (user) =>
        user.nama.toLowerCase().includes(get(userSearch).toLowerCase()) ||
        user.nik.toString().toLowerCase().includes(get(userSearch).toLowerCase()) ||
        user.tanggal.toString().toLowerCase().includes(get(userSearch).toLowerCase()),
    ),
});
