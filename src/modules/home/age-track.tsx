import { FC, ReactElement } from "react";
import ChartBar2 from "@/components/molecules/chart/chart-bar2";

const AgeTrack: FC = (): ReactElement => {
  return (
    <section className="bg-white h-[500px]  w-full p-8 my-4">
      <h1 className="text-xl font-semibold p-4">TRACK USIA</h1>
      <div className="flex justify-between py-4">
        <div className="flex px-4 text-sm gap-3 ">
          <button className="hover:border border-primary-500 text-primary-500 rounded-md p-2 ">
            Tahun
          </button>
          <button className="border border-primary-500 shadow-md text-primary-500 rounded-md p-2 ">
            Bulan
          </button>
          <button className="hover:border border-primary-500 text-primary-500 rounded-md p-2 ">
            Minggu
          </button>
        </div>
        <div className="px-2">
          <select
            id="category"
            className="bg-white border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
          >
            <option selected>Semua</option>
            <option value="US">AI Optimation</option>
            <option value="CA">AI Document Verification</option>
            <option value="FR">AI Condition Analysis</option>
            <option value="DE">AI Location & Movement</option>
          </select>
        </div>
      </div>
      <ChartBar2 />
    </section>
  );
};
export default AgeTrack;
