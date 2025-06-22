import React from "react";

import { Label } from "@/components/ui/label";

interface FormInputProps {
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  id?: string;
  name?: string;
  required?: boolean;
  error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  defaultValue,
  id,
  name,
  required = false,
  error
}) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <div className="flex items-start gap-1 w-full">
        <Label
          htmlFor={inputId}
          className="text-foreground  text-sm font-medium leading-[14px]"
        >
          {label}
        </Label>
      </div>

      <div className="flex flex-col items-start gap-2 w-full">
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          name={name}
          required={required}
          className={`flex h-10 px-3 py-2 items-center gap-1 w-full rounded-md border ${
            error ? "border-red-500" : "border-border"
          } bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm`}
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
