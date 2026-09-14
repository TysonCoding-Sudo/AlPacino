export function GET() {
  const body = [
    "Contact: https://aipacino.org/contact",
    "Contact: mailto:bitsi@aipacino.co.za",
    "Expires: 2027-09-13T00:00:00.000Z",
    "Preferred-Languages: en",
    "Canonical: https://aipacino.org/.well-known/security.txt",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}