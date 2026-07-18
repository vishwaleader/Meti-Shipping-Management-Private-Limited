import {
  Anchor,
  Ship,
  Container,
  Globe2,
  ShieldCheck,
  Users,
  Compass,
  Wrench,
  FileCheck2,
  Clock3,
  Award,
  Waves,
  Warehouse,
} from 'lucide-react'

export const COMPANY = {
  name: 'Meti Shipping',
  legalName: 'Meti Shipping Management Private Limited',
  tagline: 'Reliable Shipping & Storage Solutions Since 2008',
  founded: 2008,
  email: 'operations@metishipping.co.in',
  phone: '+91 832 251 0808',
  address: 'Vasco Da Gama, Goa - 403802, India',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES = [
  {
    icon: Container,
    title: 'Freight Forwarding',
    description:
      'Seamless international air and sea freight forwarding with real-time tracking and multimodal delivery.',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Storage',
    description:
      'Secure, climate-controlled, and customs-bonded warehousing configurations for all cargo types.',
  },
  {
    icon: Anchor,
    title: 'Cargo Handling',
    description:
      'Safe port terminal processing, heavy-lift management, and container destuffing under strict ISO guidelines.',
  },
  {
    icon: Ship,
    title: 'Vessel Chartering',
    description:
      'End-to-end chartering of dry bulk, tankers, and container carriers tailored to your cargo profile.',
  },
  {
    icon: FileCheck2,
    title: 'Customs Clearance',
    description:
      'Fast-track documentation handling, tariff auditing, and customs declarations to ensure smooth port transitions.',
  },
  {
    icon: Globe2,
    title: 'Supply Chain Management',
    description:
      'Advanced logistics modeling, route assessment, and digital tracking to optimize your transport workflows.',
  },
]

export const WHY_US = [
  {
    icon: Award,
    title: 'Proven Legacy',
    description:
      'Incorporated in 2008, we have managed cargo transport and logistics through changing global markets.',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Safety',
    description:
      'Zero-incident culture backed by ISM-certified systems and rigorous third-party audits.',
  },
  {
    icon: Globe2,
    title: 'Global Network',
    description:
      'Agents and partners in major global ports keep your cargo and vessels moving without friction.',
  },
  {
    icon: Clock3,
    title: '24/7 Operations Desk',
    description:
      'Round-the-clock operations center providing live vessel tracking and instant dispatch support.',
  },
]

export const STATS = [
  { value: 18, suffix: '+', label: 'Years of Excellence' },
  { value: 200, suffix: '+', label: 'Vessels Handled' },
  { value: 4, suffix: '', label: 'Major Warehouses' },
  { value: 30, suffix: '+', label: 'Countries Served' },
]

export const TESTIMONIALS = [
  {
    quote:
      'Meti Shipping has managed our supply chain routes for six years. Their operational discipline and transparency are unmatched in the industry.',
    name: 'Rajesh Menon',
    role: 'Director of Marine Operations, Energy Sector',
  },
  {
    quote:
      'From chartering to customs, they handle everything with precision. Our cargo has never moved faster or with fewer surprises.',
    name: 'Sarah Whitfield',
    role: 'Head of Global Logistics, Commodities Trading',
  },
  {
    quote:
      'A true partner — their 24/7 operations desk resolved a port congestion crisis overnight and saved us weeks of delay.',
    name: 'Ahmed Al-Farsi',
    role: 'Fleet Manager, Gulf Shipping Group',
  },
]

export const FOOTER_ICONS = { Compass, Waves }
