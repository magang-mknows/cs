import { ReactElement, FC, useState } from "react";
import Button from "@/components/atoms/button";

const HasilPage: FC = (): ReactElement => {
  const [isActive, setisActive] = useState("1");
  const table = [
    {
      No: 10002345,
      Nik: 327000189266,
      Nama: "Albert Maniqueen",
      Tggl_permintaan: "11/2/2021",
      Tggl_selesai: "11/2/2021",
      Skor: "Sangat Baik",
      Detail: "Lihat Detail",
    },
    {
      No: 10002345,
      Nik: 327000189266,
      Nama: "Albert Maniqueen",
      Tggl_permintaan: "11/2/2021",
      Tggl_selesai: "11/2/2021",
      Skor: "Cukup Buruk",
      Detail: "Lihat Detail",
    },
    {
      No: 10002345,
      Nik: 327000189266,
      Nama: "Albert Maniqueen",
      Tggl_permintaan: "11/2/2021",
      Tggl_selesai: "11/2/2021",
      Skor: "Sangat Baik",
      Detail: "Lihat Detail",
    },
    {
      No: 10002345,
      Nik: 327000189266,
      Nama: "Albert Maniqueen",
      Tggl_permintaan: "11/2/2021",
      Tggl_selesai: "11/2/2021",
      Skor: "Sangat Buruk",
      Detail: "Lihat Detail",
    },
  ];
  return (
    <div className="relative">
      <div className="mt-9 gap gap-x-3 flex lg:flex-row flex-col h-[40px] items-center">
        <p className="font-bold text-[#444444] text-lg ml-8 w-[60%]">Permintaan Hari ini</p>
        <div className="w-full">
          <div className="flex flex-row gap gap-x-3 w-full mt-4 lg:mt-0">
            <div className="w-[40%]">
              <select
                id="category"
                className="px-4 font-semibold bg-neutral-200 border border-gray-300 text-neutral-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px] "
              >
                <option selected>Semua</option>
                <option value="US">AI Optimation</option>
                <option value="CA">AI Document Verification</option>
                <option value="FR">AI Condition Analysis</option>
                <option value="DE">AI Location & Movement</option>
              </select>
            </div>
            <div className="w-full">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Search NIM, NIK, Nama, No. Permintaan"
                    required
                  />
                </div>
                <Button className="px-8 py-2 bg-primary-400 mx-4 md:w-24 w-12">Search</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex justify-end ">
        <div className="w-[156px] h-10 text-sm cursor-pointer lg:mt-0 mt-10 shadow-md hover:bg-neutral-400 rounded-md flex items-center justify-center font-semibold text-neutral-800">
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
          {table.map((x, i) => {
            return (
              <tbody key={i}>
                <tr className="bg-white border-b dark:bg-[#ffff] ">
                  <td className="px-10 py-3 text-[#262626] ">{x.No}</td>
                  <td className="px-6 py-3 text-[#262626]">{x.Nik}</td>
                  <td className="px-6 py-3 font-semibold text-[#262626] flex justify-center">
                    {x.Nama}
                  </td>
                  <td className="px-6 py-3">{x.Tggl_permintaan}</td>
                  <td className="px-6 py-3">{x.Tggl_selesai}</td>
                  <td className="px-6 py-3 bg-green-400">
                    <button
                      className={` ${
                        x.Skor === "Sangat Baik"
                          ? "bg-success-400"
                          : x.Skor === "Cukup Buruk"
                          ? "bg-warning-500"
                          : "bg-error-400"
                      } text-white w-[100px] text-sm p-2 rounded-md`}
                    >
                      {x.Skor}
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
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.72 6.71985C0.579308 6.57934 0.500175 6.3887 0.5 6.18985V5.80985C0.502304 5.61144 0.581116 5.42157 0.72 5.27985L5.86 0.149852C5.95388 0.055196 6.08168 0.00195312 6.215 0.00195312C6.34832 0.00195312 6.47612 0.055196 6.57 0.149852L7.28 0.859852C7.37406 0.952016 7.42707 1.07816 7.42707 1.20985C7.42707 1.34154 7.37406 1.46769 7.28 1.55985L2.83 5.99985L7.28 10.4399C7.37466 10.5337 7.4279 10.6615 7.4279 10.7949C7.4279 10.9282 7.37466 11.056 7.28 11.1499L6.57 11.8499C6.47612 11.9445 6.34832 11.9978 6.215 11.9978C6.08168 11.9978 5.95388 11.9445 5.86 11.8499L0.72 6.71985Z"
              fill="#E5E5E5"
            />
          </svg>
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
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28 6.71985C7.42069 6.57934 7.49982 6.3887 7.5 6.18985V5.80985C7.4977 5.61144 7.41888 5.42157 7.28 5.27985L2.14 0.149852C2.04612 0.055196 1.91832 0.00195312 1.785 0.00195312C1.65168 0.00195312 1.52388 0.055196 1.43 0.149852L0.72 0.859852C0.625936 0.952016 0.572928 1.07816 0.572928 1.20985C0.572928 1.34154 0.625936 1.46769 0.72 1.55985L5.17 5.99985L0.72 10.4399C0.625343 10.5337 0.572101 10.6615 0.572101 10.7949C0.572101 10.9282 0.625343 11.056 0.72 11.1499L1.43 11.8499C1.52388 11.9445 1.65168 11.9978 1.785 11.9978C1.91832 11.9978 2.04612 11.9445 2.14 11.8499L7.28 6.71985Z"
              fill="#4AC1A2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HasilPage;
