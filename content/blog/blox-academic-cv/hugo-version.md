---
title: "用hugo blox academic cv主题时注意指定的 hugo 版本 0.136.5， 用最新的版本如147可能编不过"
slug: "hugo-banben"
keywords: ["Hugo版本兼容", "Hugo Blox主题", "Academic CV主题", "Hugo编译报错", "Hugo版本管理"]
description: "使用Hugo Blox Academic CV主题时，需注意指定Hugo版本0.136.5，使用最新版本如0.147可能导致编译报错，提供解决方案。"
date: 2025-06-08T05:00:00Z
lastmod: 2026-07-30T00:00:00Z
image: "/images/blog/2025-06/blox-cv-hg-verison.png"
categories: ["Hugo教程"]
tags: ["Hugo", "Hugo Blox", "Academic CV", "版本兼容", "故障排查"]
draft: false
---


##  Hugo Blox 学术CV 主题（免费）：

github 代码：

https://github.com/HugoBlox/theme-academic-cv

网站demo:

https://academic-demo.netlify.app/

在本地的调试环境如果Hugo的版本太新（0.147），也可能一大堆报错。

在github action的编译中，不明确指定hugo版本，可能报错。