import { FC, ReactElement } from "react";

import ChartLine from "@/components/molecules/chart/chart-line";
import DropDownDashboard from "@/components/atoms/dropdownmenu/dashboard";

const RequestSection: FC = (): ReactElement => {
  return (
    <section className="bg-white lg:h-[500px] h-[400px] w-full rounded-md my-4">
      <h1 className="text-xl font-semibold p-4">RIWAYAT PERMINTAAN</h1>
      <div className="flex justify-between py-3">
        <div className="px-4">
          <DropDownDashboard />
        </div>
        <div>
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
      <div className="flex px-8 justify-end gap-4">
        <button className="border border-primary-500 rounded-full w-6 text-md">+</button>
        <button className="border border-primary-500 rounded-full w-6 text-md">-</button>
      </div>
      <div className="py-8">
        <ChartLine />
      </div>
    </section>
  );
};
export default RequestSection;
