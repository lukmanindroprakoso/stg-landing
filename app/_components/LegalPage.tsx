import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "../_lib/content";
import { LEGAL_UPDATED, type LegalSection } from "../_lib/legal";

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-outline bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label="STG Global home">
            <Image src="/brand/stg-logo.png" alt="STG Global" width={872} height={249} className="h-9 w-auto" priority />
          </Link>
          <Link href="/" className="text-sm font-semibold text-primary hover:text-primary-hover">
            Back to home
          </Link>
        </div>
      </header>
      <main className="bg-primary-10">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-100">{title}</h1>
          <p className="mt-2 text-sm text-muted">Last updated: {LEGAL_UPDATED}</p>
          <p className="mt-6 text-base leading-7 text-ink">{intro}</p>
          <div className="mt-8 space-y-8 rounded-xl border border-outline bg-white p-7 shadow-sm sm:p-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-lg font-bold text-neutral-100">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-3 text-sm leading-7 text-ink">{p}</p>
                ))}
              </section>
            ))}
            <section>
              <h2 className="text-lg font-bold text-neutral-100">Contact</h2>
              <p className="mt-3 text-sm leading-7 text-ink">
                Questions about this document? Email{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-primary hover:text-primary-hover">
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <footer className="border-t border-outline bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted sm:flex-row sm:px-6">
          <p>© 2026 STG Global LLC.</p>
          <nav className="flex gap-5" aria-label="Legal">
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
