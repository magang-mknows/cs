import { FC, ReactElement } from "react";
import { AuthLayout } from "@/layouts/auth";

const LoginModules: FC = (): ReactElement => {
  return (
    <AuthLayout>
      <img src="/assets/auth/logo.svg" alt="logo" width={200} />
    </AuthLayout>
  );
};

export default LoginModules;
