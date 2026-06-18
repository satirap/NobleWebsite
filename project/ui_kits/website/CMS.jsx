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
      cv.width = Math.round(img.width * scale); cv.height = Math.round(img.height * scale);
      cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
      cb(cv.toDataURL("image/jpeg", 0.82));
    };
    img.src = fr.result;
  };
  fr.readAsDataURL(file);
}

const cmsLabel = { fontFamily: "var(--font-mono)", fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--text-faint)", marginBottom: 5, display: "block" };
const cmsBox = { width: "100%", padding: "9px 11px", borderRadius: "var(--radius-sm)", border: "1.5px solid var(--border-default)", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-strong)", background: "#fff", boxSizing: "border-box" };

function CmsField({ label, value, onChange, area, mono, placeholder }) {
  return (
    <label style={{ display: "block", marginBottom: 12 }}>
      {label && <span style={cmsLabel}>{label}</span>}
      {area ? (
        <textarea value={value || ""} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} rows={area === true ? 3 : area} style={{ ...cmsBox, resize: "vertical", lineHeight: 1.5 }} />
      ) : (
        <input value={value || ""} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} style={{ ...cmsBox, fontFamily: mono ? "var(--font-mono)" : "var(--font-body)" }} />
      )}
    </label>
  );
}

function CmsImageField({ label, value, onChange, P, lang }) {
  const [mode, setMode] = React.useState(null);
  const [url, setUrl] = React.useState("");
  const fileRef = React.useRef(null);
  const t = (th, en) => (lang === "th" ? th : en);
  const btn = { border: "1px solid var(--border-default)", background: "#fff", borderRadius: "var(--radius-pill)", padding: "5px 11px", cursor: "pointer", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: 5 };
  const I = ({ n }) => React.createElement(window.NobleIco, { n, s: 12 });
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <span style={cmsLabel}>{label}</span>}
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <div style={{ width: 70, height: 50, flex: "none", borderRadius: "var(--radius-sm)", background: value ? "#fff" : "var(--ink-100)", boxShadow: "var(--ring-hairline)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          {value ? <img src={value} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} /> : <I n="image" />}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <button style={btn} onClick={() => setMode(m => m === "lib" ? null : "lib")}><I n="grid-3x3" />{t("คลัง", "Library")}</button>
          <button style={btn} onClick={() => setMode(m => m === "url" ? null : "url")}><I n="link" />URL</button>
          <button style={btn} onClick={() => fileRef.current && fileRef.current.click()}><I n="upload" />{t("อัปโหลด", "Upload")}</button>
          {value && <button style={{ ...btn, color: "var(--text-muted)" }} onClick={() => onChange("")}><I n="x" />{t("ลบ", "Clear")}</button>}
          <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => { cmsDownscale(e.target.files[0], 900, onChange); e.target.value = ""; }} />
        </div>
      </div>
      {mode === "lib" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 5, marginTop: 8 }}>
          {P.library.map((lib) => (
            <button key={lib.key} title={lib.label} onClick={() => { onChange(lib.url); setMode(null); }} style={{ padding: 0, border: value === lib.url ? "2px solid var(--primary)" : "1px solid var(--border-subtle)", borderRadius: "var(--radius-sm)", overflow: "hidden", cursor: "pointer", aspectRatio: "4/3" }}>
              <img src={lib.thumb} alt={lib.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </button>
          ))}
        </div>
      )}
      {mode === "url" && (
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder={t("วางลิงก์รูป (URL)", "Paste image URL")} style={cmsBox} />
          <button style={{ ...btn, padding: "0 14px" }} onClick={() => { if (url.trim()) { onChange(url.trim()); setUrl(""); setMode(null); } }}>{t("ใช้", "Use")}</button>
        </div>
      )}
    </div>
  );
}

