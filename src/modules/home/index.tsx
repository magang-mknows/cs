import { FC, ReactElement } from "react";
import { BaseLayout } from "../../layouts";
import Sidebar from "../../components/organisms/sidebar";

const HomeModules: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <Sidebar />
      <h1 className="text-4xl text-red-400">Credit Scoring</h1>
    </BaseLayout>
  );
};

export default HomeModules;
