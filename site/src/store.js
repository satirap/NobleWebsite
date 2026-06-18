// The Noble — central editable content store.
import { NobleContent as C } from './content.js';
import { NoblePhotos as P } from './photos.js';

const KEY = "noble_cms_content";
const clone = (o) => JSON.parse(JSON.stringify(o));

function defaults() {
  return {
    brand: { name: "THE NOBLE", tagline: "Glow together" },
    hero: {
      eyebrow: C.hero.eyebrow,
      title: clone(C.hero.title),
      sub: clone(C.hero.sub),
      cta1: clone(C.hero.cta1),
      cta2: clone(C.hero.cta2),
      image: P.url("serverRacks", 1600),
    },
    stats: C.stats.map((s) => ({ value: s.value, label: clone(s.label) })),
    servicesHead: clone(C.servicesHead),
    services: C.services.map((s, i) => ({
      icon: s.icon, title: clone(s.title), desc: clone(s.desc),
      image: P.url(P.serviceKeys[i], 800),
    })),
    showcase: {
      eyebrow: { th: "ผลงานของเรา", en: "Our work" },
      title: { th: "ติดตั้งจริง ดูแลจริง", en: "Installed for real, maintained for real" },
      desc: {
        th: "ทีมงานลงหน้างานจริง ดูแลระบบของหน่วยงานภาครัฐและองค์กรชั้นนำ",
        en: "Our team works on site — caring for the systems of leading public and private organisations.",
      },
      image1: P.url("engineers", 1100),
      image2: P.url("rackAisle", 500),
    },
    clients: {
      eyebrow: { th: "ลูกค้าอ้างอิง", en: "Trusted by" },
      title: { th: "หน่วยงานที่ไว้วางใจเรา", en: "Organisations that trust us" },
      sub: {
        th: "The Noble ได้รับความไว้วางใจจากหน่วยงานภาครัฐและเอกชนชั้นนำ และเป็นพันธมิตรกับแบรนด์เทคโนโลยีระดับโลก",
        en: "Trusted by leading public & private organisations, partnered with world-class technology brands.",
      },
      items: [
        { name: "Cisco", sector: "partner", logo: "" },
        { name: "Ubiquiti", sector: "partner", logo: "" },
        { name: "HP", sector: "partner", logo: "" },
        { name: "Microsoft", sector: "partner", logo: "" },
        { name: "Fortinet", sector: "partner", logo: "" },
        { name: "Synology", sector: "partner", logo: "" },
        { name: "Hikvision", sector: "partner", logo: "" },
        { name: "หน่วยงานราชการ", sector: "gov", logo: "" },
        { name: "องค์กรปกครองส่วนท้องถิ่น", sector: "gov", logo: "" },
        { name: "โรงพยาบาลรัฐ", sector: "gov", logo: "" },
        { name: "สถาบันการศึกษา", sector: "gov", logo: "" },
        { name: "รัฐวิสาหกิจ", sector: "gov", logo: "" },
        { name: "โรงงานอุตสาหกรรม", sector: "private", logo: "" },
        { name: "อาคารสำนักงาน", sector: "private", logo: "" },
        { name: "คอนโดมิเนียม", sector: "private", logo: "" },
        { name: "ธุรกิจค้าปลีก", sector: "private", logo: "" },
        { name: "เครือโรงแรม", sector: "private", logo: "" },
      ],
      worksHead: {
        eyebrow: { th: "ผลงานที่ผ่านมา", en: "Recent work" },
        title: { th: "ตัวอย่างโครงการที่เราภาคภูมิใจ", en: "Projects we are proud of" },
        sub: { th: "ตัวอย่างงานติดตั้งและดูแลระบบไอทีให้องค์กรภาครัฐและเอกชน", en: "A sample of IT systems we've deployed and maintained for public & private organisations." },
      },
      works: [
        { title: { th: "วางระบบเซิร์ฟเวอร์และ NAS", en: "Server & NAS deployment" }, category: { th: "Computer & Server", en: "Computer & Server" }, location: { th: "หน่วยงานราชการ · กรุงเทพฯ", en: "Government office · Bangkok" }, image: P.url("serverRacks", 800) },
        { title: { th: "เครือข่าย LAN / Wi-Fi ทั้งอาคาร", en: "Building-wide LAN / Wi-Fi" }, category: { th: "Network", en: "Network" }, location: { th: "โรงงานอุตสาหกรรม · สมุทรปราการ", en: "Factory · Samut Prakan" }, image: P.url("blueCables", 800) },
        { title: { th: "ระบบกล้องวงจรปิด 128 จุด", en: "128-camera CCTV system" }, category: { th: "CCTV", en: "CCTV" }, location: { th: "คอนโดมิเนียม · กรุงเทพฯ", en: "Condominium · Bangkok" }, image: P.url("cameraWall", 800) },
        { title: { th: "ระบบเข้า-ออกด้วยใบหน้า", en: "Face-scan access control" }, category: { th: "Access Control", en: "Access Control" }, location: { th: "อาคารสำนักงาน · นนทบุรี", en: "Office building · Nonthaburi" }, image: P.url("accessCard", 800) },
        { title: { th: "สัญญาดูแลระบบ (MA) รายปี", en: "Annual maintenance (MA)" }, category: { th: "Maintenance", en: "Maintenance" }, location: { th: "เครือธุรกิจค้าปลีก · ทั่วประเทศ", en: "Retail group · nationwide" }, image: P.url("rackAisle", 800) },
        { title: { th: "IT Support ประจำสถานที่", en: "On-site IT support" }, category: { th: "IT Support", en: "IT Support" }, location: { th: "องค์กรเอกชน · กรุงเทพฯ", en: "Enterprise · Bangkok" }, image: P.url("team", 800) },
      ],
    },
    contact: {
      eyebrow: clone(C.contact.eyebrow),
      title: clone(C.contact.title),
      addr: C.contact.addr,
      phone: C.contact.phone,
      email: C.contact.email,
      line: C.contact.line,
    },
  };
}

function merge(base, over) {
  if (Array.isArray(base)) return Array.isArray(over) ? over : base;
  if (base && typeof base === "object") {
    const out = clone(base);
    if (over && typeof over === "object") {
      for (const k of Object.keys(over)) out[k] = merge(base[k] !== undefined ? base[k] : over[k], over[k]);
    }
    return out;
  }
  return over !== undefined ? over : base;
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return merge(defaults(), JSON.parse(raw));
  } catch (e) {}
  return defaults();
}

export const NobleStore = {
  KEY, defaults, load,
  save(data) { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {} },
  reset() { try { localStorage.removeItem(KEY); } catch (e) {} },
  clone,
};
