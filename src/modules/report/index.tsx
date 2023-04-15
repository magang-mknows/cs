import { FC, ReactElement, useState } from "react";
import { useReportQuery } from "./hooks";
import Search from "@/components/atoms/search";
import Table from "./table";
import IconPrev from "@/components/atoms/icons/ic-prev";
import IconNext from "@/components/atoms/icons/ic-next";

const ReportModules: FC = (): ReactElement => {
  const { setReportQuery, getReportQuery } = useReportQuery();
  const [isActive, setisActive] = useState("1");
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
          <Search value={getReportQuery} onChange={(e) => setReportQuery(e.target.value)} />
        </div>
      </div>

      <div className="lg:p-8 p-2">
        <Table />
      </div>
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
    </div>
  );
};

export default ReportModules;
