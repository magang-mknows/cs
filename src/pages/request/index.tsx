import { FC, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import { ErrorHome } from "@/modules/home/error-home";
import { BaseLayoutSkeleton } from "@/layouts/base/base-skeleton";

const RequestPages: FC = (): ReactElement => {
  return (
    <SuspenseError error={<ErrorHome />} loading={<BaseLayoutSkeleton />}>
      <h1>Ini permintaan pake component dari modules</h1>
    </SuspenseError>
  );
};

export default RequestPages;
