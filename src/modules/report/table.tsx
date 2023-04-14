import { FC, ReactElement } from "react";
import IconDropdown from "@/components/atoms/icons/ic-dropdown";
import IconTable from "@/components/atoms/icons/ic-table";
import { useReportData } from "./hooks";

const Table: FC = (): ReactElement => {
  const { getReportData } = useReportData();
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500  dark:text-gray-400 overflow-x-scroll ">
        <thead className="text-xs border text-gray-700 font-light bg-[#F6FBFA] dark:bg-[#F5F8FF] dark:text-gray-400 ">
          <tr>
            <th></th>
            <th scope="col" className="px-6 py-2 cursor-default w-[20%]">
              <div className="flex gap-5 justify-center items-center">
                <p>No</p>
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
                <p>Status</p>
                <IconDropdown />
              </div>
            </th>
          </tr>
        </thead>
        {getReportData.map((item, key) => {
          return (
            <tbody key={key}>
              <tr className="bg-white border-b dark:bg-[#ffff] ">
                <td className="px-4">
                  <IconTable />
                </td>
                <td className=" py-3 text-[#262626] flex justify-center">{key + 1}</td>
                <td className="px-6 py-3 text-[#262626]">{item.nik}</td>
                <td className="px-6 py-3 font-semibold text-[#262626]  flex justify-center">
                  {item.nama}
                </td>

                <td className="px-6 py-3 bg-green-400">
                  <button
                    className={` ${
                      item.status === "Sangat Baik"
                        ? "bg-success-400"
                        : item.status === "Cukup Buruk"
                        ? "bg-warning-500"
                        : "bg-error-400"
                    } text-white w-[110px] text-sm p-2 rounded-md cursor-default`}
                  >
                    {item.status}
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
