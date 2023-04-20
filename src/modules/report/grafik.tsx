import { FC, lazy, ReactElement, Fragment } from "react";

const SkorSection = lazy(() => import("@/components/organisms/card-chart/skor-section"));
const RequestSection = lazy(() => import("@/components/organisms/card-chart/request-section"));
const SalaryTrack = lazy(() => import("@/components/organisms/card-chart/salary-track"));
const AgeTrack = lazy(() => import("@/components/organisms/card-chart/age-track"));
const LocationTrack = lazy(() => import("@/components/organisms/card-chart/location-tract"));

const ChartReport: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="flex lg:flex-row flex-col gap-6">
        <RequestSection />
        <SkorSection />
      </div>
      <div className="flex lg:flex-row flex-col  gap-6">
        <AgeTrack />
        <div className="flex flex-col gap-4">
          <LocationTrack />
          <SalaryTrack />
        </div>
      </div>
    </Fragment>
  );
};

export default ChartReport;
