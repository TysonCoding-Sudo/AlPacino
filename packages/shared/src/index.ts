export const company = {
  name: "AI Pacino (Pty) Ltd",
  shortName: "AI Pacino",
  registration: "2015/335068/07",
  certification: "SABS ISO 9001 Certified",
  tagline: "Built. Connected.",
  address: "26 Logan Avenue, Highveld, 0157, Gauteng",
  country: "South Africa",
  footprint: "National footprint — operating South Africa-wide",
  phones: ["064 662 2634", "064 662 2335", "082 657 9345"],
  phonePrimary: "064 662 2634",
  fax: "086 608 2335",
  whatsapp: "27646622634",
  email: "Rodneybitsi@gmail.com",
  openingHours: "Mon – Fri · 08:00 – 17:00",
} as const;

export type DivisionId = "construction" | "it";

export interface Division {
  id: DivisionId;
  label: string;
  shortLabel: string;
  description: string;
  personality: string;
  path: string;
  meta: {
    title: string;
    description: string;
  };
}

export const divisions: Record<DivisionId, Division> = {
  construction: {
    id: "construction",
    label: "Construction",
    shortLabel: "Construction",
    description:
      "Civil engineering and building services delivered with technical expertise, practical experience and a commitment to safety, sustainability and quality workmanship.",
    personality: "rugged — built on concrete delivery",
    path: "/construction",
    meta: {
      title: "Construction | AI Pacino (Pty) Ltd",
      description:
        "Roadworks, water infrastructure, electrical engineering, HVAC commissioning and maintenance, landscaping and fencing — delivered to the highest standards of workmanship and professionalism.",
    },
  },
  it: {
    id: "it",
    label: "ICT Solutions",
    shortLabel: "ICT Solutions",
    description:
      "ICT equipment supply, installation and support — a full lifecycle technology partner covering networks, systems, software, cloud and cybersecurity across South Africa.",
    personality: "clean — precise and reliable",
    path: "/it",
    meta: {
      title: "ICT Solutions | AI Pacino (Pty) Ltd",
      description:
        "From assessment and supply to installation, integration and ongoing support — end-to-end ICT solutions built around customer focus, quality and reliability.",
    },
  },
};

export interface Service {
  title: string;
  blurb: string;
}

export const constructionServices: Service[] = [
  {
    title: "Roadworks & Civil Paving",
    blurb:
      "Road construction, rehabilitation and paving delivered with efficient planning, quality surfacing and a strong focus on safety at every phase.",
  },
  {
    title: "Water Infrastructure",
    blurb:
      "Water and sewer reticulation, pipelines, drainage and bulk infrastructure — built to last and operated responsibly.",
  },
  {
    title: "Electrical Engineering",
    blurb:
      "Electrical installations, distribution and engineering services for commercial, industrial and municipal projects — executed by a qualified technical team.",
  },
  {
    title: "HVAC Commissioning & Maintenance",
    blurb:
      "Commissioning, maintenance and repair of heating, ventilation and air-conditioning systems on an as-and-when-required basis.",
  },
  {
    title: "Landscaping",
    blurb:
      "Hard and soft landscaping that turns civic, commercial and residential spaces into practical, presentable environments.",
  },
  {
    title: "Fencing & Perimeter",
    blurb:
      "Perimeter fencing, security barriers and access infrastructure that protect people, plant and property.",
  },
];

export const constructionValues = [
  {
    title: "Safety",
    blurb:
      "Every site runs on disciplined health and safety standards — people first, always.",
  },
  {
    title: "Sustainability",
    blurb:
      "Responsible use of materials, water and energy so what we build remains viable for decades.",
  },
  {
    title: "Workmanship",
    blurb:
      "The highest standards of workmanship and professionalism on every project, big or small.",
  },
  {
    title: "Efficiency",
    blurb:
      "On-time delivery driven by combined technical expertise and practical site experience.",
  },
];

export const constructionTrackRecord = {
  client: "City of Ekurhuleni",
  summary:
    "Appointed to the Panel of Electrical Engineers with responsibility for HVAC commissioning and maintenance — operating on an as-and-when-required basis.",
  note:
    "Municipal panel appointment confirms the technical credibility and compliance capacity of the construction division.",
};

