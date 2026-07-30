---
title: "Hugo 建站教程：从零开始搭建静态网站"
slug: "hugo-jianzhan-jiaocheng"
keywords: ["Hugo建站", "Hugo教程", "静态网站生成器", "Hugo入门", "Hugo静态网站"]
description: "从零开始学习Hugo建站，手把手教你安装Hugo、创建网站、选择主题、编写内容、部署上线，快速搭建高性能静态网站。"
date: 2026-07-31T00:00:00Z
lastmod: 2026-07-31T00:00:00Z
image: ""
categories: ["Hugo教程"]
tags: ["Hugo", "静态网站", "建站教程", "入门指南"]
draft: false
---

# Hugo 建站教程：从零开始搭建静态网站

Hugo 是目前最快的静态网站生成器之一，使用 Go 语言开发，能够在毫秒级内生成完整的静态网站。无论是个人博客、企业官网还是文档站点，Hugo 都能完美胜任。

本教程将从零开始，带你一步步完成 Hugo 网站的搭建与部署。

## 一、什么是 Hugo？

Hugo 是一个静态网站生成器（Static Site Generator，SSG），它将 Markdown 格式的内容文件转换为完整的 HTML 网站。

**Hugo 的核心优势：**

- **极快的构建速度**：秒级生成数千个页面
- **无需数据库**：所有内容都是静态文件
- **内置开发服务器**：实时预览内容修改
- **丰富的主题生态**：数百个免费主题可选
- **强大的内容组织**：支持分类、标签、自定义内容类型

## 二、安装 Hugo

### Windows 系统

使用 Chocolatey 安装：
```bash
choco install hugo-extended
```

使用 Scoop 安装：
```bash
scoop install hugo-extended
```

或从 [Hugo Releases](https://github.com/gohugoio/hugo/releases) 下载预编译二进制文件。

### macOS 系统

使用 Homebrew 安装：
```bash
brew install hugo
```

### Linux 系统

使用包管理器安装：
```bash
# Ubuntu/Debian
sudo apt install hugo

# Fedora
sudo dnf install hugo
```

### 验证安装

```bash
hugo version
```

## 三、创建新网站

使用 `hugo new site` 命令创建新网站：

```bash
hugo new site my-website
cd my-website
```

创建后的目录结构：

```
my-website/
├── archetypes/     # 内容模板
├── content/        # Markdown 内容文件
├── data/           # 数据文件
├── layouts/        # HTML 模板
├── static/         # 静态资源（图片、CSS、JS）
├── themes/         # 主题
└── config.toml     # 配置文件
```

## 四、安装主题

Hugo 有丰富的主题生态，可以从 [Hugo Themes](https://themes.gohugo.io/) 选择喜欢的主题。

### 方式一：Git 子模块安装

```bash
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
```

### 方式二：直接下载

```bash
cd themes
git clone https://github.com/theNewDynamic/gohugo-theme-ananke.git ananke
```

### 配置主题

在 `config.toml` 中设置主题：

```toml
theme = "ananke"
```

## 五、创建内容

### 创建首页

修改 `content/_index.md`：

```yaml
---
title: "我的 Hugo 网站"
---

# 欢迎来到我的 Hugo 网站

这是使用 Hugo 构建的静态网站。
```

### 创建博客文章

使用 `hugo new` 命令创建文章：

```bash
hugo new posts/我的第一篇文章.md
```

文章 Front Matter 示例：

```yaml
---
title: "我的第一篇文章"
date: 2026-07-31T10:00:00Z
draft: false
tags: ["Hugo", "教程"]
categories: ["建站知识"]
---

# 我的第一篇文章

这是使用 Hugo 创建的第一篇文章。
```

## 六、本地预览

启动 Hugo 开发服务器：

```bash
hugo server
```

访问 `http://localhost:1313` 即可预览网站。

启用草稿文章预览：

```bash
hugo server -D
```

## 七、配置网站

### 基础配置（config.toml）

```toml
baseURL = "https://www.example.com"
title = "我的 Hugo 网站"
languageCode = "zh-cn"

# 永久链接配置
[permalinks]
  posts = "/blog/:slug/"

# 站点地图
[sitemap]
  changefreq = "weekly"
  priority = 0.5

# 启用 robots.txt
enableRobotsTXT = true

# 自动生成 lastmod
enableGitInfo = true
```

### 菜单配置

```toml
[menus]
  [[menus.main]]
    name = "首页"
    url = "/"
    weight = 1

  [[menus.main]]
    name = "博客"
    url = "/blog/"
    weight = 2

  [[menus.main]]
    name = "关于"
    url = "/about/"
    weight = 3
```

## 八、部署网站

### 部署到 GitHub Pages

1. 在 GitHub 创建仓库 `username.github.io`
2. 构建网站：

```bash
hugo
```

3. 将 `public/` 目录推送到 GitHub：

```bash
cd public
git init
git remote add origin https://github.com/username/username.github.io.git
git add .
git commit -m "Deploy Hugo site"
git push -u origin main
```

### 使用 GitHub Actions 自动部署

创建 `.github/workflows/hugo.yml`：

```yaml
name: Deploy Hugo Site

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v4
        with:
          go-version: '1.21'
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm install -g postcss postcss-cli autoprefixer
      - uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true
      - run: hugo
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

### 部署到 Netlify/Vercel

Netlify 和 Vercel 都提供 Hugo 的一键部署功能：

1. 将代码推送到 GitHub
2. 在 Netlify/Vercel 中导入仓库
3. 设置构建命令为 `hugo`，输出目录为 `public`
4. 点击部署

## 九、进阶技巧

### 自定义短代码

创建 `layouts/shortcodes/note.html`：

```html
<blockquote class="note">
  {{ .Inner }}
</blockquote>
```

在文章中使用：

```markdown
{{< note >}}
这是一条重要提示。
{{< /note >}}
```

### 自定义模板

创建 `layouts/_default/single.html`：

```html
{{ define "main" }}
<article>
  <header>
    <h1>{{ .Title }}</h1>
    <time>{{ .Date.Format "2006-01-02" }}</time>
  </header>
  <div class="content">
    {{ .Content }}
  </div>
</article>
{{ end }}
```

### 图片优化

创建 `layouts/_default/_markup/render-image.html`：

```html
{{- $image := .Page.Resources.GetMatch (printf "%s" (.Destination | safeURL)) -}}
{{- if $image -}}
  {{- $webp := $image.Resize "800x webp q75" -}}
  <img src="{{ $webp.RelPermalink }}" alt="{{ .Text }}" loading="lazy">
{{- else -}}
  <img src="{{ .Destination | safeURL }}" alt="{{ .Text }}" loading="lazy">
{{- end -}}
```

## 十、常见问题

### 1. Hugo 无法加载主题

确保 `config.toml` 中的 `theme` 名称与 `themes/` 目录中的文件夹名称一致。

### 2. 文章不显示

检查文章 `draft` 字段是否为 `false`，或使用 `hugo server -D` 预览草稿。

### 3. 中文乱码

确保文件编码为 UTF-8，在 `config.toml` 中设置 `languageCode = "zh-cn"`。

## 结语

通过本教程，你应该已经掌握了 Hugo 建站的基础流程。Hugo 的强大功能远不止于此，随着使用深入，你会发现更多高级特性。

静态网站的未来已来，Hugo 正是开启这段旅程的最佳工具。

---

*需要专业的 Hugo 建站服务？cancms 提供一站式静态网站解决方案，欢迎 [联系我们](/contact/) 了解更多。*
