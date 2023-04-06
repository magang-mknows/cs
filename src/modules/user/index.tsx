import { FC, ReactElement, useState } from "react";
import Button from "@/components/atoms/button";
import Table from "./table";

const UserModules: FC = (): ReactElement => {
  const [date] = useState();

  return (
    <div className="bg-white w-full h-full my-8 ">
      <div className="flex justify-between p-8 py-16">
        <div className="flex p-2 w-[420px] rounded-md border">
          <h1>Dari : {date}</h1>
          <input type="date" />
          <h1>Sampai : {date}</h1>
          <input type="date" />
        </div>
        <div>
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
            <Button className="px-8 py-2 bg-primary-400 mx-4">Search</Button>
            <Button className="py-2 border bg-white text-primary-500 font-semibold w-full border-primary-400">
              + Tambah Data
            </Button>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="p-8">
          <Table />
        </div>
        <div className="flex w-full justify-center items-center gap-x-2">
          <div className="p-2 px-3 border rounded-md cursor-pointer">
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
          <div className="p-2 px-3 border rounded-md">1</div>
          <div className="p-2 px-3 border rounded-md">2</div>
          <div className="p-2 px-3 border rounded-md">3</div>
          <div className="p-2 px-3 border rounded-md cursor-pointer">
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
    </div>
  );
};

export default UserModules;
