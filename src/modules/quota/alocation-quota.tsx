import { FC, ReactElement } from "react";
import Card from "@/components/molecules/card";
import { useRequestData } from "../request/hooks";
import Button from "@/components/atoms/button";

const AlokasiKuota: FC = (): ReactElement => {
  const { getRequestData } = useRequestData();
  return (
    <section className="my-14 ml-10 w-full">
      <div className="font-bold text-2xl text-[#444444]">Alokasi Kuota</div>
      {/* content */}
      <div className="flex lg:flex-row flex-col gap gap-x-10 py-6">
        {/* content 1 */}
        <div className="flex flex-col">
          <div className="flex flex-col gap gap-y-2">
            <span className="font-semibold text-base text-[#262626]">Jenis Produk</span>
            <span className="font-semibold text-sm text-neutral-400">Pilih satu jenis</span>
          </div>
          <div className="w-fit">
            <div className="grid lg:gap-5 md:gap-4 lg:grid-cols-2 grid-cols-1 gap-1 my-3">
              {getRequestData.slice(0, 4).map((item, index) => {
                return (
                  <Card
                    className="hover:cursor-pointer w-full xl:h-[107px] lg:h-[107px] relative shadow-md hover:shadow-xl py-8 px-4"
                    key={index}
                  >
                    <div className="flex flex-row w-full h-full space-x-[10px]">
                      <div>
                        <img src={item.icon} alt="icon" className="w-16 hidden md:flex" />
                      </div>

                      <div className="flex-col w-full space-y-1">
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-neutral-400 font-normal text-xs">
                          Data Masuk {item.totalData}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="flex flex-col pt-6 pb-3 gap gap-y-2">
              <span className="font-semibold text-base text-[#262626]">Jumlah Kuota</span>
              <span className="font-semibold text-sm text-neutral-400">Pilih Jumlah Kuota</span>
            </div>
            <div className="flex justify-center items-center -space-x-1">
              <Button className="p-2 bg-[#EBEBEB] h-10 w-10 !rounded-l-md">
                <img src="/assets/Shape.webp" alt="" />
              </Button>
              <div className="flex items-center justify-center w-[20%] h-10 border-[1px] border-[#EBEBEB] text-[#000000] text-md font-bold">
                1
              </div>
              <Button className="p-2 bg-[#EBEBEB] h-10 w-10 !rounded-r-md">
                <img src="/assets/add.webp" alt="" />
              </Button>
            </div>
            <div className="grid md:gap-2 lg:grid-cols-4 md:grid-cols-2 grid-colsx-1 gap-1 mt-5 font-bold">
              <span className="flex justify-center border-[1px] rounded-md px-6 py-2 border-[#D4D4D4] cursor-pointer hover:text-[#4AC1A2] hover:border-[#4AC1A2]">
                1.000
              </span>
              <span className="flex justify-center border-[1px] rounded-md px-6 py-2 border-[#D4D4D4] cursor-pointer hover:text-[#4AC1A2] hover:border-[#4AC1A2]">
                5.000
              </span>
              <span className="flex justify-center border-[1px] rounded-md px-6 py-2 border-[#D4D4D4] cursor-pointer hover:text-[#4AC1A2] hover:border-[#4AC1A2]">
                10.000
              </span>
              <span className="flex justify-center border-[1px] rounded-md px-6 py-2 border-[#D4D4D4] cursor-pointer hover:text-[#4AC1A2] hover:border-[#4AC1A2]">
                50.000
              </span>
            </div>
          </div>
        </div>
        <div className="w-[70%] mr-8 shadow-lg">
          <div className="flex flex-col">
            <span className="px-32 pt-7  font-bold text-lg">Request Summary</span>
            <div className="px-8 py-11">
              <div className="px-3 py-2 flex items-center flex-row rounded-[4px] justify-between bg-warning-100">
                <div className="flex flex-row items-center gap gap-x-3">
                  <img
                    src="/assets/mdi_mobile-phone-information.webp"
                    alt="information"
                    className="w-fit h-fit"
                  />
                  <span className="text-lg font-semibold">AI Identify Scoring</span>
                </div>
                <span className="flex items-center justify-end text-neutral-400 text-sm font-normal">
                  0
                </span>
              </div>
              <div className="flex flex-col px-11 my-2 gap gap-y-2 justify-normal">
                <span className="text-sm font-normal">AI Document Verification</span>
                <span className="text-sm font-normal">AI Location & Movement</span>
                <span className="text-sm font-normal">AI Digital FootPrint</span>
              </div>
              <div className="font-bold flex justify-between items-center mt-11 border-t-[1px] border-[#A3A3A3] pt-4">
                <span className="text-primary-600">Total Request</span>
                <span className="text-[#000000]">0</span>
              </div>
              <div className="pt-20 w-full flex justify-center">
                <Button type="button" className="py-3 px-7">
                  {" "}
                  Confirm Request{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlokasiKuota;
