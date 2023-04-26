import { ReactElement, FC } from "react";
import { useResultData, useResultQuery } from "./hooks";
import Pagination from "@/components/atoms/pagination";
import Search from "@/components/atoms/search";

const HasilPage: FC = (): ReactElement => {
  const { getResultData } = useResultData();
  const { setResultQuery, getResultQuery } = useResultQuery();

  return (
    <div className="relative">
      <div className="mt-9 my-8 gap flex lg:flex-row flex-col h-[40px] items-center">
        <p className="font-bold text-[#444444] text-lg ml-8 w-[60%]">Permintaan Hari ini</p>
        <div className="w-full">
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
      </div>

      {/* table */}
      <div className="overflow-x-scroll">
        <table className="w-full text-sm border rounded-lg text-left text-gray-500  dark:text-gray-400">
          <thead className="text-xs border text-gray-700 font-light bg-[#F6FBFA] dark:bg-[#F5F8FF] dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-2 cursor-default w-[10%]">
                <div className="flex justify-center items-center">
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
                  <p>Tanggal Selesai</p>
                </div>
              </th>
              <th scope="col" className="px-6 py-2 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>Skor</p>
                  <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
                </div>
              </th>
              <th scope="col" className=" px-6 py-2 cursor-default">
                <div className="flex gap-2 justify-center items-center">
                  <p>Lihat Detail</p>
                  <img src="/assets/request-page/markdown-icon.svg" alt="markdown icon" />
                </div>
              </th>
            </tr>
          </thead>
          {getResultData.map((item, key) => {
            return (
              <tbody key={key}>
                <tr className="bg-white border-b dark:bg-[#ffff] ">
                  <td className="px-10 py-3 text-[#262626] ">{item.no}</td>
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
                  <td className="w-full pl-6 py-3 text-[#3D628D]">
                    <a href="">
                      <img src="/assets/pdf.svg" alt="logo" />
                      <p className="text-xs">
                        <u>Lihat PDF</u>
                      </p>
                    </a>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div className="text-xs flex flex-row justify-between my-3">
        <div className=" text-neutral-400 font-base">Menampilkan 1-10 dari 110 hasil</div>
        <div className="font-semibold text-neutral-500">
          Untuk melihat riwayat permintaan sebelumnya{" "}
          <span className="text-[#4FA0CF]">
            {" "}
            <a href="">Klik Disini</a>
          </span>
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default HasilPage;
