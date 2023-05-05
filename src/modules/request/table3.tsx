import { FC, ReactElement, useState } from "react";
import { useRecoilState } from "recoil";
import IconDropdown from "@/components/atoms/icons/ic-dropdown";
import IconTable from "@/components/atoms/icons/ic-table";
import { TResultDataDummy } from "./types";
import { resultDataState } from "./store";
import {
  flexRender,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper<TResultDataDummy>();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.no, {
    id: "no",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>No</span>,
  }),
  columnHelper.accessor("nik", {
    header: () => "Nik",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("nama", {
    header: () => <span>Nama</span>,
  }),
  columnHelper.accessor("tggl_permintaan", {
    header: "Tanggal Permintaan",
  }),
  columnHelper.accessor("tggl_selesai", {
    header: "Tanggal Selesai",
  }),
  columnHelper.accessor("skor", {
    header: "Skor",
  }),
];

const Table: FC = (): ReactElement => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [data] = useRecoilState(resultDataState);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-scroll">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500  dark:text-gray-400">
        <thead className="text-xs border text-gray-700 font-light bg-[#F6FBFA] dark:bg-[#F5F8FF] dark:text-gray-400">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} scope="col" className="px-4 py-2 cursor-default w-[10%]">
                  <div className="flex gap-2 justify-center items-center">
                    {flexRender(header.column.columnDef.header, header.getContext())}{" "}
                    <IconDropdown />
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {table.getRowModel().rows.map((item, key) => {
          return (
            <tbody key={key}>
              <tr key={item.id}>
                {item.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}{" "}
                  </td>
                ))}
              </tr>

              {/* <tr className="bg-white border-b dark:bg-[#ffff] ">
                <td className="px-4">
                  <IconTable />
                </td>
                <td className=" py-7 text-[#262626] flex justify-center">{key + 1}</td>
                <td className="px-6 py-3 text-[#262626] ">{item.no}</td>
                <td className="px-6 py-3 text-[#262626]">{item.nik}</td>
                <td className="px-6 py-3 font-semibold text-[#262626] flex justify-center">
                  {item.nama}
                </td>
                <td className="px-6 py-3">{item.tggl_permintaan}</td>
                <td className="px-6 py-3">{item.tggl_selesai}</td>
                <td className="px-6 py-3 bg-green-400">
                  <button
                    className={` ${
                      item.skor === "Sangat Baik"
                        ? "bg-success-400"
                        : item.skor === "Cukup Buruk"
                        ? "bg-warning-500"
                        : "bg-error-400"
                    } text-white w-[100px] text-sm py-2 rounded-md cursor-default`}
                  >
                    {item.skor}
                  </button>
                </td>
              </tr> */}
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
