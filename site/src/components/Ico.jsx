import { Server, Network, Camera, ScanFace, ShieldCheck, Headset, ArrowRight, Phone, ChevronDown, MapPin, Mail, MessageCircle, User, Building2, Send, Plus, Trash2, RotateCcw, CheckCircle2, SlidersHorizontal, X, Languages, Image, Link, Upload, Grid3x3, BadgeCheck, PanelTop, LayoutGrid, BarChart3, Briefcase, Check, Zap, HeartPulse, Layers, Users, Box } from 'lucide-react';

const ICONS = {
  'server': Server,
  'network': Network,
  'cctv': Camera,
  'scan-face': ScanFace,
  'shield-check': ShieldCheck,
  'headset': Headset,
  'arrow-right': ArrowRight,
  'phone': Phone,
  'chevron-down': ChevronDown,
  'map-pin': MapPin,
  'mail': Mail,
  'message-circle': MessageCircle,
  'user': User,
  'building-2': Building2,
  'send': Send,
  'plus': Plus,
  'trash-2': Trash2,
  'rotate-ccw': RotateCcw,
  'check-circle-2': CheckCircle2,
  'sliders-horizontal': SlidersHorizontal,
  'x': X,
  'languages': Languages,
  'image': Image,
  'link': Link,
  'upload': Upload,
  'grid-3x3': Grid3x3,
  'badge-check': BadgeCheck,
  'panel-top': PanelTop,
  'layout-grid': LayoutGrid,
  'bar-chart-3': BarChart3,
  'briefcase': Briefcase,
  'check': Check,
  'zap': Zap,
  'heart-pulse': HeartPulse,
  'layers': Layers,
  'users': Users,
  'box': Box,
};

export default function Ico({ n, s = 18 }) {
  const C = ICONS[n];
  return C ? <C size={s} strokeWidth={1.75} /> : null;
}
