import { ReactElement, FC, useState } from "react";
import Button from "@/components/atoms/button";
import { Dialog } from "@headlessui/react";
import Card from "@/components/molecules/card";
import { useResultData, useResultQuery } from "./hooks";
import IconSearch from "@/components/atoms/icons/ic-search";

const ProsesPage: FC = (): ReactElement => {
  const [isActive, setisActive] = useState("1");
  const [isOpen, setisOpen] = useState(false);
  const { setResultQuery, getResultQuery } = useResultQuery();
  const [search] = useState("");
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
          {getResultData.map((item, key) => {
            return (
              <tbody key={key}>
                <tr className="bg-white border-b dark:bg-[#ffff] ">
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
              </tbody>
            );
          })}
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
