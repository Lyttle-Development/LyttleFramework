import * as React from "react";
import { cn } from "../lib/utils";
import { Label } from "./label";

export interface FieldProps {
  label: string;
  htmlFor?: string;
  description?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Field({
  label,
  htmlFor,
  description,
  error,
  required,
  children,
  className,
}: FieldProps) {
  const descId = description ? `${htmlFor}-desc` : undefined;
  const errId = error ? `${htmlFor}-err` : undefined;

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={htmlFor}>
        {label}
        {required && (
          <span className="text-destructive ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </Label>
      {/* Clone children to inject aria-describedby */}
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
            "aria-describedby": [descId, errId].filter(Boolean).join(" ") || undefined,
            "aria-invalid": error ? "true" : undefined,
          })
        : children}
      {description && !error && (
        <p id={descId} className="text-xs text-muted-foreground">
          {description}
        </p>
      )}
      {error && (
        <p id={errId} className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}