function CmsCard({ children, onRemove, removeLabel }) {
  return (
    <div style={{ border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: 12, marginBottom: 10, background: "var(--surface-card)", position: "relative" }}>
      {onRemove && (
        <button onClick={onRemove} title={removeLabel} style={{ position: "absolute", top: 8, right: 8, width: 26, height: 26, border: "none", borderRadius: "var(--radius-sm)", background: "var(--red-50)", color: "var(--accent)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {React.createElement(window.NobleIco, { n: "trash-2", s: 13 })}
        </button>
      )}
      {children}
    </div>
  );
}

function NobleCMS({ lang, data, onChange }) {
  const { Button, Badge } = window.TheNobleDesignSystem_288042;
  const P = window.NoblePhotos;
  const S = window.NobleStore;
  const Ico = ({ n, s = 16 }) => React.createElement(window.NobleIco, { n, s });
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState("hero");
  const t = (th, en) => (lang === "th" ? th : en);
  const edit = (fn) => { const d = S.clone(data); fn(d); onChange(d); };
  const img = (label, value, set) => <CmsImageField label={label} value={value} onChange={set} P={P} lang={lang} />;

  const tabs = [
    ["brand", t("แบรนด์", "Brand"), "badge-check"],
    ["hero", t("ฮีโร่", "Hero"), "panel-top"],
    ["services", t("บริการ", "Services"), "layout-grid"],
    ["stats", t("สถิติ", "Stats"), "bar-chart-3"],
    ["clients", t("ลูกค้า", "Clients"), "building-2"],
    ["works", t("ผลงาน", "Works"), "briefcase"],
    ["showcase", t("ผลงานเด่น", "Showcase"), "image"],
    ["contact", t("ติดต่อ", "Contact"), "phone"],
  ];

  const sectorOpts = [["gov", t("ภาครัฐ", "Public")], ["private", t("ภาคเอกชน", "Private")], ["partner", t("พันธมิตร", "Partner")]];

  const panel = {
    position: "fixed", top: 0, right: 0, bottom: 0, width: 430, maxWidth: "94vw", zIndex: 95,
    background: "var(--surface-page)", boxShadow: "var(--shadow-xl)", display: "flex", flexDirection: "column",
    transform: open ? "translateX(0)" : "translateX(105%)", transition: "transform var(--duration-slow) var(--ease-out)",
  };

  return (
    <React.Fragment>
      <button onClick={() => setOpen(o => !o)} title={t("เครื่องมือสำหรับแก้ไขตัวอย่าง", "Demo editing tool")} style={{ position: "fixed", left: 18, bottom: 18, zIndex: 96, display: "flex", alignItems: "center", gap: 8, padding: "11px 17px", border: "none", cursor: "pointer", borderRadius: "var(--radius-pill)", background: "var(--ink-900)", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, boxShadow: "var(--shadow-lg)" }}>
        <Ico n={open ? "x" : "sliders-horizontal"} s={17} />{t("จัดการเนื้อหา", "Manage content")}
      </button>
      {open && <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 94, background: "rgba(11,18,32,0.35)" }}></div>}

      <aside style={panel}>
        <div style={{ padding: "18px 20px", borderBottom: "1px solid var(--border-subtle)", background: "var(--surface-card)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Badge tone="brand" dot>CMS</Badge>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--text-strong)" }}>{t("จัดการเนื้อหาเว็บไซต์", "Website content")}</span>
          </div>
          <button onClick={() => setOpen(false)} style={{ border: "none", background: "var(--ink-100)", borderRadius: "var(--radius-sm)", width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-body)" }}><Ico n="x" /></button>
        </div>

        {/* tabs */}
        <div style={{ display: "flex", gap: 6, padding: "10px 14px", overflowX: "auto", background: "var(--surface-card)", borderBottom: "1px solid var(--border-subtle)" }}>
          {tabs.map(([k, label, icon]) => (
            <button key={k} onClick={() => setTab(k)} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px", border: "none", cursor: "pointer", borderRadius: "var(--radius-pill)", whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, background: tab === k ? "var(--primary)" : "var(--ink-100)", color: tab === k ? "#fff" : "var(--text-muted)" }}>
              <Ico n={icon} s={13} />{label}
            </button>
          ))}
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "16px 18px" }}>
          <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
            <Ico n="languages" s={13} /> {t("กำลังแก้ภาษา:", "Editing language:")} <b style={{ color: "var(--primary)", textTransform: "uppercase" }}>{lang}</b> · {t("สลับ TH/EN ที่หัวเว็บ", "switch TH/EN in the header")}
          </div>

          {tab === "brand" && (
            <React.Fragment>
              <CmsField label={t("ชื่อแบรนด์", "Brand name")} value={data.brand.name} onChange={(v) => edit(d => d.brand.name = v)} />
              <CmsField label={t("สโลแกน", "Tagline")} value={data.brand.tagline} onChange={(v) => edit(d => d.brand.tagline = v)} />
            </React.Fragment>
          )}

          {tab === "hero" && (
            <React.Fragment>
              <CmsField label={t("ป้ายเล็ก (eyebrow)", "Eyebrow")} value={data.hero.eyebrow} onChange={(v) => edit(d => d.hero.eyebrow = v)} />
              <CmsField label={t("หัวข้อใหญ่ (ขึ้นบรรทัดได้)", "Headline (line breaks ok)")} value={data.hero.title[lang]} onChange={(v) => edit(d => d.hero.title[lang] = v)} area={2} />
              <CmsField label={t("คำอธิบาย", "Subtitle")} value={data.hero.sub[lang]} onChange={(v) => edit(d => d.hero.sub[lang] = v)} area />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <CmsField label={t("ปุ่มหลัก", "Primary button")} value={data.hero.cta1[lang]} onChange={(v) => edit(d => d.hero.cta1[lang] = v)} />
                <CmsField label={t("ปุ่มรอง", "Secondary button")} value={data.hero.cta2[lang]} onChange={(v) => edit(d => d.hero.cta2[lang] = v)} />
              </div>
              {img(t("ภาพพื้นหลังฮีโร่", "Hero background"), data.hero.image, (v) => edit(d => d.hero.image = v))}
            </React.Fragment>
          )}

          {tab === "services" && (
            <React.Fragment>
              <CmsField label={t("ป้ายเล็ก", "Eyebrow")} value={data.servicesHead.eyebrow[lang]} onChange={(v) => edit(d => d.servicesHead.eyebrow[lang] = v)} />
              <CmsField label={t("หัวข้อ", "Title")} value={data.servicesHead.title[lang]} onChange={(v) => edit(d => d.servicesHead.title[lang] = v)} />
              <CmsField label={t("คำโปรย", "Subtitle")} value={data.servicesHead.sub[lang]} onChange={(v) => edit(d => d.servicesHead.sub[lang] = v)} area />
              <div style={{ ...cmsLabel, marginTop: 8 }}>{t("รายการบริการ", "Service items")}</div>
              {data.services.map((s, i) => (
                <CmsCard key={i} onRemove={data.services.length > 1 ? () => edit(d => d.services.splice(i, 1)) : null} removeLabel={t("ลบ", "Remove")}>
                  <CmsField label={t("ชื่อบริการ", "Title")} value={s.title[lang]} onChange={(v) => edit(d => d.services[i].title[lang] = v)} />
                  <CmsField label={t("คำอธิบาย", "Description")} value={s.desc[lang]} onChange={(v) => edit(d => d.services[i].desc[lang] = v)} area={2} />
                  <CmsField label={t("ไอคอน (ชื่อ Lucide)", "Icon (Lucide name)")} value={s.icon} onChange={(v) => edit(d => d.services[i].icon = v)} mono />
                  {img(t("รูปการ์ด", "Card image"), s.image, (v) => edit(d => d.services[i].image = v))}
                </CmsCard>
              ))}
              <Button size="sm" variant="secondary" fullWidth leftIcon={<Ico n="plus" s={15} />} onClick={() => edit(d => d.services.push({ icon: "box", title: { th: "บริการใหม่", en: "New service" }, desc: { th: "รายละเอียดบริการ", en: "Service description" }, image: P.url("circuit", 800) }))}>{t("เพิ่มบริการ", "Add service")}</Button>
            </React.Fragment>
          )}

          {tab === "stats" && (
            <React.Fragment>
              {data.stats.map((s, i) => (
                <CmsCard key={i} onRemove={() => edit(d => d.stats.splice(i, 1))} removeLabel={t("ลบ", "Remove")}>
                  <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 10 }}>
                    <CmsField label={t("ตัวเลข", "Value")} value={s.value} onChange={(v) => edit(d => d.stats[i].value = v)} mono />
                    <CmsField label={t("ป้ายกำกับ", "Label")} value={s.label[lang]} onChange={(v) => edit(d => d.stats[i].label[lang] = v)} />
                  </div>
                </CmsCard>
              ))}
              <Button size="sm" variant="secondary" fullWidth leftIcon={<Ico n="plus" s={15} />} onClick={() => edit(d => d.stats.push({ value: "0", label: { th: "ป้ายใหม่", en: "New stat" } }))}>{t("เพิ่มสถิติ", "Add stat")}</Button>
            </React.Fragment>
          )}

          {tab === "clients" && (
            <React.Fragment>
              <CmsField label={t("ป้ายเล็ก", "Eyebrow")} value={data.clients.eyebrow[lang]} onChange={(v) => edit(d => d.clients.eyebrow[lang] = v)} />
              <CmsField label={t("หัวข้อ", "Title")} value={data.clients.title[lang]} onChange={(v) => edit(d => d.clients.title[lang] = v)} />
              <CmsField label={t("คำโปรย", "Subtitle")} value={data.clients.sub[lang]} onChange={(v) => edit(d => d.clients.sub[lang] = v)} area />
              <div style={{ ...cmsLabel, marginTop: 8 }}>{t("รายชื่อลูกค้า / พันธมิตร", "Clients & partners")}</div>
              {data.clients.items.map((c, i) => (
                <CmsCard key={i} onRemove={() => edit(d => d.clients.items.splice(i, 1))} removeLabel={t("ลบ", "Remove")}>
                  <CmsField label={t("ชื่อ", "Name")} value={c.name} onChange={(v) => edit(d => d.clients.items[i].name = v)} />
                  <label style={{ display: "block", marginBottom: 12 }}>
                    <span style={cmsLabel}>{t("ประเภท", "Group")}</span>
                    <select value={c.sector} onChange={(e) => edit(d => d.clients.items[i].sector = e.target.value)} style={cmsBox}>
                      {sectorOpts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </label>
                  {img(t("โลโก้ (ไม่ใส่ก็ได้)", "Logo (optional)"), c.logo, (v) => edit(d => d.clients.items[i].logo = v))}
                </CmsCard>
              ))}
              <Button size="sm" variant="secondary" fullWidth leftIcon={<Ico n="plus" s={15} />} onClick={() => edit(d => d.clients.items.push({ name: t("ลูกค้าใหม่", "New client"), sector: "private", logo: "" }))}>{t("เพิ่มลูกค้า", "Add client")}</Button>
            </React.Fragment>
          )}

          {tab === "works" && (
            <React.Fragment>
              <CmsField label={t("ป้ายเล็ก", "Eyebrow")} value={data.clients.worksHead.eyebrow[lang]} onChange={(v) => edit(d => d.clients.worksHead.eyebrow[lang] = v)} />
              <CmsField label={t("หัวข้อ", "Title")} value={data.clients.worksHead.title[lang]} onChange={(v) => edit(d => d.clients.worksHead.title[lang] = v)} />
              <CmsField label={t("คำโปรย", "Subtitle")} value={data.clients.worksHead.sub[lang]} onChange={(v) => edit(d => d.clients.worksHead.sub[lang] = v)} area />
              <div style={{ ...cmsLabel, marginTop: 8 }}>{t("รายการผลงาน", "Project items")}</div>
              {data.clients.works.map((w, i) => (
                <CmsCard key={i} onRemove={() => edit(d => d.clients.works.splice(i, 1))} removeLabel={t("ลบ", "Remove")}>
                  <CmsField label={t("ชื่อโครงการ", "Title")} value={w.title[lang]} onChange={(v) => edit(d => d.clients.works[i].title[lang] = v)} />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    <CmsField label={t("หมวด/บริการ", "Category")} value={w.category[lang]} onChange={(v) => edit(d => d.clients.works[i].category[lang] = v)} />
                    <CmsField label={t("สถานที่", "Location")} value={w.location[lang]} onChange={(v) => edit(d => d.clients.works[i].location[lang] = v)} />
                  </div>
                  {img(t("รูปโครงการ", "Project image"), w.image, (v) => edit(d => d.clients.works[i].image = v))}
                </CmsCard>
              ))}
              <Button size="sm" variant="secondary" fullWidth leftIcon={<Ico n="plus" s={15} />} onClick={() => edit(d => d.clients.works.push({ title: { th: "โครงการใหม่", en: "New project" }, category: { th: "บริการ", en: "Service" }, location: { th: "สถานที่", en: "Location" }, image: P.url("rackAisle", 800) }))}>{t("เพิ่มผลงาน", "Add project")}</Button>
            </React.Fragment>
          )}

          {tab === "showcase" && (
            <React.Fragment>
              <CmsField label={t("ป้ายเล็ก", "Eyebrow")} value={data.showcase.eyebrow[lang]} onChange={(v) => edit(d => d.showcase.eyebrow[lang] = v)} />
              <CmsField label={t("หัวข้อ", "Title")} value={data.showcase.title[lang]} onChange={(v) => edit(d => d.showcase.title[lang] = v)} />
              <CmsField label={t("คำอธิบาย", "Description")} value={data.showcase.desc[lang]} onChange={(v) => edit(d => d.showcase.desc[lang] = v)} area />
              {img(t("รูปหลัก", "Main image"), data.showcase.image1, (v) => edit(d => d.showcase.image1 = v))}
              {img(t("รูปมุม", "Inset image"), data.showcase.image2, (v) => edit(d => d.showcase.image2 = v))}
            </React.Fragment>
          )}

          {tab === "contact" && (
            <React.Fragment>
              <CmsField label={t("ป้ายเล็ก", "Eyebrow")} value={data.contact.eyebrow[lang]} onChange={(v) => edit(d => d.contact.eyebrow[lang] = v)} />
              <CmsField label={t("หัวข้อ", "Title")} value={data.contact.title[lang]} onChange={(v) => edit(d => d.contact.title[lang] = v)} />
              <CmsField label={t("ที่อยู่", "Address")} value={data.contact.addr} onChange={(v) => edit(d => d.contact.addr = v)} area={2} />
              <CmsField label={t("โทรศัพท์", "Phone")} value={data.contact.phone} onChange={(v) => edit(d => d.contact.phone = v)} mono />
              <CmsField label="Email" value={data.contact.email} onChange={(v) => edit(d => d.contact.email = v)} mono />
              <CmsField label="LINE" value={data.contact.line} onChange={(v) => edit(d => d.contact.line = v)} mono />
            </React.Fragment>
          )}
        </div>

        <div style={{ padding: "12px 18px", borderTop: "1px solid var(--border-subtle)", background: "var(--surface-card)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11.5, color: "var(--success-600)", display: "flex", alignItems: "center", gap: 5 }}><Ico n="check-circle-2" s={13} />{t("บันทึกอัตโนมัติ", "Saved automatically")}</span>
          <Button size="sm" variant="ghost" leftIcon={<Ico n="rotate-ccw" s={14} />} onClick={() => { if (confirm(t("รีเซ็ตเนื้อหาทั้งหมดเป็นค่าเริ่มต้น?", "Reset all content to defaults?"))) { S.reset(); onChange(S.defaults()); } }}>{t("รีเซ็ตทั้งหมด", "Reset all")}</Button>
        </div>
      </aside>
    </React.Fragment>
  );
}
window.NobleCMS = NobleCMS;
