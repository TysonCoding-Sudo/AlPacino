import { company } from "@ai-pacino/shared";

export function GET() {
  const body = [
    `Contact: ${company.siteUrl}/contact`,
    "Contact: mailto:bitsi@aipacino.co.za",
    "Expires: 2027-09-13T00:00:00.000Z",
    "Preferred-Languages: en",
    `Canonical: ${company.siteUrl}/.well-known/security.txt`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}