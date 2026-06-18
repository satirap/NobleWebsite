import { NobleContent as C } from '../content.js';

const logoMark = '/assets/logo-noble-mark.png';

export default function Footer({ lang, data }) {
  const t = (th, en) => (lang === 'th' ? th : en);
  const cols = [
    { h: t('บริการ', 'Services'), items: data.services.map(s => s.title[lang]) },
    { h: t('บริษัท', 'Company'), items: C.nav[lang] },
  ];
  return (
    <footer style={{ background: 'var(--ink-900)', color: 'var(--ink-300)', paddingTop: 56 }}>
      <div className="noble-footer-grid" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--container-pad)', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40, paddingBottom: 40 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <img src={logoMark} alt="The Noble" style={{ height: 40 }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '0.06em', color: '#fff' }}>{data.brand.name}</span>
          </div>
          <p style={{ margin: '0 0 18px', fontSize: 14, lineHeight: 1.65, maxWidth: 320 }}>{t('ผู้ให้บริการระบบไอทีครบวงจร (System Integration) ตั้งแต่วางระบบไปจนถึงดูแลบำรุงรักษา', 'Full-service IT System Integration — from rollout to continuous maintenance.')}</p>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.8 }}>
            <div>{data.contact.phone}</div>
            <div>{data.contact.email}</div>
          </div>
        </div>
        {cols.map((col, i) => (
          <div key={i}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{col.h}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {col.items.map((it, j) => <li key={j} style={{ fontSize: 14, cursor: 'pointer' }}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '20px var(--container-pad)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: 12.5, color: 'var(--ink-400)' }}>
          <span>© 2026 บริษัท เดอะ โนเบิล จำกัด · The Noble Co., Ltd.</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>{data.brand.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
