import { FC, ReactElement } from "react";
import { useReportQuery } from "./hooks";
import Search from "@/components/atoms/search";
import Pagination from "@/components/atoms/pagination";
import { DateInput } from "@/components/molecules/inputs/date-input";
import Table from "./table";

const ReportModules: FC = (): ReactElement => {
  const { setReportQuery, getReportQuery } = useReportQuery();

  return (
    <div className="bg-white w-full h-full my-8 ">
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:px-8 px-2 pt-12">
        <DateInput />
        <div className="flex flex-col lg:flex-row gap-2">
          <select
            id="category"
            className="bg-gray-50 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[30%] px-3 "
          >
            <option selected>Semua</option>
            <option value="US">AI Optimation</option>
            <option value="CA">AI Document Verification</option>
            <option value="FR">AI Condition Analysis</option>
            <option value="DE">AI Location & Movement</option>
          </select>
          <Search value={getReportQuery} onChange={(e) => setReportQuery(e.target.value)} />
        </div>
      </div>

      <div className="lg:p-8 p-2">
        <Table />
      </div>
      <Pagination />
    </div>
  );
};

export default ReportModules;
