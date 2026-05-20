"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const localeLabels: Record<Locale, { short: string; long: string }> = {
  es: { short: "ES", long: "Español" },
  ki: { short: "KI", long: "Kichwa" },
  en: { short: "EN", long: "English" },
};

export function LocaleSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <nav aria-label={t("language")} className="flex items-center gap-1">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && (
            <span className="mx-1 select-none text-text-muted/40" aria-hidden>
              ·
            </span>
          )}
          <Link
            href={pathname}
            locale={loc}
            aria-label={localeLabels[loc].long}
            aria-current={locale === loc ? "true" : undefined}
            className={[
              "font-body text-xs font-medium uppercase tracking-widest transition-colors duration-200",
              locale === loc
                ? "text-accent-gold"
                : "text-text-muted hover:text-text-primary",
            ].join(" ")}
          >
            {localeLabels[loc].short}
          </Link>
        </span>
      ))}
    </nav>
  );
}
