import { FC, ReactElement, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import IconDropdown from "@/components/atoms/icons/ic-dropdown";
import IconTable from "@/components/atoms/icons/ic-table";
import { TResultDataDummy } from "./types";
import { resultDataState, resultDummyData } from "./store";
import { useTable, useSortBy, Column } from "react-table";

const TableData: FC = (): ReactElement => {
  // const { getResultData } = useResultData();
  // const { getSortedData } = useSortedData();

  const dataDummy = useRecoilState(resultDummyData);

  const columns: Column<TResultDataDummy>[] = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "No",
        accessor: "no",
      },
      {
        Header: "NIK",
        accessor: "nik",
      },
      {
        Header: "Nama",
        accessor: "nama",
      },
      {
        Header: "Tanggal Permintaan",
        accessor: "tggl_permintaan",
      },
      {
        Header: "Tanggal Selesai",
        accessor: "tggl_permintaan",
      },
      {
        Header: "Skor",
        accessor: "skor",
      },
    ],
    [],
  );

  interface Data {
    id: number;
    no: number;
    nik: number;
    nama: string;
    tggl_permintaan: string;
    tggl_selesai: string;
    skor: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data: Data[] = useMemo(
    () => [
      {
        id: 1,
        no: 10002345,
        nik: 327000189266,
        nama: "Albert Maniqueen",
        tggl_permintaan: "11/2/2021",
        tggl_selesai: "11/2/2021",
        skor: "Sangat Baik",
      },
      {
        id: 2,
        no: 11122334,
        nik: 32356789,
        nama: "Ludwig Bethoven",
        tggl_permintaan: "15/3/2022",
        tggl_selesai: "11/2/2023",
        skor: "Cukup Buruk",
      },
      {
        id: 3,
        no: 123578912,
        nik: 3278532111,
        nama: "Jawadal Al Hilal",
        tggl_permintaan: "11/8/2021",
        tggl_selesai: "11/2/2024",
        skor: "Sangat Baik",
      },
      {
        id: 4,
        no: 10002345,
        nik: 327000189266,
        nama: "Yasmin Siahaan",
        tggl_permintaan: "11/2/2021",
        tggl_selesai: "11/2/2021",
        skor: "Sangat Buruk",
      },
    ],
    [],
  );

  const tableInstance = useTable({
    columns,
    data,
  });

  return (
    <div className="overflow-x-scroll">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500  dark:text-gray-400">
        <thead className="text-xs border text-gray-700 font-light bg-[#F6FBFA] dark:bg-[#F5F8FF] dark:text-gray-400">
          {tableInstance.headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  scope="col"
                  className="px-4 py-2 cursor-default w-[10%]"
                >
                  <div className="flex gap-2 justify-center items-center">
                    {column.render("Header")}
                    <IconDropdown />
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.rows.map((row) => {
            tableInstance.prepareRow(row);
            return (
              <tr key={row.id} className="px-2">
                {row.cells.map((cell) => (
                  <>
                    <td>
                      <IconTable />
                    </td>
                    <td className="px-4" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  </>
                ))}
              </tr>
            );
          })}
        </tbody>

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
      </table>
    </div>
  );
};
export default TableData;
