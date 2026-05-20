import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";

export default function Home() {
  const t = useTranslations("home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="absolute right-6 top-6">
        <LocaleSwitcher />
      </div>

      <h1 className="font-display text-5xl font-bold tracking-tight text-text-primary">
        {t("title")}
      </h1>

      <p className="font-display text-2xl font-light italic text-text-muted">
        {t("subtitle")}
      </p>

      <p className="max-w-prose text-center font-body text-base text-text-muted">
        {t("description")}
      </p>
    </main>
  );
}
