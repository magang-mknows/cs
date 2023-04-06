import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import Spinner from "@/components/atoms/spinner";

const ReportModules = lazy(() => import("@/modules/report"));

const ReportPages: FC = (): ReactElement => {
  return (
    <SuspenseError error={"error cuy"} loading={<Spinner />}>
      <ReportModules />
    </SuspenseError>
  );
};

export default ReportPages;
