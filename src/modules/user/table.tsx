import { IConDelete } from "@/components/atoms/icons/ic-delete";
import IconDropdown from "@/components/atoms/icons/ic-dropdown";
import { IconEdit } from "@/components/atoms/icons/ic-edit";
import { FC, ReactElement } from "react";
import { useUserData } from "./hooks";

const Table: FC = (): ReactElement => {
  const { getUserData } = useUserData();
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500 ">
        <thead className="text-xs border text-gray-700 uppercase bg-[#F6FBFA]  ">
          <tr>
            <th scope="col" className="px-6 py-3 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>No</p>
                <IconDropdown />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <th scope="col" className="px-6 py-3 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>Nik</p>
                  <IconDropdown />
                </div>
              </th>
            </th>
            <th scope="col" className="px-6 py-3">
              <th scope="col" className="px-6 py-3 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>Nama</p>
                  <IconDropdown />
                </div>
              </th>
            </th>
            <th scope="col" className="px-6 py-3">
              <th scope="col" className="px-6 py-3 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>Tanggal</p>
                  <IconDropdown />
                </div>
              </th>
            </th>
            <th scope="col" className="px-6 py-3">
              Berkas
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        {getUserData.map((item, key) => {
          return (
            <tbody key={key}>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4 text-[#262626] cursor-default">{key + 1}</td>
                <td className="px-6 py-4 text-[#262626] cursor-default">{item.nik}</td>
                <td className="px-6 py-4 font-bold text-[#262626] cursor-default">{item.nama}</td>
                <td className="px-6 py-4 text-[#262626] cursor-default">{item.tanggal}</td>
                <td className="px-6 py-4 text-[#262626] text-blue-500 font-semibold">
                  <span className="text-secondary-500 cursor-pointer">Lihat Detail</span>
                </td>
                <td>
                  <div className="flex gap-2">
                    <div className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer">
                      <IconEdit />
                    </div>
                    <div className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer">
                      <IConDelete />
                    </div>
                  </div>
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
