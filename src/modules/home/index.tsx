import { FC, ReactElement } from "react";
import { BaseLayout } from "../../layouts";

const HomeModules: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <h1 className="text-4xl text-red-400">Credit Scoring</h1>
    </BaseLayout>
  );
};

export default HomeModules;
