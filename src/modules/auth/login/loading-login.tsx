import { FC, ReactElement } from "react";

export const LoadingLogin: FC = (): ReactElement => {
  return (
    <section className="bg-gray-100 flex flex-col gap-y-4 items-center justify-center p-6 shadow-gray-300 shadow-lg  w-[400px] h-auto rounded-sm">
      <div className="bg-gray-200 animate-pulse w-1/3 h-[60px] rounded-lg" />
      <div className="animate-pulse flex bg-gray-200 w-full h-6 rounded-lg" />
      <div className="animate-pulse flex bg-gray-200 w-full h-10 rounded-lg" />
      <div className="animate-pulse flex bg-gray-200 w-full h-10 rounded-lg" />
      <div className="aniamte-pulse flex bg-gray-200 w-full h-10 rounded-lg" />
      <div className="aniamte-pulse flex bg-gray-200 w-full h-10 rounded-lg" />
      <div className="flex flex-col mt-6">
        <div className="animate-pulse flex bg-gray-200 w-full h-14 rounded-lg" />
      </div>
    </section>
  );
};
