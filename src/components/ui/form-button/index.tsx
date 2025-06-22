import React from "react";

import { cn } from "@/lib/utils";

interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export const FormButton: React.FC<FormButtonProps> = ({
  children,
  className,
  variant = "primary",
  fullWidth = true,
  ...props
}) => {
  return (
    <button
      className={cn(
        "min-h-10 gap-2 font-medium whitespace-nowrap px-4 py-2.5 rounded-md transition-colors hover:cursor-pointer ",
        {
          "bg-primary text-stone-50 hover:brightness-110":
            variant === "primary",
          "bg-stone-200 text-stone-900 hover:brightness-110":
            variant === "secondary",
          "bg-transparent border border-stone-200 text-stone-900 hover:brightness-110":
            variant === "outline",
          "w-full": fullWidth
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
