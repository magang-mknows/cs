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
}
