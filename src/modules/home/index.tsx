import { FC, ReactElement } from "react";
import { BaseLayout } from "../../layouts";
import Sidebar from "../../components/organisms/sidebar";
import Card from "../../components/molecules/card";
import Button from "../../components/atoms/button";
import ReportIcon from "../../assets/logo.webp";

const HomeModules: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <Sidebar />
      <Card
        className="w-80 shadow-2xl"
        hasImage={true}
        src={ReportIcon}
        hasButton={true}
        buttonClassName="w-full h-10"
        buttonColor="primary"
        buttonText="halo ilham"
        buttonTextStyle="font-bold"
      />
    </BaseLayout>
  );
};

export default HomeModules;
