import { ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text?: string | number;
  to?: string;
  icon?: ReactNode | StaticImageData;
  target?: string;
  WFull?: boolean;
  hasImg?: boolean;
  hasExternal?: boolean;
  loading?: boolean;
  textStyle?: string;
  color?:
    | "noBorder"
    | "primary"
    | "purple"
    | "blue"
    | "success"
    | "warning"
    | "danger"
    | "neutral";
  type?: "submit" | "button" | "reset";
  icon?: ReactNode | StaticImageData;
}

export interface CardProps {
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  titleStyle?: string;
  imgwidth?: number;
  imgheight?: number;
  src?: StaticImport;
  topText?: string;
  hasImage?: boolean;
  hasButton?: boolean;
  href?: string;
  imgStyle?: string;
  buttonClassName?: string;
  buttonColor?: ButtonProps.color;
  buttonText?: string;
  buttonTextStyle?: string;
  buttonHref?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
