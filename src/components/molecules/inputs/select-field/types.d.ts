import { ReactNode } from "react";

export type TOption = {
  label: string;
  value: string | number;
};

export interface ISelect {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value?: string | number;
  className?: string;
  labelClassName?: string;
  onChange?: (value: string | number) => void;
  success?: string | boolean;
  warning?: string;
  variant: "lg" | "md" | "sm";
  icon?: ReactNode;
  hint?: string;
  options: TOption[];
}
