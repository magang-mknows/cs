import { FC, ReactElement, lazy } from "react";

const Card = lazy(() => import("@/components/molecules/card"));

const dummyData = [
  {
    icon: "/assets/dashboard/card1.svg",
    title: "AI Automation",
    desc: "7.865 Total Permintaan",
    bgButton: "bg-purple-500",
  },
  {
    icon: "/assets/dashboard/card2.svg",
    title: "AI Document Verification",
    desc: "6.825 Total Permintaan",
    bgButton: "bg-primary-500",
  },
  {
    icon: "/assets/dashboard/card3.svg",
    title: "AI Location Movement",
    desc: "7.225 Total Permintaan",
    bgButton: "bg-secondary-500",
  },
  {
    icon: "/assets/dashboard/card4.svg",
    title: "AI Capacity & Earning Power",
    desc: "3.865 Total Permintaan",
    bgButton: "bg-warning-300",
  },
];

const CardSection: FC = (): ReactElement => {
  return (
    <section className="flex flex-col px-8 lg:px-2 w-full h-auto">
      <h1 className="text-xl font-semibold lg:p-4 p-2">RIWAYAT PERMINTAAN</h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-3 gap-y-4">
        {dummyData.map((x, i) => {
          return (
            <div key={i} className="grid grid-cols-4">
              <Card
                hasButton={true}
                buttonText="Lihat Detail"
                buttonClassName={`flex py-1 justify-end items-end my-2 ${x.bgButton} w-full`}
                className="w-[247px] h-auto absolute shadow-md y-4 px-4"
              >
                <div className="flex flex-row w-full h-full space-x-[10px] py-4">
                  <div>
                    <img src={x.icon} alt="" className="w-16 " />
                  </div>

                  <div className="flex-col w-full space-y-1">
                    <p className="text-sm font-semibold">{x.title}</p>
                    <p className="text-neutral-400 font-normal text-xs">{x.desc}</p>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CardSection;
