import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import { LoadingReport } from "@/modules/report/loading";
import { ErrorReport } from "@/modules/report/error";

const ReportModules = lazy(() => import("@/modules/report"));

const ReportPages: FC = (): ReactElement => {
  return (
    <SuspenseError error={<ErrorReport />} loading={<LoadingReport />}>
      <ReportModules />
    </SuspenseError>
  );
};

export default ReportPages;