export const itServices: Service[] = [
  {
    title: "IT Support Services",
    blurb:
      "Responsive helpdesk, remote and on-site support that keeps your systems running and your people productive.",
  },
  {
    title: "Network Solutions",
    blurb:
      "Design, installation and maintenance of reliable LANs, WANs, Wi-Fi and structured cabling.",
  },
  {
    title: "Supply of ICT Equipment",
    blurb:
      "Genuine hardware and software supply — desktops, laptops, servers, peripherals and licensing — sourced and delivered on time.",
  },
  {
    title: "Installation & Implementation",
    blurb:
      "Professional rollout of ICT infrastructure with minimal disruption to your day-to-day operations.",
  },
  {
    title: "Systems Integration",
    blurb:
      "Connecting applications, platforms and devices so your technology speaks the same language.",
  },
  {
    title: "Software Development & Web Solutions",
    blurb:
      "Custom software, websites, portals and digital tools built around your business processes.",
  },
  {
    title: "Cloud Services & Data Management",
    blurb:
      "Cloud migration, collaboration platforms and structured data management for scalability and continuity.",
  },
  {
    title: "Cybersecurity & Network Security",
    blurb:
      "Firewalls, endpoint protection, access control and security policies that protect your digital assets.",
  },
  {
    title: "Server & Storage Solutions",
    blurb:
      "Server lifecycle management — sizing, deployment, virtualisation, storage and backup.",
  },
  {
    title: "Infrastructure Management",
    blurb:
      "Proactive monitoring and maintenance of your technology estate, managed against agreed service levels.",
  },
  {
    title: "Project Management & Consulting",
    blurb:
      "Structured planning and delivery of ICT projects — from business case to handover.",
  },
  {
    title: "Automation & Business Process Solutions",
    blurb:
      "Data conversion and automation that removes manual steps and improves accuracy and throughput.",
  },
];

export const itValues = [
  {
    title: "Customer Focus",
    blurb: "We listen first and keep the client at the centre of every decision.",
  },
  {
    title: "Quality",
    blurb: "Standards that hold up under real, daily use.",
  },
  {
    title: "Integrity",
    blurb: "We tell you the truth about cost, risk and timelines.",
  },
  {
    title: "Innovation",
    blurb: "Modern, practical technologies deployed for real benefit.",
  },
  {
    title: "Reliability",
    blurb: "Support you can depend on — measured, not promised.",
  },
  {
    title: "Partnership",
    blurb: "Long-term relationships built on shared success.",
  },
];

export const itApproach = [
  { step: "01", title: "Understand", blurb: "We learn your operations, constraints and objectives." },
  { step: "02", title: "Assess", blurb: "We audit your current technology and identify gaps." },
  { step: "03", title: "Design", blurb: "We architect a fit-for-purpose, budgeted solution." },
  { step: "04", title: "Supply", blurb: "We source genuine equipment and software, on time." },
  { step: "05", title: "Install", blurb: "We deploy with professional, site-aware rollout." },
  { step: "06", title: "Implement", blurb: "We configure and configure-in your new environment." },
  { step: "07", title: "Test & Commission", blurb: "We validate against agreed criteria before handover." },
  { step: "08", title: "Support", blurb: "We back it with responsive, measured support." },
  { step: "09", title: "Improve", blurb: "We review and evolve your technology continuously." },
];

export const itWhyUs = [
  "End-to-end capability from supply to ongoing support",
  "Experienced, accredited technical team",
  "Customer-centric methodologies and clear communication",
  "Competitive, transparent and cost-effective pricing",
  "National footprint with Gauteng head office",
  "Long-term partnerships over short-term sales",
];

export const itAreasOfExpertise = [
  "ICT equipment supply & procurement",
  "Network & structured cabling",
  "Cloud adoption & data management",
  "Cybersecurity & network security",
  "Software development & web",
  "Backup, storage & disaster recovery",
  "Managed IT support",
  "Business process automation",
];