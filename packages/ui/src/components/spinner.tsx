import * as React from "react";
import { cn } from "../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const spinnerVariants = cva(
  "animate-spin rounded-full border-2 border-current border-t-transparent text-primary",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        default: "h-4 w-4",
        lg: "h-6 w-6",
        xl: "h-8 w-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spinnerVariants> {}

export function Spinner({ className, size, ...props }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  );
}