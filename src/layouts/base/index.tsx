import { FC, ReactElement } from "react";
import Sidebar from "@/components/organisms/sidebar";
import { Navbar } from "@/components/organisms/navbar";
import SuspenseError from "@/modules/common/suspense-error";
import { BaseLayoutSkeleton } from "./base-skeleton";
import { Outlet } from "react-router-dom";

export const BaseLayout: FC = (): ReactElement => {
  return (
    <div className="absolute flex flex-row">
      <div className="left-0 top-0 z-50">
        <Sidebar />
      </div>

      <section className="flex flex-col space-y-14  justify-center items-center bg-[#F6FBFA]">
        <div className="w-full z-40">
          <Navbar />
        </div>
        <SuspenseError loading={BaseLayoutSkeleton} error="error was happen in base layout">
          <section className="flex justify-center h-full min-h-screen pt-10 lg:justify-end lg:pr-4 w-screen">
            <Outlet />
          </section>
        </SuspenseError>
      </section>
    </div>
  );
};
