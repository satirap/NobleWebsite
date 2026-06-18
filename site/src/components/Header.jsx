import { useState, useEffect } from 'react';
import Button from './ds/Button.jsx';
import Ico from './Ico.jsx';
import { NobleContent } from '../content.js';

export default function Header({ lang, setLang, go, data }) {
  const C = NobleContent;
  const [scrolled, setScrolled] = useState(false);
  const [openIdx, setOpenIdx] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const t = (th, en) => (lang === 'th' ? th : en);
  const menu = [
    { label: t('หน้าแรก', 'Home'), go: 'home' },
    {
      label: t('บริการของเรา', 'Services'), go: 'services',
      sub: data.services.map((s) => ({ label: s.title[lang], go: 'services' })),
    },
    {
      label: t('ผลงานและลูกค้า', 'Work & Clients'), go: 'portfolio',
      sub: [
        { label: t('ผลงานที่ผ่านมา', 'Recent work'), go: 'portfolio' },
        ...data.clients.works.slice(0, 6).map((w) => ({ label: w.title[lang], go: 'portfolio', dim: true })),
        { label: t('ลูกค้าอ้างอิง', 'Trusted by'), go: 'portfolio' },
      ],
    },
    { label: t('เกี่ยวกับเรา', 'About'), go: 'about' },
    { label: t('ติดต่อเรา', 'Contact'), go: 'contact' },
  ];

  const navItem = {
    display: 'inline-flex', alignItems: 'center', gap: 5, padding: '8px 13px',
    fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15, color: 'var(--text-body)',
    cursor: 'pointer', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap',
    transition: 'color var(--duration-fast), background var(--duration-fast)',
  };

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: scrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
        transition: 'all var(--duration-base) var(--ease-out)',
      }}>
        <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--container-pad)', height: 72, display: 'flex', alignItems: 'center', gap: 20 }}>
          <a onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flex: 'none' }}>
            <img src="/assets/logo-noble-mark.png" alt="The Noble" style={{ height: 38 }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, letterSpacing: '0.06em', color: 'var(--primary)' }}>{data.brand.name}</span>
          </a>

          <nav className="noble-nav" style={{ display: 'flex', gap: 2, marginLeft: 12, flex: 1 }}>
            {menu.map((m, i) => {
              const active = openIdx === i;
              return (
                <div key={i} style={{ position: 'relative' }} onMouseEnter={() => setOpenIdx(m.sub ? i : null)} onMouseLeave={() => setOpenIdx(null)}>
                  <a onClick={() => go(m.go)} style={{ ...navItem, color: active ? 'var(--primary)' : 'var(--text-body)', background: active ? 'var(--blue-50)' : 'transparent' }}>
                    {m.label}{m.sub && <Ico n="chevron-down" s={14} />}
                  </a>
                  {m.sub && active && (
                    <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: 8 }}>
                      <div style={{ minWidth: 244, background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-subtle)', padding: 8, display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {m.sub.map((s, j) => (
                          <a key={j} onClick={() => { go(s.go); setOpenIdx(null); }} style={{
                            display: 'flex', alignItems: 'center', gap: 9, padding: '9px 12px', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
                            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: s.dim ? 400 : 500,
                            color: s.dim ? 'var(--text-muted)' : 'var(--text-strong)',
                          }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--blue-50)'; e.currentTarget.style.color = 'var(--primary)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = s.dim ? 'var(--text-muted)' : 'var(--text-strong)'; }}
                          >
                            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flex: 'none', opacity: s.dim ? 0.45 : 1 }}></span>
                            {s.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 'none' }}>
            <div style={{ display: 'flex', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
              {['th', 'en'].map((l) => (
                <button key={l} onClick={() => setLang(l)} style={{ padding: '5px 11px', border: 'none', cursor: 'pointer', textTransform: 'uppercase', background: lang === l ? 'var(--primary)' : 'transparent', color: lang === l ? '#fff' : 'var(--text-muted)' }}>{l}</button>
              ))}
            </div>
            <a style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-muted)', cursor: 'pointer', whiteSpace: 'nowrap' }}>{C.login[lang]}</a>
            <Button size="sm" variant="primary" onClick={() => go('contact')}>{C.quote[lang]}</Button>
          </div>
        </div>
      </header>

      <a href="https://line.me/ti/p/@thenoble" target="_blank" rel="noopener" title={lang === 'th' ? 'สอบถามทาง LINE @thenoble' : 'Chat on LINE @thenoble'}
        style={{ position: 'fixed', right: 22, bottom: 22, zIndex: 93, width: 60, height: 60, borderRadius: '50%', background: '#06C755', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(6,199,85,0.45)', textDecoration: 'none', color: '#fff', transition: 'transform var(--duration-base) var(--ease-out)' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '0.02em', lineHeight: 1 }}>LINE</span>
      </a>
    </>
  );
}
