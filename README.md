# Raytonx-blog

[中文说明](./README-zh.md)

This is a multilingual blog system built with **Next.js**, integrated with **Contentlayer**, **next-contentlayer2**, and **Next-intl**. It can be embedded into any other Next.js website.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

Open [http://localhost:3000/blog](http://localhost:3000/blog) with your browser to see the result.

## Features

1. **MDX Content Management**  
   All blog content is stored in the `content` folder, organized by language: `zh` for Chinese and `en` for English. You can freely add or edit content as needed.

2. **Content Rendering with Contentlayer**  
   Contentlayer is used to automatically process MDX files. You can customize the content structure and field mappings by editing the `contentlayer.config.ts` file.

3. **Multilingual Support**  
   Language configurations are located in the `src/i18n` directory, with translation content loaded as objects (e.g., `zh.ts`, `en.ts`). Recommended reading: [Why We Use getI18n with Object Structures Instead of JSON Files in next-intl](https://www.raytonx.com/en/blog/next-intl-geti18n-vs-json)
