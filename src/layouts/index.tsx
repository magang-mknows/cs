import { FC, ReactElement } from "react";
import { TCommon } from "../utilities/entities";

export const BaseLayout: FC<TCommon> = ({ children }): ReactElement => {
  return (
    <section className="flex flex-col items-center w-full h-screen">
      {children}
    </section>
  );
};
