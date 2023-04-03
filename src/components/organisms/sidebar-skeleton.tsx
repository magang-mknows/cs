import { FC, ReactElement, useState } from "react";

const SidebarSkeleton: FC = (): ReactElement => {
  const [open, setOpen] = useState(true);
  const toggleSidebar = (): void => {
    setOpen(!open);
  };
  return (
    <>
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="z-50 fixed bottom-10 right-10 inline-flex items-center p-2 mt-2 ml-3 animate-pulse bg-gray-200 rounded-lg w-6 h-6"
        onClick={toggleSidebar}
      ></button>

      <aside
        id="separator-sidebar"
        className="absolute top-0 left-0 z-50 lg:sm:translate-x-0 w-64 h-screen transition-transform text-black bg-[#ffffff]"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-9 overflow-y-auto text-black bg-[#ffffff] shadow-lg">
          <ul>
            <li className="animate-pulse bg-neutral-200 flex items-center rounded-lg w-auto h-auto p-10"></li>
          </ul>
          <ul className="pt-4 mt-8 space-y-4 font-medium border-t w-full h-1 border-[#F5F5F5]">
            <li>
              <div className="animate-pulse bg-neutral-200 rounded-lg w-full h-8"></div>
            </li>
            <li>
              <div className="animate-pulse bg-neutral-200 rounded-lg w-full h-8"></div>
            </li>
            <li>
              <div className="animate-pulse bg-neutral-200 rounded-lg w-full h-8"></div>
            </li>
            <li>
              <div className="animate-pulse bg-neutral-200 rounded-lg w-full h-8"></div>
            </li>
          </ul>
          <ul className=" pt-4 mt-4">
            <span className="absolute bottom-0 animate-pulse bg-neutral-200 rounded-lg w-[91%] h-8"></span>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarSkeleton;
