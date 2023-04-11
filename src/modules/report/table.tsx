import { FC, ReactElement } from "react";

const table = [
  {
    No: 10002345,
    Nik: 327000189266,
    Nama: "Albert Maniqueen",
    Berkas: "Lihat Detail",
    Tggl_permintaan: "11/2/2021",
    Tggl_selesai: "11/07/2023",
    Skor: "Sangat Baik",
    Detail: "Lihat Detail",
  },
  {
    No: 10002345,
    Nik: 327000189266,
    Nama: "Albert Maniqueen",
    Berkas: "Lihat Detail",
    Tggl_permintaan: "11/2/2021",
    Tggl_selesai: "11/07/2023",
    Skor: "Cukup Baik",
    Detail: "Lihat Detail",
  },
  {
    No: 10002345,
    Nik: 327000189266,
    Nama: "Albert Maniqueen",
    Berkas: "Lihat Detail",
    Tggl_permintaan: "11/2/2021",
    Tggl_selesai: "11/07/2023",
    Skor: "Sangat Baik",
    Detail: "Lihat Detail",
  },
  {
    No: 10002345,
    Nik: 327000189266,
    Nama: "Albert Maniqueen",
    Berkas: "Lihat Detail",
    Tggl_permintaan: "11/2/2021",
    Tggl_selesai: "11/07/2023",
    Skor: "Sangat Buruk",
    Detail: "Lihat Detail",
  },
];

