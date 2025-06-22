import React from "react";

import { IInputContainerProps, InputContainer } from "./Container";

import { Input } from "@/components/ui/input";
import { useManagerForm } from "@/logic/form";
import { removeNonNumbers } from "@/utils/masks/justNumber";

export interface IInputDefaultProps
  extends Omit<IInputContainerProps, "InputComponent">,
    Pick<React.InputHTMLAttributes<HTMLInputElement>, "type" | "autoComplete"> {
  onlyNumbers?: boolean;
  maxLength?: number;
  description?: string;
  required?: boolean;
  hasRender?: boolean;
}

export function InputDefault({
  onlyNumbers,
  mask = (value: string) => value,
  placeholder,
  disabled,
  type = "text",
  maxLength,
  autoComplete,
  hasRender = true,
  ...rest
}: Readonly<IInputDefaultProps>) {
  const { canEdit, isLoading } = useManagerForm();
  if (!hasRender) return null;
  return (
    <InputContainer
      {...rest}
      InputComponent={({ field }) => (
        <Input
          autoComplete={autoComplete}
          {...field}
          ref={field.ref}
          placeholder={placeholder || rest.label}
          loading={isLoading}
          disabled={!canEdit || disabled}
          maxLength={maxLength}
          type={type}
          onChange={(e) => {
            if (onlyNumbers) {
              field.onChange(removeNonNumbers(e.target.value));
            } else {
              field.onChange(mask(e.target.value));
            }
          }}
        />
      )}
    />
  );
}
