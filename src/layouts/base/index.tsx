import { FC, ReactElement } from "react";
import { TCommon } from "@/utilities/entities";
import Sidebar from "@/components/organisms/sidebar";
import { Navbar } from "@/components/organisms/navbar";
import SuspenseError from "@/modules/common/suspense-error";
import SidebarSkeleton from "@/components/organisms/sidebar-skeleton";

export const BaseLayout: FC<TCommon> = ({ children }): ReactElement => {
  return (
    <div className="flex flex-row">
      <div>
        <SuspenseError loading={<SidebarSkeleton />} error="error was happen in loading">
          <Sidebar />
        </SuspenseError>
      </div>

      <section className="flex flex-col justify-center items-center w-full h-screen bg-[#F6FBFA]">
        <Navbar />
        {children}
      </section>
    </div>
  );
};
