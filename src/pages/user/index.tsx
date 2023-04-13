import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import Spinner from "@/components/atoms/loading/spinner";
import { ErrorUser } from "@/modules/user/error-user";

const UserModules = lazy(() => import("@/modules/user"));

const UserPages: FC = (): ReactElement => {
  return (
    <SuspenseError error={<ErrorUser />} loading={<Spinner />}>
      <UserModules />
    </SuspenseError>
  );
};

export default UserPages;
