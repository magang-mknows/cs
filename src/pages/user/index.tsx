import { FC, lazy, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import Spinner from "@/components/atoms/spinner";

const UserModules = lazy(() => import("@/modules/user"));

const UserPages: FC = (): ReactElement => {
  return (
    <SuspenseError error={"error cuy"} loading={<Spinner />}>
      <UserModules />
    </SuspenseError>
  );
};

export default UserPages;
