import { useState } from 'react';
import { NobleContent as C } from '../content.js';
import SectionHeading from './ds/SectionHeading.jsx';
import Badge from './ds/Badge.jsx';
import Button from './ds/Button.jsx';
import Ico from './Ico.jsx';

function ProjectCard({ w, lang }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: hov ? 'var(--shadow-lg)' : 'var(--shadow-sm)', transform: hov ? 'translateY(-3px)' : 'none', transition: 'all var(--duration-base) var(--ease-out)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden' }}>
        <img src={w.image} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hov ? 'scale(1.06)' : 'scale(1)', transition: 'transform var(--duration-slow) var(--ease-out)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,18,32,0) 45%, rgba(11,18,32,0.5) 100%)' }}></div>
        <span style={{ position: 'absolute', top: 12, left: 12 }}><Badge tone="brand" variant="solid" size="sm">{w.category[lang]}</Badge></span>
      </div>
      <div style={{ padding: '16px 18px 18px' }}>
        <h3 style={{ margin: '0 0 6px', fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>{w.title[lang]}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)' }}><Ico n="map-pin" s={14} />{w.location[lang]}</div>
      </div>
    </div>
  );
}

function Tile({ c }) {
  const [hov, setHov] = useState(false);
  const initials = (n) => n.replace(/[^A-Za-zก-ฮ0-9 ]/g, '').trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase() || '•';
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, minWidth: 150, height: 80, padding: '0 22px',
        background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', boxShadow: hov ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hov ? 'translateY(-2px)' : 'none', transition: 'all var(--duration-base) var(--ease-out)' }}>
      {c.logo ? (
        <img src={c.logo} alt={c.name} style={{ maxHeight: 44, maxWidth: 130, objectFit: 'contain', filter: hov ? 'none' : 'grayscale(1)', opacity: hov ? 1 : 0.85, transition: 'all var(--duration-base) var(--ease-out)' }} />
      ) : (
        <>
          <span style={{ width: 38, height: 38, flex: 'none', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: hov ? 'var(--gradient-brand)' : 'var(--ink-100)', color: hov ? '#fff' : 'var(--ink-500)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, transition: 'all var(--duration-base) var(--ease-out)' }}>{initials(c.name)}</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--text-strong)', whiteSpace: 'nowrap' }}>{c.name}</span>
        </>
      )}
    </div>
  );
}

export default function Clients({ lang, go, data }) {
  const CL = data.clients;
  const wrap = { maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 var(--container-pad)' };
  const groups = [
    { key: 'gov', label: { th: 'ภาครัฐ', en: 'Public sector' } },
    { key: 'private', label: { th: 'ภาคเอกชน', en: 'Private sector' } },
    { key: 'partner', label: { th: 'พันธมิตรเทคโนโลยี', en: 'Technology partners' } },
  ];

  return (
    <>
      <section id="portfolio" style={{ background: 'var(--surface-page)', padding: 'var(--section-gap) 0' }}>
        <div style={wrap}>
          <SectionHeading align="center" eyebrow={CL.worksHead.eyebrow[lang]} title={CL.worksHead.title[lang]} description={CL.worksHead.sub[lang]} />
          <div className="noble-works-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 48 }}>
            {CL.works.map((w, i) => <ProjectCard key={i} w={w} lang={lang} />)}
          </div>

          <div style={{ marginTop: 'var(--section-gap)' }}>
            <SectionHeading align="center" eyebrow={CL.eyebrow[lang]} title={CL.title[lang]} description={CL.sub[lang]} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 34, marginTop: 48 }}>
              {groups.map((g) => {
                const items = CL.items.filter((c) => c.sector === g.key);
                if (!items.length) return null;
                return (
                  <div key={g.key}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                      <span style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-eyebrow)', fontSize: 'var(--text-2xs)', fontWeight: 600, color: 'var(--text-muted)' }}>{g.label[lang]}</span>
                      <span style={{ flex: 1, height: 1, background: 'var(--border-default)' }}></span>
                      <Badge tone="neutral" size="sm">{items.length}</Badge>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                      {items.map((c, i) => <Tile key={i} c={c} />)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 36, fontSize: 'var(--text-sm)', color: 'var(--text-faint)' }}>
            {lang === 'th' ? 'โลโก้และชื่อเป็นเพียงตัวอย่าง — เพิ่ม/แก้ลูกค้าจริงได้ที่ปุ่ม "จัดการเนื้อหา"' : 'Names & logos are placeholders — add your real clients via "Manage content".'}
          </p>
        </div>
      </section>

      {/* Closing CTA band */}
      <section style={{ background: 'var(--surface-card)', padding: 'var(--section-gap) 0' }}>
        <div style={wrap}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-2xl)', background: 'var(--gradient-brand)', padding: 'clamp(2.5rem,5vw,4rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', boxShadow: 'var(--shadow-xl)' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(70% 100% at 100% 50%, #000, transparent)' }}></div>
            <div style={{ position: 'relative', maxWidth: 620 }}>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-lg)', fontWeight: 700, lineHeight: 1.15, color: '#fff', letterSpacing: '-0.02em' }}>{C.ctaSection.title[lang]}</h2>
              <p style={{ margin: 0, fontSize: 'var(--text-lg)', color: 'var(--blue-100)', lineHeight: 1.6 }}>{C.ctaSection.sub[lang]}</p>
            </div>
            <div style={{ position: 'relative' }}>
              <Button size="lg" onClick={() => go('contact')} style={{ background: '#fff', color: 'var(--primary)', boxShadow: 'var(--shadow-lg)' }} rightIcon={<Ico n="arrow-right" s={18} />}>
                {lang === 'th' ? 'ติดต่อเราวันนี้' : 'Contact us today'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
