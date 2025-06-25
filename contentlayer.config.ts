import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    summary: {
      type: "string",
      description: "The description of the post",
      required: false,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    published: {
      type: "boolean",
      description: "Whether the post is published",
      default: true,
    },
    image: {
      type: "string",
      description: "The featured image of the post",
      required: false,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "Tags for the post",
      required: false,
    },
    author: {
      type: "string",
      description: "The author of the post",
      default: "Author",
    },
  },
  computedFields: {
    locale: {
      type: "string",
      resolve: (doc) => {
        const parts = doc._raw.sourceFileDir.split("/");
        return parts[1];
      },
    },
    slug: {
      type: "string",
      resolve: (doc) => {
        const last = doc._raw.flattenedPath.split("/").pop();
        if (last) {
          return last.replace(/^.+?(\/)/, "");
        }
      },
    },
    url: {
      type: "string",
      resolve: (doc) => {
        const last = doc._raw.flattenedPath.split("/").pop();
        if (last) {
          return `/blog/${last.replace(/^.+?(\/)/, "")}`;
        }
      },
    },
    readingTime: {
      type: "number",
      resolve: (doc) => {
        const wordsPerMinute = 200;
        const noOfWords = doc.body.raw.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        return Math.ceil(minutes);
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rehypePlugins: [rehypeSlug, rehypePrettyCode as any],
  },
});
