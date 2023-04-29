import { FC, ReactElement, lazy } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useCardData } from "./hooks";

const Card = lazy(() => import("@/components/molecules/card"));

const CardSection: FC = (): ReactElement => {
  const { getCardData } = useCardData();
  const prevButton = (
    <button className="rotate-180">
      <img src="/assets/dashboard/next.svg" alt="next" />
    </button>
  );
  const nextButton = (
    <button>
      <img src="/assets/dashboard/next.svg" alt="prev" />
    </button>
  );
  const cardProps = {
    mouseTrackingEnabled: true,
    disableDotsControls: true,
    items: getCardData.map((x, i) => (
      <div key={i} className="flex max-w-scren">
        <Card
          hasButton={true}
          buttonText="Lihat Detail"
          buttonClassName={`flex py-1 justify-end items-end my-2 ${x.bgButton} w-full`}
          className="w-full m-3 h-auto absolute shadow-md px-4"
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
    )),
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 4,
        itemsFit: "contain",
      },
    },
    autoPlay: true,
    autoPlayInterval: 3000,
    animationDuration: 1000,
    renderPrevButton: () => {
      return <div className="absolute top-[35%] left-0">{prevButton}</div>;
    },
    renderNextButton: () => {
      return <div className="absolute right-0 top-[35%]">{nextButton}</div>;
    },
  };

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-semibold p-3">Riwayat Permintaan</h1>
      <AliceCarousel {...cardProps} />
    </div>
  );
};

export default CardSection;
