import { FC, lazy, ReactElement } from "react";

const CardSection = lazy(() => import("./history-request-section"));
const SkorSection = lazy(() => import("./skor-section"));
const RequestSection = lazy(() => import("./request-section"));
const SalaryTrack = lazy(() => import("./salary-track"));
const AgeTrack = lazy(() => import("./age-track"));
const LocationTrack = lazy(() => import("./location-tract"));

const HomeModules: FC = (): ReactElement => {
  return (
    <div className="flex flex-col">
      <CardSection />
      <div className="flex w-full flex-row gap-4">
        <div className="flex-col">
          <RequestSection />
          <AgeTrack />
        </div>
        <div>
          <SkorSection />
          <LocationTrack />
          <SalaryTrack />
        </div>
      </div>
    </div>
  );
};

export default HomeModules;
