import { ReactNode } from "react";

export interface CardProps {
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  titleStyle?: string;
  src?: StaticImport;
  topText?: string;
  hasButton?: boolean;
  href?: string;
  imgStyle?: string;
  buttonClassName?: string;
  buttonColor?: ButtonProps.color;
  buttonText?: string;
  buttonTextstyle?: string;
  buttonHref?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
