export const email = "tanishqojha10@gmail.com";

const all = [
  { label: "GitHub", href: "https://github.com/tanishqojha" },
  { label: "LinkedIn", href: "" }, // add profile URL here and the icon appears everywhere
  { label: "X", href: "" }, // add profile URL here and the icon appears everywhere
  { label: "Email", href: `mailto:${email}` },
];

// Links without a URL are not rendered: no dead anchors.
export const socials = all.filter((s) => s.href);
