import { FC, ReactElement } from "react";
import { TCommon } from "@/utilities/entities";

export const AuthLayout: FC<TCommon> = ({ children }): ReactElement => {
  return (
    <>
      <section className="flex w-screen z-0 h-screen overflow-hidden bg-primary-400">
        <div className="p-10">{children}</div>
        <img
          src={"/assets/auth/asset3.svg"}
          alt="variasi"
          width={400}
          className="items-end absolute mt-[84vh] mx-40 overflow-hidden"
        />

        <div className="flex  w-screen justify-end items-start overflow-hidden">
          <img
            src={"/assets/auth/asset2.svg"}
            alt="variasi"
            width={250}
            className="absolute  mx-20"
          />
          <img src={"/assets/auth/asset1.svg"} alt="variasi" width={250} />
        </div>
      </section>
    </>
  );
};
