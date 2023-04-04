import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import { BaseLayoutSkeleton } from "@/layouts/base/base-skeleton";
import { ErrorHome } from "@/modules/home/error-home";

const HomeModules = lazy(() => import("@/modules/home"));

const HomePages: FC = (): ReactElement => {
  return (
    <>
      <SuspenseError loading={BaseLayoutSkeleton} error={ErrorHome}>
        <HomeModules />
      </SuspenseError>
    </>
  );
};

export default HomePages;
