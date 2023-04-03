import { ReactElement } from "react";
import { ICheckboxField } from "./types";
import { FieldValues, UseControllerProps, useController } from "react-hook-form";

type IProps<T extends FieldValues> = UseControllerProps<T> & ICheckboxField;

export const CheckboxField = <T extends FieldValues>({
  variant = "lg",
  ...props
}: IProps<T>): ReactElement => {
  const { field } = useController(props);
  return (
    <label
      htmlFor={props.name}
      className={`
       ${props.className} 
       ${props.disabled && "text-gray-500"}
       ${variant === "lg" && "text-[18px] text-gray-700"}
       ${variant === "md" && "text-[16px] text-gray-700"}
       ${variant === "sm" && "text-[14px] text-gray-700"}
       `}
    >
      <input
        type="checkbox"
        id={props.name}
        {...{ ...props, ...field }}
        className="mr-2 accent-primary-base"
        disabled={props.disabled}
      />
      {props.label}
    </label>
  );
};
