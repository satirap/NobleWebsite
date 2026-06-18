import { useState } from 'react';
import SectionHeading from './ds/SectionHeading.jsx';
import Input from './ds/Input.jsx';
import Button from './ds/Button.jsx';
import Badge from './ds/Badge.jsx';
import Ico from './Ico.jsx';

export default function Contact({ lang, data }) {
  const CT = data.contact;
  const [sent, setSent] = useState(false);
  const t = (th, en) => (lang === 'th' ? th : en);

  const info = [
    { n: 'map-pin', k: t('ที่อยู่', 'Address'), v: CT.addr },
    { n: 'phone', k: t('โทรศัพท์', 'Phone'), v: CT.phone },
    { n: 'mail', k: 'Email', v: CT.email },
    { n: 'message-circle', k: 'LINE', v: CT.line },
  ];

  return (
    <section id="contact" style={{ background: 'var(--surface-card)', padding: 'var(--section-gap) 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="noble-contact-grid" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'start' }}>
        <div>
          <SectionHeading eyebrow={CT.eyebrow[lang]} title={CT.title[lang]} description={t('ปรึกษาทีมงานได้ฟรี เราจะติดต่อกลับภายใน 24 ชั่วโมง', 'Free consultation — we reply within 24 hours.')} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 32 }}>
            {info.map((x, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 42, height: 42, flex: 'none', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--blue-50)', color: 'var(--primary)' }}><Ico n={x.n} /></div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-faint)', marginBottom: 3 }}>{x.k}</div>
                  <div style={{ fontSize: 15, color: 'var(--text-strong)', fontWeight: 500, lineHeight: 1.45 }}>{x.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--surface-page)', borderRadius: 'var(--radius-xl)', padding: 'clamp(1.5rem,3vw,2.5rem)', boxShadow: 'var(--shadow-sm)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: 64, height: 64, margin: '0 auto 18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--success-100)', color: 'var(--success-600)' }}><Ico n="check" s={30} /></div>
              <h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--text-strong)' }}>{t('ส่งข้อมูลเรียบร้อย', 'Message sent')}</h3>
              <p style={{ margin: '0 0 20px', color: 'var(--text-muted)' }}>{t('ทีมงานจะติดต่อกลับโดยเร็วที่สุด', 'Our team will be in touch shortly.')}</p>
              <Button variant="secondary" onClick={() => setSent(false)}>{t('ส่งอีกครั้ง', 'Send another')}</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Badge tone="brand" dot>{t('ขอใบเสนอราคา', 'Request a quote')}</Badge>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Input label={t('ชื่อ-นามสกุล', 'Full name')} placeholder={t('ชื่อของคุณ', 'Your name')} leftIcon={<Ico n="user" s={16} />} required />
                <Input label={t('บริษัท', 'Company')} placeholder={t('ชื่อบริษัท', 'Company name')} leftIcon={<Ico n="building-2" s={16} />} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Input label="Email" type="email" placeholder="you@company.com" leftIcon={<Ico n="mail" s={16} />} required />
                <Input label={t('เบอร์โทร', 'Phone')} placeholder="08x xxx xxxx" leftIcon={<Ico n="phone" s={16} />} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{t('บริการที่สนใจ', 'Service of interest')}</label>
                <select style={{ height: 'var(--control-h-md)', padding: '0 14px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-default)', background: '#fff', fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-strong)' }}>
                  {data.services.map((s, i) => <option key={i}>{s.title[lang]}</option>)}
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{t('รายละเอียด', 'Message')}</label>
                <textarea rows={3} placeholder={t('เล่าเกี่ยวกับโครงการของคุณ...', 'Tell us about your project...')} style={{ padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-default)', background: '#fff', fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-strong)', resize: 'vertical', boxSizing: 'border-box', width: '100%' }}></textarea>
              </div>
              <Button type="submit" size="lg" fullWidth rightIcon={<Ico n="send" s={16} />}>{t('ส่งคำขอ', 'Send request')}</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
