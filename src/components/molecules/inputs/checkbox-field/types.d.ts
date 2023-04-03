export interface ICheckboxField {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  success?: string | boolean;
  warning?: string;
  variant: "lg" | "md" | "sm";
}
