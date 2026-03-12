"use client";

import * as React from "react";
import { Separator } from "@lyttle/ui";

interface ShowcaseSectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function ShowcaseSection({
  id,
  title,
  description,
  children,
}: ShowcaseSectionProps) {
  return (
    <section id={id} className="py-16 scroll-mt-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-base max-w-2xl">
            {description}
          </p>
        )}
      </div>
      <Separator className="mb-10" />
      <div className="space-y-10">{children}</div>
    </section>
  );
}

interface ShowcaseBlockProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ShowcaseBlock({
  title,
  description,
  children,
  className = "",
}: ShowcaseBlockProps) {
  return (
    <div className={className}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        {children}
      </div>
    </div>
  );
}