import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** Control height. @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to fill container width. @default false */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Icon node rendered before the label. */
  leftIcon?: React.ReactNode;
  /** Icon node rendered after the label. */
  rightIcon?: React.ReactNode;
  /** Render as a different element, e.g. "a". @default "button" */
  as?: "button" | "a";
  children?: React.ReactNode;
}

/**
 * Primary call-to-action button for The Noble. Pill-shaped, brand blue by default.
 * @startingPoint section="Core" subtitle="Pill buttons — primary, secondary, ghost, danger" viewport="700x200"
 */
export function Button(props: ButtonProps): JSX.Element;
