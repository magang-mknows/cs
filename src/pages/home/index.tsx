import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import { LoadingHome } from "@/modules/home/loading-home";
import { ErrorHome } from "@/modules/home/error-home";

const HomeModules = lazy(() => import("@/modules/home"));

const HomePages: FC = (): ReactElement => {
  return (
    <SuspenseError loading={<LoadingHome />} error={<ErrorHome />}>
      <HomeModules />
    </SuspenseError>
  );
};

export default HomePages;
