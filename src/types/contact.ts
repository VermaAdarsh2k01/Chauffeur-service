export interface ContactDetail {
  iconName: string;
  title: string;
  info: string;
  subInfo?: string;
}

export interface Feature {
  iconName: string;
  title: string;
  description: string;
}

export interface WhyChooseUs {
  title: string;
  features: Feature[];
}

export interface Location {
  address: string;
  city: string;
  mapsUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface LocationAndSocial {
  sectionTitle: string;
  location: Location;
  socialMediaText: string;
  socialLinks: SocialLink[];
}

export interface BackgroundImages {
  pattern1Green?: {
    src: string;
    alt: string;
  };
  pattern2Green?: {
    src: string;
    alt: string;
  };
  pattern1?: {
    src: string;
    alt: string;
  };
  pattern2?: {
    src: string;
    alt: string;
  };
}

export interface ContactData {
  title: string;
  contactDetails: ContactDetail[];
  whyChooseUs: WhyChooseUs;
  locationAndSocial: LocationAndSocial;
  backgroundImages?: BackgroundImages;
}

export interface ContactInfoProps {
  data?: ContactData;
}
