import { FC, ReactElement } from "react";
import SidebarSkeleton from "@/components/organisms/sidebar/sidebar-skeleton";
import { NavbarSkeleton } from "@/components/organisms/navbar/navbar-sekeleton";

export const BaseLayoutSkeleton: FC = (): ReactElement => {
  return (
    <div className="flex flex-row">
      <div>
        <SidebarSkeleton />
      </div>

      <section className="flex flex-col justify-center items-center w-full h-screen bg-[#F6FBFA]">
        <NavbarSkeleton />
      </section>
    </div>
  );
};
