import { ReactElement } from "react";

const Navbar = (): ReactElement => {
  return (
    <div className="fixed w-full space-x-2 h-[70px] flex justify-end items-center bg-white my-0 px-7 mb-38 z-50">
      <a href="">
        <div className="w-9 h-9 rounded-full border-[#4AC1A2] border-2 items-center flex">
          <img src={"/assets/navbar/user.png"} alt="user" className="w-full" />
        </div>
      </a>
      <div className="font-semibold text-sm text-neutral-500">Fatwa Nasution</div>
    </div>
  );
};
export default Navbar;
