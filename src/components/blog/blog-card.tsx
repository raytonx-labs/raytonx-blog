import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Post } from "@/contentlayer/generated";
import { Link } from "@/i18n/navigation";
import { format, parseISO } from "date-fns";
import { ArrowRight, Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
      <CardHeader className="p-0">
        {post.image && (
          <div className="relative aspect-video rounded-t-lg overflow-hidden bg-slate-100 dark:bg-slate-700">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags?.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
          {post.summary}
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time dateTime={post.date}>
              {format(parseISO(post.date), "MMM d, yyyy")}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        <Link
          href={post.url}
          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
        >
          Read
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
