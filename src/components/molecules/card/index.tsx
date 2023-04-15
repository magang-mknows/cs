import Button from "@/components/atoms/button";
import { CardProps } from "@/components/types";
import { FC, ReactElement, Fragment } from "react";
import { Link } from "react-router-dom";

const Card: FC<CardProps> = ({
  className,
  bodyClassName,
  children,
  title,
  href,
  titleStyle,
  hasButton,
  buttonClassName,
  buttonColor,
  buttonText,
  buttonTextstyle,
  buttonHref,
  onClick,
}): ReactElement => {
  return (
    <Fragment>
      {href ? (
        <Link to={`${href}`}>
          <div
            className={`${className} flex auto p-4 flex-col rounded bg-[#ffffff]`}
            onClick={() => onClick}
          >
            <section className="flex">{children}</section>
            <h1 className={titleStyle}>{title}</h1>
          </div>
        </Link>
      ) : (
        <div
          data-testid="card"
          className={`${className} relative flex auto flex-col cursor-default rounded bg-[#ffffff]`}
          onClick={onClick}
        >
          <div className={titleStyle}>
            <h1>{title}</h1>
          </div>
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex w-full ">{children}</div>
            <div className={bodyClassName}>
              {hasButton && (
                <Link to={`${buttonHref}`}>
                  <section className="flex justify-end items-end">
                    <Button
                      className={buttonClassName}
                      color={buttonColor}
                      textStyle={buttonTextstyle}
                    >
                      {buttonText}
                    </Button>
                  </section>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Card;
