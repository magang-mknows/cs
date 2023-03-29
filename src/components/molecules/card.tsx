import type { FC, ReactElement } from "react";
import { CardProps } from "../type";
import { Link } from "react-router-dom";
import Button from "../atoms/button";

const Card: FC<CardProps> = ({
  className,
  children,
  title,
  icon,
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
            className={`${className} flex auto p-4 flex-col`}
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
            {icon}
            <h1 className={titleStyle}>{title}</h1>
            <section className="flex">{children}</section>
          </div>
        </Link>
      ) : (
        <div
          className={`${className} flex auto p-4 flex-col cursor-pointer`}
          onClick={onClick}
        >
          {hasImage && (
            <img
              className={`w-full object-cover ${imgStyle}`}
              src={src}
              alt="Picture of the author"
              width={imgwidth}
              height={imgheight}
            />
          )}
          {icon}
          <h1 className={titleStyle}>{title}</h1>
          <section className="flex ">{children}</section>

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
      )}
    </>
  );
};

export default Card;
