import BlogContent from "@/components/blog/blog-content";
import BlogLanguageToggle from "@/components/blog/blog-language-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { allPosts } from "@/contentlayer/generated";
import { Link } from "@/i18n/navigation";
import { format, parseISO } from "date-fns";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

function getPostFromParams(params: PostPageProps["params"]) {
  const post = allPosts.find(
    (post) => post.slug === params.slug && post.locale === params.locale
  );

  if (!post) {
    return notFound();
  }

  return post;
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: post.image ? [post.image] : [],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slug,
    locale: post.locale,
  }));
}

export default async function PostPage(props: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const params = await props.params;
  const post = getPostFromParams(params);
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8 flex justify-between items-center">
          <Button variant="ghost" asChild className="pl-0">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <BlogLanguageToggle />
        </div>

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
                {post.title}
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                {post.summary}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>

            <Separator className="mt-8" />
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-12">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Article Content */}
          <BlogContent post={post} />

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Tags:
                </span>
                {post.tags?.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button variant="outline" asChild>
                <Link href="/blog">← More Articles</Link>
              </Button>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
