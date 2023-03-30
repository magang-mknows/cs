import { FC, ReactElement, useState } from "react";
import logo from "../../assets/logo.webp";

const Sidebar: FC = (): ReactElement => {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="z-50 fixed bottom-10 right-10 inline-flex items-center p-2 mt-2 ml-3 bg-[#9E9E9E9E] text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className={` ${
          open ? "-translate-x-full" : "sm:translate-x-0 "
        } absolute top-0 left-0 z-50 lg:sm:translate-x-0 w-64 h-screen transition-transform text-black bg-[#ffffff]`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto text-black bg-gray-50">
          <ul className="">
            <li>
              <img src={logo} alt="logo" className="w-auto h-auto p-8" />
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t w-full border-[#F5F5F5]">
            <li className="text-[#9E9E9E] hover:text-white">
              <a
                href="/"
                className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-[#4AC1A2] dark:text-[#9E9E9E] hover:text-white"
              >
                <div className="w-[24px] flex justify-center">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.86 6.61985L12.93 1.07985C11.86 0.219849 10.13 0.219849 9.06999 1.06985L2.13999 6.61985C1.35999 7.23985 0.85999 8.54985 1.02999 9.52985L2.35999 17.4898C2.59999 18.9098 3.95999 20.0598 5.39999 20.0598H16.6C18.03 20.0598 19.4 18.8998 19.64 17.4898L20.97 9.52985C21.13 8.54985 20.63 7.23985 19.86 6.61985ZM11 13.7498C10.3369 13.7498 9.70106 13.4865 9.23222 13.0176C8.76338 12.5488 8.49999 11.9129 8.49999 11.2498C8.49999 10.5868 8.76338 9.95092 9.23222 9.48208C9.70106 9.01324 10.3369 8.74985 11 8.74985C11.663 8.74985 12.2989 9.01324 12.7678 9.48208C13.2366 9.95092 13.5 10.5868 13.5 11.2498C13.5 11.9129 13.2366 12.5488 12.7678 13.0176C12.2989 13.4865 11.663 13.7498 11 13.7498Z" />
                  </svg>
                </div>
                <span className="ml-4">Dashboard</span>
              </a>
            </li>
            <li className="text-[#9E9E9E] hover:text-white">
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-[#4AC1A2] dark:text-[#9E9E9E] hover:text-white "
              >
                <div className="w-[24px] flex justify-center">
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 0.25V6.75C8.00002 7.12288 8.13892 7.48239 8.38962 7.75842C8.64032 8.03445 8.98484 8.2072 9.356 8.243L9.5 8.25H16V18.25C16.0002 18.7546 15.8096 19.2406 15.4665 19.6105C15.1234 19.9805 14.6532 20.2072 14.15 20.245L14 20.25H2C1.49542 20.2502 1.00943 20.0596 0.639452 19.7165C0.269471 19.3734 0.0428434 18.9032 0.00500021 18.4L1.00268e-07 18.25V2.25C-0.000159579 1.74542 0.190406 1.25943 0.533497 0.889452C0.876588 0.519471 1.34684 0.292843 1.85 0.255L2 0.25H8ZM8 9.75C7.75507 9.75003 7.51866 9.83996 7.33563 10.0027C7.15259 10.1655 7.03566 10.3897 7.007 10.633L7 10.75V12.25H5.5C5.24512 12.2503 4.99997 12.3479 4.81463 12.5228C4.6293 12.6978 4.51776 12.937 4.50283 13.1914C4.48789 13.4458 4.57067 13.6964 4.73426 13.8918C4.89785 14.0873 5.1299 14.2129 5.383 14.243L5.5 14.25H7V15.75C7.00028 16.0049 7.09788 16.25 7.27285 16.4354C7.44782 16.6207 7.68695 16.7322 7.94139 16.7472C8.19584 16.7621 8.44638 16.6793 8.64183 16.5157C8.83729 16.3521 8.9629 16.1201 8.993 15.867L9 15.75V14.25H10.5C10.7549 14.2497 11 14.1521 11.1854 13.9772C11.3707 13.8022 11.4822 13.563 11.4972 13.3086C11.5121 13.0542 11.4293 12.8036 11.2657 12.6082C11.1021 12.4127 10.8701 12.2871 10.617 12.257L10.5 12.25H9V10.75C9 10.4848 8.89464 10.2304 8.70711 10.0429C8.51957 9.85536 8.26522 9.75 8 9.75ZM10 0.293C10.3234 0.36165 10.6247 0.509389 10.877 0.723L11 0.836L15.414 5.25C15.6483 5.48411 15.8208 5.77275 15.916 6.09L15.956 6.25H10V0.293Z"
                    />
                  </svg>
                </div>
                <span className="ml-4">Permintaan</span>
              </a>
            </li>
            <li className="text-[#9E9E9E] hover:text-white">
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg dark:hover:bg-[#4AC1A2] dark:text-[#9E9E9E] hover:text-white"
              >
                <div className="w-[24px] flex justify-center">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <mask
                      id="mask0_1001_9393"
                      maskUnits="userSpaceOnUse"
                      x="3"
                      y="2"
                      width="18"
                      height="20"
                    >
                      <path
                        d="M4 4.6C4 4.24196 4.13308 3.89858 4.36997 3.64541C4.60686 3.39223 4.92815 3.25 5.26316 3.25H15.3684C15.7034 3.25 16.0247 3.39223 16.2616 3.64541C16.4985 3.89858 16.6316 4.24196 16.6316 4.6V21.25H5.26316C4.92815 21.25 4.60686 21.1078 4.36997 20.8546C4.13308 20.6014 4 20.258 4 19.9V4.6Z"
                        fill="white"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.6316 12.2496C16.6316 12.0109 16.7203 11.782 16.8782 11.6132C17.0362 11.4444 17.2504 11.3496 17.4737 11.3496H19.1579C19.3812 11.3496 19.5954 11.4444 19.7534 11.6132C19.9113 11.782 20 12.0109 20 12.2496V19.8996C20 20.2577 19.8669 20.601 19.63 20.8542C19.3932 21.1074 19.0719 21.2496 18.7369 21.2496H16.6316V12.2496Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.52637 6.8501H9.89479M6.52637 10.0001H11.579"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </mask>
                    <g mask="url(#mask0_1001_9393)">
                      <path d="M1.89478 1.44971H22.1053V23.0497H1.89478V1.44971Z" />
                    </g>
                  </svg>
                </div>
                <span className="ml-4">Laporan</span>
              </a>
            </li>
            <li className="text-[#9E9E9E] hover:text-white">
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg dark:hover:bg-[#4AC1A2] dark:text-[#9E9E9E] hover:text-white"
              >
                <div className="w-[24px] flex justify-center">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22.25C17.5228 22.25 22 17.7728 22 12.25C22 6.72715 17.5228 2.25 12 2.25C6.47715 2.25 2 6.72715 2 12.25C2 17.7728 6.47715 22.25 12 22.25Z" />
                    <path
                      d="M9 11.75V6.75H12.396C13.834 6.75 15 7.8695 15 9.25C15 10.6305 13.834 11.75 12.396 11.75H9ZM9 11.75H13.4155C14.843 11.75 16 13.093 16 14.75C16 16.407 14.843 17.75 13.4155 17.75H9V11.75Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span className="ml-4">Billing</span>
              </a>
            </li>
          </ul>
          <ul className="bottom-0 pt-4 mt-4 font-medium">
            <li className="text-[#9E9E9E] hover:text-white">
              <a
                href="/"
                className="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-[#4AC1A2] dark:text-[#9E9E9E] hover:text-white"
              >
                <div className="w-[24px] flex justify-center text-[#9E9E9E] dark:text-white">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.99814 8.00293H16.5047"
                      stroke="#A3A3A3"
                      stroke-width="1.5"
                    />
                    <path
                      d="M14.0031 10.5051L16.5047 8.00352L14.0031 5.50195"
                      stroke="#A3A3A3"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.5016 11.0023V14.0042C11.5254 14.5313 11.1187 14.9786 10.5917 15.0048H2.40455C1.87781 14.9782 1.47152 14.5311 1.49532 14.0042V1.99672C1.47115 1.46971 1.87764 1.02236 2.40455 0.996094H10.5917C11.1187 1.02236 11.5254 1.4696 11.5016 1.99672V4.99859"
                      stroke="#A3A3A3"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <span className="ml-4">Keluar</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
