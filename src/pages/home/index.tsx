import { FC, lazy, ReactElement } from "react";
import { BaseLayout } from "@/layouts/base";
import SuspenseError from "@/modules/common/suspense-error";
import { ErrorHome } from "@/modules/home/error-home";
import { BaseLayoutSkeleton } from "@/layouts/base/base-skeleton";

const HomeModules = lazy(() => import("@/modules/home"));

const HomePages: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <SuspenseError error={<ErrorHome />} loading={<BaseLayoutSkeleton />}>
        <HomeModules />
      </SuspenseError>
    </BaseLayout>
  );
};

export default HomePages;
