// The Noble — Services grid + Showcase + Why-us + CTA band
function NobleSections({ lang, go, data }) {
  const { SectionHeading, ServiceCard, StatBlock, Button } = window.TheNobleDesignSystem_288042;
  const C = window.NobleContent; // why-us copy (not CMS-managed)
  const Ico = ({ n, s = 24 }) => React.createElement(window.NobleIco, { n, s });
  const wrap = { maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--container-pad)" };
  const SH = data.servicesHead, SC = data.showcase;

  return (
    <React.Fragment>
      {/* Services */}
      <section id="services" style={{ position: "relative", overflow: "hidden", background: "var(--surface-page)", padding: "var(--section-gap) 0" }}>
        <div style={{ ...wrap, position: "relative" }}>
          <SectionHeading align="center" eyebrow={SH.eyebrow[lang]} title={SH.title[lang]} description={SH.sub[lang]} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
            {data.services.map((s, i) => (
              <ServiceCard key={i} icon={<Ico n={s.icon} />} image={s.image} title={s.title[lang]} description={s.desc[lang]} cta={lang === "th" ? "ดูรายละเอียด" : "Learn more"} />
            ))}
          </div>
        </div>
      </section>

      {/* Showcase — real imagery + proof */}
      <section style={{ background: "var(--surface-card)", padding: "var(--section-gap) 0" }}>
        <div style={{ ...wrap, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-xl)", aspectRatio: "4 / 3" }}>
              <img src={SC.image1} alt="The Noble engineers on site" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", right: -18, bottom: -18, width: 150, borderRadius: "var(--radius-lg)", overflow: "hidden", border: "5px solid var(--surface-card)", boxShadow: "var(--shadow-lg)", aspectRatio: "1 / 1" }}>
              <img src={SC.image2} alt="Data center aisle" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow={SC.eyebrow[lang]} title={SC.title[lang]} description={SC.desc[lang]} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 32 }}>
              {data.stats.map((s, i) => <StatBlock key={i} value={s.value} label={s.label[lang]} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Why us — dark band */}
      <section id="about" style={{ position: "relative", overflow: "hidden", background: "var(--ink-900)", padding: "var(--section-gap) 0" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 70% at 15% 0%, rgba(26,114,214,0.28) 0%, rgba(26,114,214,0) 60%)" }}></div>
        <div style={{ ...wrap, position: "relative" }}>
          <SectionHeading align="center" eyebrow={C.whyHead.eyebrow[lang]} title={<span style={{ color: "#fff" }}>{C.whyHead.title[lang]}</span>} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginTop: 48 }}>
            {C.why.map((w, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)", padding: 26 }}>
                <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", background: "var(--gradient-brand)", marginBottom: 18, boxShadow: "var(--shadow-glow-blue)" }}>
                  <Ico n={w.icon} s={22} />
                </div>
                <h3 style={{ margin: "0 0 8px", fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "#fff" }}>{w.title[lang]}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--ink-300)" }}>{w.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
window.NobleSections = NobleSections;
