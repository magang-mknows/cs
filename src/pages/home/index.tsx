import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import Spinner from "@/components/atoms/spinner";
import { ErrorHome } from "@/modules/home/error-home";

const HomeModules = lazy(() => import("@/modules/home"));

const HomePages: FC = (): ReactElement => {
  return (
    <SuspenseError loading={<Spinner />} error={<ErrorHome />}>
      <HomeModules />
    </SuspenseError>
  );
};

export default HomePages;
