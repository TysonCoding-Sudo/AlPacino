import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Headphones,
  Network,
  Package,
  Wrench,
  Workflow,
  Code,
  Cloud,
  Lock,
  Server,
  Settings,
  ClipboardList,
  Repeat,
} from "lucide-react";
import { itServices } from "@al-pacino/shared";
import { Reveal } from "@/components/Reveal";
import { PageHero, CtaBanner } from "@/components/section";

const serviceIcons = [
  Headphones, Network, Package, Wrench, Workflow, Code,
  Cloud, Lock, Server, Settings, ClipboardList, Repeat,
];

const longDetail = [
  "Responsive helpdesk and on-site support keeps your systems running and your people productive — with clear SLAs and proactive monitoring where required.",
  "LAN, WAN, Wi-Fi, structured cabling and network design — reliable infrastructure engineered for your operating environment.",
  "Genuine hardware and software supply — desktops, laptops, servers, peripherals and licensing — sourced and delivered on time.",
  "Professional rollout of ICT infrastructure with minimal disruption to day-to-day operations — managed against a clear project plan.",
  "Connecting applications, platforms and devices so your technology speaks the same language — with clear interfaces and documented handovers.",
  "Custom software, web applications, portals and digital tools built around your actual business processes.",
  "Cloud migration, collaboration platforms, hosted environments and structured data management for scalability and continuity.",
  "Firewalls, endpoint protection, access control and security policies that protect your digital assets — aligned to your risk profile.",
  "Server lifecycle management — sizing, deployment, virtualisation, storage and backup, designed for availability and resilience.",
  "Proactive monitoring and maintenance of your technology estate, managed against agreed service levels and reported transparently.",
  "Structured planning and delivery of ICT projects — from business case and scoping through to deployment and sign-off.",
  "Data conversion, workflow automation and business process tools that remove manual steps and improve accuracy and throughput.",
];

export default function ItServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="ICT services"
        title="Twelve services. One partner."
        body="From a single helpdesk engagement to full infrastructure rollout — every service is delivered as part of a complete, managed lifecycle."
        tone="tech"
      />

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container-site space-y-14">
          {itServices.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={s.title}>
                <div
                  className={`grid items-start gap-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:gap-10`}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-900">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                      {longDetail[i]}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      {s.blurb}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-stone-950 py-14">
        <div className="container-site flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let&apos;s talk
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Need a technology partner?
            </h2>
          </div>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}