import React, { ReactElement } from "react";
import User from "../../../public/assets/navbar/user.png";

export const Navbar = (): ReactElement => {
  return (
    <div className="fixed top-0 w-full space-x-2 h-[70px] bg-netural-100 flex justify-end  items-center bg-[#ffffff] my-0 px-7">
      <a href="">
        <div className="w-9 h-9 rounded-full border-[#4AC1A2] border-2 items-center flex">
          <img src={User} alt="user" className="w-full" />
        </div>
      </a>
      <div className="font-semibold text-sm text-neutral-500">Fatwa Nasution</div>
    </div>
  );
};
