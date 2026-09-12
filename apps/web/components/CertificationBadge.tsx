import { BadgeCheck } from "lucide-react";
import { company } from "@ai-pacino/shared";

export function CertificationBadge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 ${className}`}
    >
      <BadgeCheck className="h-5 w-5 shrink-0 text-amber-600" />
      <span className="text-sm font-semibold text-amber-900">
        {company.certification}
      </span>
    </div>
  );
}