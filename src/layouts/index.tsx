import { FC, ReactElement } from "react";
import { TCommon } from "../utilities/entities";
import Sidebar from "../components/organisms/sidebar";

export const BaseLayout: FC<TCommon> = ({ children }): ReactElement => {
  return (
    <>
      <Sidebar />
      <section className="flex flex-col justify-center items-center w-full h-screen bg-[F6FBFA]">
        {children}
      </section>
    </>
  );
};
