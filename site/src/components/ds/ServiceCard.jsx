import { useState } from 'react';

export default function ServiceCard({
  icon = null,
  image = null,
  title,
  description,
  href = '#',
  cta = 'ดูรายละเอียด',
  className = '',
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`tn-service ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm), var(--ring-hairline)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'all var(--duration-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {image && (
        <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden' }}>
          <img src={image} alt="" loading="lazy" style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hover ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform var(--duration-slow) var(--ease-out)',
          }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,18,32,0) 35%, rgba(11,18,32,0.55) 100%)' }}></div>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', padding: image ? '22px' : '26px', marginTop: image ? '-34px' : '0', position: 'relative' }}>
        <div
          style={{
            width: 52, height: 52, borderRadius: 'var(--radius-md)', flex: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--white)', background: 'var(--gradient-brand)',
            boxShadow: hover ? 'var(--shadow-glow-blue)' : 'var(--shadow-sm)',
            transition: 'box-shadow var(--duration-base) var(--ease-out)',
            border: image ? '3px solid var(--surface-card)' : 'none',
          }}
        >
          {icon}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', fontWeight: 600, color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>
            {title}
          </h3>
          <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)' }}>
            {description}
          </p>
        </div>
        <a
          href={href}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none',
            fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', fontWeight: 600,
            color: 'var(--primary)',
          }}
        >
          {cta}
          <span style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--duration-base) var(--ease-out)' }}>→</span>
        </a>
      </div>
    </div>
  );
}
