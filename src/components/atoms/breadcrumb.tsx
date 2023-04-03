import { FC, ReactElement } from "react";
import { BreadCrumbProps } from "./types";
import { Link } from "react-router-dom";

const BreadCrumb: FC<BreadCrumbProps> = ({ items }): ReactElement => {
  return (
    <div
      className="grid place-content-start w-full px-6 md:px-8 lg:px-10 my-4 mt-5 text-[#737373] font-[600] lg:text-[14px] md:text-[12px] text-[10px]"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex space-x-1 md:space-x-3">
        <li>
          {items.map((crumb, index) => {
            const isLastItem = index === items.length - 1;
            if (!isLastItem) {
              return (
                <>
                  <Link
                    ref={crumb.link}
                    key={index}
                    className="inline-flex items-center text-[#106FA4] font-[600] lg:text-[14px] md:text-[12px] text-[10px] dark:hover:text-white"
                    to={""}
                  >
                    {crumb.name}
                  </Link>
                  <span className="px-3 text-[#A3A3A3] font-[600]">{">"}</span>
                </>
              );
            } else {
              return crumb.name;
            }
          })}
        </li>
      </ol>
    </div>
  );
};

export default BreadCrumb;
