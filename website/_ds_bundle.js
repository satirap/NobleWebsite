/* @ds-bundle: {"format":3,"namespace":"TheNobleDesignSystem_288042","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"2c46cb359eaf","components/core/Button.jsx":"b8826aab1a18","components/core/Card.jsx":"65526fa351c5","components/core/Input.jsx":"aa814a965a03","components/marketing/SectionHeading.jsx":"bf55a2c4a771","components/marketing/ServiceCard.jsx":"c967ec4bbcd6","components/marketing/StatBlock.jsx":"69c2a233bab2","ui_kits/website/CMS.jsx":"a5988102957a","ui_kits/website/Clients.jsx":"a663bb9fe3e6","ui_kits/website/Contact.jsx":"8fc49a457b17","ui_kits/website/Header.jsx":"61759417c70a","ui_kits/website/Hero.jsx":"2749d3f7c300","ui_kits/website/Sections.jsx":"b2fa11a8689c","ui_kits/website/content.js":"551abd88696f","ui_kits/website/photos.js":"3e9f034eb9ba","ui_kits/website/store.js":"c42c58787a8d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheNobleDesignSystem_288042 = window.TheNobleDesignSystem_288042 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Noble — Badge / status pill.
 * Soft tonal backgrounds; use for statuses, categories, counts.
 */
function Badge({
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
    neutral: {
      soft: ["var(--ink-100)", "var(--ink-700)"],
      solid: ["var(--ink-700)", "#fff"],
      color: "var(--ink-500)"
    },
    brand: {
      soft: ["var(--blue-50)", "var(--blue-700)"],
      solid: ["var(--blue-700)", "#fff"],
      color: "var(--blue-600)"
    },
    accent: {
      soft: ["var(--red-50)", "var(--red-700)"],
      solid: ["var(--red-600)", "#fff"],
      color: "var(--red-600)"
    },
    success: {
      soft: ["var(--success-100)", "var(--success-600)"],
      solid: ["var(--success-600)", "#fff"],
      color: "var(--success-600)"
    },
    warning: {
      soft: ["var(--warning-100)", "var(--warning-600)"],
      solid: ["var(--warning-600)", "#fff"],
      color: "var(--warning-600)"
    },
    danger: {
      soft: ["var(--danger-100)", "var(--danger-600)"],
      solid: ["var(--danger-600)", "#fff"],
      color: "var(--danger-600)"
    }
  };
  const [bg, fg] = tones[tone][variant];
  const pad = size === "sm" ? "2px 8px" : "4px 11px";
  const fs = size === "sm" ? "var(--text-2xs)" : "var(--text-xs)";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `tn-badge ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: pad,
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: fs,
      lineHeight: 1.4,
      letterSpacing: "0.01em",
      color: fg,
      background: bg,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: tones[tone].color,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Noble — Button
 * Primary action uses the brand royal blue; danger uses signal red.
 */
function Button({
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
  const heights = {
    sm: "var(--control-h-sm)",
    md: "var(--control-h-md)",
    lg: "var(--control-h-lg)"
  };
  const padX = {
    sm: "14px",
    md: "20px",
    lg: "26px"
  };
  const font = {
    sm: "var(--text-sm)",
    md: "var(--text-base)",
    lg: "var(--text-lg)"
  };
  const palettes = {
    primary: {
      "--btn-bg": "var(--primary)",
      "--btn-fg": "var(--primary-on)",
      "--btn-bd": "transparent",
      "--btn-bg-hover": "var(--primary-hover)",
      "--btn-shadow": "var(--shadow-glow-blue)"
    },
    secondary: {
      "--btn-bg": "var(--white)",
      "--btn-fg": "var(--primary)",
      "--btn-bd": "var(--border-strong)",
      "--btn-bg-hover": "var(--blue-50)",
      "--btn-shadow": "var(--shadow-xs)"
    },
    ghost: {
      "--btn-bg": "transparent",
      "--btn-fg": "var(--text-body)",
      "--btn-bd": "transparent",
      "--btn-bg-hover": "var(--ink-100)",
      "--btn-shadow": "none"
    },
    danger: {
      "--btn-bg": "var(--accent)",
      "--btn-fg": "var(--accent-on)",
      "--btn-bd": "transparent",
      "--btn-bg-hover": "var(--accent-hover)",
      "--btn-shadow": "var(--shadow-glow-red)"
    }
  };
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: `tn-btn ${className}`,
    disabled: Comp === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    style: {
      ...palettes[variant],
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      height: heights[size],
      padding: `0 ${padX[size]}`,
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: font[size],
      lineHeight: 1,
      letterSpacing: "0.005em",
      textDecoration: "none",
      whiteSpace: "nowrap",
      color: "var(--btn-fg)",
      background: "var(--btn-bg)",
      border: "1.5px solid var(--btn-bd)",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      boxShadow: "var(--btn-shadow)",
      transition: "background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)",
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = "var(--btn-bg-hover)";
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = "var(--btn-bg)";
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "translateY(1px) scale(0.99)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "none";
    }
  }, rest), leftIcon, children, rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Noble — Card surface. White, hairline-ringed, soft cool shadow.
 * `hoverable` lifts on hover; `accent="blue"|"red"` adds a top keyline.
 */
function Card({
  hoverable = false,
  accent = null,
  padding = "lg",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const pads = {
    none: "0",
    sm: "16px",
    md: "20px",
    lg: "28px"
  };
  const [hover, setHover] = React.useState(false);
  const accentBar = accent ? {
    borderTop: `3px solid ${accent === "red" ? "var(--accent)" : "var(--primary)"}`
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `tn-card ${className}`,
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm), var(--ring-hairline)",
      padding: pads[padding],
      transform: hover ? "translateY(-3px)" : "none",
      transition: "box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)",
      ...accentBar,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Noble — Text input with optional label, icon, and error state.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    className: `tn-field ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      height: h,
      padding: "0 14px",
      background: "var(--white)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? error ? "var(--ring-danger)" : "var(--ring-focus)" : "none",
      transition: "border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)"
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "flex",
      flex: "none"
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      border: "none",
      outline: "none",
      background: "transparent",
      width: "100%",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)"
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger-600)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Noble — SectionHeading. Eyebrow + title + optional lead, with alignment.
 */
