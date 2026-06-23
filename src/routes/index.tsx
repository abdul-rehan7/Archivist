import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Archivist — The Engineering Workspace for Tomorrow's Builders" },
      {
        name: "description",
        content:
          "Archivist is the engineering workspace where builders document, showcase, and ship their professional portfolio.",
      },
      { property: "og:title", content: "Archivist — Engineering Workspace for Builders" },
      {
        property: "og:description",
        content:
          "Document, showcase, and ship. Build your professional engineering portfolio with Archivist.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Logos />
      <Features />
      <Workflow />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl animate-[fade-in_0.6s_ease-out_both]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
            </svg>
          </span>
          Archivist
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#workflow" className="transition-colors hover:text-foreground">Workflow</a>
          <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
        </nav>
        <a
          href="#cta"
          className="rounded-md border border-border px-3.5 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/60 hover:text-primary"
        >
          Sign in
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #00FF85, transparent 70%)" }}
        aria-hidden
      />
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-28 text-center sm:pt-36">

        <h1
          className="animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.05s_both] text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
        >
          Archivist: The Engineering Workspace for{" "}
          <span className="text-accent-glow">Tomorrow's Builders.</span>
        </h1>

        <p className="animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.15s_both] mx-auto mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          Document the work, ship the proof. A single, focused workspace to capture
          your engineering, structure your case studies, and publish a portfolio that
          actually reflects how you think.
        </p>

        <div className="animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.25s_both] mt-10 flex flex-col items-center justify-center gap-4">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--accent-glow)] transition-all hover:shadow-[0_0_60px_-4px_var(--accent-glow)] hover:-translate-y-0.5"
          >
            Build Your Professional Portfolio
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          
        </div>
      </div>
    </section>
  );
}

function Logos() {
  const items = ["Vercel", "Linear", "Supabase", "Stripe", "Anthropic", "Cloudflare"];
  return (
    <section className="border-y border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by engineers shipping at
        </p>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 text-center text-sm font-medium text-muted-foreground/80 sm:grid-cols-6">
          {items.map((i) => (
            <span key={i} className="transition-colors hover:text-foreground">{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Structured case studies",
      body: "Capture the problem, the constraints, and the decisions. Archivist gives every project the same engineering rigor.",
      icon: (
        <path d="M4 6h16M4 12h10M4 18h16" strokeLinecap="round" />
      ),
    },
    {
      title: "Git-native timeline",
      body: "Link commits, PRs, and incidents directly into your write-ups. Your portfolio updates as you ship.",
      icon: (
        <path d="M6 3v12a3 3 0 003 3h9M9 21a3 3 0 100-6 3 3 0 000 6zM18 9a3 3 0 100-6 3 3 0 000 6z" />
      ),
    },
    {
      title: "Publish in one click",
      body: "A clean, fast, signal-dense portfolio at yourname.archivist.dev. No themes. No clutter. No noise.",
      icon: (
        <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
      ),
    },
  ];
  return (
    <section id="features" className="mx-auto max-w-5xl px-6 py-28">
      <div className="mb-16 max-w-2xl">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Workspace</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Less surface. More signal.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Every feature exists to make your engineering legible — to teams, to hiring managers, to your future self.
        </p>
      </div>
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
        {features.map((f, i) => (
          <article
            key={f.title}
            className="group bg-card p-7 transition-colors hover:bg-secondary/60"
            style={{ animation: `fade-up 0.7s cubic-bezier(0.16,1,0.3,1) ${0.05 * i}s both` }}
          >
            <span className="mb-6 inline-grid h-9 w-9 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                {f.icon}
              </svg>
            </span>
            <h3 className="text-base font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    { n: "01", t: "Capture", d: "Drop in commits, notes, diagrams. Archivist threads it into a coherent narrative." },
    { n: "02", t: "Structure", d: "Decisions, trade-offs, and outcomes get their own first-class fields." },
    { n: "03", t: "Ship", d: "Publish a public portfolio, or share a private link with a team you're interviewing with." },
  ];
  return (
    <section id="workflow" className="border-t border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-5xl px-6 py-28">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Workflow</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">From commit to case study in minutes.</h2>
        </div>
        <ol className="space-y-px overflow-hidden rounded-xl border border-border bg-border">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="grid grid-cols-1 gap-3 bg-card p-6 sm:grid-cols-[100px_minmax(140px,200px)_minmax(0,1fr)] sm:items-start sm:gap-x-6 sm:p-7"
              style={{ animation: `fade-up 0.7s cubic-bezier(0.16,1,0.3,1) ${0.05 * i}s both` }}
            >
              <span className="font-mono text-sm text-primary">{s.n}</span>
              <h3 className="min-w-0 text-base font-semibold tracking-tight">{s.t}</h3>
              <p className="min-w-0 max-w-prose text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}

        </ol>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 text-center">
      <svg viewBox="0 0 24 24" className="mx-auto mb-6 h-6 w-6 text-primary" fill="currentColor">
        <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2H4v2h1a4 4 0 004-4V7zm10 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 01-2 2h-1v2h1a4 4 0 004-4V7z" />
      </svg>
      <blockquote className="text-pretty text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
        "Archivist replaced three half-finished Notion docs and a dead Medium account.
        It's the first portfolio tool that respects how engineers actually work."
      </blockquote>
      <figcaption className="mt-6 text-sm text-muted-foreground">
        Maya Okonkwo — Staff Engineer
      </figcaption>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="px-6 pb-28">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card px-8 py-16 text-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,255,133,0.18), transparent 70%)",
          }}
          aria-hidden
        />
        <h2 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">
          Your work deserves a workspace.
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-muted-foreground">
          Join the engineers building Archivist portfolios this week.
        </p>
        <a
          href="#"
          className="relative mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--accent-glow)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_60px_-4px_var(--accent-glow)]"
        >
          Build Your Professional Portfolio
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Archivist Labs. All rights reserved.</p>
        <p className="font-mono">v0.4 — built for builders.</p>
      </div>
    </footer>
  );
}
