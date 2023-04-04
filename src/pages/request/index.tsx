import { FC, ReactElement } from "react";
import SuspenseError from "@/modules/common/suspense-error";
import { ErrorHome } from "@/modules/home/error-home";
import { BaseLayoutSkeleton } from "@/layouts/base/base-skeleton";
import Card from "@/components/molecules/card";

const RequestPages: FC = (): ReactElement => {
  return (
    <SuspenseError error={<ErrorHome />} loading={<BaseLayoutSkeleton />}>
      <section className="flex justify-center mt-10 lg:justify-end lg:pr-4 w-screen">
        <Card className="w-[79%] h-[1200px] bg-white">halo</Card>
      </section>
    </SuspenseError>
  );
};

export default RequestPages;
