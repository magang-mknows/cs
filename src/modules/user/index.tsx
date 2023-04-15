import { FC, ReactElement, useState } from "react";
import Table from "./table";
import { useUserQuery } from "./hooks";
import Search from "@/components/atoms/search";
import Pagination from "@/components/atoms/pagination";

const UserModules: FC = (): ReactElement => {
  const { setUserQuery, getUserQuery } = useUserQuery();
  const [date] = useState();

  return (
    <div className="bg-white w-full h-full my-8 ">
      <div className="flex flex-col lg:flex-row gap-y-2 justify-between lg:p-8 pt-12">
        <div className="flex p-2 lg:mx-1 mx-4 lg:w-[420px] w-[300] rounded-md border text-sm">
          <h1>Dari : {date}</h1>
          <input type="date" />
          <h1>Sampai : {date}</h1>
          <input type="date" />
        </div>
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
