"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Button } from "../ui/button";

export default function BlogLanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale = locale === "zh" ? "en" : "zh";
  const buttonText = locale === "zh" ? "View English Version" : "查看中文版本";

  return (
    <Button variant="ghost" asChild className="pl-0">
      <Link href={pathname} locale={nextLocale}>
        {buttonText}
      </Link>
    </Button>
  );
}
