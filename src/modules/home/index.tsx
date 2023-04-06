import { FC, ReactElement } from "react";
import CardSection from "./history-request-section";
import SkorSection from "./skor-section";

const HomeModules: FC = (): ReactElement => {
  return (
    <>
      <CardSection />
      <SkorSection />
    </>
  );
};

export default HomeModules;
