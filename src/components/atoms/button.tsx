import { FC, Fragment, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { IButtonProps } from "./types";

const SpinAnimation = (): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="animate-spin w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
};

const Button: FC<IButtonProps> = ({
  className,
  loading,
  to,
  icon,
  color = "primary",
  hasImg,
  hasExternal,
  children,
  ...props
}): ReactElement => {
  const colorClass = {
    noBorder: "bg-transparent text-gray-400 disabled:text-gray-200",
    primary:
      "bg-primary-base text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:border disabled:text-gray-300 font-[600]",
    purple: "bg-purple-base text-white disabled:bg-gray-500 disabled:text-gray-200",
    blue: "bg-blue-base text-white disabled:bg-gray-500 disabled:text-gray-200",
    success: "bg-[#54B435] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3]",
    warning: "bg-[#F59E0B] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3]",
    danger: "bg-[#F14F48] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3]",
    neutral: "bg-neutral-400 text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3]",
  };
  const merged = clsx(
    "flex gap-x-2 rounded justify-center items-center hover:opacity-75 focus:ring-none focus:outline-none",
    colorClass[color],
    className,
  );

  return (
    <Fragment>
      {to !== undefined ? (
        <Link to={hasExternal ? `${"https://" + to}` : `${to}`}>
          <button className={merged} {...props}>
            {hasImg ? <img src={icon} alt="Icon" /> : <>{icon as ReactNode}</>}
            {loading ? <SpinAnimation /> : children}
          </button>
        </Link>
      ) : (
        <button className={merged} {...props}>
          {hasImg ? <img src={icon} alt="Icon" /> : <>{icon as ReactNode}</>}
          {loading ? <SpinAnimation /> : children}
        </button>
      )}
    </Fragment>
  );
};

export default Button;