function SectionHeading({
  eyebrow = null,
  title,
  description = null,
  align = "left",
  className = "",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `tn-heading ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      maxWidth: align === "center" ? "640px" : "none",
      marginInline: align === "center" ? "auto" : "0",
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      fontSize: "var(--text-2xs)",
      fontWeight: 600,
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 2,
      background: "var(--accent)",
      borderRadius: 2
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-lg)",
      fontWeight: 700,
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-strong)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)"
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Noble — ServiceCard. Optional photo header + icon tile + title +
 * description + arrow link. Built for the "บริการของเรา" service grid.
 */
function ServiceCard({
  icon = null,
  image = null,
  title,
  description,
  href = "#",
  cta = "ดูรายละเอียด",
  className = "",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    hoverable: true,
    padding: image ? "none" : "lg",
    className: `tn-service ${className}`,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      overflow: "hidden",
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 10",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    loading: "lazy",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: hover ? "scale(1.06)" : "scale(1)",
      transition: "transform var(--duration-slow) var(--ease-out)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(11,18,32,0) 35%, rgba(11,18,32,0.55) 100%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      height: "100%",
      padding: image ? "22px" : "0",
      marginTop: image ? "-34px" : "0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "var(--radius-md)",
      flex: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--white)",
      background: "var(--gradient-brand)",
      boxShadow: hover ? "var(--shadow-glow-blue)" : "var(--shadow-sm)",
      transition: "box-shadow var(--duration-base) var(--ease-out)",
      border: image ? "3px solid var(--surface-card)" : "none"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      fontWeight: 600,
      color: "var(--text-strong)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-muted)"
    }
  }, description)), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      textDecoration: "none",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--primary)"
    }
  }, cta, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: hover ? "translateX(3px)" : "none",
      transition: "transform var(--duration-base) var(--ease-out)"
    }
  }, "\u2192"))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The Noble — StatBlock. Big mono metric + label, for trust strips.
 */
function StatBlock({
  value,
  label,
  align = "left",
  tone = "brand",
  className = "",
  style = {},
  ...rest
}) {
  const color = tone === "accent" ? "var(--accent)" : tone === "light" ? "var(--white)" : "var(--primary)";
  const labelColor = tone === "light" ? "var(--blue-200)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `tn-stat ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "clamp(2rem, 1.4rem + 2vw, 2.75rem)",
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      color
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      color: labelColor
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CMS.jsx
try { (() => {
// The Noble — full content CMS. Edits brand, hero, services, stats,
// clients/works, showcase and contact — text + images — persisted via NobleStore.
// Leaf field components live at module scope so inputs keep focus across renders.

function cmsDownscale(file, max, cb) {
  if (!file) return;
  const fr = new FileReader();
  fr.onload = () => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      const cv = document.createElement("canvas");
      cv.width = Math.round(img.width * scale);
      cv.height = Math.round(img.height * scale);
      cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
      cb(cv.toDataURL("image/jpeg", 0.82));
    };
    img.src = fr.result;
  };
  fr.readAsDataURL(file);
}
const cmsLabel = {
  fontFamily: "var(--font-mono)",
  fontSize: 10.5,
  textTransform: "uppercase",
  letterSpacing: ".07em",
  color: "var(--text-faint)",
  marginBottom: 5,
  display: "block"
};
const cmsBox = {
  width: "100%",
  padding: "9px 11px",
  borderRadius: "var(--radius-sm)",
  border: "1.5px solid var(--border-default)",
  fontFamily: "var(--font-body)",
  fontSize: 14,
  color: "var(--text-strong)",
  background: "#fff",
  boxSizing: "border-box"
};
function CmsField({
  label,
  value,
  onChange,
  area,
  mono,
  placeholder
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      marginBottom: 12
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: cmsLabel
  }, label), area ? /*#__PURE__*/React.createElement("textarea", {
    value: value || "",
    placeholder: placeholder,
    onChange: e => onChange(e.target.value),
    rows: area === true ? 3 : area,
    style: {
      ...cmsBox,
      resize: "vertical",
      lineHeight: 1.5
    }
  }) : /*#__PURE__*/React.createElement("input", {
    value: value || "",
    placeholder: placeholder,
    onChange: e => onChange(e.target.value),
    style: {
      ...cmsBox,
      fontFamily: mono ? "var(--font-mono)" : "var(--font-body)"
    }
  }));
}
function CmsImageField({
  label,
  value,
  onChange,
  P,
  lang
}) {
  const [mode, setMode] = React.useState(null);
  const [url, setUrl] = React.useState("");
  const fileRef = React.useRef(null);
  const t = (th, en) => lang === "th" ? th : en;
  const btn = {
    border: "1px solid var(--border-default)",
    background: "#fff",
    borderRadius: "var(--radius-pill)",
    padding: "5px 11px",
    cursor: "pointer",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 12,
    color: "var(--primary)",
    display: "inline-flex",
    alignItems: "center",
    gap: 5
  };
  const I = ({
    n
  }) => React.createElement(window.NobleIco, {
    n,
    s: 12
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: cmsLabel
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 70,
      height: 50,
      flex: "none",
      borderRadius: "var(--radius-sm)",
      background: value ? "#fff" : "var(--ink-100)",
      boxShadow: "var(--ring-hairline)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, value ? /*#__PURE__*/React.createElement("img", {
    src: value,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain"
    }
  }) : /*#__PURE__*/React.createElement(I, {
    n: "image"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => setMode(m => m === "lib" ? null : "lib")
  }, /*#__PURE__*/React.createElement(I, {
    n: "grid-3x3"
  }), t("คลัง", "Library")), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => setMode(m => m === "url" ? null : "url")
  }, /*#__PURE__*/React.createElement(I, {
    n: "link"
  }), "URL"), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => fileRef.current && fileRef.current.click()
  }, /*#__PURE__*/React.createElement(I, {
    n: "upload"
  }), t("อัปโหลด", "Upload")), value && /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      color: "var(--text-muted)"
    },
    onClick: () => onChange("")
  }, /*#__PURE__*/React.createElement(I, {
    n: "x"
  }), t("ลบ", "Clear")), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    style: {
      display: "none"
    },
    onChange: e => {
      cmsDownscale(e.target.files[0], 900, onChange);
      e.target.value = "";
    }
  }))), mode === "lib" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 5,
      marginTop: 8
    }
  }, P.library.map(lib => /*#__PURE__*/React.createElement("button", {
    key: lib.key,
    title: lib.label,
    onClick: () => {
      onChange(lib.url);
      setMode(null);
    },
    style: {
      padding: 0,
      border: value === lib.url ? "2px solid var(--primary)" : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      cursor: "pointer",
      aspectRatio: "4/3"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: lib.thumb,
    alt: lib.label,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })))), mode === "url" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: url,
    onChange: e => setUrl(e.target.value),
    placeholder: t("วางลิงก์รูป (URL)", "Paste image URL"),
    style: cmsBox
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      padding: "0 14px"
    },
    onClick: () => {
      if (url.trim()) {
        onChange(url.trim());
        setUrl("");
        setMode(null);
      }
    }
  }, t("ใช้", "Use"))));
}
function CmsCard({
  children,
  onRemove,
  removeLabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      padding: 12,
      marginBottom: 10,
      background: "var(--surface-card)",
      position: "relative"
    }
  }, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    title: removeLabel,
    style: {
      position: "absolute",
      top: 8,
      right: 8,
      width: 26,
      height: 26,
      border: "none",
      borderRadius: "var(--radius-sm)",
      background: "var(--red-50)",
      color: "var(--accent)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, React.createElement(window.NobleIco, {
    n: "trash-2",
    s: 13
  })), children);
}
function NobleCMS({
  lang,
  data,
  onChange
}) {
  const {
    Button,
    Badge
  } = window.TheNobleDesignSystem_288042;
  const P = window.NoblePhotos;
  const S = window.NobleStore;
  const Ico = ({
    n,
    s = 16
  }) => React.createElement(window.NobleIco, {
    n,
    s
  });
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState("hero");
  const t = (th, en) => lang === "th" ? th : en;
  const edit = fn => {
    const d = S.clone(data);
    fn(d);
    onChange(d);
  };
  const img = (label, value, set) => /*#__PURE__*/React.createElement(CmsImageField, {
    label: label,
    value: value,
    onChange: set,
    P: P,
    lang: lang
  });
  const tabs = [["brand", t("แบรนด์", "Brand"), "badge-check"], ["hero", t("ฮีโร่", "Hero"), "panel-top"], ["services", t("บริการ", "Services"), "layout-grid"], ["stats", t("สถิติ", "Stats"), "bar-chart-3"], ["clients", t("ลูกค้า", "Clients"), "building-2"], ["works", t("ผลงาน", "Works"), "briefcase"], ["showcase", t("ผลงานเด่น", "Showcase"), "image"], ["contact", t("ติดต่อ", "Contact"), "phone"]];
  const sectorOpts = [["gov", t("ภาครัฐ", "Public")], ["private", t("ภาคเอกชน", "Private")], ["partner", t("พันธมิตร", "Partner")]];
  const panel = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: 430,
    maxWidth: "94vw",
    zIndex: 95,
    background: "var(--surface-page)",
    boxShadow: "var(--shadow-xl)",
    display: "flex",
    flexDirection: "column",
    transform: open ? "translateX(0)" : "translateX(105%)",
    transition: "transform var(--duration-slow) var(--ease-out)"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    title: t("เครื่องมือสำหรับแก้ไขตัวอย่าง", "Demo editing tool"),
    style: {
      position: "fixed",
      left: 18,
      bottom: 18,
      zIndex: 96,
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "11px 17px",
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--radius-pill)",
      background: "var(--ink-900)",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 14,
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: open ? "x" : "sliders-horizontal",
    s: 17
  }), t("จัดการเนื้อหา", "Manage content")), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 94,
      background: "rgba(11,18,32,0.35)"
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: panel
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--surface-card)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    dot: true
  }, "CMS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17,
      color: "var(--text-strong)"
    }
  }, t("จัดการเนื้อหาเว็บไซต์", "Website content"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    style: {
      border: "none",
      background: "var(--ink-100)",
      borderRadius: "var(--radius-sm)",
      width: 32,
      height: 32,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "x"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "10px 14px",
      overflowX: "auto",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, tabs.map(([k, label, icon]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "7px 12px",
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 12.5,
      background: tab === k ? "var(--primary)" : "var(--ink-100)",
      color: tab === k ? "#fff" : "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: icon,
    s: 13
  }), label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)",
      marginBottom: 14,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "languages",
    s: 13
  }), " ", t("กำลังแก้ภาษา:", "Editing language:"), " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--primary)",
      textTransform: "uppercase"
    }
  }, lang), " \xB7 ", t("สลับ TH/EN ที่หัวเว็บ", "switch TH/EN in the header")), tab === "brand" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CmsField, {
    label: t("ชื่อแบรนด์", "Brand name"),
    value: data.brand.name,
    onChange: v => edit(d => d.brand.name = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("สโลแกน", "Tagline"),
    value: data.brand.tagline,
    onChange: v => edit(d => d.brand.tagline = v)
  })), tab === "hero" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CmsField, {
    label: t("ป้ายเล็ก (eyebrow)", "Eyebrow"),
    value: data.hero.eyebrow,
    onChange: v => edit(d => d.hero.eyebrow = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("หัวข้อใหญ่ (ขึ้นบรรทัดได้)", "Headline (line breaks ok)"),
    value: data.hero.title[lang],
    onChange: v => edit(d => d.hero.title[lang] = v),
    area: 2
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("คำอธิบาย", "Subtitle"),
    value: data.hero.sub[lang],
    onChange: v => edit(d => d.hero.sub[lang] = v),
    area: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CmsField, {
    label: t("ปุ่มหลัก", "Primary button"),
    value: data.hero.cta1[lang],
    onChange: v => edit(d => d.hero.cta1[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("ปุ่มรอง", "Secondary button"),
    value: data.hero.cta2[lang],
    onChange: v => edit(d => d.hero.cta2[lang] = v)
  })), img(t("ภาพพื้นหลังฮีโร่", "Hero background"), data.hero.image, v => edit(d => d.hero.image = v))), tab === "services" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CmsField, {
    label: t("ป้ายเล็ก", "Eyebrow"),
    value: data.servicesHead.eyebrow[lang],
    onChange: v => edit(d => d.servicesHead.eyebrow[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("หัวข้อ", "Title"),
    value: data.servicesHead.title[lang],
    onChange: v => edit(d => d.servicesHead.title[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("คำโปรย", "Subtitle"),
    value: data.servicesHead.sub[lang],
    onChange: v => edit(d => d.servicesHead.sub[lang] = v),
    area: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cmsLabel,
      marginTop: 8
    }
  }, t("รายการบริการ", "Service items")), data.services.map((s, i) => /*#__PURE__*/React.createElement(CmsCard, {
    key: i,
    onRemove: data.services.length > 1 ? () => edit(d => d.services.splice(i, 1)) : null,
    removeLabel: t("ลบ", "Remove")
  }, /*#__PURE__*/React.createElement(CmsField, {
    label: t("ชื่อบริการ", "Title"),
    value: s.title[lang],
    onChange: v => edit(d => d.services[i].title[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("คำอธิบาย", "Description"),
    value: s.desc[lang],
    onChange: v => edit(d => d.services[i].desc[lang] = v),
    area: 2
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("ไอคอน (ชื่อ Lucide)", "Icon (Lucide name)"),
    value: s.icon,
    onChange: v => edit(d => d.services[i].icon = v),
    mono: true
  }), img(t("รูปการ์ด", "Card image"), s.image, v => edit(d => d.services[i].image = v)))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    fullWidth: true,
    leftIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "plus",
      s: 15
    }),
    onClick: () => edit(d => d.services.push({
      icon: "box",
      title: {
        th: "บริการใหม่",
        en: "New service"
      },
      desc: {
        th: "รายละเอียดบริการ",
        en: "Service description"
      },
      image: P.url("circuit", 800)
    }))
  }, t("เพิ่มบริการ", "Add service"))), tab === "stats" && /*#__PURE__*/React.createElement(React.Fragment, null, data.stats.map((s, i) => /*#__PURE__*/React.createElement(CmsCard, {
    key: i,
    onRemove: () => edit(d => d.stats.splice(i, 1)),
    removeLabel: t("ลบ", "Remove")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.8fr 1.2fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CmsField, {
    label: t("ตัวเลข", "Value"),
    value: s.value,
    onChange: v => edit(d => d.stats[i].value = v),
    mono: true
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("ป้ายกำกับ", "Label"),
    value: s.label[lang],
    onChange: v => edit(d => d.stats[i].label[lang] = v)
  })))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    fullWidth: true,
    leftIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "plus",
      s: 15
    }),
    onClick: () => edit(d => d.stats.push({
      value: "0",
      label: {
        th: "ป้ายใหม่",
        en: "New stat"
      }
    }))
  }, t("เพิ่มสถิติ", "Add stat"))), tab === "clients" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CmsField, {
    label: t("ป้ายเล็ก", "Eyebrow"),
    value: data.clients.eyebrow[lang],
    onChange: v => edit(d => d.clients.eyebrow[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("หัวข้อ", "Title"),
    value: data.clients.title[lang],
    onChange: v => edit(d => d.clients.title[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("คำโปรย", "Subtitle"),
    value: data.clients.sub[lang],
    onChange: v => edit(d => d.clients.sub[lang] = v),
    area: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cmsLabel,
      marginTop: 8
    }
  }, t("รายชื่อลูกค้า / พันธมิตร", "Clients & partners")), data.clients.items.map((c, i) => /*#__PURE__*/React.createElement(CmsCard, {
    key: i,
    onRemove: () => edit(d => d.clients.items.splice(i, 1)),
    removeLabel: t("ลบ", "Remove")
  }, /*#__PURE__*/React.createElement(CmsField, {
    label: t("ชื่อ", "Name"),
    value: c.name,
    onChange: v => edit(d => d.clients.items[i].name = v)
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: cmsLabel
  }, t("ประเภท", "Group")), /*#__PURE__*/React.createElement("select", {
    value: c.sector,
    onChange: e => edit(d => d.clients.items[i].sector = e.target.value),
    style: cmsBox
  }, sectorOpts.map(([v, l]) => /*#__PURE__*/React.createElement("option", {
    key: v,
    value: v
  }, l)))), img(t("โลโก้ (ไม่ใส่ก็ได้)", "Logo (optional)"), c.logo, v => edit(d => d.clients.items[i].logo = v)))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    fullWidth: true,
    leftIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "plus",
      s: 15
    }),
    onClick: () => edit(d => d.clients.items.push({
      name: t("ลูกค้าใหม่", "New client"),
      sector: "private",
      logo: ""
    }))
  }, t("เพิ่มลูกค้า", "Add client"))), tab === "works" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CmsField, {
    label: t("ป้ายเล็ก", "Eyebrow"),
    value: data.clients.worksHead.eyebrow[lang],
    onChange: v => edit(d => d.clients.worksHead.eyebrow[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("หัวข้อ", "Title"),
    value: data.clients.worksHead.title[lang],
    onChange: v => edit(d => d.clients.worksHead.title[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("คำโปรย", "Subtitle"),
    value: data.clients.worksHead.sub[lang],
    onChange: v => edit(d => d.clients.worksHead.sub[lang] = v),
    area: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cmsLabel,
      marginTop: 8
    }
  }, t("รายการผลงาน", "Project items")), data.clients.works.map((w, i) => /*#__PURE__*/React.createElement(CmsCard, {
    key: i,
    onRemove: () => edit(d => d.clients.works.splice(i, 1)),
    removeLabel: t("ลบ", "Remove")
  }, /*#__PURE__*/React.createElement(CmsField, {
    label: t("ชื่อโครงการ", "Title"),
    value: w.title[lang],
    onChange: v => edit(d => d.clients.works[i].title[lang] = v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CmsField, {
    label: t("หมวด/บริการ", "Category"),
    value: w.category[lang],
    onChange: v => edit(d => d.clients.works[i].category[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("สถานที่", "Location"),
    value: w.location[lang],
    onChange: v => edit(d => d.clients.works[i].location[lang] = v)
  })), img(t("รูปโครงการ", "Project image"), w.image, v => edit(d => d.clients.works[i].image = v)))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    fullWidth: true,
    leftIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "plus",
      s: 15
    }),
    onClick: () => edit(d => d.clients.works.push({
      title: {
        th: "โครงการใหม่",
        en: "New project"
      },
      category: {
        th: "บริการ",
        en: "Service"
      },
      location: {
        th: "สถานที่",
        en: "Location"
      },
      image: P.url("rackAisle", 800)
    }))
  }, t("เพิ่มผลงาน", "Add project"))), tab === "showcase" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CmsField, {
    label: t("ป้ายเล็ก", "Eyebrow"),
    value: data.showcase.eyebrow[lang],
    onChange: v => edit(d => d.showcase.eyebrow[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("หัวข้อ", "Title"),
    value: data.showcase.title[lang],
    onChange: v => edit(d => d.showcase.title[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("คำอธิบาย", "Description"),
    value: data.showcase.desc[lang],
    onChange: v => edit(d => d.showcase.desc[lang] = v),
    area: true
  }), img(t("รูปหลัก", "Main image"), data.showcase.image1, v => edit(d => d.showcase.image1 = v)), img(t("รูปมุม", "Inset image"), data.showcase.image2, v => edit(d => d.showcase.image2 = v))), tab === "contact" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CmsField, {
    label: t("ป้ายเล็ก", "Eyebrow"),
    value: data.contact.eyebrow[lang],
    onChange: v => edit(d => d.contact.eyebrow[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("หัวข้อ", "Title"),
    value: data.contact.title[lang],
    onChange: v => edit(d => d.contact.title[lang] = v)
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("ที่อยู่", "Address"),
    value: data.contact.addr,
    onChange: v => edit(d => d.contact.addr = v),
    area: 2
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: t("โทรศัพท์", "Phone"),
    value: data.contact.phone,
    onChange: v => edit(d => d.contact.phone = v),
    mono: true
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: "Email",
    value: data.contact.email,
    onChange: v => edit(d => d.contact.email = v),
    mono: true
  }), /*#__PURE__*/React.createElement(CmsField, {
    label: "LINE",
    value: data.contact.line,
    onChange: v => edit(d => d.contact.line = v),
    mono: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 18px",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-card)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--success-600)",
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "check-circle-2",
    s: 13
  }), t("บันทึกอัตโนมัติ", "Saved automatically")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    leftIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "rotate-ccw",
      s: 14
    }),
    onClick: () => {
      if (confirm(t("รีเซ็ตเนื้อหาทั้งหมดเป็นค่าเริ่มต้น?", "Reset all content to defaults?"))) {
        S.reset();
        onChange(S.defaults());
      }
    }
  }, t("รีเซ็ตทั้งหมด", "Reset all")))));
}
window.NobleCMS = NobleCMS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CMS.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Clients.jsx
try { (() => {
// The Noble — Clients & Works (ผลงาน / ลูกค้าอ้างอิง) + closing CTA band.
function NobleClients({
  lang,
  go,
  data
}) {
  const {
    SectionHeading,
    Button,
    Badge
  } = window.TheNobleDesignSystem_288042;
  const C = window.NobleContent;
  const CL = data.clients;
  const Ico = ({
    n,
    s = 18
  }) => React.createElement(window.NobleIco, {
    n,
    s
  });
  const wrap = {
    maxWidth: "var(--container-wide)",
    margin: "0 auto",
    padding: "0 var(--container-pad)"
  };
  const groups = [{
    key: "gov",
    label: {
      th: "ภาครัฐ",
      en: "Public sector"
    }
  }, {
    key: "private",
    label: {
      th: "ภาคเอกชน",
      en: "Private sector"
    }
  }, {
    key: "partner",
    label: {
      th: "พันธมิตรเทคโนโลยี",
      en: "Technology partners"
    }
  }];
  const initials = n => n.replace(/[^A-Za-zก-ฮ0-9 ]/g, "").trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase() || "•";
  const ProjectCard = ({
    w
  }) => {
    const [hov, setHov] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setHov(true),
      onMouseLeave: () => setHov(false),
      style: {
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: hov ? "var(--shadow-lg)" : "var(--shadow-sm), var(--ring-hairline)",
        transform: hov ? "translateY(-3px)" : "none",
        transition: "all var(--duration-base) var(--ease-out)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: "16 / 10",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: w.image,
      alt: "",
      loading: "lazy",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        transform: hov ? "scale(1.06)" : "scale(1)",
        transition: "transform var(--duration-slow) var(--ease-out)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(11,18,32,0) 45%, rgba(11,18,32,0.5) 100%)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 12,
        left: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      variant: "solid",
      size: "sm"
    }, w.category[lang]))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 18px 18px"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "0 0 6px",
        fontFamily: "var(--font-display)",
        fontSize: 17,
        fontWeight: 600,
        color: "var(--text-strong)",
        letterSpacing: "var(--tracking-tight)"
      }
    }, w.title[lang]), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Ico, {
      n: "map-pin",
      s: 14
    }), w.location[lang])));
  };
  const Tile = ({
    c
  }) => {
    const [hov, setHov] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setHov(true),
      onMouseLeave: () => setHov(false),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        minWidth: 150,
        height: 80,
        padding: "0 22px",
        background: "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        boxShadow: hov ? "var(--shadow-md)" : "var(--shadow-sm), var(--ring-hairline)",
        transform: hov ? "translateY(-2px)" : "none",
        transition: "all var(--duration-base) var(--ease-out)"
      }
    }, c.logo ? /*#__PURE__*/React.createElement("img", {
      src: c.logo,
      alt: c.name,
      style: {
        maxHeight: 44,
        maxWidth: 130,
        objectFit: "contain",
        filter: hov ? "none" : "grayscale(1)",
        opacity: hov ? 1 : 0.85,
        transition: "all var(--duration-base) var(--ease-out)"
      }
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        flex: "none",
        borderRadius: "var(--radius-sm)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: hov ? "var(--gradient-brand)" : "var(--ink-100)",
        color: hov ? "#fff" : "var(--ink-500)",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 14,
        transition: "all var(--duration-base) var(--ease-out)"
      }
    }, initials(c.name)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 15,
        color: "var(--text-strong)",
        whiteSpace: "nowrap"
      }
    }, c.name)));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    style: {
      background: "var(--surface-page)",
      padding: "var(--section-gap) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: CL.worksHead.eyebrow[lang],
    title: CL.worksHead.title[lang],
    description: CL.worksHead.sub[lang]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 48
    }
  }, CL.works.map((w, i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: i,
    w: w
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--section-gap)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: CL.eyebrow[lang],
    title: CL.title[lang],
    description: CL.sub[lang]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 34,
      marginTop: 48
    }
  }, groups.map(g => {
    const items = CL.items.filter(c => c.sector === g.key);
    if (!items.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: g.key
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-eyebrow)",
        fontSize: "var(--text-2xs)",
        fontWeight: 600,
        color: "var(--text-muted)"
      }
    }, g.label[lang]), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-default)"
      }
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      size: "sm"
    }, items.length)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 14
      }
    }, items.map((c, i) => /*#__PURE__*/React.createElement(Tile, {
      key: i,
      c: c
    }))));
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      marginTop: 36,
      fontSize: "var(--text-sm)",
      color: "var(--text-faint)"
    }
  }, lang === "th" ? "โลโก้และชื่อเป็นเพียงตัวอย่าง — เพิ่ม/แก้ลูกค้าจริงได้ที่ปุ่ม \u201cจัดการเนื้อหา\u201d" : "Names & logos are placeholders — add your real clients via \u201cManage content\u201d."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--section-gap) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-2xl)",
      background: "var(--gradient-brand)",
      padding: "clamp(2.5rem,5vw,4rem)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      flexWrap: "wrap",
      boxShadow: "var(--shadow-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      maskImage: "radial-gradient(70% 100% at 100% 50%, #000, transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 12px",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-lg)",
      fontWeight: 700,
      lineHeight: 1.15,
      color: "#fff",
      letterSpacing: "-0.02em"
    }
  }, C.ctaSection.title[lang]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-lg)",
      color: "var(--blue-100)",
      lineHeight: 1.6
    }
  }, C.ctaSection.sub[lang])), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("contact"),
    style: {
      background: "#fff",
      color: "var(--primary)",
      boxShadow: "var(--shadow-lg)"
    },
    rightIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "arrow-right",
      s: 18
    })
  }, lang === "th" ? "ติดต่อเราวันนี้" : "Contact us today"))))));
}
window.NobleClients = NobleClients;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Clients.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
// The Noble — Contact section with working (fake) form + Footer
function NobleContact({
  lang,
  data
}) {
  const {
    SectionHeading,
    Input,
    Button,
    Badge
  } = window.TheNobleDesignSystem_288042;
  const CT = data.contact;
  const Ico = ({
    n,
    s = 18
  }) => React.createElement(window.NobleIco, {
    n,
    s
  });
  const [sent, setSent] = React.useState(false);
  const t = (th, en) => lang === "th" ? th : en;
  const info = [{
    n: "map-pin",
    k: t("ที่อยู่", "Address"),
    v: CT.addr
  }, {
    n: "phone",
    k: t("โทรศัพท์", "Phone"),
    v: CT.phone
  }, {
    n: "mail",
    k: "Email",
    v: CT.email
  }, {
    n: "message-circle",
    k: "LINE",
    v: CT.line
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: "var(--surface-card)",
      padding: "var(--section-gap) 0",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--container-pad)",
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: CT.eyebrow[lang],
    title: CT.title[lang],
    description: t("ปรึกษาทีมงานได้ฟรี เราจะติดต่อกลับภายใน 24 ชั่วโมง", "Free consultation — we reply within 24 hours.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      marginTop: 32
    }
  }, info.map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      flex: "none",
      borderRadius: "var(--radius-md)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--blue-50)",
      color: "var(--primary)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: x.n
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--text-faint)",
      marginBottom: 3
    }
  }, x.k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--text-strong)",
      fontWeight: 500,
      lineHeight: 1.45
    }
  }, x.v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      borderRadius: "var(--radius-xl)",
      padding: "clamp(1.5rem,3vw,2.5rem)",
      boxShadow: "var(--shadow-sm), var(--ring-hairline)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      margin: "0 auto 18px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--success-100)",
      color: "var(--success-600)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "check",
    s: 30
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontFamily: "var(--font-display)",
      fontSize: 22,
      color: "var(--text-strong)"
    }
  }, t("ส่งข้อมูลเรียบร้อย", "Message sent")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 20px",
      color: "var(--text-muted)"
    }
  }, t("ทีมงานจะติดต่อกลับโดยเร็วที่สุด", "Our team will be in touch shortly.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, t("ส่งอีกครั้ง", "Send another"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    dot: true
  }, t("ขอใบเสนอราคา", "Request a quote")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: t("ชื่อ-นามสกุล", "Full name"),
    placeholder: t("ชื่อของคุณ", "Your name"),
    leftIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "user",
      s: 16
    }),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: t("บริษัท", "Company"),
    placeholder: t("ชื่อบริษัท", "Company name"),
    leftIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "building-2",
      s: 16
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    leftIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "mail",
      s: 16
    }),
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: t("เบอร์โทร", "Phone"),
    placeholder: "08x xxx xxxx",
    leftIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "phone",
      s: 16
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, t("บริการที่สนใจ", "Service of interest")), /*#__PURE__*/React.createElement("select", {
    style: {
      height: "var(--control-h-md)",
      padding: "0 14px",
      borderRadius: "var(--radius-sm)",
      border: "1.5px solid var(--border-default)",
      background: "#fff",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--text-strong)"
    }
  }, data.services.map((s, i) => /*#__PURE__*/React.createElement("option", {
    key: i
  }, s.title[lang])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, t("รายละเอียด", "Message")), /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    placeholder: t("เล่าเกี่ยวกับโครงการของคุณ...", "Tell us about your project..."),
    style: {
      padding: "12px 14px",
      borderRadius: "var(--radius-sm)",
      border: "1.5px solid var(--border-default)",
      background: "#fff",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--text-strong)",
      resize: "vertical"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    rightIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "send",
      s: 16
    })
  }, t("ส่งคำขอ", "Send request"))))));
}
function NobleFooter({
  lang,
  data
}) {
  const C = window.NobleContent;
  const t = (th, en) => lang === "th" ? th : en;
  const cols = [{
    h: t("บริการ", "Services"),
    items: data.services.map(s => s.title[lang])
  }, {
    h: t("บริษัท", "Company"),
    items: C.nav[lang]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink-900)",
      color: "var(--ink-300)",
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "0 var(--container-pad)",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 40,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-noble-mark.png",
    alt: "The Noble",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: "0.06em",
      color: "#fff"
    }
  }, data.brand.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 18px",
      fontSize: 14,
      lineHeight: 1.65,
      maxWidth: 320
    }
  }, t("ผู้ให้บริการระบบไอทีครบวงจร (System Integration) ตั้งแต่วางระบบไปจนถึงดูแลบำรุงรักษา", "Full-service IT System Integration — from rollout to continuous maintenance.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("div", null, data.contact.phone), /*#__PURE__*/React.createElement("div", null, data.contact.email))), cols.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 14,
      color: "#fff",
      marginBottom: 14,
      textTransform: "uppercase",
      letterSpacing: "0.06em"
    }
  }, col.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, col.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      fontSize: 14,
      cursor: "pointer"
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "20px var(--container-pad)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 8,
      fontSize: 12.5,
      color: "var(--ink-400)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E40\u0E14\u0E2D\u0E30 \u0E42\u0E19\u0E40\u0E1A\u0E34\u0E25 \u0E08\u0E33\u0E01\u0E31\u0E14 \xB7 The Noble Co., Ltd."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, data.brand.tagline))));
}
window.NobleContact = NobleContact;
window.NobleFooter = NobleFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// The Noble — site Header (glass, sticky) with dropdown submenus + LINE button
function NobleHeader({
  lang,
  setLang,
  go,
  data
}) {
  const {
    Button
  } = window.TheNobleDesignSystem_288042;
  const C = window.NobleContent;
  const Ico = ({
    n,
    s = 14
  }) => React.createElement(window.NobleIco, {
    n,
    s
  });
  const [scrolled, setScrolled] = React.useState(false);
  const [openIdx, setOpenIdx] = React.useState(null);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const t = (th, en) => lang === "th" ? th : en;
  // menu, with sub-items driven by live data
  const menu = [{
    label: t("หน้าแรก", "Home"),
    go: "home"
  }, {
    label: t("บริการของเรา", "Services"),
    go: "services",
    sub: data.services.map(s => ({
      label: s.title[lang],
      go: "services"
    }))
  }, {
    label: t("ผลงานและลูกค้า", "Work & Clients"),
    go: "portfolio",
    sub: [{
      label: t("ผลงานที่ผ่านมา", "Recent work"),
      go: "portfolio"
    }, ...data.clients.works.slice(0, 6).map(w => ({
      label: w.title[lang],
      go: "portfolio",
      dim: true
    })), {
      label: t("ลูกค้าอ้างอิง", "Trusted by"),
      go: "portfolio"
    }]
  }, {
    label: t("เกี่ยวกับเรา", "About"),
    go: "about"
  }, {
    label: t("ติดต่อเรา", "Contact"),
    go: "contact"
  }];
  const navItem = {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "8px 13px",
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    fontSize: 15,
    color: "var(--text-body)",
    cursor: "pointer",
    borderRadius: "var(--radius-sm)",
    whiteSpace: "nowrap",
    transition: "color var(--duration-fast), background var(--duration-fast)"
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
      backdropFilter: "var(--blur-glass)",
      WebkitBackdropFilter: "var(--blur-glass)",
      borderBottom: `1px solid ${scrolled ? "var(--border-subtle)" : "transparent"}`,
      transition: "all var(--duration-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "0 var(--container-pad)",
      height: 72,
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-noble-mark.png",
    alt: "The Noble",
    style: {
      height: 38
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 19,
      letterSpacing: "0.06em",
      color: "var(--primary)"
    }
  }, data.brand.name)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 2,
      marginLeft: 12,
      flex: 1
    }
  }, menu.map((m, i) => {
    const active = openIdx === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "relative"
      },
      onMouseEnter: () => setOpenIdx(m.sub ? i : null),
      onMouseLeave: () => setOpenIdx(null)
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => go(m.go),
      style: {
        ...navItem,
        color: active ? "var(--primary)" : "var(--text-body)",
        background: active ? "var(--blue-50)" : "transparent"
      }
    }, m.label, m.sub && /*#__PURE__*/React.createElement(Ico, {
      n: "chevron-down",
      s: 14
    })), m.sub && active && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "100%",
        left: 0,
        paddingTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 244,
        background: "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-lg)",
        border: "1px solid var(--border-subtle)",
        padding: 8,
        display: "flex",
        flexDirection: "column",
        gap: 1
      }
    }, m.sub.map((s, j) => /*#__PURE__*/React.createElement("a", {
      key: j,
      onClick: () => {
        go(s.go);
        setOpenIdx(null);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "9px 12px",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: s.dim ? 400 : 500,
        color: s.dim ? "var(--text-muted)" : "var(--text-strong)"
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = "var(--blue-50)";
        e.currentTarget.style.color = "var(--primary)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = s.dim ? "var(--text-muted)" : "var(--text-strong)";
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "var(--accent)",
        flex: "none",
        opacity: s.dim ? 0.45 : 1
      }
    }), s.label)))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 600,
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, ["th", "en"].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      padding: "5px 11px",
      border: "none",
      cursor: "pointer",
      textTransform: "uppercase",
      background: lang === l ? "var(--primary)" : "transparent",
      color: lang === l ? "#fff" : "var(--text-muted)"
    }
  }, l))), /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-muted)",
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, C.login[lang]), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: () => go("contact")
  }, C.quote[lang])))), /*#__PURE__*/React.createElement("a", {
    href: "https://line.me/ti/p/@thenoble",
    target: "_blank",
    rel: "noopener",
    title: t("สอบถามทาง LINE @thenoble", "Chat on LINE @thenoble"),
    style: {
      position: "fixed",
      right: 22,
      bottom: 22,
      zIndex: 93,
      width: 60,
      height: 60,
      borderRadius: "50%",
      background: "#06C755",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 10px 26px rgba(6,199,85,0.45)",
      textDecoration: "none",
      color: "#fff",
      transition: "transform var(--duration-base) var(--ease-out)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "none";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "0.02em",
      lineHeight: 1
    }
  }, "LINE")));
}
window.NobleHeader = NobleHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// The Noble — Hero with glow + dashboard mock
function NobleHero({
  lang,
  go,
  data
}) {
  const {
    Button,
    StatBlock
  } = window.TheNobleDesignSystem_288042;
  const H = data.hero;
  const Ico = ({
    n,
    s = 18
  }) => React.createElement(window.NobleIco, {
    n,
    s
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--ink-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url(${H.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0.18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(11,18,32,0.6) 0%, rgba(11,18,32,0.82) 60%, var(--ink-900) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(70% 90% at 70% -10%, rgba(26,114,214,0.35) 0%, rgba(26,114,214,0) 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      backgroundSize: "44px 44px",
      maskImage: "radial-gradient(80% 80% at 50% 0%, #000 30%, transparent 75%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "clamp(3.5rem,7vw,6rem) var(--container-pad)",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 14px 6px 8px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.12)",
      color: "#fff",
      fontSize: 13,
      fontWeight: 500,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "2px 9px",
      borderRadius: "var(--radius-pill)",
      background: "var(--gradient-signal)",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.04em"
    }
  }, "NEW"), H.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 20px",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--text-display-xl)",
      lineHeight: 1.08,
      letterSpacing: "-0.02em",
      color: "#fff",
      whiteSpace: "pre-line"
    }
  }, H.title[lang]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 30px",
      fontSize: "var(--text-lg)",
      lineHeight: 1.65,
      color: "var(--ink-300)",
      maxWidth: 540
    }
  }, H.sub[lang]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    rightIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "arrow-right"
    }),
    onClick: () => go("services")
  }, H.cta1[lang]), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    leftIcon: /*#__PURE__*/React.createElement(Ico, {
      n: "phone"
    }),
    onClick: () => go("contact"),
    style: {
      background: "rgba(255,255,255,0.06)",
      color: "#fff",
      borderColor: "rgba(255,255,255,0.22)"
    }
  }, H.cta2[lang])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 36,
      marginTop: 40,
      flexWrap: "wrap"
    }
  }, data.stats.slice(0, 3).map((s, i) => /*#__PURE__*/React.createElement(StatBlock, {
    key: i,
    value: s.value,
    label: s.label[lang],
    tone: "light"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "var(--radius-xl)",
      padding: 18,
      boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
      backdropFilter: "blur(6px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "#fff",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--success-600)",
      boxShadow: "0 0 8px var(--success-600)"
    }
  }), "noble-noc \xB7 live"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.2)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, [{
    n: "server",
    k: "Servers",
    v: "42 / 42",
    t: "var(--success-600)",
    s: "all healthy"
  }, {
    n: "network",
    k: "Network",
    v: "1.2 Gbps",
    t: "var(--blue-400)",
    s: "throughput"
  }, {
    n: "cctv",
    k: "CCTV",
    v: "128 cams",
    t: "var(--success-600)",
    s: "recording"
  }, {
    n: "shield-check",
    k: "MA tickets",
    v: "3 open",
    t: "var(--warning-600)",
    s: "< 4h SLA"
  }].map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "var(--radius-md)",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "var(--ink-300)",
      fontSize: 12,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: m.n,
    s: 14
  }), m.k), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: m.t
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 20,
      fontWeight: 600,
      color: "#fff"
    }
  }, m.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-400)"
    }
  }, m.s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "var(--radius-md)",
      padding: "12px 14px",
      display: "flex",
      alignItems: "flex-end",
      gap: 5,
      height: 64
    }
  }, [40, 55, 48, 62, 58, 72, 66, 80, 75, 88, 82, 95, 90, 70, 84].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: h + "%",
      borderRadius: 2,
      background: "linear-gradient(var(--blue-400), var(--blue-700))"
    }
  })))))));
}
window.NobleHero = NobleHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
// The Noble — Services grid + Showcase + Why-us + CTA band
function NobleSections({
  lang,
  go,
  data
}) {
  const {
    SectionHeading,
    ServiceCard,
    StatBlock,
    Button
  } = window.TheNobleDesignSystem_288042;
  const C = window.NobleContent; // why-us copy (not CMS-managed)
  const Ico = ({
    n,
    s = 24
  }) => React.createElement(window.NobleIco, {
    n,
    s
  });
  const wrap = {
    maxWidth: "var(--container-wide)",
    margin: "0 auto",
    padding: "0 var(--container-pad)"
  };
  const SH = data.servicesHead,
    SC = data.showcase;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-page)",
      padding: "var(--section-gap) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: SH.eyebrow[lang],
    title: SH.title[lang],
    description: SH.sub[lang]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 48
    }
  }, data.services.map((s, i) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: i,
    icon: /*#__PURE__*/React.createElement(Ico, {
      n: s.icon
    }),
    image: s.image,
    title: s.title[lang],
    description: s.desc[lang],
    cta: lang === "th" ? "ดูรายละเอียด" : "Learn more"
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-card)",
      padding: "var(--section-gap) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)",
      aspectRatio: "4 / 3"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SC.image1,
    alt: "The Noble engineers on site",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -18,
      bottom: -18,
      width: 150,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      border: "5px solid var(--surface-card)",
      boxShadow: "var(--shadow-lg)",
      aspectRatio: "1 / 1"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SC.image2,
    alt: "Data center aisle",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: SC.eyebrow[lang],
    title: SC.title[lang],
    description: SC.desc[lang]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      marginTop: 32
    }
  }, data.stats.map((s, i) => /*#__PURE__*/React.createElement(StatBlock, {
    key: i,
    value: s.value,
    label: s.label[lang]
  })))))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--ink-900)",
      padding: "var(--section-gap) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(60% 70% at 15% 0%, rgba(26,114,214,0.28) 0%, rgba(26,114,214,0) 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: C.whyHead.eyebrow[lang],
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fff"
      }
    }, C.whyHead.title[lang])
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 18,
      marginTop: 48
    }
  }, C.why.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "var(--radius-lg)",
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      background: "var(--gradient-brand)",
      marginBottom: 18,
      boxShadow: "var(--shadow-glow-blue)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    n: w.icon,
    s: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: 600,
      color: "#fff"
    }
  }, w.title[lang]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--ink-300)"
    }
  }, w.desc[lang])))))));
}
window.NobleSections = NobleSections;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.js
try { (() => {
// The Noble — website copy (bilingual). Light EN/TH toggle for the kit.
window.NobleContent = {
  nav: {
    th: ["หน้าแรก", "เกี่ยวกับเรา", "บริการ", "ผลงาน", "ติดต่อเรา"],
    en: ["Home", "About", "Services", "Portfolio", "Contact"]
  },
  quote: {
    th: "ขอใบเสนอราคา",
    en: "Get a quote"
  },
  login: {
    th: "เข้าระบบลูกค้า",
    en: "Client login"
  },
  hero: {
    eyebrow: "Glow together",
    title: {
      th: "ออกแบบและดูแลระบบไอที\nครบวงจรสำหรับธุรกิจของคุณ",
      en: "We design and run your\nentire IT, end to end"
    },
    sub: {
      th: "The Noble คือผู้เชี่ยวชาญด้าน System Integration ตั้งแต่วางระบบคอมพิวเตอร์ เครือข่าย กล้องวงจรปิด ระบบควบคุมการเข้าออก ไปจนถึงการดูแลบำรุงรักษาอย่างต่อเนื่อง",
      en: "The Noble is a full-service System Integration partner — from computers, networks and CCTV to access control and continuous maintenance."
    },
    cta1: {
      th: "ดูบริการของเรา",
      en: "Explore services"
    },
    cta2: {
      th: "ติดต่อเรา",
      en: "Talk to us"
    }
  },
  stats: [{
    value: "13+",
    label: {
      th: "ปีของประสบการณ์",
      en: "Years of experience"
    }
  }, {
    value: "99.9%",
    label: {
      th: "ความเสถียรของระบบ",
      en: "Uptime SLA"
    }
  }, {
    value: "24/7",
    label: {
      th: "On-site + Remote",
      en: "On-site + Remote"
    }
  }, {
    value: "40–60%",
    label: {
      th: "ประหยัดกว่าจ้างเอง",
      en: "Cost saving vs in-house"
    }
  }],
  servicesHead: {
    eyebrow: {
      th: "บริการของเรา",
      en: "Our services"
    },
    title: {
      th: "โซลูชันครบวงจรภายใต้ผู้ให้บริการรายเดียว",
      en: "Full-stack solutions, one accountable partner"
    },
    sub: {
      th: "ตั้งแต่ออกแบบ ติดตั้ง ไปจนถึงดูแลบำรุงรักษา โดยทีมวิศวกรมืออาชีพ",
      en: "From design and install to ongoing care — by professional engineers."
    }
  },
  services: [{
    icon: "server",
    title: {
      th: "Computer & Server",
      en: "Computer & Server"
    },
    desc: {
      th: "วางระบบคอมพิวเตอร์ เซิร์ฟเวอร์ NAS สำหรับองค์กร ติดตั้งพร้อมใช้งาน รับประกันคุณภาพ",
      en: "Workstations, servers and NAS for organisations — installed, warrantied, ready to run."
    }
  }, {
    icon: "network",
    title: {
      th: "Network Solution",
      en: "Network Solution"
    },
    desc: {
      th: "ออกแบบและติดตั้งระบบเครือข่าย LAN Wi-Fi Fiber Optic อุปกรณ์ Cisco Ubiquiti HP",
      en: "LAN, Wi-Fi and fiber design and install on Cisco, Ubiquiti and HP."
    }
  }, {
    icon: "cctv",
    title: {
      th: "CCTV System",
      en: "CCTV System"
    },
    desc: {
      th: "กล้องวงจรปิดครบวงจร IP Camera Analog HD NVR DVR พร้อมดูแลต่อเนื่อง",
      en: "End-to-end CCTV — IP, Analog HD, NVR and DVR with ongoing care."
    }
  }, {
    icon: "scan-face",
    title: {
      th: "Access Control",
      en: "Access Control"
    },
    desc: {
      th: "ควบคุมการเข้า-ออก บัตรผ่าน ลายนิ้วมือ สแกนใบหน้า บันทึกเวลาทำงานอัตโนมัติ",
      en: "Card, fingerprint and face entry with automatic time logging."
    }
  }, {
    icon: "shield-check",
    title: {
      th: "System Maintenance (MA)",
      en: "System Maintenance (MA)"
    },
    desc: {
      th: "สัญญาดูแลระบบ รายเดือน/รายปี ครอบคลุมเซิร์ฟเวอร์ เครือข่าย CCTV On-site + Remote",
      en: "Monthly/annual MA across servers, network and CCTV — on-site + remote."
    }
  }, {
    icon: "headset",
    title: {
      th: "IT Support ประจำ Site",
      en: "On-site IT Support"
    },
    desc: {
      th: "พนักงาน IT มืออาชีพประจำสำนักงาน มีทีมสำรอง ประหยัดกว่าจ้างเอง 40-60%",
      en: "Professional IT staff on your site, with backup cover — 40-60% cheaper than hiring."
    }
  }],
  whyHead: {
    eyebrow: {
      th: "ทำไมต้อง The Noble",
      en: "Why The Noble"
    },
    title: {
      th: "พันธมิตรไอทีที่ธุรกิจวางใจ",
      en: "An IT partner businesses rely on"
    }
  },
  why: [{
    icon: "users",
    title: {
      th: "ทีมงานมืออาชีพ",
      en: "Professional team"
    },
    desc: {
      th: "วิศวกรและช่างเทคนิคที่มีประสบการณ์ พร้อมแก้ปัญหาอย่างตรงจุด",
      en: "Experienced engineers and technicians who solve problems precisely."
    }
  }, {
    icon: "layers",
    title: {
      th: "บริการครบวงจร",
      en: "End-to-end service"
    },
    desc: {
      th: "ตั้งแต่ระบบคอมพิวเตอร์ เครือข่าย ไปจนถึงระบบรักษาความปลอดภัย จบในที่เดียว",
      en: "From computers and networks to security — all under one roof."
    }
  }, {
    icon: "heart-pulse",
    title: {
      th: "ดูแลต่อเนื่อง",
      en: "Continuous care"
    },
    desc: {
      th: "บำรุงรักษาแบบเป็นระบบ ตรวจเช็กและป้องกันปัญหาก่อนเกิด",
      en: "Systematic maintenance that prevents problems before they happen."
    }
  }, {
    icon: "zap",
    title: {
      th: "ตอบสนองรวดเร็ว",
      en: "Fast response"
    },
    desc: {
      th: "รองรับทั้ง On Call, On Site และ Remote Support ลดเวลาที่ระบบหยุดทำงาน",
      en: "On-call, on-site and remote support to cut downtime."
    }
  }],
  ctaSection: {
    title: {
      th: "พร้อมยกระดับระบบไอทีขององค์กรคุณแล้วหรือยัง?",
      en: "Ready to level up your organisation's IT?"
    },
    sub: {
      th: "ปรึกษาทีมงานของเราได้ฟรี เราพร้อมออกแบบโซลูชันที่เหมาะกับธุรกิจของคุณ",
      en: "Talk to our team for free — we'll design a solution that fits your business."
    }
  },
  contact: {
    eyebrow: {
      th: "ติดต่อเรา",
      en: "Contact"
    },
    title: {
      th: "ปรึกษาทีมงานของเรา",
      en: "Talk to our team"
    },
    addr: "632 ซ.จรัญสนิทวงศ์ 69 แขวงบางพลัด เขตบางพลัด กรุงเทพฯ 10700",
    phone: "099 461 9961",
    email: "thenoble2013@thenoble.co.th",
    line: "@thenoble"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.js", error: String((e && e.message) || e) }); }

// ui_kits/website/photos.js
try { (() => {
// The Noble — curated free imagery (Unsplash, verified loading).
// Commercial-use, no attribution required. Cool corporate-tech vibe.
// Swap an ID here to change a photo everywhere it's used.
(function () {
  const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
  const ID = {
    serverRacks: "1558494949-ef010cbdcc31",
    // dark server racks, cabling
    blueCables: "1544197150-b99a580bb7a8",
    // blue ethernet patch cables
    redCables: "1606765962248-7ff407b51667",
    // rows of red network cables
    netBurst: "1597733336794-12d05021d510",
    // blue data / fibre glow
    circuit: "1591405351990-4726e331f141",
    // hardware macro
    cameraWall: "1557597774-9d273605dfa9",
    // wall of CCTV cameras
    accessCard: "1563013544-824ae1b704d3",
    // hand / card / laptop
    engineers: "1573164713988-8665fc963095",
    // people in a data center
    team: "1522071820081-009f0129c71c",
    // team at laptops
    rackAisle: "1450101499163-c8848c66ca85",
    // data-center aisle
    circuitBoard: "1518770660439-4636190af475" // circuit board macro
  };
  window.NoblePhotos = {
    u,
    ID,
    url: (key, w) => u(ID[key], w),
    // per-service thumbnails, index-aligned with NobleContent.services
    serviceKeys: ["serverRacks", "blueCables", "cameraWall", "accessCard", "redCables", "team"]
  };

  // ---- Mini CMS: per-service image overrides, persisted in localStorage ----
  const CMS_KEY = "noble_cms_service_images";
  const serviceKeys = window.NoblePhotos.serviceKeys;
  const reader = () => {
    try {
      return JSON.parse(localStorage.getItem(CMS_KEY)) || {};
    } catch (e) {
      return {};
    }
  };
  const writer = obj => {
    try {
      localStorage.setItem(CMS_KEY, JSON.stringify(obj));
    } catch (e) {}
  };
  Object.assign(window.NoblePhotos, {
    // curated picker library (label + url)
    library: [["serverRacks", "ห้องเซิร์ฟเวอร์"], ["blueCables", "สายแลนน้ำเงิน"], ["redCables", "สายเครือข่ายแดง"], ["netBurst", "ดาต้า / ไฟเบอร์"], ["circuit", "ฮาร์ดแวร์"], ["cameraWall", "กล้องวงจรปิด"], ["accessCard", "Access Control"], ["engineers", "วิศวกรหน้างาน"], ["team", "ทีมงาน"], ["rackAisle", "ดาต้าเซ็นเตอร์"], ["circuitBoard", "แผงวงจร"]].map(([key, label]) => ({
      key,
      label,
      url: u(ID[key], 800),
      thumb: u(ID[key], 240)
    })),
    overrides: reader,
    serviceImage(i) {
      const ov = reader();
      return ov[i] || u(ID[serviceKeys[i]], 800);
    },
    setServiceImage(i, url) {
      const ov = reader();
      ov[i] = url;
      writer(ov);
    },
    clearServiceImage(i) {
      const ov = reader();
      delete ov[i];
      writer(ov);
    },
    resetServiceImages() {
      try {
        localStorage.removeItem(CMS_KEY);
      } catch (e) {}
    },
    isOverridden(i) {
      return reader()[i] != null;
    }
  });

  // React-safe Lucide icon: the SVG is injected imperatively into a span that
  // React never reconciles, so re-renders (lang/toggle) don't crash on the
  // <i>-to-<svg> swap that lucide.createIcons() performs.
  window.NobleIco = function NobleIco({
    n,
    s = 18,
    style
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el || !window.lucide) return;
      el.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", n);
      i.setAttribute("width", s);
      i.setAttribute("height", s);
      el.appendChild(i);
      try {
        window.lucide.createIcons();
      } catch (e) {}
    }, [n, s]);
    return React.createElement("span", {
      ref,
      style: Object.assign({
        display: "inline-flex",
        width: s,
        height: s
      }, style || {})
    });
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/photos.js", error: String((e && e.message) || e) }); }

// ui_kits/website/store.js
try { (() => {
// The Noble — central editable content store.
// Builds the full default content from NobleContent + new sections,
// then merges any saved edits from localStorage. The CMS reads/writes here.
(function () {
  const C = window.NobleContent;
  const P = window.NoblePhotos;
  const KEY = "noble_cms_content";
  const clone = o => JSON.parse(JSON.stringify(o));
  function defaults() {
    return {
      brand: {
        name: "THE NOBLE",
        tagline: "Glow together"
      },
      hero: {
        eyebrow: C.hero.eyebrow,
        title: clone(C.hero.title),
        sub: clone(C.hero.sub),
        cta1: clone(C.hero.cta1),
        cta2: clone(C.hero.cta2),
        image: P.url("serverRacks", 1600)
      },
      stats: C.stats.map(s => ({
        value: s.value,
        label: clone(s.label)
      })),
      servicesHead: clone(C.servicesHead),
      services: C.services.map((s, i) => ({
        icon: s.icon,
        title: clone(s.title),
        desc: clone(s.desc),
        image: P.url(P.serviceKeys[i], 800)
      })),
      showcase: {
        eyebrow: {
          th: "ผลงานของเรา",
          en: "Our work"
        },
        title: {
          th: "ติดตั้งจริง ดูแลจริง",
          en: "Installed for real, maintained for real"
        },
        desc: {
          th: "ทีมงานลงหน้างานจริง ดูแลระบบของหน่วยงานภาครัฐและองค์กรชั้นนำ",
          en: "Our team works on site — caring for the systems of leading public and private organisations."
        },
        image1: P.url("engineers", 1100),
        image2: P.url("rackAisle", 500)
      },
      clients: {
        eyebrow: {
          th: "ลูกค้าอ้างอิง",
          en: "Trusted by"
        },
        title: {
          th: "หน่วยงานที่ไว้วางใจเรา",
          en: "Organisations that trust us"
        },
        sub: {
          th: "The Noble ได้รับความไว้วางใจจากหน่วยงานภาครัฐและเอกชนชั้นนำ และเป็นพันธมิตรกับแบรนด์เทคโนโลยีระดับโลก",
          en: "Trusted by leading public & private organisations, partnered with world-class technology brands."
        },
        // sector: "gov" | "private" | "partner"
        items: [{
          name: "Cisco",
          sector: "partner",
          logo: ""
        }, {
          name: "Ubiquiti",
          sector: "partner",
          logo: ""
        }, {
          name: "HP",
          sector: "partner",
          logo: ""
        }, {
          name: "Microsoft",
          sector: "partner",
          logo: ""
        }, {
          name: "Fortinet",
          sector: "partner",
          logo: ""
        }, {
          name: "Synology",
          sector: "partner",
          logo: ""
        }, {
          name: "Hikvision",
          sector: "partner",
          logo: ""
        }, {
          name: "หน่วยงานราชการ",
          sector: "gov",
          logo: ""
        }, {
          name: "องค์กรปกครองส่วนท้องถิ่น",
          sector: "gov",
          logo: ""
        }, {
          name: "โรงพยาบาลรัฐ",
          sector: "gov",
          logo: ""
        }, {
          name: "สถาบันการศึกษา",
          sector: "gov",
          logo: ""
        }, {
          name: "รัฐวิสาหกิจ",
          sector: "gov",
          logo: ""
        }, {
          name: "โรงงานอุตสาหกรรม",
          sector: "private",
          logo: ""
        }, {
          name: "อาคารสำนักงาน",
          sector: "private",
          logo: ""
        }, {
          name: "คอนโดมิเนียม",
          sector: "private",
          logo: ""
        }, {
          name: "ธุรกิจค้าปลีก",
          sector: "private",
          logo: ""
        }, {
          name: "เครือโรงแรม",
          sector: "private",
          logo: ""
        }],
        // featured projects (ผลงาน)
        worksHead: {
          eyebrow: {
            th: "ผลงานที่ผ่านมา",
            en: "Recent work"
          },
          title: {
            th: "ตัวอย่างโครงการที่เราภาคภูมิใจ",
            en: "Projects we are proud of"
          },
          sub: {
            th: "ตัวอย่างงานติดตั้งและดูแลระบบไอทีให้องค์กรภาครัฐและเอกชน",
            en: "A sample of IT systems we've deployed and maintained for public & private organisations."
          }
        },
        works: [{
          title: {
            th: "วางระบบเซิร์ฟเวอร์และ NAS",
            en: "Server & NAS deployment"
          },
          category: {
            th: "Computer & Server",
            en: "Computer & Server"
          },
          location: {
            th: "หน่วยงานราชการ · กรุงเทพฯ",
            en: "Government office · Bangkok"
          },
          image: P.url("serverRacks", 800)
        }, {
          title: {
            th: "เครือข่าย LAN / Wi-Fi ทั้งอาคาร",
            en: "Building-wide LAN / Wi-Fi"
          },
          category: {
            th: "Network",
            en: "Network"
          },
          location: {
            th: "โรงงานอุตสาหกรรม · สมุทรปราการ",
            en: "Factory · Samut Prakan"
          },
          image: P.url("blueCables", 800)
        }, {
          title: {
            th: "ระบบกล้องวงจรปิด 128 จุด",
            en: "128-camera CCTV system"
          },
          category: {
            th: "CCTV",
            en: "CCTV"
          },
          location: {
            th: "คอนโดมิเนียม · กรุงเทพฯ",
            en: "Condominium · Bangkok"
          },
          image: P.url("cameraWall", 800)
        }, {
          title: {
            th: "ระบบเข้า-ออกด้วยใบหน้า",
            en: "Face-scan access control"
          },
          category: {
            th: "Access Control",
            en: "Access Control"
          },
          location: {
            th: "อาคารสำนักงาน · นนทบุรี",
            en: "Office building · Nonthaburi"
          },
          image: P.url("accessCard", 800)
        }, {
          title: {
            th: "สัญญาดูแลระบบ (MA) รายปี",
            en: "Annual maintenance (MA)"
          },
          category: {
            th: "Maintenance",
            en: "Maintenance"
          },
          location: {
            th: "เครือธุรกิจค้าปลีก · ทั่วประเทศ",
            en: "Retail group · nationwide"
          },
          image: P.url("rackAisle", 800)
        }, {
          title: {
            th: "IT Support ประจำสถานที่",
            en: "On-site IT support"
          },
          category: {
            th: "IT Support",
            en: "IT Support"
          },
          location: {
            th: "องค์กรเอกชน · กรุงเทพฯ",
            en: "Enterprise · Bangkok"
          },
          image: P.url("team", 800)
        }]
      },
      contact: {
        eyebrow: clone(C.contact.eyebrow),
        title: clone(C.contact.title),
        addr: C.contact.addr,
        phone: C.contact.phone,
        email: C.contact.email,
        line: C.contact.line
      }
    };
  }

  // recursively merge saved over defaults; arrays are replaced wholesale
  function merge(base, over) {
    if (Array.isArray(base)) return Array.isArray(over) ? over : base;
    if (base && typeof base === "object") {
      const out = clone(base);
      if (over && typeof over === "object") {
        for (const k of Object.keys(over)) out[k] = merge(base[k] !== undefined ? base[k] : over[k], over[k]);
      }
      return out;
    }
    return over !== undefined ? over : base;
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return merge(defaults(), JSON.parse(raw));
    } catch (e) {}
    return defaults();
  }
  window.NobleStore = {
    KEY,
    defaults,
    load,
    save(data) {
      try {
        localStorage.setItem(KEY, JSON.stringify(data));
      } catch (e) {}
    },
    reset() {
      try {
        localStorage.removeItem(KEY);
      } catch (e) {}
    },
    clone
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/store.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
