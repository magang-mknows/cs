import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = (): ReactElement => {
  return (
    <section className="flex flex-col w-full z-0 h-screen overflow-hidden bg-white">
      <div className="flex w-full absolute justify-end items-end">
        <img src="/assets/auth/asset1.svg" alt="variasi-bg" width={200} />
      </div>
      <div className="p-8">
        <img src="/assets/auth/logo.svg" alt="logo" width={160} />
      </div>
      <div className="flex flex-col items-center w-full">
        <Outlet />
        <p className="text-primary-600 pt-8">PT Menara Indonesia</p>
      </div>
    </section>
  );
};
