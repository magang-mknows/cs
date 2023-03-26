import { FC, ReactElement } from "react";

export const LoadingHome: FC = (): ReactElement => {
  return (
    <div className="bg-gray-200 animate-pulse h-[36px] w-[300px] rounded-lg" />
  );
};
