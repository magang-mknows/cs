import Button from "@/components/atoms/button";
import { CardProps } from "@/components/type";
import type { FC, ReactElement } from "react";
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
  buttonTextStyle,
  buttonHref,
  onClick,
}): ReactElement => {
  return (
    <>
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
          className={`${className} relative flex auto flex-col cursor-pointer rounded bg-[#ffffff]`}
          onClick={onClick}
        >
          <section className="flex w-full ">{children}</section>
          <div className={titleStyle}>
            <h1>{title}</h1>
          </div>

          <div className={bodyClassName}>
            {hasButton && (
              <Link to={`${buttonHref}`}>
                <section className="flex justify-center">
                  <Button
                    className={buttonClassName}
                    text={buttonText}
                    color={buttonColor}
                    textStyle={buttonTextStyle}
                  />
                </section>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
