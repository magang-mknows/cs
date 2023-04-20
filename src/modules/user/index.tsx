import { FC, ReactElement } from "react";
import Table from "./table";
import { useUserQuery } from "./hooks";
import { DateInput } from "@/components/molecules/inputs/date-input";
import Search from "@/components/atoms/search";
import Pagination from "@/components/atoms/pagination";

const UserModules: FC = (): ReactElement => {
  const { setUserQuery, getUserQuery } = useUserQuery();

  return (
    <div className="bg-white w-full h-full my-8 ">
      <div className="flex flex-col lg:flex-row gap-y-2 justify-between lg:p-8 pt-12">
        <DateInput />
        <div className="flex gap-2">
          <Search value={getUserQuery} onChange={(e) => setUserQuery(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="lg:p-8 p-2">
          <Table />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default UserModules;
