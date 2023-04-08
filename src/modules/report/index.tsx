import { FC, ReactElement, useState } from "react";
import Button from "@/components/atoms/button";
import Table from "./table";

const ReportModules: FC = (): ReactElement => {
  const [date] = useState();

  return (
    <div className="bg-white w-full h-full my-8 ">
      <div className="flex justify-between px-8 pt-12">
        <div className="flex p-2 w-[420px] rounded-md border">
          <h1>Dari : {date}</h1>
          <input type="date" />
          <h1>Sampai : {date}</h1>
          <input type="date" />
        </div>
        <div className="flex gap-2">
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-3 "
          >
            <option selected>Semua</option>
            <option value="US">AI Optimation</option>
            <option value="CA">AI Document Verification</option>
            <option value="FR">AI Condition Analysis</option>
            <option value="DE">AI Location & Movement</option>
          </select>
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
          </form>
        </div>
      </div>
      <div className="flex px-16 w-full justify-end items-end">
        <button className="border my-2 p-2 rounded-md text-gray-500 text-sm">Unduh Semua</button>
      </div>
      <div className="p-8">
        <Table />
      </div>
    </div>
  );
};

export default ReportModules;
