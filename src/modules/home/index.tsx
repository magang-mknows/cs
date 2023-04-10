import { FC, Fragment, ReactElement } from "react";
import CardSection from "./history-request-section";
import SkorSection from "./skor-section";
import RequestSection from "./request-section";

const HomeModules: FC = (): ReactElement => {
  return (
    <Fragment>
      <CardSection />
      <div className="flex gap-8">
        <RequestSection />
        <SkorSection />
      </div>
    </Fragment>
  );
};

export default HomeModules;
