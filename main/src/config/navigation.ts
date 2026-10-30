export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const headerNav: readonly NavItem[] = [
  { label: "Projects", href: "/projects" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/15IFprveGBnG0ORohpRr8SAJG1Qvv2rDB/view?usp=sharing",
    external: true,
  },
];

export const moreNav: readonly NavItem[] = [];

export const footerNav: readonly NavItem[] = [
  { label: "Projects", href: "/projects" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/15IFprveGBnG0ORohpRr8SAJG1Qvv2rDB/view?usp=sharing",
    external: true,
  },
];

export const commandItems = [
  ...footerNav.map((item) => ({ label: item.label, href: item.href, external: item.external })),
  { label: "X", href: "https://x.com/mirutuj", external: true },
  { label: "GitHub", href: "https://github.com/rutujdhawale", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rutujdhawale/", external: true },
  { label: "Email", href: "mailto:rutujdhawale@gmail.com", external: true },
];
