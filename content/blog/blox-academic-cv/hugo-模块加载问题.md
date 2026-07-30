---
title: "Hugo module 使用github上面的模块时，本地启动卡住 failed to download ..."
slug: "hugo-mokuaijiazai-wenti"
keywords: ["Hugo模块加载", "Hugo代理配置", "goproxy", "Hugo启动失败", "Hugo module下载"]
description: "解决Hugo使用GitHub模块时本地启动卡住的问题，通过配置goproxy代理加速模块下载，解决failed to download错误。"
date: 2025-06-08T05:00:00Z
lastmod: 2026-07-30T00:00:00Z
image: ""
categories: ["Hugo教程"]
tags: ["Hugo", "模块加载", "代理配置", "故障排查"]
draft: false
---


##  

hugo.toml 配置文件加上代理配置：

proxy = 'https://goproxy.cn/'

=====

proxy:

    https://goproxy.cn/

