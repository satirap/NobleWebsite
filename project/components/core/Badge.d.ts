import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color intent. @default "neutral" */
  tone?: "neutral" | "brand" | "accent" | "success" | "warning" | "danger";
  /** Fill style. @default "soft" */
  variant?: "soft" | "solid";
  /** @default "md" */
  size?: "sm" | "md";
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Small status / category pill in tonal brand colors. */
export function Badge(props: BadgeProps): JSX.Element;
