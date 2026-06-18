// The Noble — curated free imagery (Unsplash, verified loading).
const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const ID = {
  serverRacks:   "1558494949-ef010cbdcc31",
  blueCables:    "1544197150-b99a580bb7a8",
  redCables:     "1606765962248-7ff407b51667",
  netBurst:      "1597733336794-12d05021d510",
  circuit:       "1591405351990-4726e331f141",
  cameraWall:    "1557597774-9d273605dfa9",
  accessCard:    "1563013544-824ae1b704d3",
  engineers:     "1573164713988-8665fc963095",
  team:          "1522071820081-009f0129c71c",
  rackAisle:     "1450101499163-c8848c66ca85",
  circuitBoard:  "1518770660439-4636190af475",
};

const serviceKeys = ["serverRacks", "blueCables", "cameraWall", "accessCard", "redCables", "team"];

const CMS_KEY = "noble_cms_service_images";
const reader = () => {
  try { return JSON.parse(localStorage.getItem(CMS_KEY)) || {}; }
  catch (e) { return {}; }
};
const writer = (obj) => {
  try { localStorage.setItem(CMS_KEY, JSON.stringify(obj)); } catch (e) {}
};

export const NoblePhotos = {
  u,
  ID,
  url: (key, w) => u(ID[key], w),
  serviceKeys,
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
};
