import { FC, ReactElement } from "react";

const table = [
  {
    No: 1,
    Nik: 327000189266,
    Nama: "Albert Maniqueen",
    Berkas: "Lihat Detail",
  },
  {
    No: 2,
    Nik: 327012111,
    Nama: "Putri Santoso",
    Berkas: "Lihat Detail",
  },
  {
    No: 3,
    Nik: 327000189266,
    Nama: "Albert Maniqueen",
    Berkas: "Lihat Detail",
  },
  {
    No: 4,
    Nik: 327012111,
    Nama: "Putri Santoso",
    Berkas: "Lihat Detail",
  },
];

const Table: FC = (): ReactElement => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs border text-gray-700 uppercase bg-[#F6FBFA] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No.
            </th>
            <th scope="col" className="px-6 py-3">
              Nik
            </th>
            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="px-6 py-3">
              Berkas
            </th>
          </tr>
        </thead>
        {table.map((x, i) => {
          return (
            <tbody key={i}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                <td className="px-6 py-4 text-[#262626]">{x.No}</td>
                <td className="px-6 py-4 text-[#262626]">{x.Nik}</td>
                <td className="px-6 py-4 font-bold text-[#262626]">{x.Nama}</td>
                <td className="px-6 py-4 text-[#262626]">{x.Berkas}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
