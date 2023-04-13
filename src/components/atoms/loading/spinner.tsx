import { ReactElement } from "react";

const Spinner = (): ReactElement => {
  return (
    <div className="flex items-center opacity-50 h-auto z-10 justify-center w-full" role="status">
      <img
        src={"/loader.png"}
        width={40}
        height={40}
        alt={"loader"}
        loading="lazy"
        className={"animate-spin mx-auto mt-[20%]"}
      />
    </div>
  );
};

export default Spinner;
