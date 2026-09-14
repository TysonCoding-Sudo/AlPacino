# Website Handover — AI Pacino (Pty) Ltd

**Prepared:** 13 September 2026
**Prepared by:** TysonCoding-Sudo (developer)
**Prepared for:** AI Pacino (Pty) Ltd (client)

---

## 1. Project Summary

| Item | Value |
|---|---|
| Project name | AlPacino — AI Pacino (Pty) Ltd website |
| Live URL | https://www.aipacino.org |
| Apex redirect | https://aipacino.org → https://www.aipacino.org (308) |
| Tech stack | Next.js 16.3 (Turbopack) · React 19 · Tailwind CSS 4 · Turborepo |
| Deployment | Vercel (auto-deploys from GitHub on every push to `main`) |
| Source repository | [GitHub: TysonCoding-Sudo/AlPacino](https://github.com/TysonCoding-Sudo/AlPacino) |
| Status at handover | Fully functional, security-hardened, live |

---

## 2. Ownership Matrix (After Transfer)

| Asset | Owner | Developer's role after transfer |
|---|---|---|
| Domain `aipacino.org` | Client (Cloudflare Registrar) | DNS Member (optional, role: DNS) |
| DNS / WAF / SSL / DNSSEC | Client (Cloudflare zone `aipacino.org`) | Account Member (optional) |
| Vercel hosting project | Client (Vercel team) | Team Member — Developer |
| GitHub source code | Client GitHub org/account | Collaborator — write |
| Site content (`@ai-pacino/shared`) | Client (via GitHub repo) | — (collaborator access to code) |

### Roles & permissions retained

| Platform | What you can do | What you cannot do |
|---|---|---|
| Cloudflare | View analytics, edit DNS (if DNS role), view WAF logs | Transfer domain, delete zone, change billing |
| Vercel | Push code, view logs, view analytics, trigger redeploy | Delete project, change billing/payment, transfer |
| GitHub | Push code, open PRs, view issues | Delete repo, change repo settings, remove collaborators |

---

## 3. Infrastructure Map

### 3.1 Domain & DNS

| Field | Value |
|---|---|
| Domain | `aipacino.org` |
| Registrar | Cloudflare Registrar (auto-renews annually) |
| Nameservers | `aspen.ns.cloudflare.com` / `sam.ns.cloudflare.com` |
| DNSSEC | Active (DS record published) |

**Current DNS records:**

| Type | Name | Content | Proxy |
|---|---|---|---|
| CNAME | `aipacino.org` (apex) | `cname.vercel-dns.com` | Proxied (orange cloud) |
| CNAME | `www` | `cname.vercel-dns.com` | Proxied (orange cloud) |

> DNS records point to Vercel. Vercel handles SSL certificate provisioning automatically.
> Do not change these unless redeploying to a different host.

### 3.2 SSL & TLS

| Setting | Value | Note |
|---|---|---|
| SSL/TLS mode | **Full (strict)** | Origin (Vercel) must present a valid certificate |
| Minimum TLS version | 1.2 | Blocks TLS 1.0/1.1 connections |
| Always Use HTTPS | On | HTTP requests redirect to HTTPS at the edge |
| HSTS | `max-age=63072000` | Sent by Vercel origin (63072000 seconds ≈ 2 years) |

### 3.3 Cloudflare Security Settings

| Feature | Status | What it does |
|---|---|---|
| Security Level | **High** | Aggressive IP-reputation-based challenge |
| WAF | **On** (Cloudflare Free Managed Ruleset) | Blocks high-confidence SQLi, XSS, scanner tools (e.g. sqlmap) |
| Advanced DDoS | **On** | Layer 7 DDoS protection (free tier) |
| TLS 1.3 | **On** | Latest TLS protocol |
| ECH (Encrypted Client Hello) | **On** | Encrypts the TLS handshake |
| Email Obfuscation | **On** | Obfuscates email addresses on rendered pages |
| Automatic HTTPS Rewrites | **On** | Fixes mixed content automatically |

**Response header transform rule** (active, deployed via Cloudflare Ruleset API):
Strips these Vercel-generated headers at the edge before reaching the visitor:

- `Access-Control-Allow-Origin` (was `*`, now removed)
- `X-Vercel-Id`
- `X-Vercel-Cache`
- `X-Nextjs-Prerender`
- `X-Nextjs-Stale-Time`
- `X-Matched-Path`

### 3.4 Application Security Headers

Added via `next.config.ts` and served by Vercel on every page:

| Header | Value |
|---|---|
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests` |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=(), interest-cohort=()` |

> If these headers cause issues with future integrations (analytics scripts, chat widgets, etc.),
> the `Content-Security-Policy` value in `next.config.ts` may need updating to allowlist the
> new domain. Consult the developer before removing any header.

### 3.5 Vercel Deployment

| Field | Value |
|---|---|
| Vercel project URL (direct) | `https://web-chi-pink-24.vercel.app` |
| Custom domain | `https://www.aipacino.org` |
| Framework | Next.js (auto-detected) |
| Build command | `pnpm build` (in `apps/web`) |
| Output | `.next` (server-side rendering + static generation) |
| Auto-deploy | Every push to GitHub `main` branch triggers a new build |
| Preview deploys | Every pull request gets a preview URL automatically |

---

## 4. Handover Checklist

Follow these steps in order. All are reversible until the final sign-off.

### Step 1 — Cloudflare: Transfer domain ownership

**Dashboard path:** Cloudflare → `aipacino.org` → **Manage Domain** → **Transfer domain to another account**

1. Enter the client's Cloudflare account email address
2. The client receives an email → they accept the transfer
3. Domain is now owned by the client; DNS remains active automatically
4. **After transfer:** ask the client to add you as a **Member** (role: DNS) to their Cloudflare account

### Step 2 — Vercel: Transfer project to client's team

**Dashboard path:** Vercel → **alpacino** project → **Settings** → **Transfer Project**

1. Enter the client's Vercel account email address
2. The client accepts the transfer in their Vercel dashboard
3. The project is now in the client's Vercel team/account
4. GitHub connection is preserved (Vercel remembers the repo link)
5. **After transfer:** ask the client to add you as a **Team Member** (role: Developer)

> Note: All previous deployments, environment variables, and domain bindings transfer with the project.

### Step 3 — GitHub: Transfer source repository

**Recommended: Transfer to a client-owned GitHub organization**

1. If the client doesn't have a GitHub organization, ask them to create one (free)
2. Transfer the repo:
   **Dashboard path:** `TysonCoding-Sudo/AlPacino` → **Settings** → **General** → **Danger Zone** → **Transfer repository**
3. Enter the target org name (e.g. `ClientOrg/AlPacino`)
4. GitHub prompts for confirmation — the transfer is instant
5. **After transfer:** ask the client to add you as a **Collaborator** with **write** access

> The repo URL changes (e.g. `github.com/ClientOrg/AlPacino`). Update the Vercel
> GitHub connection if prompted, though Vercel usually handles the redirect automatically.

### Step 4 — Verify the site still works

After all transfers, test from the client's accounts:

| Test | URL | Expected |
|---|---|---|
| HTTPS loads | https://www.aipacino.org | Full site loads |
| HTTP redirect | http://aipacino.org | 301 → https://aipacino.org |
| Apex redirect | https://aipacino.org | 308 → https://www.aipacino.org |
| Robots.txt | https://www.aipacino.org/robots.txt | Shows AI-bot blocking rules |
| Sitemap | https://www.aipacino.org/sitemap.xml | Shows all routes |
| Security.txt | https://www.aipacino.org/.well-known/security.txt | Shows disclosure contact |
| Google Maps link (footer + contact) | Click the address | Opens Google Maps — Lenyenye & Centurion office links |
| Push to GitHub triggers deploy | Push any commit to `main` | Vercel builds and deploys |

### Step 5 — Sign off

Both parties sign the sign-off section at the bottom of this document.

---

## 5. How the Site Works (Technical Reference)

### Tech stack

```
al-pacino/
├── apps/
│   └── web/              ← The Next.js app (all pages, components, styles)
│       ├── app/           ← Route pages (Next.js App Router)
│       │   ├── layout.tsx ← Root layout + SEO metadata
│       │   ├── page.tsx   ← Home page
│       │   ├── robots.ts  ← Generates /robots.txt (blocks AI bots)
│       │   ├── sitemap.ts ← Generates /sitemap.xml
│       │   ├── about/     ← About page
│       │   ├── construction/ ← Construction division
│       │   ├── it/        ← ICT Solutions division
│       │   ├── contact/   ← Contact page
│       │   └── quote/     ← Quote request (WhatsApp)
│       ├── components/    ← Header, Footer, ContactForm, QuoteForm, Reveal
│       └── next.config.ts ← Security headers
├── packages/
│   └── shared/            ← Shared config (company info, services, content)
│       └── src/index.ts   ← Edit here to change company details
└── pnpm-workspace.yaml    ← Monorepo config (Turborepo)
```

### Where to change content

| What | File |
|---|---|
| Company name, address, phones, email, WhatsApp | `packages/shared/src/index.ts` → `company` object |
| Services offered (Construction) | `packages/shared/src/index.ts` → `constructionServices` |
| Services offered (ICT) | `packages/shared/src/index.ts` → `itServices` |
| Page titles / SEO descriptions | `app/*/layout.tsx` files → `metadata` objects |
| Security headers | `apps/web/next.config.ts` |
| AI-crawlers block list | `apps/web/app/robots.ts` |

### Deploy flow

```
Push to GitHub main
    ↓
Vercel detects change
    ↓
Runs: pnpm build (next build)
    ↓
Deploys to: https://www.aipacino.org
```

Typical deploy time: 30–90 seconds.

### Local development (for future developers)

```bash
# Install dependencies
pnpm install

# Run locally
pnpm --filter web dev

# Build for production
pnpm --filter web build

# Typecheck (no deploy, just checks for errors)
cd apps/web && pnpm lint
```

---

## 6. Change Management

### For routine changes (content, phone, address, etc.)

1. Clone the repo: `git clone https://github.com/ClientOrg/AlPacino.git`
2. Edit `packages/shared/src/index.ts` (company details) or relevant page files
3. Commit and push to `main`
4. Vercel auto-deploys in <90 seconds

### For structural changes (new pages, layout, security)

- Coordinate with the developer
- Changes go through a feature branch → pull request → review → merge to `main`
- Preview deploys are created automatically for every PR

### Security updates

- The Cloudflare Free Managed Ruleset is updated by Cloudflare automatically
- Monitor Cloudflare email notifications for security events
- If upgrading from Cloudflare Free → Pro, the full Cloudflare Managed Ruleset provides broader WAF coverage

---

## 7. Security Revocation Checklist

If the business relationship ends, revoke access on each platform in this order:

| Platform | Action | Dashboard path |
|---|---|---|
| GitHub | Remove developer from repo collaborators | Repo → Settings → Collaborators |
| Vercel | Remove developer from team | Team → Settings → Members |
| Cloudflare | Remove developer from account | Account → Members → remove |

> **Contract note:** Ensure the developer's right to access is tied to a written agreement.
> Revoking access does not remove code the developer has already seen, but prevents future changes.

---

## 8. Contact Quick Reference

| Field | Value |
|---|---|
| Client company | AI Pacino (Pty) Ltd |
| Registration | 2015/335068/07 |
| Address | Head office: 1457 Sedikodiko, Lenyenye, Limpopo, 0857 — Centurion office: 29 Laborie, Die Hoewes, Centurion, 0157 |
| Phones | 064 662 2335 / 082 657 9345 |
| WhatsApp | +27 64 662 2634 |
| Email | bitsi@aipacino.co.za |
| Google Maps | [Lenyenye](https://www.google.com/maps/search/?api=1&query=1457+Sedikodiko,+Lenyenye,+Limpopo,+0857) · [Centurion](https://www.google.com/maps/search/?api=1&query=29+Laborie,+Die+Hoewes,+Centurion,+0157) |

---

## 9. Sign-Off

By signing below, both parties acknowledge that:

1. All assets (domain, hosting, source code) have been transferred to the client's accounts
2. The developer retains collaborator-level access as described in Section 2
3. The site has been tested and verified in its live state

| | Name | Date | Signature |
|---|---|---|---|
| **Developer** | ___________________________ | ____________ | _____________ |
| **Client** | ___________________________ | ____________ | _____________ |

---

*This document was prepared on 13 September 2026. If the infrastructure changes after this date, update the relevant sections accordingly.*
