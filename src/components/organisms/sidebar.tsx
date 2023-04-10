import { FC, ReactElement, Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar: FC = (): ReactElement => {
  const DataSidebar = [
    {
      title: "Dashboard",
      path: "/",
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.86 6.61985L12.93 1.07985C11.86 0.219849 10.13 0.219849 9.07002 1.06985L2.14002 6.61985C1.36002 7.23985 0.860021 8.54985 1.03002 9.52985L2.36002 17.4898C2.60002 18.9098 3.96002 20.0598 5.40002 20.0598H16.6C18.03 20.0598 19.4 18.8998 19.64 17.4898L20.97 9.52985C21.13 8.54985 20.63 7.23985 19.86 6.61985ZM11 13.7498C10.337 13.7498 9.70109 13.4865 9.23225 13.0176C8.76341 12.5488 8.50002 11.9129 8.50002 11.2498C8.50002 10.5868 8.76341 9.95092 9.23225 9.48208C9.70109 9.01324 10.337 8.74985 11 8.74985C11.6631 8.74985 12.2989 9.01324 12.7678 9.48208C13.2366 9.95092 13.5 10.5868 13.5 11.2498C13.5 11.9129 13.2366 12.5488 12.7678 13.0176C12.2989 13.4865 11.6631 13.7498 11 13.7498Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "User",
      path: "/user",
      icon: (
        <svg
          width="24"
          height="21"
          viewBox="0 0 24 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0.75C12.9283 0.75 13.8185 1.11875 14.4749 1.77513C15.1313 2.4315 15.5 3.32174 15.5 4.25C15.5 5.17826 15.1313 6.0685 14.4749 6.72487C13.8185 7.38125 12.9283 7.75 12 7.75C11.0717 7.75 10.1815 7.38125 9.52513 6.72487C8.86875 6.0685 8.5 5.17826 8.5 4.25C8.5 3.32174 8.86875 2.4315 9.52513 1.77513C10.1815 1.11875 11.0717 0.75 12 0.75ZM5 3.25C5.56 3.25 6.08 3.4 6.53 3.67C6.38 5.1 6.8 6.52 7.66 7.63C7.16 8.59 6.16 9.25 5 9.25C4.20435 9.25 3.44129 8.93393 2.87868 8.37132C2.31607 7.80871 2 7.04565 2 6.25C2 5.45435 2.31607 4.69129 2.87868 4.12868C3.44129 3.56607 4.20435 3.25 5 3.25ZM19 3.25C19.7956 3.25 20.5587 3.56607 21.1213 4.12868C21.6839 4.69129 22 5.45435 22 6.25C22 7.04565 21.6839 7.80871 21.1213 8.37132C20.5587 8.93393 19.7956 9.25 19 9.25C17.84 9.25 16.84 8.59 16.34 7.63C17.2119 6.50442 17.6166 5.0862 17.47 3.67C17.92 3.4 18.44 3.25 19 3.25ZM5.5 13.5C5.5 11.43 8.41 9.75 12 9.75C15.59 9.75 18.5 11.43 18.5 13.5V15.25H5.5V13.5ZM0 15.25V13.75C0 12.36 1.89 11.19 4.45 10.85C3.86 11.53 3.5 12.47 3.5 13.5V15.25H0ZM24 15.25H20.5V13.5C20.5 12.47 20.14 11.53 19.55 10.85C22.11 11.19 24 12.36 24 13.75V15.25Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Permintaan",
      path: "/permintaan",
      icon: (
        <svg
          width="26"
          height="21"
          viewBox="0 0 16 18"
          fill="#9E9E9E"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0.25V6.75C8.00002 7.12288 8.13892 7.48239 8.38962 7.75842C8.64032 8.03445 8.98484 8.2072 9.356 8.243L9.5 8.25H16V18.25C16.0002 18.7546 15.8096 19.2406 15.4665 19.6105C15.1234 19.9805 14.6532 20.2072 14.15 20.245L14 20.25H2C1.49542 20.2502 1.00943 20.0596 0.639452 19.7165C0.269471 19.3734 0.0428434 18.9032 0.00500021 18.4L1.00268e-07 18.25V2.25C-0.000159579 1.74542 0.190406 1.25943 0.533497 0.889452C0.876587 0.519471 1.34684 0.292843 1.85 0.255L2 0.25H8ZM8 9.75C7.75507 9.75003 7.51866 9.83996 7.33563 10.0027C7.15259 10.1655 7.03566 10.3897 7.007 10.633L7 10.75V12.25H5.5C5.24512 12.2503 4.99997 12.3479 4.81463 12.5228C4.6293 12.6978 4.51776 12.937 4.50283 13.1914C4.48789 13.4458 4.57067 13.6964 4.73426 13.8918C4.89785 14.0873 5.1299 14.2129 5.383 14.243L5.5 14.25H7V15.75C7.00028 16.0049 7.09788 16.25 7.27285 16.4354C7.44782 16.6207 7.68695 16.7322 7.94139 16.7472C8.19584 16.7621 8.44638 16.6793 8.64183 16.5157C8.83729 16.3521 8.9629 16.1201 8.993 15.867L9 15.75V14.25H10.5C10.7549 14.2497 11 14.1521 11.1854 13.9772C11.3707 13.8022 11.4822 13.563 11.4972 13.3086C11.5121 13.0542 11.4293 12.8036 11.2657 12.6082C11.1021 12.4127 10.8701 12.2871 10.617 12.257L10.5 12.25H9V10.75C9 10.4848 8.89464 10.2304 8.70711 10.0429C8.51957 9.85536 8.26522 9.75 8 9.75ZM10 0.293C10.3234 0.36165 10.6247 0.509389 10.877 0.723L11 0.836L15.414 5.25C15.6483 5.48411 15.8208 5.77275 15.916 6.09L15.956 6.25H10V0.293Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Laporan",
      path: "/laporan",
      icon: (
        <svg
          width="27"
          height="21"
          viewBox="0 0 18 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="mask0_1334_11329" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="20">
            <path
              d="M1 2.6C1 2.24196 1.13308 1.89858 1.36997 1.64541C1.60686 1.39223 1.92815 1.25 2.26316 1.25H12.3684C12.7034 1.25 13.0247 1.39223 13.2616 1.64541C13.4985 1.89858 13.6316 2.24196 13.6316 2.6V19.25H2.26316C1.92815 19.25 1.60686 19.1078 1.36997 18.8546C1.13308 18.6014 1 18.258 1 17.9V2.6Z"
              fill="white"
              stroke="white"
            />
            <path
              d="M13.6316 10.2496C13.6316 10.0109 13.7203 9.782 13.8782 9.61321C14.0362 9.44443 14.2504 9.34961 14.4737 9.34961H16.1579C16.3812 9.34961 16.5954 9.44443 16.7534 9.61321C16.9113 9.782 17 10.0109 17 10.2496V17.8996C17 18.2577 16.8669 18.601 16.63 18.8542C16.3932 19.1074 16.0719 19.2496 15.7369 19.2496H13.6316V10.2496Z"
              stroke="white"
            />
            <path d="M3.52637 4.8501H6.89479M3.52637 8.0001H8.579" stroke="black" />
          </mask>
          <g mask="url(#mask0_1334_11329)">
            <path d="M-1.10522 -0.550293H19.1053V21.0497H-1.10522V-0.550293Z" fill="currentColor" />
          </g>
        </svg>
      ),
    },
    {
      title: "Kuota",
      path: "/kuota",
      icon: (
        <svg
          width="26"
          height="21"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.25C17.5228 22.25 22 17.7728 22 12.25C22 6.72715 17.5228 2.25 12 2.25C6.47715 2.25 2 6.72715 2 12.25C2 17.7728 6.47715 22.25 12 22.25Z"
            fill="currentColor"
          />
          <path
            d="M9 11.75V6.75H12.396C13.834 6.75 15 7.8695 15 9.25C15 10.6305 13.834 11.75 12.396 11.75H9ZM9 11.75H13.4155C14.843 11.75 16 13.093 16 14.75C16 16.407 14.843 17.75 13.4155 17.75H9V11.75Z"
            stroke="white"
          />
        </svg>
      ),
    },
  ];
  const activeLink =
    "flex rounded-md cursor-pointer gap-2 p-2 items-center bg-primary-400 text-[#ffffff]";
  const normalLink =
    "flex rounded-md cursor-pointer gap-2 p-2 items-center bg-white text-[#9E9E9E] hover:bg-neutral-300 hover:text-[#ffffff]";
  const [open, setOpen] = useState(true);
  const toggleSidebar = (): void => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <button
        type="button"
        className="z-50 fixed bottom-10 shadow-md right-10 inline-flex items-center p-2 mt-2 ml-3 bg-[#ffffff] text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6 text-[#9E9E9E9E] "
          aria-hidden="true"
          fill="#9E9E9E9E"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className={` ${
          open ? "  -translate-x-full" : " sm:translate-x-0 "
        } absolute top-0 left-0 z-50 lg:sm:translate-x-0 w-64 h-screen transition-transform text-black bg-[#ffffff] `}
        aria-label="Sidebar"
      >
        <div className="h-screen px-3 py-4  text-black bg-white border-b">
          <div>
            <img src={"/assets/logo.webp"} alt="logo" className="w-[200px] h-auto p-6" />
          </div>
          <div className="pt-4 font-medium border-t w-full border-[#F5F5F5]  ">
            {DataSidebar.map((x, i) => {
              return (
                <div key={i}>
                  <NavLink
                    to={x.path}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <span className="p-1">{x.icon}</span>
                    <span>{x.title}</span>
                  </NavLink>
                </div>
              );
            })}
            <Link to={"/auth/login"}>
              <div className="flex h-full gap-2 p-3 rounded-md mt-[80%] text-neutral-400 hover:bg-neutral-300 hover:text-[#ffffff] cursor-pointer items-end">
                <span>
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full mb-[4px]"
                  >
                    <path d="M5.99814 8.00293H16.5047" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M14.0031 10.5051L16.5047 8.00352L14.0031 5.50195"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M11.5016 11.0023V14.0042C11.5254 14.5313 11.1187 14.9786 10.5917 15.0048H2.40455C1.87781 14.9782 1.47152 14.5311 1.49532 14.0042V1.99672C1.47115 1.46971 1.87764 1.02236 2.40455 0.996094H10.5917C11.1187 1.02236 11.5254 1.4696 11.5016 1.99672V4.99859"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <span className="flex justify-center ">Keluar</span>
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
