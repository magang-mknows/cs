import { ReactElement, FC } from "react";
import Table from "./table";
import Pagination from "@/components/atoms/pagination";
import Search from "@/components/atoms/search";
import { useResultQuery } from "./hooks";

const HasilPage: FC = (): ReactElement => {
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
      <Table />
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
