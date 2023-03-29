import { FC, Fragment, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { ButtonProps } from "../type";

const Button: FC<ButtonProps> = ({
  className,
  textStyle,
  onClick,
  loading,
  text,
  to,
  icon,
  WFull,
  color = "primary",
  hasImg,
  hasExternal,
  type,
  ...props
}): ReactElement => {
  const colorClass = {
    noBorder: `bg-transparent text-[#106FA4] disabled:text-[#A3A3A3] ${
      loading && "!text-[#67A5C8]"
    }`,
    primary: `bg-[#4AC1A2] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3] ${
      loading && "!bg-[#71E0B9]"
    }`,
    success: `bg-[#54B435] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3] ${
      loading && "!bg-[#54B435]"
    }`,
    warning: `bg-[#F59E0B] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3] ${
      loading && "!bg-[#F59E0B]"
    }`,
    danger: `bg-[#F14F48] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3] ${
      loading && "!bg-[#F14F48]"
    }`,
  };
  const merged = clsx(
    "flex gap-x-2 rounded justify-center items-center hover:opacity-50 duration-1000",
    colorClass[color],
    className
  );

  return (
    <Fragment>
      {to !== undefined ? (
        <Link to={hasExternal ? `${"https://" + to}` : `${to}`}>
          <button type={type} className={merged} {...props} onClick={onClick}>
            {hasImg ? (
              <img src={icon} className="text-black" alt="Icon" />
            ) : (
              <>{icon as ReactNode}</>
            )}
            <p className={textStyle}>{text}</p>
          </button>
        </Link>
      ) : (
        <button className={merged} {...props} onClick={onClick}>
          {hasImg ? (
            <img src={icon} className="text-black" alt="Icon" />
          ) : (
            <>{icon as ReactNode}</>
          )}
          <p className={textStyle}>{text}</p>
        </button>
      )}
    </Fragment>
  );
};

export default Button;
