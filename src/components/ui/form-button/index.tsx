import React from "react";

import { Skeleton } from "../Skeleton";

import { cn } from "@/lib/utils";
import { useManagerForm } from "@/logic/form";

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
  const isLoading = useManagerForm().isLoading;
  return (
    <Skeleton loading={isLoading} className="w-full">
      <button
        className={cn(
          "min-h-10 gap-2 font-medium whitespace-nowrap px-4 py-2.5 rounded-md transition-colors hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:brightness-100",
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
    </Skeleton>
  );
};
