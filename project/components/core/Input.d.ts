import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label above the control. */
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message — turns the field red and overrides hint. */
  error?: React.ReactNode;
  /** Icon node inside the field, leading edge. */
  leftIcon?: React.ReactNode;
  /** @default "md" */
  size?: "sm" | "md" | "lg";
}

/** Labeled text input with focus ring, optional icon, hint, and error state. */
export function Input(props: InputProps): JSX.Element;
