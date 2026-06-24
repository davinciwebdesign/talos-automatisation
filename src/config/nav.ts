import { services } from '../data/services';
import { sectors } from '../data/sectors';

export interface NavLink {
  label: string;
  href: string;
  desc?: string;
  icon?: string;
}

export const servicesMenu: NavLink[] = services.map((s) => ({
  label: s.navLabel,
  href: `/services/${s.slug}/`,
  desc: s.megaDesc,
  icon: s.icon,
}));

export const sectorsMenu: NavLink[] = sectors.map((s) => ({
  label: s.navLabel,
  href: `/secteurs/${s.slug}/`,
  desc: s.megaDesc,
  icon: s.icon,
}));

// Primary nav (left zone). Mega-menus for Services & Secteurs.
export const primaryNav = [
  { label: 'Services', href: '/services/', menu: 'services' as const },
  { label: 'Secteurs', href: '/secteurs/', menu: 'sectors' as const },
  { label: 'Méthode', href: '/methode/' },
  { label: 'Cas client', href: '/cas-client/' },
  { label: 'À propos', href: '/a-propos/' },
];
