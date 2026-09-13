import Link from "next/link";
import { MapPin, Phone, Mail, Clock, BadgeCheck } from "lucide-react";
import { company } from "@ai-pacino/shared";

export function Footer() {
  return (
    <footer className="mt-auto bg-stone-950 text-stone-300">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-white font-construction text-lg font-semibold tracking-wide text-stone-900">
              AP
            </span>
            <span className="leading-tight">
              <span className="block font-construction text-base font-semibold uppercase tracking-wide text-white">
                {company.shortName}
              </span>
              <span className="block text-[0.68rem] uppercase tracking-widest text-stone-500">
                (Pty) Ltd · Est. 2015
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-stone-400">
            {company.tagline}. One company, two disciplines — Construction and
            ICT Solutions — serving clients across {company.country}.
          </p>
          <p className="mt-4 text-xs text-stone-500">
            Reg. No: {company.registration}
          </p>
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-amber-400/90">
            <BadgeCheck className="h-3.5 w-3.5" />
            {company.certification}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Divisions
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/construction" className="text-stone-400 transition-colors hover:text-white">
                Construction
              </Link>
            </li>
            <li>
              <Link href="/construction/services" className="text-stone-400 transition-colors hover:text-white">
                Construction services
              </Link>
            </li>
            <li>
              <Link href="/it" className="text-stone-400 transition-colors hover:text-white">
                ICT Solutions
              </Link>
            </li>
            <li>
              <Link href="/it/services" className="text-stone-400 transition-colors hover:text-white">
                ICT services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-stone-400 transition-colors hover:text-white">
                About the company
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/" className="text-stone-400 transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/quote" className="text-stone-400 transition-colors hover:text-white">
                Request a quote
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-stone-400 transition-colors hover:text-white">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-stone-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {company.address}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-amber-500" />
              <span>{company.phones.join(" / ")}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-amber-500" />
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-amber-500" />
              {company.openingHours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-stone-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>
            Registration No: {company.registration} · {company.footprint}
          </p>
        </div>
      </div>
    </footer>
  );
}