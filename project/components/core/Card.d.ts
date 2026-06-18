import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lift + deepen shadow on hover. @default false */
  hoverable?: boolean;
  /** Optional brand keyline along the top edge. @default null */
  accent?: "blue" | "red" | null;
  /** Inner padding. @default "lg" */
  padding?: "none" | "sm" | "md" | "lg";
  children?: React.ReactNode;
}

/** White content surface with hairline ring and soft cool shadow. */
export function Card(props: CardProps): JSX.Element;
