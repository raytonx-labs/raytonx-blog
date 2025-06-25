# RaytonX-Blog

这是一个基于 **Next.js** 构建的多语言博客系统，集成了 **Contentlayer**、**next-contentlayer2** 和 **Next-intl**，可嵌入至其他 Next.js 网站中使用。

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发环境
pnpm dev

# 构建生产版本
pnpm build
```

访问 [http://localhost:3000/en/blog](http://localhost:3000/en/blog) 查看结果

## 功能特性

1. **MDX 内容管理**  
   所有博客内容均存放在 `content` 文件夹中，支持按语言分类：`zh` 为中文，`en` 为英文。你可以根据需要自由添加或修改内容。

2. **Contentlayer 渲染支持**  
   使用 Contentlayer 自动处理 MDX 内容，可通过修改 `contentlayer.config.ts` 文件自定义内容结构与字段映射。

3. **多语言支持**  
   多语言配置位于 `src/i18n` 目录，翻译内容通过对象加载（如 `zh.ts`、`en.ts`）。推荐阅读：[为什么在 next-intl 中使用 getI18n 加载对象而不是 JSON 文件](https://www.raytonx.com/zh/blog/next-intl-geti18n-vs-json)
