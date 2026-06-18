import React from "react";

/**
 * The Noble — Button
 * Primary action uses the brand royal blue; danger uses signal red.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  as = "button",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const heights = { sm: "var(--control-h-sm)", md: "var(--control-h-md)", lg: "var(--control-h-lg)" };
  const padX = { sm: "14px", md: "20px", lg: "26px" };
  const font = { sm: "var(--text-sm)", md: "var(--text-base)", lg: "var(--text-lg)" };

  const palettes = {
    primary: {
      "--btn-bg": "var(--primary)", "--btn-fg": "var(--primary-on)", "--btn-bd": "transparent",
      "--btn-bg-hover": "var(--primary-hover)", "--btn-shadow": "var(--shadow-glow-blue)",
    },
    secondary: {
      "--btn-bg": "var(--white)", "--btn-fg": "var(--primary)", "--btn-bd": "var(--border-strong)",
      "--btn-bg-hover": "var(--blue-50)", "--btn-shadow": "var(--shadow-xs)",
    },
    ghost: {
      "--btn-bg": "transparent", "--btn-fg": "var(--text-body)", "--btn-bd": "transparent",
      "--btn-bg-hover": "var(--ink-100)", "--btn-shadow": "none",
    },
    danger: {
      "--btn-bg": "var(--accent)", "--btn-fg": "var(--accent-on)", "--btn-bd": "transparent",
      "--btn-bg-hover": "var(--accent-hover)", "--btn-shadow": "var(--shadow-glow-red)",
    },
  };

  const Comp = as;
  return (
    <Comp
      className={`tn-btn ${className}`}
      disabled={Comp === "button" ? disabled : undefined}
      aria-disabled={disabled || undefined}
      style={{
        ...palettes[variant],
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
        height: heights[size], padding: `0 ${padX[size]}`, width: fullWidth ? "100%" : "auto",
        fontFamily: "var(--font-display)", fontWeight: 600, fontSize: font[size],
        lineHeight: 1, letterSpacing: "0.005em", textDecoration: "none", whiteSpace: "nowrap",
        color: "var(--btn-fg)", background: "var(--btn-bg)",
        border: "1.5px solid var(--btn-bd)", borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1,
        boxShadow: "var(--btn-shadow)",
        transition: "background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)",
        ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.background = "var(--btn-bg-hover)"; }}
      onMouseLeave={(e) => { if (!disabled) e.currentTarget.style.background = "var(--btn-bg)"; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "translateY(1px) scale(0.99)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "none"; }}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </Comp>
  );
}
