// The Noble — Hero with glow + dashboard mock
function NobleHero({ lang, go, data }) {
  const { Button, StatBlock } = window.TheNobleDesignSystem_288042;
  const H = data.hero;
  const Ico = ({ n, s = 18 }) => React.createElement(window.NobleIco, { n, s });

  return (
    <section id="home" style={{ position: "relative", overflow: "hidden", background: "var(--ink-900)" }}>
      {/* photographic backdrop */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${H.image})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.18 }}></div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(11,18,32,0.6) 0%, rgba(11,18,32,0.82) 60%, var(--ink-900) 100%)" }}></div>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 90% at 70% -10%, rgba(26,114,214,0.35) 0%, rgba(26,114,214,0) 60%)" }}></div>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "44px 44px", maskImage: "radial-gradient(80% 80% at 50% 0%, #000 30%, transparent 75%)" }}></div>
      <div style={{ position: "relative", maxWidth: "var(--container-wide)", margin: "0 auto", padding: "clamp(3.5rem,7vw,6rem) var(--container-pad)", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 48, alignItems: "center" }}>
        <div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px 6px 8px", borderRadius: "var(--radius-pill)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", fontSize: 13, fontWeight: 500, marginBottom: 22 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "2px 9px", borderRadius: "var(--radius-pill)", background: "var(--gradient-signal)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11, letterSpacing: "0.04em" }}>NEW</span>
            {H.eyebrow}
          </span>
          <h1 style={{ margin: "0 0 20px", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-display-xl)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "#fff", whiteSpace: "pre-line" }}>
            {H.title[lang]}
          </h1>
          <p style={{ margin: "0 0 30px", fontSize: "var(--text-lg)", lineHeight: 1.65, color: "var(--ink-300)", maxWidth: 540 }}>
            {H.sub[lang]}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button size="lg" variant="primary" rightIcon={<Ico n="arrow-right" />} onClick={() => go("services")}>{H.cta1[lang]}</Button>
            <Button size="lg" variant="secondary" leftIcon={<Ico n="phone" />} onClick={() => go("contact")} style={{ background: "rgba(255,255,255,0.06)", color: "#fff", borderColor: "rgba(255,255,255,0.22)" }}>{H.cta2[lang]}</Button>
          </div>
          <div style={{ display: "flex", gap: 36, marginTop: 40, flexWrap: "wrap" }}>
            {data.stats.slice(0, 3).map((s, i) => <StatBlock key={i} value={s.value} label={s.label[lang]} tone="light" />)}
          </div>
        </div>

        {/* NOC monitor mock */}
        <div style={{ position: "relative" }}>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius-xl)", padding: 18, boxShadow: "0 30px 80px rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", fontFamily: "var(--font-mono)", fontSize: 12 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--success-600)", boxShadow: "0 0 8px var(--success-600)" }}></span>
                noble-noc · live
              </div>
              <div style={{ display: "flex", gap: 6 }}>{[0,1,2].map(i => <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.2)" }}></span>)}</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { n: "server", k: "Servers", v: "42 / 42", t: "var(--success-600)", s: "all healthy" },
                { n: "network", k: "Network", v: "1.2 Gbps", t: "var(--blue-400)", s: "throughput" },
                { n: "cctv", k: "CCTV", v: "128 cams", t: "var(--success-600)", s: "recording" },
                { n: "shield-check", k: "MA tickets", v: "3 open", t: "var(--warning-600)", s: "< 4h SLA" },
              ].map((m, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius-md)", padding: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "var(--ink-300)", fontSize: 12, marginBottom: 10 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Ico n={m.n} s={14} />{m.k}</span>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: m.t }}></span>
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 20, fontWeight: 600, color: "#fff" }}>{m.v}</div>
                  <div style={{ fontSize: 11, color: "var(--ink-400)" }}>{m.s}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius-md)", padding: "12px 14px", display: "flex", alignItems: "flex-end", gap: 5, height: 64 }}>
              {[40,55,48,62,58,72,66,80,75,88,82,95,90,70,84].map((h, i) => (
                <span key={i} style={{ flex: 1, height: h + "%", borderRadius: 2, background: "linear-gradient(var(--blue-400), var(--blue-700))" }}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.NobleHero = NobleHero;
