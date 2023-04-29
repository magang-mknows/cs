import { FC, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import { ErrorRequest } from "@/modules/request/error";
import LoadingRequest from "@/modules/request/loading";

import RequestPage from "@/modules/request";

const RequestPages: FC = (): ReactElement => {
  return (
    <SuspenseError error={<ErrorRequest />} loading={<LoadingRequest />}>
      <RequestPage />
    </SuspenseError>
  );
};

export default RequestPages;
