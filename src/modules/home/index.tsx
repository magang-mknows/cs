import { FC, ReactElement } from "react";
import { BaseLayout } from "@/layouts/base";
import Sidebar from "@/components/organisms/sidebar";
import Card from "@/components/molecules/card";
import ReportIcon from "@/assets/logo.webp";

const HomeModules: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <Sidebar />
      <Card
        className="w-[247px] h-[103px] shadow-lg p-2"
        hasImage={false}
        imgStyle="w-full h-full"
        src={ReportIcon}
        hasButton={false}
        buttonClassName="w-full h-10"
        buttonColor="neutral"
        buttonText="halo ilham"
        buttonTextStyle="font-bold text-[#FFFFFF]"
      >
        <div className="flex flex-row w-full my-8 mr-10">
          <div className="w-[60%]">
            <img src={ReportIcon} alt="" className="w-[400px]" />
          </div>
          <div className="text-xs flex-col w-full pl-3">
            <p className="font-semibold">AI Automation</p>
            <p className="text-neutral-400 font-normal">Data Masuk (500)</p>
          </div>
          <div className="text-center right-4 top-4 absolute rounded-[40px] w-[27px] h-[27px] bg-neutral-200">
            1
          </div>
        </div>
      </Card>
    </BaseLayout>
  );
};

export default HomeModules;
