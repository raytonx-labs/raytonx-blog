"use client";

import { Post } from "@/contentlayer/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";

export default function BlogContent({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
      <MDXContent />
    </div>
  );
}
