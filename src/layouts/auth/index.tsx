import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = (): ReactElement => {
  return (
    <section className="flex w-screen z-0 h-screen overflow-hidden bg-white">
      <div className="p-8 w-full">
        <img src="/assets/auth/logo.svg" alt="logo" width={160} />
      </div>
      <div className="flex flex-col h-screen w-full justify-center items-center">
        <Outlet />
        <p className="text-primary-600 pt-8">PT Menara Indonesia</p>
      </div>

      <img
        src={"/assets/auth/asset3.svg"}
        alt="variasi"
        width={400}
        className="items-end absolute mt-[84vh] mx-40 overflow-hidden"
      />

      <div className="flex  w-screen justify-end items-start overflow-hidden">
        <img
          src={"/assets/auth/asset2.svg"}
          alt="variasi"
          width={250}
          className="absolute  mx-20"
        />
        <img src={"/assets/auth/asset1.svg"} alt="variasi" width={250} />
      </div>
    </section>
  );
};
