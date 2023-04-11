import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/organisms/sidebar";
import Navbar from "@/components/organisms/navbar";
import { NavbarSkeleton } from "@/components/organisms/navbar-sekeleton";
import SidebarSkeleton from "@/components/organisms/sidebar-skeleton";
import SuspenseError from "@/modules/common/suspense-error";
import Spinner from "@/components/atoms/spinner";

export const BaseLayout: FC = (): ReactElement => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row h-auto w-screen">
        <SuspenseError loading={<NavbarSkeleton />} error={<>error was happen in loading</>}>
          <Navbar />
        </SuspenseError>
        <div>
          <SuspenseError loading={<SidebarSkeleton />} error={<>error was happen in loading</>}>
            <Sidebar />
          </SuspenseError>
        </div>
        <div className="w-full p-8 max-screen-auto mt-8 bg-[#F6FBFA]">
          <SuspenseError loading={<Spinner />} error={<>error was happen in loading</>}>
            <Outlet />
          </SuspenseError>
        </div>
      </div>
    </div>
  );
};