const Table: FC = (): ReactElement => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm border rounded-lg text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs border text-gray-700 uppercase bg-[#F6FBFA] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>No Permintaan</p>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47015 0.970306C3.76312 0.677338 4.2389 0.677338 4.53187 0.970306L7.53187 3.97031C7.7475 4.18593 7.81078 4.50703 7.69359 4.78828C7.5764 5.06953 7.30453 5.25234 6.99984 5.25234H0.99984C0.697496 5.25234 0.423277 5.06953 0.30609 4.78828C0.188902 4.50703 0.254527 4.18593 0.467809 3.97031L3.46781 0.970306H3.47015ZM3.47015 11.032L0.470152 8.03203C0.254527 7.8164 0.191246 7.49531 0.308434 7.21406C0.425621 6.93281 0.697496 6.74999 1.00218 6.74999H6.99984C7.30218 6.74999 7.5764 6.93281 7.69359 7.21406C7.81078 7.49531 7.74515 7.8164 7.53187 8.03203L4.53187 11.032C4.2389 11.325 3.76312 11.325 3.47015 11.032Z"
                    fill="#737373"
                  />
                </svg>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>NIK</p>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47015 0.970306C3.76312 0.677338 4.2389 0.677338 4.53187 0.970306L7.53187 3.97031C7.7475 4.18593 7.81078 4.50703 7.69359 4.78828C7.5764 5.06953 7.30453 5.25234 6.99984 5.25234H0.99984C0.697496 5.25234 0.423277 5.06953 0.30609 4.78828C0.188902 4.50703 0.254527 4.18593 0.467809 3.97031L3.46781 0.970306H3.47015ZM3.47015 11.032L0.470152 8.03203C0.254527 7.8164 0.191246 7.49531 0.308434 7.21406C0.425621 6.93281 0.697496 6.74999 1.00218 6.74999H6.99984C7.30218 6.74999 7.5764 6.93281 7.69359 7.21406C7.81078 7.49531 7.74515 7.8164 7.53187 8.03203L4.53187 11.032C4.2389 11.325 3.76312 11.325 3.47015 11.032Z"
                    fill="#737373"
                  />
                </svg>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Nama</p>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47015 0.970306C3.76312 0.677338 4.2389 0.677338 4.53187 0.970306L7.53187 3.97031C7.7475 4.18593 7.81078 4.50703 7.69359 4.78828C7.5764 5.06953 7.30453 5.25234 6.99984 5.25234H0.99984C0.697496 5.25234 0.423277 5.06953 0.30609 4.78828C0.188902 4.50703 0.254527 4.18593 0.467809 3.97031L3.46781 0.970306H3.47015ZM3.47015 11.032L0.470152 8.03203C0.254527 7.8164 0.191246 7.49531 0.308434 7.21406C0.425621 6.93281 0.697496 6.74999 1.00218 6.74999H6.99984C7.30218 6.74999 7.5764 6.93281 7.69359 7.21406C7.81078 7.49531 7.74515 7.8164 7.53187 8.03203L4.53187 11.032C4.2389 11.325 3.76312 11.325 3.47015 11.032Z"
                    fill="#737373"
                  />
                </svg>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Tanggal Permintaan</p>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47015 0.970306C3.76312 0.677338 4.2389 0.677338 4.53187 0.970306L7.53187 3.97031C7.7475 4.18593 7.81078 4.50703 7.69359 4.78828C7.5764 5.06953 7.30453 5.25234 6.99984 5.25234H0.99984C0.697496 5.25234 0.423277 5.06953 0.30609 4.78828C0.188902 4.50703 0.254527 4.18593 0.467809 3.97031L3.46781 0.970306H3.47015ZM3.47015 11.032L0.470152 8.03203C0.254527 7.8164 0.191246 7.49531 0.308434 7.21406C0.425621 6.93281 0.697496 6.74999 1.00218 6.74999H6.99984C7.30218 6.74999 7.5764 6.93281 7.69359 7.21406C7.81078 7.49531 7.74515 7.8164 7.53187 8.03203L4.53187 11.032C4.2389 11.325 3.76312 11.325 3.47015 11.032Z"
                    fill="#737373"
                  />
                </svg>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Tanggal Selesai</p>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47015 0.970306C3.76312 0.677338 4.2389 0.677338 4.53187 0.970306L7.53187 3.97031C7.7475 4.18593 7.81078 4.50703 7.69359 4.78828C7.5764 5.06953 7.30453 5.25234 6.99984 5.25234H0.99984C0.697496 5.25234 0.423277 5.06953 0.30609 4.78828C0.188902 4.50703 0.254527 4.18593 0.467809 3.97031L3.46781 0.970306H3.47015ZM3.47015 11.032L0.470152 8.03203C0.254527 7.8164 0.191246 7.49531 0.308434 7.21406C0.425621 6.93281 0.697496 6.74999 1.00218 6.74999H6.99984C7.30218 6.74999 7.5764 6.93281 7.69359 7.21406C7.81078 7.49531 7.74515 7.8164 7.53187 8.03203L4.53187 11.032C4.2389 11.325 3.76312 11.325 3.47015 11.032Z"
                    fill="#737373"
                  />
                </svg>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Skor</p>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47015 0.970306C3.76312 0.677338 4.2389 0.677338 4.53187 0.970306L7.53187 3.97031C7.7475 4.18593 7.81078 4.50703 7.69359 4.78828C7.5764 5.06953 7.30453 5.25234 6.99984 5.25234H0.99984C0.697496 5.25234 0.423277 5.06953 0.30609 4.78828C0.188902 4.50703 0.254527 4.18593 0.467809 3.97031L3.46781 0.970306H3.47015ZM3.47015 11.032L0.470152 8.03203C0.254527 7.8164 0.191246 7.49531 0.308434 7.21406C0.425621 6.93281 0.697496 6.74999 1.00218 6.74999H6.99984C7.30218 6.74999 7.5764 6.93281 7.69359 7.21406C7.81078 7.49531 7.74515 7.8164 7.53187 8.03203L4.53187 11.032C4.2389 11.325 3.76312 11.325 3.47015 11.032Z"
                    fill="#737373"
                  />
                </svg>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 cursor-default">
              <div className="flex gap-2 justify-center items-center">
                <p>Lihat Detail</p>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.47015 0.970306C3.76312 0.677338 4.2389 0.677338 4.53187 0.970306L7.53187 3.97031C7.7475 4.18593 7.81078 4.50703 7.69359 4.78828C7.5764 5.06953 7.30453 5.25234 6.99984 5.25234H0.99984C0.697496 5.25234 0.423277 5.06953 0.30609 4.78828C0.188902 4.50703 0.254527 4.18593 0.467809 3.97031L3.46781 0.970306H3.47015ZM3.47015 11.032L0.470152 8.03203C0.254527 7.8164 0.191246 7.49531 0.308434 7.21406C0.425621 6.93281 0.697496 6.74999 1.00218 6.74999H6.99984C7.30218 6.74999 7.5764 6.93281 7.69359 7.21406C7.81078 7.49531 7.74515 7.8164 7.53187 8.03203L4.53187 11.032C4.2389 11.325 3.76312 11.325 3.47015 11.032Z"
                    fill="#737373"
                  />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        {table.map((x, i) => {
          return (
            <tbody key={i}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                <td className="px-6 py-4 text-[#262626]">{x.No}</td>
                <td className="px-6 py-4 text-[#262626]">{x.Nik}</td>
                <td className="px-6 py-4 font-bold text-[#262626]">{x.Nama}</td>
                <td className="px-6 py-4">{x.Tggl_permintaan}</td>
                <td className="px-6 py-4">{x.Tggl_selesai}</td>
                <td className="px-6 py-4 bg-green-400">
                  <button
                    className={` ${
                      x.Skor === "Sangat Baik"
                        ? "bg-success-400"
                        : x.Skor === "Cukup Baik"
                        ? "bg-warning-300"
                        : "bg-error-400"
                    } text-white w-[110px] text-sm p-2 rounded-md`}
                  >
                    {x.Skor}
                  </button>
                </td>
                <td className="px-2 py-4 text-md text-blue-600 ">
                  <div className="flex gap-2">
                    <img src="/assets/pdf.svg" alt="logo" />
                    <p>Lihat PDF</p>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
