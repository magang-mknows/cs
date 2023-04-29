import { FC, ReactElement } from "react";

export const LoadingGrafik: FC = (): ReactElement => {
  return (
    <div className="p-4">
      <div className="bg-gray-200 gap-4 animate-pulse h-[36px] w-[250px] rounded-lg my-2" />

      <div className="flex gap-4">
        <div className="bg-gray-200 animate-pulse h-[500px] w-[50%] rounded-lg"></div>
        <div className="bg-gray-200 animate-pulse h-[500px] w-[50%] rounded-lg"></div>
      </div>
    </div>
  );
};
