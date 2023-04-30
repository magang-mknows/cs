import { lazy, FC, ReactElement } from "react";

const TambahData = lazy(() => import("@/modules/user/add-data"));

const TambahDataPage: FC = (): ReactElement => {
  return <TambahData />;
};

export default TambahDataPage;
