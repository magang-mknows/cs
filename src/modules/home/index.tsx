import { FC, Fragment, ReactElement } from "react";
import CardSection from "./history-request-section";
import SkorSection from "./skor-section";

const HomeModules: FC = (): ReactElement => {
  return (
    <Fragment>
      <CardSection />
      <SkorSection />
    </Fragment>
  );
};

export default HomeModules;
