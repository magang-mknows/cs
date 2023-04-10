import { ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
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
  disabled?: boolean;
  textStyle?: string;
  color?:
    | "noBorder"
    | "borderWarning"
    | "primary"
    | "purple"
    | "blue"
    | "success"
    | "warning"
    | "danger"
    | "neutral";
  type?: "submit" | "button" | "reset";
  icon?: ReactNode | StaticImageData;
  children: ReactNode | string;
}

export type BreadCrumbProps = {
  items: CrumbItem[];
};
