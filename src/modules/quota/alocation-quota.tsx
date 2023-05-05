import { FC, ReactElement, useState } from "react";
import Card from "@/components/molecules/card";
import { useRequestData } from "../request/hooks";
import Button from "@/components/atoms/button";

const AlokasiKuota: FC = (): ReactElement => {
  const { getRequestData } = useRequestData();
  const [Quota, setQuota] = useState<number>(0);
  const [ProductName, setProductName] = useState<string>("default");

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleQuotaChange = (event: { target: { value: string } }) => {
    setQuota(parseInt(event.target.value));
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setQuota(0);
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah = () => {
    setQuota(Quota + 1);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah1000 = () => {
    setQuota(Quota + 1000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah5000 = () => {
    setQuota(Quota + 5000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah10000 = () => {
    setQuota(Quota + 10000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah50000 = () => {
    setQuota(Quota + 50000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleKurang = () => {
    if (Quota <= 0) {
      setQuota(Quota * 0);
    } else {
      setQuota(Quota - 1);
    }
  };

  return (
    <section className="my-14 w-full">
      <div className="font-bold text-2xl text-[#444444]">Alokasi Kuota</div>
      {/* content */}
      <div className="flex xl:flex-row flex-col gap gap-x-10 py-6">
        {/* content 1 */}
        <div className="flex flex-col">
          <div className="flex flex-col gap gap-y-2">
            <span className="font-semibold text-base text-[#262626]">Jenis Produk</span>
            <span className="font-semibold text-sm text-neutral-400">Pilih satu jenis</span>
          </div>
          <div className="w-fit justify-center">
            <div className="grid lg:gap-5 md:gap-4 md:grid-cols-2 grid-cols-1 gap-1 my-3">
              {getRequestData.slice(0, 4).map((item, index) => {
                return (
                  <Card
                    className="hover:cursor-pointer w-full h-[107px] relative shadow-md hover:shadow-xl py-8 px-4"
                    key={index}
                    onClick={() => setProductName(item.name)}
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
            <div className="flex justify-center items-center -space-x-.5">
              <Button
                className="p-2 !bg-[#EBEBEB] h-10 w-10 !rounded-l-md !rounded-r-none"
                onClick={handleKurang}
              >
                <img src="/assets/Shape.webp" alt="" />
              </Button>
              <input
                type="number"
                value={Quota}
                onChange={handleQuotaChange}
                onKeyDown={handleKeyDown}
                className="flex items-center justify-center text-center w-[20%] h-10 border-[1px] border-[#EBEBEB] text-[#000000] text-md font-bold"
              />
              <Button
                className="p-2 !bg-[#EBEBEB] h-10 w-10 !rounded-r-md !rounded-l-none"
                onClick={handleTambah}
              >
                <img src="/assets/add.webp" alt="" />
              </Button>
            </div>
            <div className="grid md:gap-2 lg:grid-cols-4 grid-cols-2 gap-1 mt-5 font-bold">
              <span
                onClick={handleTambah1000}
                className="flex justify-center border-[1px] rounded-md px-6 py-2 border-[#D4D4D4] cursor-pointer hover:text-[#4AC1A2] hover:border-[#4AC1A2]"
              >
                1.000
              </span>
              <span
                onClick={handleTambah5000}
                className="flex justify-center border-[1px] rounded-md px-6 py-2 border-[#D4D4D4] cursor-pointer hover:text-[#4AC1A2] hover:border-[#4AC1A2]"
              >
                5.000
              </span>
              <span
                onClick={handleTambah10000}
                className="flex justify-center border-[1px] rounded-md px-6 py-2 border-[#D4D4D4] cursor-pointer hover:text-[#4AC1A2] hover:border-[#4AC1A2]"
              >
                10.000
              </span>
              <span
                onClick={handleTambah50000}
                className="flex justify-center border-[1px] rounded-md px-6 py-2 border-[#D4D4D4] cursor-pointer hover:text-[#4AC1A2] hover:border-[#4AC1A2]"
              >
                50.000
              </span>
            </div>
          </div>
        </div>

        {/* content 2 */}
        {ProductName === "default" ? (
          <div className="w-[60%] mr-8"></div>
        ) : (
          <div className="lg:w-[60%] w-full lg:my-0 my-14 mr-8 shadow-lg">
            <div className="flex flex-col">
              <span className="lg:px-32 px-10 pt-7 w-full justify-center font-bold text-lg">
                Request Summary
              </span>
              <div className="px-8 py-11">
                <div className="px-3 py-2 flex items-center flex-row rounded-[4px] lg:justify-between justify-normal bg-warning-100">
                  <div className="w-full flex flex-row items-center gap gap-x-3">
                    <img
                      src="/assets/mdi_mobile-phone-information.webp"
                      alt="information"
                      className="w-fit h-fit"
                    />
                    <span className="w-full lg:text-lg text-sm font-semibold">{ProductName}</span>
                    <span className="flex items-center md:w-[30%] w-full justify-end text-neutral-400 lg:text-sm text-xs font-normal">
                      x {Quota}
                    </span>
                  </div>
                </div>
                <div className="lg:text-sm text-xs font-normal flex flex-col px-11 my-2 gap gap-y-2 justify-normal">
                  <span>AI Document Verification</span>
                  <span>AI Location & Movement</span>
                  <span>AI Digital FootPrint</span>
                </div>
                <div className="font-bold flex justify-between items-center mt-11 border-t-[1px] border-[#A3A3A3] pt-4">
                  <span className="text-primary-600">Total Request</span>
                  <span className="text-[#000000]">{Quota}</span>
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
        )}
      </div>
    </section>
  );
};

export default AlokasiKuota;
