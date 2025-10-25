export type MediaSource = {
  src: string;
  type: string;
};

export type ResponsiveImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholder?: string;
};

export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "link";
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type HeroSection = {
  id: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  description: string;
  video: {
    poster: string;
    sources: MediaSource[];
  };
  ctas: Cta[];
  meta: {
    location: string;
    coordinates: string;
    weatherTagline: string;
  };
};

export type ParallaxSlice = {
  id: string;
  title: string;
  subtitle: string;
  copy: string;
  media: ResponsiveImage;
  depth: number;
};

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  readingTime: string;
  category: string;
  image: ResponsiveImage;
  publishedAt: string;
};

export type Offering = {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: ResponsiveImage;
  startingRate: string;
  tag: string;
};

export type ExperienceHighlight = {
  id: string;
  title: string;
  copy: string;
  icon: string;
};

export type FooterSection = {
  title: string;
  items: { label: string; href: string }[];
};

export type SiteContent = {
  meta: {
    siteName: string;
    mission: string;
    tagline: string;
    contactEmail: string;
    phone: string;
    address: string;
    social: { platform: string; href: string }[];
  };
  navigation: NavigationItem[];
  hero: HeroSection;
  parallaxSlices: ParallaxSlice[];
  highlights: ExperienceHighlight[];
  articles: Article[];
  offerings: Offering[];
  footer: {
    sections: FooterSection[];
    legal: string;
    copyright: string;
  };
};

