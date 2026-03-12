import * as React from "react";
import { cn } from "../lib/utils";

export function InputGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex", className)}>
      {children}
    </div>
  );
}

export function InputGroupAddon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      data-slot="input-group-addon"
      className={cn(
        "inline-flex items-center px-2 rounded-md border border-border bg-muted text-muted-foreground text-sm first:rounded-r-none last:rounded-l-none [&:not(:first-child)]:border-l-0 [&:not(:last-child)]:border-r-0",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function InputGroupText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 rounded-md border border-border bg-muted text-muted-foreground text-sm first:rounded-r-none last:rounded-l-none [&:not(:first-child)]:border-l-0 [&:not(:last-child)]:border-r-0",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function InputGroupInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-9 w-full border border-border bg-background px-3 py-1 text-sm text-foreground shadow-sm transition-colors",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Connected corners
        "rounded-md first:rounded-r-none last:rounded-l-none",
        "[&:not(:first-child)]:rounded-l-none [&:not(:last-child)]:rounded-r-none",
        "[&:not(:first-child)]:border-l-0 [&:not(:last-child)]:border-r-0",
        className,
      )}
      {...props}
    />
  );
}