export default function StatBlock({
  value,
  label,
  align = 'left',
  tone = 'brand',
  className = '',
  style = {},
  ...rest
}) {
  const color = tone === 'accent' ? 'var(--accent)' : tone === 'light' ? 'var(--white)' : 'var(--primary)';
  const labelColor = tone === 'light' ? 'var(--blue-200)' : 'var(--text-muted)';
  return (
    <div
      className={`tn-stat ${className}`}
      style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: align, alignItems: align === 'center' ? 'center' : 'flex-start', ...style }}
      {...rest}
    >
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(2rem, 1.4rem + 2vw, 2.75rem)', fontWeight: 600, lineHeight: 1, letterSpacing: '-0.02em', color }}>
        {value}
      </span>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500, color: labelColor }}>
        {label}
      </span>
    </div>
  );
}
