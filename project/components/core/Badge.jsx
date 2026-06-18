import React from "react";

/**
 * The Noble — Badge / status pill.
 * Soft tonal backgrounds; use for statuses, categories, counts.
 */
export function Badge({
  tone = "neutral",
  variant = "soft",
  size = "md",
  dot = false,
  className = "",
  style = {},
  children,
  ...rest
}) {
  const tones = {
    neutral: { soft: ["var(--ink-100)", "var(--ink-700)"], solid: ["var(--ink-700)", "#fff"], color: "var(--ink-500)" },
    brand:   { soft: ["var(--blue-50)", "var(--blue-700)"], solid: ["var(--blue-700)", "#fff"], color: "var(--blue-600)" },
    accent:  { soft: ["var(--red-50)", "var(--red-700)"], solid: ["var(--red-600)", "#fff"], color: "var(--red-600)" },
    success: { soft: ["var(--success-100)", "var(--success-600)"], solid: ["var(--success-600)", "#fff"], color: "var(--success-600)" },
    warning: { soft: ["var(--warning-100)", "var(--warning-600)"], solid: ["var(--warning-600)", "#fff"], color: "var(--warning-600)" },
    danger:  { soft: ["var(--danger-100)", "var(--danger-600)"], solid: ["var(--danger-600)", "#fff"], color: "var(--danger-600)" },
  };
  const [bg, fg] = tones[tone][variant];
  const pad = size === "sm" ? "2px 8px" : "4px 11px";
  const fs = size === "sm" ? "var(--text-2xs)" : "var(--text-xs)";

  return (
    <span
      className={`tn-badge ${className}`}
      style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        padding: pad, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: fs,
        lineHeight: 1.4, letterSpacing: "0.01em", color: fg, background: bg,
        borderRadius: "var(--radius-pill)", whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: tones[tone].color, flex: "none" }} />}
      {children}
    </span>
  );
}
