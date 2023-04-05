import { FC, ReactElement } from "react";

export const AuthSkeleton: FC = (): ReactElement => {
  return (
    <section className="flex flex-col w-full z-0 h-screen overflow-hidden bg-white">
      <div className="flex w-full absolute justify-end items-end"></div>
    </section>
  );
};
