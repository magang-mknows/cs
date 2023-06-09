import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import { LoadingHome } from "@/modules/home/loading";
import { ErrorHome } from "@/modules/home/error";

const HomeModules = lazy(() => import("@/modules/home"));

const HomePages: FC = (): ReactElement => {
  return (
    <SuspenseError loading={<LoadingHome />} error={<ErrorHome />}>
      <HomeModules />
    </SuspenseError>
  );
};

export default HomePages;
