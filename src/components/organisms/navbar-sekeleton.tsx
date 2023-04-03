import React, { ReactElement } from "react";
export const NavbarSkeleton = (): ReactElement => {
  return (
    <div className="fixed top-0 w-full space-x-2 h-[70px] bg-netural-100 flex justify-end  items-center bg-[#ffffff] my-0 px-7">
      <a href="">
        <div className="w-9 h-9 rounded-full animate-pulse bg-neutral-200 items-center flex"></div>
      </a>
      <div className="animate-pulse bg-neutral-200 w-[100px] h-6"></div>
    </div>
  );
};
