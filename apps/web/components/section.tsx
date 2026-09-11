import Link from "next/link";
import type { LucideIcon } from "lucide-react";

export type Tone = "construction" | "tech" | "ink";

const toneStyles: Record<
  Tone,
  { eyebrow: string; title: string; body: string; link: string }
> = {
  construction: {
    eyebrow: "text-amber-700",
    title: "font-construction uppercase tracking-wide",
    body: "text-stone-600",
    link: "text-amber-800 hover:bg-amber-50",
  },
  tech: {
    eyebrow: "text-blue-600",
    title: "font-display tracking-tight",
    body: "text-slate-600",
    link: "text-blue-700 hover:bg-blue-50",
  },
  ink: {
    eyebrow: "text-slate-500",
    title: "font-display tracking-tight",
    body: "text-slate-600",
    link: "text-slate-800 hover:bg-slate-100",
  },
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "ink",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: Tone;
  align?: "left" | "center";
}) {
  const t = toneStyles[tone];
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${t.eyebrow}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-semibold text-stone-900 sm:text-4xl ${t.title}`}>{title}</h2>
      {lead && <p className={`mt-4 text-base leading-relaxed ${t.body}`}>{lead}</p>}
    </div>
  );
}

export function ServiceCard({
  icon: Icon,
  title,
  blurb,
  tone = "ink",
}: {
  icon: LucideIcon;
  title: string;
  blurb: string;
  tone?: Tone;
}) {
  const iconBg =
    tone === "construction"
      ? "bg-amber-100 text-amber-900"
      : tone === "tech"
        ? "bg-blue-50 text-blue-700"
        : "bg-stone-100 text-stone-700";
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg}`}>
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-stone-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{blurb}</p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  tone,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  tone: Tone;
  children?: React.ReactNode;
}) {
  const isConstruction = tone === "construction";
  return (
    <section
      className={`relative overflow-hidden border-b ${
        isConstruction ? "border-amber-900/20 bg-plaster" : "border-slate-200 bg-white"
      }`}
    >
      <div className={`absolute inset-0 grid-lines opacity-40`} aria-hidden="true" />
      <div className="container-site relative py-20 sm:py-24">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.25em] ${
            isConstruction ? "text-amber-700" : "text-blue-600"
          }`}
        >
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] text-stone-900 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {body && (
          <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${isConstruction ? "text-stone-600" : "text-slate-600"}`}>
            {body}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function CtaBanner({
  eyebrow,
  heading,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  tone = "ink",
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tone?: Tone;
}) {
  const isConstruction = tone === "construction";
  return (
    <section className={`${isConstruction ? "bg-stone-900" : "bg-stone-950"}`}>
      <div className="container-site flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-construction text-3xl font-semibold uppercase tracking-wide text-white sm:text-4xl">
            {heading}
          </h2>
          {body && <p className="mt-4 text-base leading-relaxed text-stone-300">{body}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={primaryHref}
            className="rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-amber-400"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="rounded-full border border-stone-700 px-7 py-3.5 text-sm font-semibold text-stone-200 transition-colors hover:border-stone-500 hover:text-white"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}