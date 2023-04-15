import { ReactElement, FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useResultData, useResultQuery } from "./hooks";
import IconPrev from "@/components/atoms/icons/ic-prev";
import IconNext from "@/components/atoms/icons/ic-next";
import IconSearch from "@/components/atoms/icons/ic-search";
import "./index.css";

const HasilPage: FC = (): ReactElement => {
  const { getResultData } = useResultData();
  const { setResultQuery, getResultQuery } = useResultQuery();
  const [search] = useState("");
  const showToastMessage = (): any => {
    toast(
      <div className="flex flex-row gap gap-x-2 items-center">
        <img src="/assets/checklist.svg" alt="icon" />
        <p>Detail Report.pdf berhasil terunduh</p>
      </div>,
      {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-message",
      },
    );
  };
  const [isActive, setisActive] = useState("1");

  return (
    <div className="relative">
      <div className="mt-9 gap flex lg:flex-row flex-col h-[40px] items-center">
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
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setResultQuery(search);
                }}
                className="flex items-center"
              >
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <IconSearch />
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    value={getResultQuery}
                    onChange={(e) => setResultQuery(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Search NIM, NIK, Nama, No. Permintaan"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-4 flex justify-end">
        <div
          onClick={showToastMessage}
          className="w-[156px] h-10 text-sm cursor-pointer lg:mt-0 md:mt-20 mt-20 shadow-md hover:bg-neutral-400 rounded-md flex items-center justify-center font-semibold text-neutral-800"
        >
          <div className="w-[20%] flex justify-center items-center">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.46523 4.36388C9.46523 3.79239 9.92852 3.3291 10.5 3.3291C11.0715 3.3291 11.5348 3.79239 11.5348 4.36388V9.2021C11.5348 9.27579 11.5945 9.33552 11.6682 9.33552H13.0872C13.29 9.3356 13.474 9.45401 13.5581 9.63848C13.6421 9.82295 13.6108 10.0395 13.4779 10.1926L10.8907 13.1683C10.7924 13.2816 10.6499 13.3466 10.5 13.3466C10.3501 13.3466 10.2076 13.2816 10.1094 13.1683L7.52215 10.1926C7.38923 10.0395 7.35789 9.82295 7.44197 9.63848C7.52605 9.45401 7.71007 9.3356 7.91279 9.33552H9.33181C9.4055 9.33552 9.46523 9.27579 9.46523 9.2021V4.36388ZM15.5458 13.0152C15.5458 12.6579 15.8354 12.3683 16.1926 12.3683C16.3646 12.3676 16.5298 12.4355 16.6517 12.5568C16.7736 12.6782 16.8421 12.8431 16.8421 13.0152V14.0051C16.8421 15.184 15.8864 16.1398 14.7074 16.1398H6.29258C5.11468 16.1383 4.16058 15.183 4.16058 14.0051V13.0152C4.16058 12.6579 4.45017 12.3683 4.80739 12.3683C5.16461 12.3683 5.45419 12.6579 5.45419 13.0152V14.0051C5.45478 14.4678 5.82988 14.8427 6.29258 14.843H14.7074C15.1701 14.8427 15.5452 14.4678 15.5458 14.0051V13.0152Z"
                fill="#404040"
              />
              <mask
                id="mask0_1737_6309"
                maskUnits="userSpaceOnUse"
                x="4"
                y="3"
                width="13"
                height="14"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.46523 4.36388C9.46523 3.79239 9.92852 3.3291 10.5 3.3291C11.0715 3.3291 11.5348 3.79239 11.5348 4.36388V9.2021C11.5348 9.27579 11.5945 9.33552 11.6682 9.33552H13.0872C13.29 9.3356 13.474 9.45401 13.5581 9.63848C13.6421 9.82295 13.6108 10.0395 13.4779 10.1926L10.8907 13.1683C10.7924 13.2816 10.6499 13.3466 10.5 13.3466C10.3501 13.3466 10.2076 13.2816 10.1094 13.1683L7.52215 10.1926C7.38923 10.0395 7.35789 9.82295 7.44197 9.63848C7.52605 9.45401 7.71007 9.3356 7.91279 9.33552H9.33181C9.4055 9.33552 9.46523 9.27579 9.46523 9.2021V4.36388ZM15.5458 13.0152C15.5458 12.6579 15.8354 12.3683 16.1926 12.3683C16.3646 12.3676 16.5298 12.4355 16.6517 12.5568C16.7736 12.6782 16.8421 12.8431 16.8421 13.0152V14.0051C16.8421 15.184 15.8864 16.1398 14.7074 16.1398H6.29258C5.11468 16.1383 4.16058 15.183 4.16058 14.0051V13.0152C4.16058 12.6579 4.45017 12.3683 4.80739 12.3683C5.16461 12.3683 5.45419 12.6579 5.45419 13.0152V14.0051C5.45478 14.4678 5.82988 14.8427 6.29258 14.843H14.7074C15.1701 14.8427 15.5452 14.4678 15.5458 14.0051V13.0152Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1737_6309)"></g>
            </svg>
          </div>
          Download All
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
          <span className="text-blue-600">
            {" "}
            <a href="">Klik Disini</a>
          </span>
        </div>
      </div>

      {/* pagination */}
      <div className="flex w-full justify-center items-center gap-x-2 text-neutral-400 my-10">
        <div className="w-9 h-9 px-3 border flex items-center rounded-md cursor-pointer">
          <IconPrev />
        </div>
        <div
          className={`${
            isActive == "1" ? "text-[#ffffff] bg-primary-400 rounded-md" : "text-neutral-400"
          } "w-9 h-9 px-3 border flex items-center cursor-pointer" `}
          onClick={() => setisActive("1")}
        >
          1
        </div>
        <div
          className={`${
            isActive == "2" ? "text-[#ffffff] bg-primary-400 rounded-md" : "text-neutral-400"
          } "w-9 h-9 px-3 border flex items-center cursor-pointer" `}
          onClick={() => setisActive("2")}
        >
          2
        </div>
        <div
          className={`${
            isActive == "3" ? "text-[#ffffff] bg-primary-400 rounded-md" : "text-neutral-400"
          } "w-9 h-9 px-3 border flex items-center cursor-pointer" `}
          onClick={() => setisActive("3")}
        >
          3
        </div>
        <div
          className={`${
            isActive == "4" ? "text-[#ffffff] bg-primary-400 rounded-md" : "text-neutral-400"
          } "w-9 h-9 px-3 border flex items-center cursor-pointer" `}
          onClick={() => setisActive("4")}
        >
          4
        </div>
        <div
          className={`${
            isActive == "5" ? "text-[#ffffff] bg-primary-400 rounded-md" : "text-neutral-400"
          } "w-9 h-9 px-3 border flex items-center cursor-pointer" `}
          onClick={() => setisActive("5")}
        >
          5
        </div>
        <div className="w-9 h-9 px-3 border flex items-center rounded-md cursor-pointer">
          <IconNext />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HasilPage;
