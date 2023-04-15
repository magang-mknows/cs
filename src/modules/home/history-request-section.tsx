import { FC, ReactElement, lazy } from "react";
import { useCardData } from "./hooks";

const Card = lazy(() => import("@/components/molecules/card"));

const CardSection: FC = (): ReactElement => {
  const { getCardData } = useCardData();
  return (
    <section className="flex flex-col px-8 lg:px-2 w-full h-auto">
      <h1 className="text-xl font-semibold lg:p-4 p-2">RIWAYAT PERMINTAAN</h1>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-3 gap-y-4">
        {getCardData.map((x, i) => {
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
                    <img src={x.icon} alt="icon" className="w-16 " />
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
