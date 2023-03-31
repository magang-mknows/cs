import { FC, ReactElement } from "react";
import { TCommon } from "../utilities/entities";
import Sidebar from "../components/organisms/sidebar";
import { Navbar } from "@/components/organisms/navbar";

export const BaseLayout: FC<TCommon> = ({ children }): ReactElement => {
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>

      <section className="flex flex-col justify-center items-center w-full h-screen bg-[#F6FBFA]">
        <Navbar />
        {children}
      </section>
    </div>
  );
};
