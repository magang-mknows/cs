import { FC, lazy, ReactElement } from "react";

const LoginModules = lazy(() => import("@/modules/auth/login"));

const LoginPages: FC = (): ReactElement => {
  return <LoginModules />;
};

export default LoginPages;
