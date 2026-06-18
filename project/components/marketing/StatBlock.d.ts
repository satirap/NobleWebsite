import * as React from "react";

export interface StatBlockProps {
  /** The metric, e.g. "99.9%" or "13+". */
  value: React.ReactNode;
  label: React.ReactNode;
  /** @default "left" */
  align?: "left" | "center";
  /** Color of the metric. Use "light" on dark/brand backgrounds. @default "brand" */
  tone?: "brand" | "accent" | "light";
  style?: React.CSSProperties;
}

/** Large monospace metric with a caption — for trust strips and proof points. */
export function StatBlock(props: StatBlockProps): JSX.Element;
