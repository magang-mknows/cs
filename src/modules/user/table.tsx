import { FC, ReactElement } from "react";
import Data from "./data";

const Table: FC = (): ReactElement => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500 ">
        <thead className="text-xs border text-gray-700 uppercase bg-[#F6FBFA]  ">
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
        {Data.map((x, i) => {
          return (
            <tbody key={i}>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4 text-[#262626]">{x.No}</td>
                <td className="px-6 py-4 text-[#262626]">{x.Nik}</td>
                <td className="px-6 py-4 font-bold text-[#262626]">{x.Nama}</td>
                <td className="px-6 py-4 text-[#262626] text-blue-500 font-semibold">{x.Berkas}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
