import { FC, lazy, ReactElement } from "react";

const HomeModules = lazy(() => import("../modules/Home"));

const Home: FC = (): ReactElement => {
  return <HomeModules />;
};

export default Home;
