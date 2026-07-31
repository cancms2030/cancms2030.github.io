---
title: "Docsy"
description: "Google 出品的 Hugo 文档模板，功能完善，专为开源项目文档设计，被 Kubernetes、Istio 等大量知名项目采用。支持多语言、版本切换、侧边栏导航、全文搜索、暗色模式，GitHub Star 数超过 2600。"
categories: ["文档主题"]
tags: ["多语言", "版本切换", "侧边栏导航", "搜索", "暗色模式", "开源项目", "技术文档"]
stars: 2605
github: "https://github.com/google/docsy"
demo: "https://docsy.dev/"
screenshot: "https://github.com/google/docsy/raw/master/images/screenshot.png"
featured: true
date: 2026-07-31
lastmod: 2026-07-31
---

## 主题简介

Docsy 是由 Google 官方开发并维护的 Hugo 文档主题，专为大型开源项目和技术文档站点设计。Kubernetes、Istio、Tekton 等众多知名云原生项目均采用 Docsy 构建其官方文档，是业界公认的企业级文档解决方案。

## 核心特性

- **版本管理**：内置文档版本切换功能，支持多版本文档并存与无缝切换
- **多语言国际化**：完善的 i18n 支持，可轻松构建多语言文档站点
- **全文搜索**：集成 Algolia DocSearch 或本地 Lunr 搜索引擎
- **侧边栏导航**：自动生成的多级目录导航，支持手动排序与分组
- **暗色模式**：支持亮色/暗色主题切换
- **Swagger/OpenAPI**：原生支持 API 文档渲染
- **GitHub 集成**：自动生成"编辑此页"链接，方便社区贡献
- **SEO 优化**：完善的结构化数据与 Open Graph 标签

## 适用场景

- 大型开源项目官方文档
- 企业级产品技术文档
- API 接口文档站
- 多版本文档管理
- 需要社区协作贡献的文档项目

## 快速开始

```bash
# 作为 Hugo Module 引入（推荐）
hugo mod get github.com/google/docsy

# 或使用 Git Submodule
git submodule add https://github.com/google/docsy.git themes/docsy
```

## 推荐理由

Docsy 是目前最成熟、功能最完善的 Hugo 文档主题，由 Google 团队持续维护更新。如果你的项目需要专业级的文档站点，尤其是涉及多版本管理、API 文档或多语言支持，Docsy 是不二之选。其被众多顶级开源项目验证的稳定性和可扩展性，使其成为企业级文档建站的首选方案。
