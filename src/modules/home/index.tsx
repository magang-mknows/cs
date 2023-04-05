import { FC, ReactElement } from "react";

import Card from "@/components/molecules/card/index";
import AiAutomation from "../../../public/assets/ai-automation.svg";

const HomeModules: FC = (): ReactElement => {
  return (
    <section className="flex w-full h-full">
      <div className="flex gap-4">
        <Card
          className="w-[247px] h-[107px] relative shadow-md py-8 px-4"
          hasButton={false}
          buttonClassName="w-full h-10"
          buttonColor="neutral"
          buttonText="halo ilham"
          buttonTextStyle="font-bold text-[#FFFFFF]"
        >
          <div className="flex flex-row w-full h-full space-x-[10px]">
            <div>
              <img src={AiAutomation} alt="" className="w-16 " />
            </div>

            <div className="flex-col w-full space-y-1">
              <p className="text-sm font-semibold">AI Capital Strength Analysis</p>
              <p className="text-neutral-400 font-normal text-xs">Data Masuk (500)</p>
            </div>
            <div className="text-center text-sm right-2 top-2 absolute rounded-[40px] w-[22px] h-[22px] bg-neutral-200">
              1
            </div>
          </div>
        </Card>
        <Card
          className="w-[247px] h-[107px] relative shadow-md py-8 px-4"
          hasButton={false}
          buttonClassName="w-full h-10"
          buttonColor="neutral"
          buttonText="halo ilham"
          buttonTextStyle="font-bold text-[#FFFFFF]"
        >
          <div className="flex flex-row w-full h-full space-x-[10px]">
            <div>
              <img src={AiAutomation} alt="" className="w-16 " />
            </div>

            <div className="flex-col w-full space-y-1">
              <p className="text-sm font-semibold">AI Capital Strength Analysis</p>
              <p className="text-neutral-400 font-normal text-xs">Data Masuk (500)</p>
            </div>
            <div className="text-center text-sm right-2 top-2 absolute rounded-[40px] w-[22px] h-[22px] bg-neutral-200">
              2
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HomeModules;
