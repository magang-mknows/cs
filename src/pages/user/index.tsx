import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import { LoadingUser } from "@/modules/user/loading";
import { ErrorUser } from "@/modules/user/error";

const UserModules = lazy(() => import("@/modules/user"));

const UserPages: FC = (): ReactElement => {
  return (
    <SuspenseError error={<ErrorUser />} loading={<LoadingUser />}>
      <UserModules />
    </SuspenseError>
  );
};

export default UserPages;
