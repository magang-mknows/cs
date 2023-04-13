import { FC, ReactElement } from "react";
import ChartDoughnut from "@/components/molecules/chart/chart-doughnut";

const SkorSection: FC = (): ReactElement => {
  return (
    <section className="bg-white h-[500px]  w-full p-8 my-4">
      <h1 className="text-xl font-semibold p-4">RIWAYAT NILAI SKOR</h1>
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
      <div className="flex">
        <div className=" w-[70%]">
          <ChartDoughnut />
        </div>
        <div className="py-14 ">
          <div className="flex gap-3 my-2">
            <div className="bg-[#13837B] rounded-full w-5 h-5"></div>
            <p className="text-xs">A (Sangat Baik)</p>
          </div>
          <div className="flex gap-3 my-2">
            <div className="bg-[#4AC1A2] rounded-full w-5 h-5"></div>
            <p className="text-xs">B (Baik)</p>
          </div>
          <div className="flex gap-3 my-2">
            <div className="bg-[#FDE68A] rounded-full w-5 h-5"></div>
            <p className="text-xs">C (Cukup Baik)</p>
          </div>
          <div className="flex gap-3 my-2">
            <div className="bg-[#E7AF52] rounded-full w-5 h-5"></div>
            <p className="text-xs">D (Buruk)</p>
          </div>
          <div className="flex gap-3 my-2">
            <div className="bg-[#897CC0] rounded-full w-5 h-5"></div>
            <p className="text-xs">E (Sangat Buruk)</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkorSection;
