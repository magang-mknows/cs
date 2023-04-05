import { FC, Fragment, ReactElement } from "react";
import Sidebar from "@/components/organisms/sidebar";
import { Navbar } from "@/components/organisms/navbar";
import SuspenseError from "@/modules/common/suspense-error";
import SidebarSkeleton from "@/components/organisms/sidebar-skeleton";
import { Outlet } from "react-router-dom";

export const BaseLayout: FC = (): ReactElement => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row h-auto w-screen">
        <Navbar />
        <div>
          <SuspenseError loading={<SidebarSkeleton />} error={<>error was happen in loading</>}>
            <Sidebar />
          </SuspenseError>
        </div>
        <div className="w-full p-8 max-screen-auto mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
