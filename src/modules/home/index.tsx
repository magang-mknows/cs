import { FC, Fragment, lazy, ReactElement } from "react";

const CardSection = lazy(() => import("./history-request-section"));
const SkorSection = lazy(() => import("./skor-section"));
const RequestSection = lazy(() => import("./request-section"));

const HomeModules: FC = (): ReactElement => {
  return (
    <Fragment>
      <CardSection />
      <div className="flex flex-col lg:flex-row gap-2">
        <RequestSection />
        <SkorSection />
      </div>
    </Fragment>
  );
};

export default HomeModules;
