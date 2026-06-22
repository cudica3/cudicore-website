export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  tagline?: string;
  url: string;
  creator?: string;
  location?: string;
  logo: {
    horizontal: string;
    vertical: string;
    icon: string;
  };
  social: SocialLink[];
  contact?: {
    email?: string;
    phone?: string;
  };
}