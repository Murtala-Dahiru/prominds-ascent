// Centralised site config — placeholders to swap later
export const site = {
  name: "ProMinds Education Group",
  short: "ProMinds",
  tagline: "Building Academic Excellence for the Next Generation.",
  description:
    "Premium academic support, tutorials, career guidance, and educational systems designed to help students and families achieve measurable success.",
  email: "hello@prominds.education",
  phone: "+234 800 000 0000",
  whatsapp: "2348000000000",
  whatsappUrl: "https://wa.me/2348000000000",
  instagram: "https://instagram.com/prominds.education",
  telegram: "https://t.me/prominds_education",
  address: "Lagos, Nigeria",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    label: "Divisions",
    children: [
      { to: "/divisions/tutorials", label: "Academic Tutorials" },
      { to: "/divisions/career", label: "Career Services" },
      { to: "/divisions/academic-support", label: "Academic Support" },
      { to: "/divisions/parents", label: "Parent Education" },
    ],
  },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;
