import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = (): ReactElement => {
  return (
    <section className="flex flex-col p-10 w-full z-0 h-screen overflow-hidden bg-primary-100">
      <img src="/assets/auth/logo.svg" alt="logo" width={200} />
      <div className="flex items-center justify-center w-full h-full p-10">
        <Outlet />
      </div>
    </section>
  );
};
