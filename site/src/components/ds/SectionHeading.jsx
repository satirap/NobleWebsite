export default function SectionHeading({
  eyebrow = null,
  title,
  description = null,
  align = 'left',
  className = '',
  style = {},
  ...rest
}) {
  return (
    <div
      className={`tn-heading ${className}`}
      style={{
        display: 'flex', flexDirection: 'column', gap: '12px',
        textAlign: align, alignItems: align === 'center' ? 'center' : 'flex-start',
        maxWidth: align === 'center' ? '640px' : 'none',
        marginInline: align === 'center' ? 'auto' : '0',
        ...style,
      }}
      {...rest}
    >
      {eyebrow && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', fontSize: 'var(--text-2xs)', fontWeight: 600, color: 'var(--accent)' }}>
          <span style={{ width: 18, height: 2, background: 'var(--accent)', borderRadius: 2 }} />
          {eyebrow}
        </span>
      )}
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-lg)', fontWeight: 700, lineHeight: 'var(--leading-snug)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>
        {title}
      </h2>
      {description && (
        <p style={{ margin: 0, fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)' }}>
          {description}
        </p>
      )}
    </div>
  );
}
