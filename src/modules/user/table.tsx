import { FC, ReactElement, useState } from "react";
import { useUserData } from "./hooks";
import Card from "@/components/molecules/card";
import { Dialog } from "@headlessui/react";
import { IConDelete } from "@/components/atoms/icons/ic-delete";
import { IconEdit } from "@/components/atoms/icons/ic-edit";
import IconDropdown from "@/components/atoms/icons/ic-dropdown";

const Table: FC = (): ReactElement => {
  const { getUserData } = useUserData();
  const [isOpen, setisOpen] = useState(false);

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
                    <button
                      className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full cursor-pointer"
                      onClick={() => setisOpen(true)}
                    >
                      <IConDelete />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <Dialog
        open={isOpen}
        onClose={() => setisOpen(false)}
        className="absolute lg:left-[45%] md:left-[30%] top-[40%] left-[20%]"
      >
        <Dialog.Panel>
          <Dialog.Title>
            <Card className="hover:cursor-pointer md:w-[348px] w-[300px]  h-fit shadow-2xl py-4 px-6">
              <div className="w-full flex flex-col gap gap-y-2">
                <div className="flex justify-center items-center w-8 h-8 bg-error-100 rounded-full cursor-pointer">
                  <IConDelete />
                </div>
                <p className="font-semibold text-sm">Hapus data</p>
                <p className="font-base text-xs text-neutral-400">
                  Apakah anda setuju untuk menghapus data ini?
                </p>
                <div className="flex flex-row w-full gap gap-x-3">
                  <button
                    className="w-full text-sm py-1 border border-error-300 text-error-300 bg-white"
                    onClick={() => setisOpen(false)}
                  >
                    Tidak
                  </button>
                  <button
                    onClick={() => setisOpen(false)}
                    className="w-full text-sm py-1 bg-error-500 text-white"
                  >
                    Iya
                  </button>
                </div>
              </div>
            </Card>
          </Dialog.Title>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};
export default Table;
