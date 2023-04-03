import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import { ErrorHome } from "@/modules/home/error-home";
import { BaseLayoutSkeleton } from "@/layouts/base/base-skeleton";

const HomeModules = lazy(() => import("@/modules/home"));

const HomePages: FC = (): ReactElement => {
  return (
    <SuspenseError error={<ErrorHome />} loading={<BaseLayoutSkeleton />}>
      <HomeModules />
    </SuspenseError>
  );
};

export default HomePages;
