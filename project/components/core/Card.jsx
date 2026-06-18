import React from "react";

/**
 * The Noble — Card surface. White, hairline-ringed, soft cool shadow.
 * `hoverable` lifts on hover; `accent="blue"|"red"` adds a top keyline.
 */
export function Card({
  hoverable = false,
  accent = null,
  padding = "lg",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const pads = { none: "0", sm: "16px", md: "20px", lg: "28px" };
  const [hover, setHover] = React.useState(false);
  const accentBar = accent
    ? { borderTop: `3px solid ${accent === "red" ? "var(--accent)" : "var(--primary)"}` }
    : {};

  return (
    <div
      className={`tn-card ${className}`}
      onMouseEnter={() => hoverable && setHover(true)}
      onMouseLeave={() => hoverable && setHover(false)}
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        boxShadow: hover
          ? "var(--shadow-lg)"
          : "var(--shadow-sm), var(--ring-hairline)",
        padding: pads[padding],
        transform: hover ? "translateY(-3px)" : "none",
        transition: "box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)",
        ...accentBar,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
