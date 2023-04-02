import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import { ErrorLogin } from "@/modules/auth/login/error-login";
import { LoadingLogin } from "@/modules/auth/login/loading-login";

const LoginModules = lazy(() => import("@/modules/auth/login"));

const LoginPages: FC = (): ReactElement => {
  return (
    <SuspenseError error={<ErrorLogin />} loading={<LoadingLogin />}>
      <LoginModules />
    </SuspenseError>
  );
};

export default LoginPages;
