import { FC, ReactElement } from "react";

export const ErrorHome: FC = (): ReactElement => {
  return (
    <div className="flex w-full items-center justify-center">
      <h1 className="text-red-400 text-1xl">
        Error Was Happen when load Home Modules
      </h1>
    </div>
  );
};
