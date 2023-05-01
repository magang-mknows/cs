import { FC, ReactElement } from "react";
import IconDropdown from "@/components/atoms/icons/ic-dropdown";
import IconTable from "@/components/atoms/icons/ic-table";
import { useResultData } from "../request/hooks";

const Table: FC = (): ReactElement => {
  const { getResultData } = useResultData();

  return (
    <div className="overflow-x-scroll">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500  dark:text-gray-400">
        <thead className="text-xs border text-gray-700 font-light bg-[#F6FBFA] dark:bg-[#F5F8FF] dark:text-gray-400">
          <tr>
            <th></th>
            <th>No. </th>
            <th scope="col" className="px-6 py-2 cursor-default w-[10%]">
              <div className="flex gap-2 justify-center items-center">
                <p>No. Permintaan</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>NIK</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="w-[40%] px-6 py-2 cursor-default">
              <div className=" flex gap-2 justify-center items-center">
                <p>Nama</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Tanggal Permintaan</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default w-full">
              <div className="flex gap-2 justify-center items-center">
                <p>Tanggal Selesai</p>
              </div>
            </th>
            <th scope="col" className="px-6 py-2 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Status</p>
                <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
              </div>
            </th>
          </tr>
        </thead>
        {getResultData.map((item, key) => {
          return (
            <tbody key={key}>
              <tr className="bg-white border-b dark:bg-[#ffff] ">
                <td className="px-4">
                  <IconTable />
                </td>
                <td className=" py-7 text-[#262626] flex justify-center">{key + 1}</td>
                <td className="px-6 py-3 text-[#262626] ">{item.no}</td>
                <td className="px-6 py-3 text-[#262626]">{item.nik}</td>
                <td className="px-6 py-3 font-semibold text-[#262626] flex justify-center">
                  {item.nama}
                </td>
                <td className="px-6 py-3">{item.tggl_permintaan}</td>
                <td className="px-6 py-3">{item.tggl_selesai}</td>
                <td className="px-6 py-3 bg-green-400">
                  <button
                    className={` ${
                      item.skor === "Sangat Baik"
                        ? "bg-success-400"
                        : item.skor === "Cukup Buruk"
                        ? "bg-warning-500"
                        : "bg-error-400"
                    } text-white w-[100px] text-sm py-2 rounded-md cursor-default`}
                  >
                    {item.skor}
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
