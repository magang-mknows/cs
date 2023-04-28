import { FC, ReactElement, Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import IconDashboard from "../../atoms/icons/ic-dashboard";
import IconUser from "../../atoms/icons/ic-user";
import IconRequest from "../../atoms/icons/ic-request";
import IconReport from "../../atoms/icons/ic-report";
import IconQuota from "../../atoms/icons/ic-quota";
import IconToggle from "@/components/atoms/icons/ic-toggle";
import IconLogout from "@/components/atoms/icons/ic-logout";

const Sidebar: FC = (): ReactElement => {
  const DataSidebar = [
    {
      title: "Dashboard",
      path: "/dashboard/home",
      icon: <IconDashboard />,
    },
    {
      title: "User",
      path: "/dashboard/user",
      icon: <IconUser />,
    },
    {
      title: "Permintaan",
      path: "/dashboard/request",
      icon: <IconRequest />,
    },
    {
      title: "Laporan",
      path: "/dashboard/report/",
      icon: <IconReport />,
    },
    {
      title: "Kuota",
      path: "/dashboard/quota",
      icon: <IconQuota />,
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
        <IconToggle />
      </button>

      <aside
        id="separator-sidebar"
        className={` ${
          open ? "  -translate-x-full" : " sm:translate-x-0 "
        } absolute lg:relative top-0 left-0 z-50 lg:sm:translate-x-0 w-64 h-full transition-transform text-black bg-[#ffffff] `}
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
            <Link to={"/"}>
              <div className="flex h-full gap-2 p-3 rounded-md mt-[90%] text-neutral-400 hover:bg-neutral-300 hover:text-[#ffffff] cursor-pointer items-end">
                <span>
                  <IconLogout />
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
