import { FC, ReactElement } from "react";

export const LoadingHome: FC = (): ReactElement => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-gray-100 animate-pulse h-3 w-full" />
    </div>
  );
};
