import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/organisms/sidebar";
import SidebarSkeleton from "@/components/organisms/sidebar/sidebar-skeleton";
import SuspenseError from "@/modules/common/suspense-error";
import Spinner from "@/components/atoms/loading/spinner";

export const BaseLayout: FC = (): ReactElement => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="flex flex-row h-auto w-screen">
        <div>
          <SuspenseError loading={<SidebarSkeleton />} error={<>error was happen in loading</>}>
            <Sidebar />
          </SuspenseError>
        </div>
        <div className="w-screen overflow-hidden p-8 max-screen-auto bg-[#F6FBFA]">
          <SuspenseError loading={<Spinner />} error={<>error was happen in loading</>}>
            <Outlet />
          </SuspenseError>
        </div>
      </div>
    </div>
  );
};
