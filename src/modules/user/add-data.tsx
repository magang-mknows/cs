import { ReactElement, FC } from "react";
import { Link } from "react-router-dom";

const TambahData: FC = (): ReactElement => {
  return (
    <div className="my-8 space-y-4 w-full h-full">
      <div className="flex flex-row w-full h-fit py-3 bg-warning-100 rounded-md px-4 text-warning-500 font-bold text-xs items-center gap gap-x-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.73804 17.9979C1.96611 19.3313 2.92823 21 4.46889 21H19.5311C21.0718 21 22.0339 19.3313 21.262 17.9979L13.7309 4.98965C12.9605 3.65908 11.0395 3.65908 10.2691 4.98965L2.73804 17.9979ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V13Z"
            fill="#F59E0B"
          />
        </svg>

        <div>Harap mengisi semua bagian untuk melanjutkan ke tahapan selanjutnya </div>
      </div>

      {/* content */}
      <div className="bg-white w-full h-full px-8 flex flex-col">
        <div className="flex flex-row gap gap-x-6 items-center border-b w-full h-fit p-6 text-primary-400 font-bold text-base">
          <div>
            <Link to={"/dashboard/user"}>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41016 1.41L2.83016 6L7.41016 10.59L6.00016 12L0.000156403 6L6.00016 0L7.41016 1.41Z"
                  fill="#A3A3A3"
                />
              </svg>
            </Link>
          </div>
          <Link to={"/dashboard/user"}>
            <div className="hover:opacity-[50%]">Kembali</div>
          </Link>
        </div>
        <div className="w-full h-fit flex justify-center items-center my-14 font-bold text-2xl">
          Ai Automation
        </div>
        <div className="w-full h-fit">
          <div className="w-full h-fit bg-neutral-100 py-4 flex justify-between px-5 rounded-md text-base">
            <p className="font-bold">AI Identity Scoring</p>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0901 15L12.5001 10.42L7.91006 15L6.50006 13.59L12.5001 7.59L18.5001 13.59L17.0901 15Z"
                fill="#737373"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahData;
