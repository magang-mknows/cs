import { FC, lazy, ReactElement } from "react";

const CardSection = lazy(() => import("./history-request-section"));
const SkorSection = lazy(() => import("./skor-section"));
const RequestSection = lazy(() => import("./request-section"));
const SalaryTrack = lazy(() => import("./salary-track"));
const AgeTrack = lazy(() => import("./age-track"));
const LocationTrack = lazy(() => import("./location-tract"));

const HomeModules: FC = (): ReactElement => {
  return (
    <section>
      <CardSection />
      <div className="flex flex-row gap-4">
        <RequestSection />
        <SkorSection />
      </div>
      <div className="flex flex-row gap-4">
        <AgeTrack />
        <div className="flex flex-col">
          <LocationTrack />
          <SalaryTrack />
        </div>
      </div>
    </section>
  );
};

export default HomeModules;
