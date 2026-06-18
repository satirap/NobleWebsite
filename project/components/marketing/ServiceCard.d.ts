import * as React from "react";

export interface ServiceCardProps {
  /** Icon node (e.g. a Lucide icon) shown in the gradient tile. */
  icon?: React.ReactNode;
  /** Optional photo URL — renders a 16:10 image header with the icon overlapping. */
  image?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  href?: string;
  /** Link label. @default "ดูรายละเอียด" */
  cta?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Service offering card — gradient icon tile, title, description, arrow CTA.
 * @startingPoint section="Marketing" subtitle="Service grid card with gradient icon tile" viewport="380x300"
 */
export function ServiceCard(props: ServiceCardProps): JSX.Element;
