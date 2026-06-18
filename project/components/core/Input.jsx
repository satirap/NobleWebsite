import React from "react";

/**
 * The Noble — Text input with optional label, icon, and error state.
 */
export function Input({
  label = null,
  hint = null,
  error = null,
  leftIcon = null,
  size = "md",
  id,
  className = "",
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? "var(--control-h-sm)" : size === "lg" ? "var(--control-h-lg)" : "var(--control-h-md)";
  const reactId = React.useId();
  const inputId = id || reactId;
  const borderColor = error ? "var(--danger-600)" : focus ? "var(--border-focus)" : "var(--border-default)";

  return (
    <div className={`tn-field ${className}`} style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-strong)" }}>
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex", alignItems: "center", gap: "8px", height: h,
          padding: "0 14px", background: "var(--white)",
          border: `1.5px solid ${borderColor}`, borderRadius: "var(--radius-sm)",
          boxShadow: focus ? (error ? "var(--ring-danger)" : "var(--ring-focus)") : "none",
          transition: "border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)",
        }}
      >
        {leftIcon && <span style={{ color: "var(--text-muted)", display: "flex", flex: "none" }}>{leftIcon}</span>}
        <input
          id={inputId}
          onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
          style={{
            border: "none", outline: "none", background: "transparent", width: "100%",
            fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--text-strong)",
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: "var(--text-xs)", color: error ? "var(--danger-600)" : "var(--text-muted)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
