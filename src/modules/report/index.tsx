import { FC, ReactElement, useState } from "react";
import IconSearch from "@/components/atoms/icons/ic-search";
import { useReportQuery } from "./hooks";
import Table from "./table";
import IconPrev from "@/components/atoms/icons/ic-prev";
import IconNext from "@/components/atoms/icons/ic-next";

const ReportModules: FC = (): ReactElement => {
  const [search] = useState("");
  const { setReportQuery, getReportQuery } = useReportQuery();
  const [date] = useState();

  return (
    <div className="bg-white w-full h-full my-8 ">
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:px-8 px-2 pt-12">
        <div className="flex  p-1 lg:w-[380px] w-[250px] rounded-md border text-sm">
          <h1>Dari : {date}</h1>
          <input type="date" />
          <h1>Sampai : {date}</h1>
          <input type="date" />
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <select
            id="category"
            className="bg-gray-50 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[40%] w-full p-3 "
          >
            <option selected>Semua</option>
            <option value="US">AI Optimation</option>
            <option value="CA">AI Document Verification</option>
            <option value="FR">AI Condition Analysis</option>
            <option value="DE">AI Location & Movement</option>
          </select>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setReportQuery(search);
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
                value={getReportQuery}
                onChange={(e) => setReportQuery(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Search NIK, Nama, No. Permintaan"
                required
              />
            </div>
          </form>
        </div>
      </div>

      <div className="lg:p-8 p-2">
        <Table />
      </div>
      <div className="flex w-full justify-center items-center gap-x-2">
        <div className="p-2 px-3 border rounded-md cursor-pointer">
          <IconPrev />
        </div>
        <div className="p-2 px-3 border rounded-md bg-primary-400 text-white">1</div>
        <div className="p-2 px-3 border rounded-md">2</div>
        <div className="p-2 px-3 border rounded-md">3</div>
        <div className="p-2 px-3 border rounded-md cursor-pointer">
          <IconNext />
        </div>
      </div>
    </div>
  );
};

export default ReportModules;
