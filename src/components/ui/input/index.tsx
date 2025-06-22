import * as React from "react";

import { Skeleton } from "../Skeleton";

import { cn } from "@/lib/utils";

export interface IInputProps extends React.ComponentProps<"input"> {
  loading?: boolean;
}
const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, loading = false, ...props }, ref) => {
    return (
      <Skeleton loading={loading} minHeight="36px">
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      </Skeleton>
    );
  }
);
Input.displayName = "Input";

export { Input };
