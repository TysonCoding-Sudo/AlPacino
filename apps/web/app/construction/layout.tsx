import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction | Al Pacino (Pty) Ltd",
  description:
    "Roadworks, water infrastructure, electrical engineering, HVAC commissioning and maintenance, landscaping and fencing — delivered to the highest standards of workmanship and professionalism.",
};

export default function ConstructionLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>;
}