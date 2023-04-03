import { FC, ReactElement } from "react";

export const AuthSkeleton: FC = (): ReactElement => {
  return (
    <section className="flex flex-col w-full z-0 h-screen overflow-hidden bg-white">
      <div className="flex w-full absolute justify-end items-end"></div>

      <div className="flex flex-col items-center w-full">
        <p className="text-primary-600 pt-8">PT Menara Indonesia</p>
      </div>
    </section>
  );
};
