import { FC, ReactElement } from "react";
import DropDownDashboard from "@/components/atoms/dropdownmenu/dashboard";
import IconMap from "@/components/atoms/icons/ic-map";

const locationTrack: FC = (): ReactElement => {
  return (
    <section className="bg-white h-auto  w-full">
      <h1 className="text-xl font-semibold p-4">TRACK LOKASI</h1>
      <div className="flex justify-between py-4">
        <div className="px-4">
          <DropDownDashboard />
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
      <div className="p-2">
        <IconMap />
      </div>
    </section>
  );
};
export default locationTrack;