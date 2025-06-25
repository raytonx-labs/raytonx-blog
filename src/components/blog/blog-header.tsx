"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, HomeIcon, Rss } from "lucide-react";
import { useLocale } from "next-intl";

export default function BlogHeader() {
  const locale = useLocale();

  return (
    <header className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-6">
        <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      </div>

      <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
        Title
      </h1>

      <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
        Exploring the intersection of technology, innovation, and creativity.
        Sharing insights, tutorials, and thoughts on the future of development.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => {
              window.location.href = `/${locale}`;
            }}
          >
            <HomeIcon className="h-4 w-4" />
            HomePage
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Rss className="h-4 w-4" />
            Subscribe to RSS
          </Button>
          {/* <p className="text-sm text-slate-500 dark:text-slate-400">
            Get notified when I publish new articles
          </p> */}
        </div>
      </div>
    </header>
  );
}
