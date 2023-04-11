import { FC, ReactElement } from "react";

export const LoadingReport: FC = (): ReactElement => {
  return (
    <div className="w-full h-full bg-gray-100 m-8">
      <div className="flex justify-between p-8 py-12">
        <div className="bg-gray-200 gap-4 animate-pulse h-[44px] w-[380px] rounded-lg" />
        <div className="flex gap-4 px-6">
          <div className="bg-gray-200 gap-4 animate-pulse h-[44px] w-[180px] rounded-lg" />
          <div className="bg-gray-200 gap-4 animate-pulse h-[44px] w-[220px] rounded-lg" />
          <div className="my-2">
            <div className="bg-gray-200 gap-4 animate-pulse h-[44px] w-[140px] rounded-lg" />
            <div className="bg-gray-200 h-[44px] w-[140px] my-2 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="py-8 w-[90%] h-full m-8 bg-gray-200 animate-pulse"></div>
    </div>
  );
};
