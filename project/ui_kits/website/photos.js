// The Noble — curated free imagery (Unsplash, verified loading).
// Commercial-use, no attribution required. Cool corporate-tech vibe.
// Swap an ID here to change a photo everywhere it's used.
(function () {
  const u = (id, w = 1200) =>
    `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

  const ID = {
    serverRacks:   "1558494949-ef010cbdcc31", // dark server racks, cabling
    blueCables:    "1544197150-b99a580bb7a8", // blue ethernet patch cables
    redCables:     "1606765962248-7ff407b51667", // rows of red network cables
    netBurst:      "1597733336794-12d05021d510", // blue data / fibre glow
    circuit:       "1591405351990-4726e331f141", // hardware macro
    cameraWall:    "1557597774-9d273605dfa9", // wall of CCTV cameras
    accessCard:    "1563013544-824ae1b704d3", // hand / card / laptop
    engineers:     "1573164713988-8665fc963095", // people in a data center
    team:          "1522071820081-009f0129c71c", // team at laptops
    rackAisle:     "1450101499163-c8848c66ca85", // data-center aisle
    circuitBoard:  "1518770660439-4636190af475", // circuit board macro
  };

  window.NoblePhotos = {
    u, ID,
    url: (key, w) => u(ID[key], w),
    // per-service thumbnails, index-aligned with NobleContent.services
    serviceKeys: ["serverRacks", "blueCables", "cameraWall", "accessCard", "redCables", "team"],
  };

  // ---- Mini CMS: per-service image overrides, persisted in localStorage ----
  const CMS_KEY = "noble_cms_service_images";
  const serviceKeys = window.NoblePhotos.serviceKeys;
  const reader = () => {
    try { return JSON.parse(localStorage.getItem(CMS_KEY)) || {}; }
    catch (e) { return {}; }
  };
  const writer = (obj) => {
    try { localStorage.setItem(CMS_KEY, JSON.stringify(obj)); } catch (e) {}
  };
  Object.assign(window.NoblePhotos, {
    // curated picker library (label + url)
    library: [
      ["serverRacks", "ห้องเซิร์ฟเวอร์"],
      ["blueCables", "สายแลนน้ำเงิน"],
      ["redCables", "สายเครือข่ายแดง"],
      ["netBurst", "ดาต้า / ไฟเบอร์"],
      ["circuit", "ฮาร์ดแวร์"],
      ["cameraWall", "กล้องวงจรปิด"],
      ["accessCard", "Access Control"],
      ["engineers", "วิศวกรหน้างาน"],
      ["team", "ทีมงาน"],
      ["rackAisle", "ดาต้าเซ็นเตอร์"],
      ["circuitBoard", "แผงวงจร"],
    ].map(([key, label]) => ({ key, label, url: u(ID[key], 800), thumb: u(ID[key], 240) })),
    overrides: reader,
    serviceImage(i) {
      const ov = reader();
      return ov[i] || u(ID[serviceKeys[i]], 800);
    },
    setServiceImage(i, url) { const ov = reader(); ov[i] = url; writer(ov); },
    clearServiceImage(i) { const ov = reader(); delete ov[i]; writer(ov); },
    resetServiceImages() { try { localStorage.removeItem(CMS_KEY); } catch (e) {} },
    isOverridden(i) { return reader()[i] != null; },
  });

  // React-safe Lucide icon: the SVG is injected imperatively into a span that
  // React never reconciles, so re-renders (lang/toggle) don't crash on the
  // <i>-to-<svg> swap that lucide.createIcons() performs.
  window.NobleIco = function NobleIco({ n, s = 18, style }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el || !window.lucide) return;
      el.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", n);
      i.setAttribute("width", s);
      i.setAttribute("height", s);
      el.appendChild(i);
      try { window.lucide.createIcons(); } catch (e) {}
    }, [n, s]);
    return React.createElement("span", {
      ref,
      style: Object.assign({ display: "inline-flex", width: s, height: s }, style || {}),
    });
  };
})();
