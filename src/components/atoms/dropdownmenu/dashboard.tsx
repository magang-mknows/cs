import { FC, ReactElement, Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

const DropDownDashboard: FC = (): ReactElement => {
  const [isActive, setisActive] = useState("Bulan");
  return (
    <div className="flex flex-row gap-20 justify-center">
      <section>
        <div className="absolute flex text-sm z-10">
          <Menu as="div" className="inline-block text-right ">
            <Menu.Button>
              <div
                className={`${
                  isActive == "Tahun"
                    ? "text-primary-400 border border-primary-500 "
                    : "text-primary-400"
                } "w-9 h-9 px-3 bg-white hover:bg-primary-400 hover:text-white  rounded-md flex items-center cursor-pointer " `}
                onClick={() => setisActive("Tahun")}
              >
                Tahun
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="snap-y">
                <div className="px-1 py-4 bg-white overflow-y-auto h-[100px]">
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">2012</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">2013</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">2014</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">2015</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">2016</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">2017</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">2018</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">2019</p>
                  </Menu.Items>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </section>
      <section>
        <div className="absolute flex text-sm z-10">
          <Menu as="div" className="inline-block text-center ">
            <Menu.Button>
              <div
                className={`${
                  isActive == "Bulan"
                    ? "text-primary-400 border border-primary-500 "
                    : "text-primary-400"
                } "w-9 h-9 px-3 bg-white hover:bg-primary-400 hover:text-white  rounded-md flex items-center cursor-pointer " `}
                onClick={() => setisActive("Bulan")}
              >
                Bulan
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="snap-y">
                <div className="px-1 py-4 bg-white overflow-y-auto h-[100px]">
                  <Menu.Items>
                    <p className="text-primary-400 text-xs cursor-pointer">Januari</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 text-xs cursor-pointer">Feb</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 text-xs cursor-pointer">Maret</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 text-xs cursor-pointer">April</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 text-xs cursor-pointer">Mei</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 text-xs cursor-pointer">Juni</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 text-xs cursor-pointer">Juli</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 text-xs cursor-pointer">Agust</p>
                  </Menu.Items>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </section>
      <section>
        <div className="absolute flex text-sm  z-10">
          <Menu as="div" className=" inline-block text-left">
            <Menu.Button>
              <div
                className={`${
                  isActive == "Minggu"
                    ? "text-primary-400 border border-primary-500 "
                    : "text-primary-400"
                } "w-9 h-9 px-3 bg-white hover:bg-primary-400 hover:text-white  rounded-md flex items-center cursor-pointer " `}
                onClick={() => setisActive("Minggu")}
              >
                Minggu
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items>
                <div className="px-1 py-4 bg-white overflow-y-auto h-[100px]">
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">Minggu 1</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">Minggu 2</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">Minggu 3</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">Minggu 4</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">Minggu 5</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">Minggu 6</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">Minggu 7</p>
                  </Menu.Items>
                  <Menu.Items>
                    <p className="text-primary-400 cursor-pointer">Minggu 8</p>
                  </Menu.Items>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </section>
    </div>
  );
};

export default DropDownDashboard;
