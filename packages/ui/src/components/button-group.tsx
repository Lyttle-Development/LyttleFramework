import * as React from "react";
import { cn } from "../lib/utils";

export function ButtonGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="group"
      className={cn(
        "inline-flex [&>*:not(:first-child)]:-ml-px [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child):not(:last-child)]:rounded-none",
        className,
      )}
    >
      {children}
    </div>
  );
}