import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICT Solutions",
  description:
    "ICT equipment supply, installation, integration and support — a full lifecycle technology partner covering networks, software, cloud and cybersecurity.",
};

export default function ItLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>;
}