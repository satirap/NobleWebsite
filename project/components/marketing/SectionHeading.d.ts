import * as React from "react";

export interface SectionHeadingProps {
  /** Small uppercase label above the title, with a leading dash. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  /** Optional lead paragraph below the title. */
  description?: React.ReactNode;
  /** @default "left" */
  align?: "left" | "center";
  style?: React.CSSProperties;
}

/** Section header block: red eyebrow + display title + optional lead paragraph. */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
