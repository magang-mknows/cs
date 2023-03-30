import type { FC, ReactElement } from "react";
import { CardProps } from "../type";
import { Link } from "react-router-dom";
import Button from "../atoms/button";

const Card: FC<CardProps> = ({
  className,
  headerClassName,
  bodyClassName,
  children,
  title,
  src,
  href,
  imgwidth,
  imgheight,
  titleStyle,
  hasImage,
  hasButton,
  imgStyle,
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
            {hasImage && (
              <img
                className={`object-cover ${imgStyle}`}
                src={src}
                alt="Picture of the author"
                width={imgwidth}
                height={imgheight}
              />
            )}
            <section className="flex">{children}</section>
            <h1 className={titleStyle}>{title}</h1>
          </div>
        </Link>
      ) : (
        <div
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

export default Card;
