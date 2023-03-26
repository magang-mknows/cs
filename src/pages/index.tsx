import { FC, lazy, ReactElement } from "react";
import SuspenseError from "../modules/common/suspense-error";
import { ErrorHome } from "../modules/home/error-home";
import { LoadingHome } from "../modules/home/loading-home";

const HomeModules = lazy(() => import("../modules/home"));

const HomePages: FC = (): ReactElement => {
  return (
    <SuspenseError error={<ErrorHome />} loading={<LoadingHome />}>
      <HomeModules />
    </SuspenseError>
  );
};

export default HomePages;
