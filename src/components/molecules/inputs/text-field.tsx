import { FC, forwardRef, ReactElement, Ref, ReactNode, ChangeEventHandler } from "react";
import { useController } from "react-hook-form";
import type { UseControllerProps, FieldValues } from "react-hook-form";

export interface ITextField {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value?: string;
  className?: string;
  labelClassName?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  success?: string | boolean;
  warning?: string;
  variant: "lg" | "md" | "sm";
  icon?: ReactNode | string;
  prepend?: ReactNode;
  append?: ReactNode;
  prependColor?: string;
  appendColor?: string;
  hint?: string;
}

type IProps<T extends FieldValues> = UseControllerProps<T> & ITextField;

export const TextField: FC<IProps<FieldValues>> = forwardRef(
  ({ variant = "lg", ...props }, ref: Ref<HTMLInputElement>): ReactElement => {
    const {
      field,
      fieldState: { error },
    } = useController({
      name: props.name,
      control: props.control,
      defaultValue: props.defaultValue,
      rules: props.rules,
      shouldUnregister: props.shouldUnregister,
    });
    return (
      <section className="flex flex-col gap-y-2 my-2 w-auto">
        {props.label && (
          <label
            htmlFor={props.name}
            className={`font-sans text-secondary-base ${
              variant === "lg"
                ? "text-[18px]"
                : variant === "md"
                ? "text-[16px]"
                : variant === "sm"
                ? "text-[14px]"
                : ""
            }`}
          >
            {props.label}
            {props.required && <span className="text-error-base font-bold ml-1">*</span>}
          </label>
        )}

        <section className="items-center w-auto relative block">
          {props.prepend && (
            <label
              className="items-center inset-0 absolute flex items justify-center w-[40px]"
              htmlFor={props.name}
            >
              {props.prepend}
            </label>
          )}
          <input
            {...field}
            {...props}
            ref={ref}
            className={`w-full ${
              error &&
              !props.warning &&
              !props.success &&
              "focus:ring-1 focus:ring-error-base bg-error-100 ring-1 ring-error-base"
            }

          ${
            props.success &&
            !props.warning &&
            !error &&
            "focus:ring-1 focus:ring-success-base bg-success-100"
          }

          ${
            props.warning &&
            !props.success &&
            !error &&
            "focus:ring-1 focus:ring-warning-base bg-warning-100"
          }

          ${
            !props.warning &&
            !error &&
            !props.success &&
            "focus:ring-grey-300 focus:ring-1 bg-grey-100"
          }

             ${
               variant === "lg"
                 ? "py-4 rounded-lg"
                 : variant === "md"
                 ? "py-2 rounded-md"
                 : variant === "sm"
                 ? "p-1 rounded-md"
                 : ""
             } outline-none focus:outline-none ${
              props.prepend ? "pl-[40px]" : props.append ? "pr-[40px]" : "px-4"
            }
                `}
          />

          {props.success && (
            <img
              src="/assets/check-circle.svg"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              alt="check circle"
              width={20}
              height={20}
              loading="eager"
            />
          )}

          {props.append && (
            <label className=" flex items-end justify-center w-auto" htmlFor={props.name}>
              {props.append}
            </label>
          )}
        </section>

        <div className="flex flex-col items-start w-full gap-x-1">
          <span className="text-grey-600">{props.hint}</span>
          <span
            className={
              error
                ? "text-error-base"
                : props.success
                ? "text-success-base"
                : props.warning
                ? "text-warning-base"
                : ""
            }
          >
            {props.error || props.warning || props.success || " "}
          </span>
        </div>
      </section>
    );
  },
);

TextField.displayName = "TextField";
