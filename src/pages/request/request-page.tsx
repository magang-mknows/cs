import { FC, ReactElement, useState } from "react";
import Card from "@/components/molecules/card";
import { Dialog } from "@headlessui/react";
import Button from "@/components/atoms/button";

const PermintaanPage: FC = (): ReactElement => {
  const [isOpen, setisOpen] = useState(false);

  const RequestSubMenu = [
    {
      icon: "/assets/dashboard/card1.svg",
      name: "Ai Automation",
      totalData: 500,
      totalNotifikasi: 1,
      img: "",
    },
    {
      icon: "/assets/dashboard/card2.svg",
      name: "Ai Document Verification",
      totalData: 500,
      totalNotifikasi: 1,
    },
    {
      icon: "/assets/dashboard/card3.svg",
      name: "Ai Location & Movement",
      totalData: 500,
      totalNotifikasi: 1,
    },
    {
      icon: "/assets/dashboard/card4.svg",
      name: "AI Capacity & Earning Power",
      totalData: 500,
      totalNotifikasi: 3,
    },
    {
      icon: "/assets/dashboard/card2.svg",
      name: "AI Capital Strength Analysis",
      totalData: 500,
      totalNotifikasi: 1,
    },
    {
      icon: "/assets/dashboard/card1.svg",
      name: "Ai Automation",
      totalData: 500,
      totalNotifikasi: 4,
      img: "",
    },
    {
      icon: "/assets/dashboard/card4.svg",
      name: "Ai Document Verification",
      totalData: 500,
      totalNotifikasi: 8,
    },
    {
      icon: "/assets/dashboard/card3.svg",
      name: "Ai Location & Movement",
      totalData: 500,
      totalNotifikasi: 1,
    },
    {
      icon: "/assets/dashboard/card4.svg",
      name: "AI Capacity & Earning Power",
      totalData: 500,
      totalNotifikasi: 4,
    },
    {
      icon: "/assets/dashboard/card3.svg",
      name: "AI Capital Strength Analysis",
      totalData: 500,
      totalNotifikasi: 2,
    },
    {
      icon: "/assets/dashboard/card2.svg",
      name: "Ai Automation",
      totalData: 500,
      totalNotifikasi: 1,
      img: "",
    },
    {
      icon: "/assets/dashboard/card1.svg",
      name: "Ai Document Verification",
      totalData: 500,
      totalNotifikasi: 1,
    },
  ];
  return (
    <div>
      <div className="flex flex-row gap gap-x-2 py-2 items-center w-full">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.9494 12.8635C20.9605 17.2808 17.4168 20.8854 13 20.9495C10.9062 20.981 8.88701 20.1727 7.39334 18.7051C5.89967 17.2375 5.05594 15.2329 5.05057 13.1388C5.03823 8.72073 8.58232 5.11479 13 5.05068C15.0941 5.01937 17.1135 5.82804 18.6072 7.29606C20.1009 8.76409 20.9444 10.7692 20.9494 12.8635Z"
            stroke="#737373"
          />
          <path d="M13 14.4489V9.39014" stroke="#737373" />
          <path
            d="M12.9935 15.8945C12.9457 15.8953 12.9003 15.9153 12.8675 15.95C12.8347 15.9846 12.8173 16.0311 12.8193 16.0788C12.8228 16.1774 12.9035 16.2555 13.0021 16.2559C13.0498 16.2549 13.0951 16.2349 13.1278 16.2002C13.1606 16.1656 13.1781 16.1192 13.1763 16.0716C13.1733 15.9753 13.0962 15.8979 13 15.8945H12.9964"
            stroke="#737373"
          />
        </svg>
        <p className="text-xs md:text-sm font-normal text-neutral-500">
          Anda dapat memilih satu atau lebih fitur
        </p>
      </div>
      <div className="grid lg:gap-5 md:gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1 my-3 w-full">
        {RequestSubMenu.map((item, index) => {
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
                <div className="text-center text-sm right-2 top-2 absolute rounded-[40px] w-[22px] h-[22px] bg-neutral-200">
                  {item.totalNotifikasi}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center w-full my-4 pt-4">
        <Button
          onClick={() => setisOpen(true)}
          className="w-1/3 h-10"
          color="primary"
          text="Lihat Hasil"
        >
          Link Hasil
        </Button>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setisOpen(false)}
        className="absolute lg:left-[45%] md:left-[30%] top-[40%] left-[20%]"
      >
        <Dialog.Panel>
          <Dialog.Title>
            <Card className="hover:cursor-pointer md:w-[348px] w-[300px]  h-fit shadow-2xl py-4 px-6">
              <div className="w-full flex flex-col gap gap-y-2">
                <div className="bg-error-100 rounded-full w-7 h-7 flex justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15.0015C11.8618 15.0015 11.7498 15.1135 11.7498 15.2516C11.7498 15.3898 11.8618 15.5018 12 15.5018C12.1382 15.5018 12.2502 15.3898 12.2502 15.2516C12.2502 15.1135 12.1382 15.0015 12 15.0015"
                      stroke="#EE2D24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13.0005V7.49707"
                      stroke="#EE2D24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 19.5045C16.1447 19.5045 19.5047 16.1445 19.5047 11.9998C19.5047 7.85508 16.1447 4.49512 12 4.49512C7.85528 4.49512 4.49532 7.85508 4.49532 11.9998C4.49532 16.1445 7.85528 19.5045 12 19.5045Z"
                      stroke="#EE2D24"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-sm">Something went wrong!</p>
                <p className="font-base text-xs text-neutral-400">
                  Maaf, saat ini anda tidak dapat melanjutkan proses permintaan. Anda belum
                  melengkapi data yang dibutuhkan.
                </p>
                <div className="flex flex-row w-full gap gap-x-3">
                  <Button
                    className="w-full text-sm py-1"
                    color="borderWarning"
                    onClick={() => setisOpen(false)}
                  >
                    Kembali
                  </Button>
                  <Button className="w-full text-sm py-1" color="warning">
                    Lengkapi Data
                  </Button>
                </div>
              </div>
            </Card>
          </Dialog.Title>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default PermintaanPage;
