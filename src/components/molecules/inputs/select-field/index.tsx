import { FC, forwardRef, Key, ReactElement, ReactNode } from "react";
import { Listbox } from "@headlessui/react";
import { ISelect, TOption } from "./types";

const ChevronDown: FC = (): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
};

const Select = forwardRef(({ variant = "lg", ...props }: ISelect): ReactElement => {
  const getLabel = (value: string): boolean =>
    props.options?.find((item: ISelect): boolean => item.value === value)?.label;
  return (
    <Listbox
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
    >
      <div className="flex flex-col gap-y-2">
        {/* Form Label */}
        <Listbox.Label
          className={`font-sans text-secondary-base 
              ${variant === "lg" && "text-[18px]"}
              ${variant === "md" && "text-[16px]"}
              ${variant === "sm" && "text-[14px]"}
            `}
          htmlFor={props.name}
        >
          {props.label}{" "}
          {props.required && <span className="text-error-base font-bold ml-1">*</span>}
        </Listbox.Label>

        <div className="relative w-full mt-2">
          {/* Form Button */}
          <Listbox.Button
            as="button"
            className={`
              px-4  outline-none focus:outline-none w-full bg-grey-100

              ${props.disabled && "bg-grey-100 ring-grey-400"}
              ${props.success && "ring-success-base"}
              ${props.error && "ring-error-base"}
              ${props.warning && "ring-warning-base"}
              ${!props.success && !props.error && !props.warning && "ring-grey-500"}
              
              ${variant === "lg" && "py-4 rounded-lg"}
              ${variant === "md" && "py-2 rounded-md"}
              ${variant === "sm" && "p-1 rounded-md"}
            `}
          >
            {(data) => (
              <div className="flex justify-between items-center">
                <span
                  className={`
                      ${variant === "lg" && "text-[16px]"}
                      ${variant === "md" && "text-[14px]"}
                      ${variant === "sm" && "text-[10px]"}
                      `}
                >
                  {getLabel(data.value) as ReactNode}
                </span>
                <ChevronDown />
              </div>
            )}
          </Listbox.Button>

          {/* Options List */}
          <Listbox.Options className="absolute bg-white w-full drop-shadow-xl z-10 rounded mt-2">
            {props.options?.map((data: TOption, key: Key | null | undefined) => (
              <Listbox.Option
                key={key}
                value={data.value}
                className="px-4 py-2 cursor-pointer hover:bg-grey-100 hover:rounded"
              >
                <span
                  className={
                    variant === "lg"
                      ? "text-[16px]"
                      : variant === "md"
                      ? "text-[14px]"
                      : variant === "sm"
                      ? "text-[10px]"
                      : ""
                  }
                >
                  {data.label}
                </span>
              </Listbox.Option>
            ))}
          </Listbox.Options>

          {/* Success, Warning, Error Label */}
          <div className="flex flex-col items-start w-full gap-x-1">
            <span className="text-grey-600 text-sm mt-1">{props.hint}</span>
            {props.error && <span className={"text-sm text-error-base"}>{props.error}</span>}
            {props.warning && <span className={"text-sm text-warning-base"}>{props.warning}</span>}
            {props.success && <span className={"text-sm text-success-base"}>{props.success}</span>}
          </div>
        </div>
      </div>
    </Listbox>
  );
});

Select.displayName = "Select";
export default Select;
