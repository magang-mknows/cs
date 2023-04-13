import { FC, ReactElement } from "react";

export const ErrorModules: FC = (): ReactElement => {
  return (
    <div className="flex justify-center items-center">
      <div className="flexflex-col justify-centeritems-center  w-[55%] p-20">
        <img src="/error.png" alt="error" />
        <p className="text-error-400 font-bold text-3xl px-16 py-4">Error Was Happen</p>
      </div>
    </div>
  );
};
