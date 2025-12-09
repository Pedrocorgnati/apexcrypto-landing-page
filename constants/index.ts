export const images = {
  apexcryptoLogo: "/assets/branding/apexcrypto-logo.svg",
  check: "/assets/icons/check.svg",
  loading: "/assets/visuals/loading.png",
  navBackdrop: "/assets/visuals/background.png",
  notification1: "/assets/notification/image-1.png",
  notification2: "/assets/notification/image-2.png",
  notification3: "/assets/notification/image-3.png",
  notification4: "/assets/notification/image-4.png",
  benefitCard1: "/assets/benefits/card-1.svg",
  benefitCard2: "/assets/benefits/card-2.svg",
  benefitCard3: "/assets/benefits/card-3.svg",
  benefitCard4: "/assets/benefits/card-4.svg",
  benefitCard5: "/assets/benefits/card-5.svg",
  benefitCard6: "/assets/benefits/card-6.svg",
  benefitIcon1: "/assets/benefits/icon-1.svg",
  benefitIcon2: "/assets/benefits/icon-2.svg",
  benefitIcon3: "/assets/benefits/icon-3.svg",
  benefitIcon4: "/assets/benefits/icon-4.svg",
  benefitImage: "/assets/benefits/image-2.png",
  discordBlack: "/assets/socials/discord.svg",
  facebook: "/assets/socials/facebook.svg",
  instagram: "/assets/socials/instagram.svg",
  telegram: "/assets/socials/telegram.svg",
  twitter: "/assets/socials/twitter.svg",
  featurePulse: "/assets/icons/feature-pulse.svg",
  featureChart: "/assets/icons/feature-chart.svg",
  featureShield: "/assets/icons/feature-shield.svg",
  featurePlay: "/assets/icons/feature-play.svg",
};

export enum SectionAnchor {
  Hero = "#hero",
  Features = "#features",
  Pricing = "#pricing",
  Signup = "#signup",
  Login = "#login",
}

export enum PlanId {
  Explorer = "explorer",
  Pro = "pro",
  Elite = "elite",
}

export type NavigationItem = {
  id: string;
  title: string;
  url: SectionAnchor;
  onlyMobile?: boolean;
};

export type PricingPlan = {
  id: PlanId;
  title: string;
  description: string;
  price?: number;
  features: string[];
};

const {
  apexcryptoLogo,
  check,
  notification2,
  notification3,
  notification4,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage,
  discordBlack,
  facebook,
  instagram,
  telegram,
  twitter,
  featurePulse,
  featureChart,
  featureShield,
  featurePlay,
} = images;

export const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "Programs",
    url: SectionAnchor.Features,
  },
  {
    id: "1",
    title: "Plans",
    url: SectionAnchor.Pricing,
  },
  {
    id: "4",
    title: "New account",
    url: SectionAnchor.Signup,
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Log in",
    url: SectionAnchor.Login,
    onlyMobile: true,
  },
];

export const heroIcons = [featurePulse, featureChart, featureShield, featurePlay];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  apexcryptoLogo,
  apexcryptoLogo,
  apexcryptoLogo,
  apexcryptoLogo,
  apexcryptoLogo,
];

export const pricing: PricingPlan[] = [
  {
    id: PlanId.Explorer,
    title: "Explorer",
    description: "Starter access to essentials and market context.",
    price: 0,
    features: [
      "3 guided tracks to learn the basics",
      "Weekly market pulse email",
      "Community access with moderated channels",
    ],
  },
  {
    id: PlanId.Pro,
    title: "Pro",
    description: "Full program for active investors who want signals and coaching.",
    price: 49,
    features: [
      "All tracks and premium class library",
      "On-chain and technical alerts filtered by risk",
      "Group mentorships and monthly portfolio reviews",
      "Portfolio simulator and suggested rebalancing",
    ],
  },
  {
    id: PlanId.Elite,
    title: "Elite",
    description: "Private desk for serious capital looking for custom guidance.",
    price: 149,
    features: [
      "1:1 strategy sessions and private desk access",
      "Weekly deep-dive market reports and model portfolios",
      "Priority support, onboarding, and execution reviews",
      "Custom alert filters and white-glove setup",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Opportunity radar",
    text: "Institutional flows, breakouts, and on-chain metrics translated into clear alerts.",
    backgroundUrl: "/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage,
  },
  {
    id: "1",
    title: "Guided plans",
    text: "Step-by-step sequences to build positions, protect capital, and capture upside.",
    backgroundUrl: "/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage,
    light: true,
  },
  {
    id: "2",
    title: "High-performance community",
    text: "Mentors and advanced students validate decisions and share winning setups.",
    backgroundUrl: "/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage,
  },
  {
    id: "3",
    title: "Practical risk management",
    text: "Ready-to-use sizing, stops, and rebalancing models for different profiles.",
    backgroundUrl: "/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage,
    light: true,
  },
  {
    id: "4",
    title: "Assisted execution",
    text: "Live rooms and individual feedback on every major market move.",
    backgroundUrl: "/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage,
  },
  {
    id: "5",
    title: "Living content",
    text: "Playbooks reviewed weekly based on current crypto market conditions.",
    backgroundUrl: "/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://instagram.com",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://telegram.org",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://facebook.com",
  },
];
