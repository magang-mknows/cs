import { FC, ReactElement, useState } from "react";
import Table from "./table";
import { useUserQuery } from "./hooks";
import IconSearch from "@/components/atoms/icons/ic-search";
import IconPrev from "@/components/atoms/icons/ic-prev";
import IconNext from "@/components/atoms/icons/ic-next";

const UserModules: FC = (): ReactElement => {
  const [search] = useState("");
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
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setUserQuery(search);
            }}
            className="flex flex-col lg:flex-row gap-y-3 gap-x-2 px-8 lg:px-1 items-center"
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
                value={getUserQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Search NIM, NIK, Nama, No. Permintaan"
                required
              />
            </div>
            <button className="border bg-white text-primary-500 font-semibold w-[200px] border-primary-400 rounded-md p-2">
              + Tambah Data
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <Table />
        <div className="flex w-full justify-center items-center gap-x-2 py-4">
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
    </div>
  );
};

export default UserModules;
