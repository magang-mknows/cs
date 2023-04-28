import { ReactElement, FC, useState } from "react";
import Button from "@/components/atoms/button";
import { Dialog } from "@headlessui/react";
import Card from "@/components/molecules/card";
import { useResultData, useResultQuery } from "./hooks";
import Search from "@/components/atoms/search";
import Pagination from "@/components/atoms/pagination";

const ProsesPage: FC = (): ReactElement => {
  const [isOpen, setisOpen] = useState(false);
  const { setResultQuery, getResultQuery } = useResultQuery();
  const { getResultData } = useResultData();

  return (
    <div>
      <div className="my-9 flex lg:flex-row flex-col h-[40px]  items-center">
        <p className="font-bold text-[#444444] text-lg ml-8 w-[60%]">Permintaan Hari ini</p>
        <div className="flex flex-row gap gap-x-3 w-full mt-4 lg:mt-0">
          <div className="w-[40%]">
            <select
              id="category"
              className="cursor-pointer px-4 font-semibold bg-neutral-200 border border-gray-300 text-neutral-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px] "
            >
              <option selected>Semua</option>
              <option value="US">AI Optimation</option>
              <option value="CA">AI Document Verification</option>
              <option value="FR">AI Condition Analysis</option>
              <option value="DE">AI Location & Movement</option>
            </select>
          </div>
          <div className="w-full">
            <Search value={getResultQuery} onChange={(e) => setResultQuery(e.target.value)} />
          </div>
        </div>
      </div>
      {/* table */}
      <div className="overflow-x-scroll mt-20 lg:mt-0">
        <table className="w-full text-sm border rounded-lg text-left text-gray-500  dark:text-gray-400 overflow-x-scroll ">
          <thead className="text-xs border text-gray-700 font-light bg-[#F6FBFA] dark:bg-[#F5F8FF] dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-2 cursor-default w-[40%]">
                <div className="flex gap-5 justify-center items-center">
                  <p>No. Permintaan</p>
                  <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
                </div>
              </th>
              <th scope="col" className="px-6 py-2 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>NIK</p>
                  <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
                </div>
              </th>
              <th scope="col" className="w-[40%] px-6 py-2 cursor-default">
                <div className=" flex gap-2 justify-center items-center">
                  <p>Nama</p>
                  <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
                </div>
              </th>
              <th scope="col" className="px-6 py-2 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>Tanggal Permintaan</p>
                  <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
                </div>
              </th>
              <th scope="col" className="px-6 py-2 cursor-default w-full">
                <div className="flex gap-2 justify-center items-center">
                  <p>Kendala Proses</p>
                </div>
              </th>
              <th scope="col" className="px-6 py-2 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>Skor</p>
                  <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {getResultData.map((item, key) => {
              return (
                <tr key={key} className="bg-white border-b dark:bg-[#ffff] ">
                  <td className="px-10 py-3 text-[#262626] flex justify-center">{item.no}</td>
                  <td className="px-6 py-3 text-[#262626]">{item.nik}</td>
                  <td className="px-6 py-3 font-semibold text-[#262626] flex justify-center">
                    {item.nama}
                  </td>
                  <td className="px-6 py-3">{item.tggl_permintaan}</td>
                  <td className="px-6 py-3 flex justify-start">{item.kendala_proses}</td>
                  <td className="px-6 py-3 bg-green-400">
                    <button
                      className={` ${
                        item.skor === "Sangat Baik"
                          ? "bg-success-400"
                          : item.skor === "Cukup Buruk"
                          ? "bg-warning-500"
                          : "bg-error-400"
                      } text-white w-[110px] text-sm p-2 rounded-md cursor-default`}
                    >
                      {item.skor}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="lg:text-xs text-[10px]  flex flex-row justify-between my-3">
        <div className=" text-neutral-400 font-base">Menampilkan 1-10 dari 110 hasil</div>
        <div className="font-semibold text-neutral-500">
          Untuk melihat riwayat permintaan sebelumnya{" "}
          <span className="text-blue-600">
            {" "}
            <a href="">Klik Disini</a>
          </span>
        </div>
      </div>

      <Pagination />

      <Dialog
        open={isOpen}
        onClose={() => setisOpen(false)}
        className="absolute lg:left-[45%] md:left-[30%] top-[40%] left-[20%]"
      >
        <Dialog.Panel>
          <Dialog.Title>
            <Card className="hover:cursor-pointer md:w-[348px] w-[300px]  h-fit shadow-2xl py-4 px-6">
              <div className="w-full flex flex-col gap gap-y-2">
                <div className="bg-error-100 rounded-full w-7 h-7 flex justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15.0015C11.8618 15.0015 11.7498 15.1135 11.7498 15.2516C11.7498 15.3898 11.8618 15.5018 12 15.5018C12.1382 15.5018 12.2502 15.3898 12.2502 15.2516C12.2502 15.1135 12.1382 15.0015 12 15.0015"
                      stroke="#EE2D24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13.0005V7.49707"
                      stroke="#EE2D24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 19.5045C16.1447 19.5045 19.5047 16.1445 19.5047 11.9998C19.5047 7.85508 16.1447 4.49512 12 4.49512C7.85528 4.49512 4.49532 7.85508 4.49532 11.9998C4.49532 16.1445 7.85528 19.5045 12 19.5045Z"
                      stroke="#EE2D24"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-sm">Something went wrong!</p>
                <p className="font-base text-xs text-neutral-400">
                  Maaf, saat ini anda tidak dapat melanjutkan proses permintaan. Anda belum
                  melengkapi data yang dibutuhkan.
                </p>
                <div className="flex flex-row w-full gap gap-x-3">
                  <Button
                    className="w-full text-sm py-1"
                    color="borderWarning"
                    onClick={() => setisOpen(false)}
                  >
                    Kembali
                  </Button>
                  <Button className="w-full text-sm py-1" color="warning">
                    Lengkapi Data
                  </Button>
                </div>
              </div>
            </Card>
          </Dialog.Title>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default ProsesPage;
