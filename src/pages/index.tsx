import { FC, lazy, ReactElement } from "react";
import SuspenseError from "../modules/Common/suspense-error";
import { ErrorHome } from "../modules/Home/error-home";
import { LoadingHome } from "../modules/Home/loading-home";

const HomeModules = lazy(() => import("../modules/Home"));

const HomePages: FC = (): ReactElement => {
  return (
    <SuspenseError error={<ErrorHome />} loading={<LoadingHome />}>
      <HomeModules />
    </SuspenseError>
  );
};

export default HomePages;
