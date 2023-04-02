import { FC, ReactElement } from "react";

export const LoadingLogin: FC = (): ReactElement => {
  return (
    <div className="w-screen h-screen bg-neutral-600">
      <div className="flex lg:h-[460px] lg:w-[580px] justify-center items-center bg-neutral-400"></div>
    </div>
  );
};
