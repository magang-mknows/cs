import { FC, ReactElement } from "react";
import Sidebar from "@/components/organisms/sidebar";
import { Navbar } from "@/components/organisms/navbar";
import SuspenseError from "@/modules/common/suspense-error";
import SidebarSkeleton from "@/components/organisms/sidebar-skeleton";
import { Outlet } from "react-router-dom";

export const BaseLayout: FC = (): ReactElement => {
  return (
    <div className="h-screen">
      <div className="flex flex-row">
        <div>
          <SuspenseError loading={<SidebarSkeleton />} error="error was happen in loading">
            <Sidebar />
          </SuspenseError>
        </div>

        <section className="flex flex-col space-y-14 absolute justify-center items-center w-full bg-[#F6FBFA]">
          <div className="w-full">
            <Navbar />
          </div>
          <div>
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
};
